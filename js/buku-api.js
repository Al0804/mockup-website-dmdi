/* =============================================================
   SUMBER DATA BUKU — Open Library API
   -------------------------------------------------------------
   Menggantikan data contoh (dummy) BUKU_DATA dengan data buku
   islami yang diambil langsung dari Open Library
   (https://openlibrary.org/search.json), agar sampul buku,
   penulis, dan tahun terbit selalu nyata — bukan rekayasa.

  
   ============================================================= */

const BUKU_API_QUERIES = [
  { category: "Fiqih", q: "fiqih islam", qFallback: "islamic fiqh jurisprudence" },
  { category: "Aqidah", q: "aqidah ahlussunnah", qFallback: "islamic aqeedah creed" },
  { category: "Akhlak & Adab", q: "akhlak dan adab islami", qFallback: "islamic ethics akhlaq" },
  { category: "Sirah Nabawiyah", q: "sirah nabawiyah rasulullah", qFallback: "sirah prophet muhammad biography" },
  { category: "Tafsir", q: "tafsir al quran", qFallback: "quran tafsir commentary" },
  { category: "Hadits", q: "hadits nabi muhammad", qFallback: "hadith sunnah islam" },
  { category: "Dakwah", q: "dakwah dan motivasi islami", qFallback: "islamic dawah practice" }
];

const BUKU_API_CACHE_KEY = "dmdi-buku-api-cache-v3";
const BUKU_API_CACHE_TTL = 6 * 60 * 60 * 1000; // 6 jam

const OL_FIELDS = "key,title,subtitle,author_name,first_publish_year,cover_i,number_of_pages_median,ia,ebook_access,first_sentence";

/* Ambil (dan cache-kan) daftar buku dari Open Library. Mengembalikan
   Promise yang selalu resolve dengan sebuah array (tidak pernah
   reject) — kalau API gagal total, jatuh ke data cadangan
   BUKU_FALLBACK_DATA supaya halaman tidak pernah kosong. */
function loadBukuData() {
  return new Promise(function (resolve) {
    const cached = readBukuCache();
    if (cached && cached.length) {
      resolve(cached);
      return;
    }

    const categoryPromises = BUKU_API_QUERIES.map(function (entry) {
      return fetchCategoryBooks(entry);
    });

    Promise.all(categoryPromises).then(function (results) {
      const seen = {};
      let merged = [];

      results.forEach(function (list) {
        list.forEach(function (book) {
          if (!book || !book.title || !book.image || seen[book.id]) return;
          seen[book.id] = true;
          merged.push(book);
        });
      });

      if (!merged.length) {
        console.warn(
          "[buku-api] Open Library tidak mengembalikan buku bersampul sama sekali " +
          "(kemungkinan koneksi ke openlibrary.org gagal/diblokir). Kartu buku akan pakai data cadangan TANPA sampul."
        );
        resolve(normalizeFallbackList());
        return;
      }

      writeBukuCache(merged);
      resolve(merged);
    });
  });
}

/* Cari buku untuk 1 kategori: coba kata kunci Bahasa Indonesia dulu,
   dan kalau hasil yang punya sampul masih kurang dari 6, tambah lagi
   dari kata kunci topik Islami yang lebih umum supaya kartu buku
   tetap terisi penuh dengan foto sampul asli. */
function fetchCategoryBooks(entry) {
  return searchOpenLibrary(entry.q, entry.category).then(function (primary) {
    const withCover = primary.filter(function (b) { return b && b.image; });
    if (withCover.length >= 6 || !entry.qFallback) return primary;

    return searchOpenLibrary(entry.qFallback, entry.category).then(function (extra) {
      return primary.concat(extra);
    });
  });
}

function searchOpenLibrary(query, category) {
  const url = "https://openlibrary.org/search.json?q=" +
    encodeURIComponent(query) +
    "&fields=" + OL_FIELDS +
    "&limit=20";

  return fetchWithRetry(url)
    .then(function (res) { return res.ok ? res.json() : { docs: [] }; })
    .then(function (json) {
      return (json.docs || []).map(function (doc) {
        return normalizeOpenLibraryDoc(doc, category);
      });
    })
    .catch(function () { return []; });
}

/* fetch biasa, tapi kalau gagal (network hiccup / status bukan 2xx),
   coba sekali lagi setelah jeda singkat sebelum menyerah. */
function fetchWithRetry(url, attempt) {
  attempt = attempt || 1;
  return fetch(url)
    .then(function (res) {
      if (!res.ok && attempt < 2) {
        return new Promise(function (resolve) {
          setTimeout(function () { resolve(fetchWithRetry(url, attempt + 1)); }, 700);
        });
      }
      return res;
    })
    .catch(function (err) {
      if (attempt < 2) {
        return new Promise(function (resolve) {
          setTimeout(function () { resolve(fetchWithRetry(url, attempt + 1)); }, 700);
        });
      }
      throw err;
    });
}

/* Judul/penulis/sinopsis buku berasal dari API pihak ketiga (bukan
   data statis tepercaya seperti naskah khutbah), jadi selalu di-escape
   dulu sebelum disisipkan sebagai HTML/atribut gambar di kartu &
   halaman detail — supaya tanda kutip, &, <, > pada judul/sinopsis
   tidak pernah merusak markup atau membuka celah suntikan HTML. */
function escapeHtml(str) {
  return String(str == null ? "" : str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ---------- Normalisasi 1 dokumen hasil pencarian Open Library ---------- */
function normalizeOpenLibraryDoc(doc, category) {
  if (!doc || !doc.title || !doc.cover_i || !doc.key) return null;

  const rawTitle = doc.subtitle ? (doc.title + ": " + doc.subtitle) : doc.title;
  const title = escapeHtml(rawTitle);
  const author = escapeHtml((doc.author_name && doc.author_name.length) ? doc.author_name.join(", ") : "Penulis tidak diketahui");

  const year = doc.first_publish_year ? String(doc.first_publish_year) : "—";
  const pages = doc.number_of_pages_median ? (doc.number_of_pages_median + " halaman") : "Jumlah halaman tidak tercantum";

  const snippet = extractFirstSentence(doc.first_sentence);
  const excerpt = escapeHtml(snippet || "Sinopsis untuk buku ini belum tersedia dari sumber data.");
  const content = [escapeHtml(
    snippet
      ? snippet + " Sinopsis lengkap belum tersedia dari sumber data — silakan gunakan tombol \"Baca Pratinjau\" untuk melihat halaman resmi buku ini."
      : "Sinopsis untuk buku ini belum tersedia dari sumber data. Silakan gunakan tombol \"Baca Pratinjau\" untuk melihat halaman resmi buku ini."
  )];

  const image = "https://covers.openlibrary.org/b/id/" + doc.cover_i + "-M.jpg";
  const previewLink = "https://openlibrary.org" + doc.key;

  const isPublicDomain = doc.ebook_access === "public";
  const iaId = Array.isArray(doc.ia) ? doc.ia[0] : doc.ia;
  const downloadUrl = (isPublicDomain && iaId) ? ("https://archive.org/details/" + iaId) : "";

  return {
    id: "ol-" + doc.key.replace(/[^a-zA-Z0-9]/g, "-"),
    title: title,
    category: category,
    author: author,
    year: year,
    date: "",
    pages: pages,
    excerpt: excerpt,
    content: content,
    image: image,
    previewLink: previewLink,
    downloadUrl: downloadUrl,
    downloadFormat: "",
    isPublicDomain: isPublicDomain
  };
}

/* first_sentence dari Open Library bisa berupa string, array string,
   atau objek {value}. Fungsi ini menyeragamkannya jadi satu string. */
function extractFirstSentence(raw) {
  if (!raw) return "";
  if (typeof raw === "string") return raw.trim();
  if (Array.isArray(raw)) return String(raw[0] || "").trim();
  if (typeof raw === "object" && raw.value) return String(raw.value).trim();
  return "";
}

/* ---------- Cache lokal (localStorage) ---------- */
function readBukuCache() {
  try {
    const raw = localStorage.getItem(BUKU_API_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.ts || !parsed.data || !parsed.data.length) return null;
    if (Date.now() - parsed.ts > BUKU_API_CACHE_TTL) return null;
    // Kalau ada satu saja item cache yang tidak punya sampul, anggap
    // cache itu rusak/tidak lengkap dan ambil ulang dari API supaya
    // kartu buku tidak pernah tampil tanpa foto sampul.
    const allHaveImages = parsed.data.every(function (item) { return item && item.image; });
    if (!allHaveImages) return null;
    return parsed.data;
  } catch (e) {
    return null;
  }
}
function writeBukuCache(data) {
  try {
    localStorage.setItem(BUKU_API_CACHE_KEY, JSON.stringify({ ts: Date.now(), data: data }));
  } catch (e) { /* penuh/nonaktif -> tidak masalah, cukup tanpa cache */ }
}

/* ---------- Cadangan offline ----------
   Dipakai hanya kalau Open Library benar-benar tidak bisa diakses
   (mis. situs dibuka tanpa koneksi internet), supaya halaman buku
   tidak kosong. Sumber: BUKU_FALLBACK_DATA di data.js. */
function normalizeFallbackList() {
  if (typeof BUKU_FALLBACK_DATA === "undefined") return [];
  return BUKU_FALLBACK_DATA.map(function (item) {
    return Object.assign({
      date: "",
      image: "",
      previewLink: "",
      downloadUrl: "",
      downloadFormat: "",
      isPublicDomain: false
    }, item, { id: "fb-" + item.id });
  });
}