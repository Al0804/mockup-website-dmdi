/* =============================================================
   HALAMAN DETAIL — Baca lengkap naskah khutbah / buku
   Dipakai bersama oleh khutbah-detail.html dan buku-detail.html.
   Konten diambil berdasarkan ?id= pada alamat URL.
   ============================================================= */

function initDetailPage(config) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const item = config.data.find(function (d) { return String(d.id) === String(id); });

  const notFound = document.getElementById("notFound");
  const articleWrap = document.getElementById("articleWrap");

  if (!item) {
    if (notFound) notFound.style.display = "block";
    if (articleWrap) articleWrap.style.display = "none";
    document.title = "Naskah Tidak Ditemukan — Dewan Masjid Digital Indonesia";
    return;
  }

  document.title = item.title + " — Dewan Masjid Digital Indonesia";

  setText("breadcrumbTitle", item.title);
  setText("detailCategory", item.category);
  setText("detailTitle", item.title);
  setText("metaAuthor", item.author);
  setText("metaDate", config.type === "khutbah" ? item.date : ("Terbit " + (item.date || item.year)));
  setText("metaExtra", config.type === "khutbah" ? item.language : item.pages);

  const articleBody = document.getElementById("articleBody");
  if (articleBody) {
    // Naskah khutbah sudah menyertakan tag <p> sendiri (termasuk kelas
    // untuk teks Arab/judul sub-khutbah), sedangkan data lama (mis. buku)
    // masih berupa teks polos per paragraf — keduanya tetap didukung.
    articleBody.innerHTML = item.content.map(function (p) {
      return p.trim().indexOf("<") === 0 ? p : "<p>" + p + "</p>";
    }).join("");
  }

  initShareBox(item);
  initActionBox(item, config);
  renderRelated(item, config);
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/* ---------- Bagikan: WhatsApp & salin tautan ---------- */
function initShareBox(item) {
  const waBtn = document.getElementById("shareWhatsapp");
  const copyBtn = document.getElementById("copyLinkBtn");
  const url = window.location.href;

  if (waBtn) {
    waBtn.href = "https://wa.me/?text=" + encodeURIComponent(item.title + " — " + url);
  }
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      copyToClipboard(url, function () {
        const original = copyBtn.innerHTML;
        copyBtn.innerHTML = Icons.checkCircle + "Tautan tersalin";
        setTimeout(function () { copyBtn.innerHTML = original; }, 2000);
      });
    });
  }
}

function copyToClipboard(text, done) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); });
  } else {
    fallbackCopy(text, done);
  }
}

function fallbackCopy(text, done) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try { document.execCommand("copy"); } catch (err) { /* tidak masalah bila gagal */ }
  document.body.removeChild(ta);
  if (done) done();
}

/* ---------- Baca Pratinjau, Unduh (file asli/API/.txt) & Cetak ---------- */
function initActionBox(item, config) {
  const printBtn = document.getElementById("printBtn");
  const downloadBtn = document.getElementById("downloadBtn");
  const previewBtn = document.getElementById("previewBtn");

  if (printBtn) {
    printBtn.addEventListener("click", function () {
      window.print();
    });
  }

  // Tombol "Baca Pratinjau" — khusus buku, hanya muncul kalau ada
  // tautan pratinjau resmi dari sumber data (Google Books).
  if (previewBtn) {
    if (item.previewLink) {
      previewBtn.href = item.previewLink;
      previewBtn.style.display = "";
    } else {
      previewBtn.style.display = "none";
    }
  }

  if (downloadBtn) {
    if (item.downloadUrl) {
      // Unduh file EPUB/PDF asli — hanya tersedia kalau memang
      // dibagikan bebas oleh sumber data (biasanya buku domain publik).
      downloadBtn.href = item.downloadUrl;
      downloadBtn.removeAttribute("download");
      downloadBtn.target = "_blank";
      downloadBtn.rel = "noopener";
      setText("downloadBtnLabel", "Unduh " + (item.downloadFormat ? item.downloadFormat.toUpperCase() : "Buku"));
    } else if (item.file) {
      // Unduh langsung file Word/PDF asli yang sudah disiapkan di folder images/
      downloadBtn.href = item.file;
      downloadBtn.setAttribute("download", slugify(item.title) + item.file.slice(item.file.lastIndexOf(".")));
    } else {
      // Cadangan: kalau belum ada file siap pakai / API tidak menyediakan
      // unduhan bebas, buat file .txt otomatis berisi sinopsis/naskah
      downloadBtn.href = "#";
      downloadBtn.removeAttribute("download");
      downloadBtn.addEventListener("click", function (e) {
        e.preventDefault();
        downloadAsText(item, config);
      });
    }
  }
}

/* Ubah konten HTML naskah menjadi teks polos yang rapi untuk diunduh */
function htmlToPlainText(html) {
  return html
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .trim();
}

function downloadAsText(item, config) {
  const isBuku = config.type === "buku";
  const dateLine = config.type === "khutbah" ? item.date : (item.date || item.year);
  const parts = [];

  parts.push(item.title);
  parts.push("=".repeat(item.title.length));
  parts.push("");
  parts.push("Kategori : " + item.category);
  parts.push("Penulis  : " + item.author);
  parts.push((config.type === "khutbah" ? "Tanggal  : " : "Terbit   : ") + dateLine);
  parts.push("");
  if (isBuku) {
    parts.push("Catatan: berkas ini berisi SINOPSIS buku (bukan naskah lengkap),");
    parts.push("karena isi lengkap buku dilindungi hak cipta penerbit.");
    if (item.previewLink) parts.push("Baca pratinjau resmi: " + item.previewLink);
    parts.push("");
  }
  parts.push("-".repeat(40));
  parts.push("");

  item.content.forEach(function (block) {
    const text = htmlToPlainText(block);
    if (text) parts.push(text, "");
  });

  parts.push("-".repeat(40));
  parts.push("Diunduh dari Dewan Masjid Digital Indonesia — " + window.location.href);

  const blob = new Blob([parts.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = slugify(item.title) + ".txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function slugify(str) {
  return str
    .toLowerCase()
    .normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

/* ---------- Naskah / buku terkait ---------- */
function renderRelated(item, config) {
  const wrap = document.getElementById("relatedGrid");
  const section = document.getElementById("relatedSection");
  if (!wrap) return;

  let related = config.data.filter(function (d) {
    return d.id !== item.id && d.category === item.category;
  });

  if (related.length < 4) {
    const usedIds = related.map(function (d) { return d.id; }).concat([item.id]);
    const extra = config.data.filter(function (d) { return usedIds.indexOf(d.id) === -1; });
    related = related.concat(extra);
  }
  related = related.slice(0, 4);

  if (!related.length) {
    if (section) section.style.display = "none";
    return;
  }

  wrap.innerHTML = related.map(function (r) { return buildListCard(r, config); }).join("");
}