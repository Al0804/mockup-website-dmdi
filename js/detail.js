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
    articleBody.innerHTML = item.content.map(function (p) { return "<p>" + p + "</p>"; }).join("");
  }

  initShareBox(item);
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
