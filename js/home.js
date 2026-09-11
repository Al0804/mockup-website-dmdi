/* =============================================================
   BERANDA — Render kartu preview Khutbah & Buku
   ============================================================= */

document.addEventListener("components:ready", function () {
  renderHomePreview();
});

function renderHomePreview() {
  const khutbahGrid = document.getElementById("khutbahPreviewGrid");
  const bukuGrid = document.getElementById("bukuPreviewGrid");

  if (khutbahGrid) {
    khutbahGrid.innerHTML = KHUTBAH_DATA.slice(0, 4).map(function (item) {
      return buildPreviewCard(item, "khutbah");
    }).join("");
    initCardTouchToggle(khutbahGrid);
  }
  if (bukuGrid) {
    bukuGrid.innerHTML = BUKU_DATA.slice(0, 4).map(function (item) {
      return buildPreviewCard(item, "buku");
    }).join("");
    initCardTouchToggle(bukuGrid);
  }
}

/* Kartu ringkas: keterangan singkat baru tampil saat disentuh/hover */
function buildPreviewCard(item, type) {
  const icon = type === "khutbah" ? Icons.scroll : Icons.book;
  const detailPage = type === "khutbah" ? "khutbah-detail.html" : "buku-detail.html";
  const metaExtra = type === "khutbah" ? item.language : item.pages;
  const thumb = item.image
    ? '<div class="card-thumb"><img src="' + item.image + '" alt="' + item.title + '" loading="lazy"></div>'
    : '';

  return (
    '<article class="content-card content-card--' + type + '" data-id="' + item.id + '">' +
      thumb +
      (thumb ? '' : '<div class="card-icon">' + icon + '</div>') +
      '<span class="card-category">' + item.category + '</span>' +
      '<h3 class="card-title">' + item.title + '</h3>' +
      '<div class="card-meta"><span>' + item.author + '</span><span>' + metaExtra + '</span></div>' +
      '<div class="card-overlay">' +
        '<p>' + item.excerpt + '</p>' +
        '<a href="' + detailPage + '?id=' + item.id + '" class="card-overlay-link">Baca selengkapnya ' + Icons.chevronRight + '</a>' +
      '</div>' +
    '</article>'
  );
}

/* Hover (mouse) ditangani lewat CSS. Fungsi ini menangani ketuk/tap
   di layar sentuh: ketuk pertama membuka keterangan, ketuk tautan
   di dalamnya untuk membaca selengkapnya, atau ketuk di luar kartu
   untuk menutupnya kembali. */
function initCardTouchToggle(container) {
  const cards = container.querySelectorAll(".content-card");
  cards.forEach(function (card) {
    card.addEventListener("click", function (e) {
      if (e.target.closest(".card-overlay-link")) return;
      const wasActive = card.classList.contains("is-active");
      cards.forEach(function (c) { c.classList.remove("is-active"); });
      if (!wasActive) card.classList.add("is-active");
    });
  });
  document.addEventListener("click", function (e) {
    if (container.contains(e.target)) return;
    cards.forEach(function (c) { c.classList.remove("is-active"); });
  });
}