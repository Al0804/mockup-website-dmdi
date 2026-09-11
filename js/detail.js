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
  setText("metaDate", config.type === "khutbah" ? item.date : ("Terbit " + item.year));
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

/* ---------- Unduh (file asli / .txt) & Cetak naskah ---------- */
function initActionBox(item, config) {
  const printBtn = document.getElementById("printBtn");
  const downloadBtn = document.getElementById("downloadBtn");

  if (printBtn) {
    printBtn.addEventListener("click", function () {
      window.print();
    });
  }

  if (downloadBtn) {
    if (item.file) {
      // Unduh langsung file Word/PDF asli yang sudah disiapkan di folder images/
      downloadBtn.href = item.file;
      downloadBtn.setAttribute("download", slugify(item.title) + item.file.slice(item.file.lastIndexOf(".")));
    } else {
      // Cadangan: kalau belum ada file siap pakai, buat file .txt otomatis dari isi naskah
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
  const dateLine = config.type === "khutbah" ? item.date : ("Terbit " + item.year);
  const parts = [];

  parts.push(item.title);
  parts.push("=".repeat(item.title.length));
  parts.push("");
  parts.push("Kategori : " + item.category);
  parts.push("Penulis  : " + item.author);
  parts.push((config.type === "khutbah" ? "Tanggal  : " : "Terbit   : ") + dateLine);
  parts.push("");
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