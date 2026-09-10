/* =============================================================
   HALAMAN LISTING — Pencarian, Filter Kategori, Muat Lebih Banyak
   Dipakai bersama oleh khutbah.html dan buku.html. Masing-masing
   halaman memanggil initListingPage() dengan konfigurasi berbeda.
   ============================================================= */

function initListingPage(config) {
  const grid = document.getElementById("listingGrid");
  if (!grid) return;

  const searchInput = document.getElementById("searchInput");
  const filterRow = document.getElementById("filterRow");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const loadMoreRow = document.getElementById("loadMoreRow");
  const resultCount = document.getElementById("resultCount");
  const emptyState = document.getElementById("emptyState");

  const state = { query: "", category: "Semua", visibleCount: 12 };

  // Render filter chip kategori dari konfigurasi
  filterRow.innerHTML = config.categories.map(function (cat, i) {
    return '<button type="button" class="filter-chip' + (i === 0 ? " is-active" : "") + '" data-category="' + cat + '">' + cat + "</button>";
  }).join("");

  function getFiltered() {
    return config.data.filter(function (item) {
      const q = state.query;
      const matchesQuery = !q ||
        item.title.toLowerCase().indexOf(q) !== -1 ||
        item.author.toLowerCase().indexOf(q) !== -1;
      const matchesCategory = state.category === "Semua" || item.category === state.category;
      return matchesQuery && matchesCategory;
    });
  }

  function render() {
    const filtered = getFiltered();
    const visible = filtered.slice(0, state.visibleCount);

    grid.innerHTML = visible.map(function (item) { return buildListCard(item, config); }).join("");
    grid.style.display = filtered.length ? "grid" : "none";
    emptyState.style.display = filtered.length ? "none" : "block";

    resultCount.innerHTML = filtered.length
      ? "Menampilkan <strong>" + visible.length + "</strong> dari <strong>" + filtered.length + "</strong> " + config.noun
      : "";

    loadMoreRow.style.display = state.visibleCount < filtered.length ? "flex" : "none";
  }

  searchInput.addEventListener("input", function () {
    state.query = searchInput.value.trim().toLowerCase();
    state.visibleCount = 12;
    render();
  });

  const searchForm = document.getElementById("searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      state.query = searchInput.value.trim().toLowerCase();
      state.visibleCount = 12;
      render();
    });
  }

  filterRow.addEventListener("click", function (e) {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;
    filterRow.querySelectorAll(".filter-chip").forEach(function (c) { c.classList.remove("is-active"); });
    chip.classList.add("is-active");
    state.category = chip.dataset.category;
    state.visibleCount = 12;
    render();
  });

  loadMoreBtn.addEventListener("click", function () {
    state.visibleCount += 4;
    render();
    loadMoreBtn.focus();
  });

  render();
}

/* Kartu di halaman listing menampilkan keterangan langsung
   (tidak disembunyikan di balik hover) + tombol Baca Selengkapnya */
function buildListCard(item, config) {
  const icon = config.type === "khutbah" ? Icons.scroll : Icons.book;
  const dateOrYear = config.type === "khutbah" ? item.date : ("Terbit " + item.year);
  const extraLine = config.type === "khutbah" ? item.language : item.pages;
  const extraIcon = config.type === "khutbah" ? Icons.globe : Icons.book;

  return (
    '<article class="list-card list-card--' + config.type + '">' +
      '<div class="card-icon">' + icon + "</div>" +
      '<span class="card-category">' + item.category + "</span>" +
      '<h3 class="card-title">' + item.title + "</h3>" +
      '<p class="card-excerpt">' + item.excerpt + "</p>" +
      '<div class="card-meta">' +
        "<span>" + Icons.user + item.author + "</span>" +
        "<span>" + Icons.calendar + dateOrYear + "</span>" +
        "<span>" + extraIcon + extraLine + "</span>" +
      "</div>" +
      '<a href="' + config.detailPage + "?id=" + item.id + '" class="btn btn-outline btn-block">Baca Selengkapnya</a>' +
    "</article>"
  );
}
