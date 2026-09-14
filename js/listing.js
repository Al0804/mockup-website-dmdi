/* =============================================================
   HALAMAN LISTING — Pencarian, Filter, Urutkan, Muat Lebih Banyak
   Dipakai bersama oleh khutbah.html dan buku.html. Masing-masing
   halaman memanggil initListingPage() dengan konfigurasi berbeda.

   Untuk config.type === "khutbah" ATAU "buku", filter kategori lama
   (chip Semua/Fiqih/dst) diganti dengan menu filter popup yang bisa
   menyaring sekaligus mengurutkan — desainnya sama persis untuk
   kedua tipe:
     1) Berdasarkan Bahasa/Kategori — pilih satu atau beberapa nilai
        (khutbah: bahasa naskah, buku: kategori buku)
     2) Berdasarkan Tgl Upload/Terbit — pilih tanggal, bulan, dan/atau tahun
     3) Berdasarkan Abjad — urutkan judul A-Z atau Z-A

   Untuk tipe lain (kalau ada di masa depan), filter chip kategori
   sederhana lama masih tersedia lewat initCategoryChips().
   ============================================================= */

function initListingPage(config) {
  const grid = document.getElementById("listingGrid");
  if (!grid) return;

  const isKhutbah = config.type === "khutbah";
  const isBuku = config.type === "buku";
  const isAdvanced = isKhutbah || isBuku;
  // field pada tiap item yang disaring oleh dropdown pertama (checklist)
  const checklistField = isKhutbah ? "language" : "category";

  const searchInput = document.getElementById("searchInput");
  const filterRow = document.getElementById("filterRow");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const loadMoreRow = document.getElementById("loadMoreRow");
  const resultCount = document.getElementById("resultCount");
  const emptyState = document.getElementById("emptyState");

  const state = {
    query: "",
    visibleCount: 12,
    // dipakai tipe non-advanced (chip kategori sederhana)
    category: "Semua",
    // dipakai tipe advanced (khutbah & buku)
    checklist: [],
    day: "",
    month: "",
    year: "",
    sort: ""
  };

  if (isAdvanced) {
    initAdvancedFilters(config, filterRow, state, function () {
      state.visibleCount = 12;
      render();
    }, { isKhutbah: isKhutbah, checklistField: checklistField });
  } else {
    initCategoryChips(config, filterRow, state, function () {
      state.visibleCount = 12;
      render();
    });
  }

  function getFiltered() {
    let list = config.data.filter(function (item) {
      const q = state.query;
      const matchesQuery = !q ||
        item.title.toLowerCase().indexOf(q) !== -1 ||
        item.author.toLowerCase().indexOf(q) !== -1;

      if (isAdvanced) {
        const matchesChecklist = !state.checklist.length ||
          state.checklist.indexOf(item[checklistField]) !== -1;

        let matchesDate = true;
        if (state.day || state.month || state.year) {
          const parsed = parseKhutbahDate(item.date);
          matchesDate = !!parsed &&
            (!state.day || String(parsed.day) === String(state.day)) &&
            (!state.month || parsed.month === state.month) &&
            (!state.year || String(parsed.year) === String(state.year));
        }

        return matchesQuery && matchesChecklist && matchesDate;
      }

      const matchesCategory = state.category === "Semua" || item.category === state.category;
      return matchesQuery && matchesCategory;
    });

    if (isAdvanced && state.sort) {
      list = list.slice().sort(function (a, b) {
        const ta = a.title.toLowerCase();
        const tb = b.title.toLowerCase();
        if (ta < tb) return state.sort === "asc" ? -1 : 1;
        if (ta > tb) return state.sort === "asc" ? 1 : -1;
        return 0;
      });
    }

    return list;
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

  loadMoreBtn.addEventListener("click", function () {
    state.visibleCount += 4;
    render();
    loadMoreBtn.focus();
  });

  render();
}

/* ---------- Kartu di halaman listing ---------- */
/* Menampilkan keterangan langsung (tidak disembunyikan di balik
   hover) + tombol Baca Selengkapnya. Untuk naskah khutbah, label
   jenis/kategori sengaja tidak ditampilkan lagi di kartu — kini
   disaring lewat menu filter di atas listing. */
function buildListCard(item, config) {
  const isKhutbah = config.type === "khutbah";
  const isBuku = config.type === "buku";
  const icon = isKhutbah ? Icons.scroll : Icons.book;
  const dateOrYear = isKhutbah ? item.date : ("Terbit " + (item.date || item.year));
  const extraLine = isKhutbah ? item.language : item.pages;
  const extraIcon = isKhutbah ? Icons.globe : Icons.book;
  const thumb = item.image
    ? '<div class="card-thumb"><img src="' + item.image + '" alt="' + item.title + '" loading="lazy"></div>'
    : '';
  // Label kategori/jenis sengaja tidak ditampilkan lagi di kartu untuk
  // tipe yang sudah punya menu filter khusus (khutbah: bahasa, buku: kategori)
  const categoryTag = (isKhutbah || isBuku) ? '' : ('<span class="card-category">' + item.category + '</span>');

  return (
    '<article class="list-card list-card--' + config.type + '">' +
      thumb +
      (thumb ? '' : '<div class="card-icon">' + icon + "</div>") +
      categoryTag +
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

/* ---------- Filter chip kategori (dipakai tipe non-khutbah) ---------- */
function initCategoryChips(config, filterRow, state, onChange) {
  filterRow.innerHTML = config.categories.map(function (cat, i) {
    return '<button type="button" class="filter-chip' + (i === 0 ? " is-active" : "") + '" data-category="' + cat + '">' + cat + "</button>";
  }).join("");

  filterRow.addEventListener("click", function (e) {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;
    filterRow.querySelectorAll(".filter-chip").forEach(function (c) { c.classList.remove("is-active"); });
    chip.classList.add("is-active");
    state.category = chip.dataset.category;
    onChange();
  });
}

/* ---------- Menu filter Khutbah: Bahasa / Tgl Upload / Abjad ---------- */

const CHEVRON_SVG = '<svg class="filter-chevron" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

function parseKhutbahDate(dateStr) {
  if (!dateStr) return null;
  const m = String(dateStr).trim().match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
  if (!m) return null;
  return { day: parseInt(m[1], 10), month: m[2], year: m[3] };
}

function initAdvancedFilters(config, filterRow, state, onChange, opts) {
  const isKhutbah = opts.isKhutbah;
  const checklistField = opts.checklistField;

  // Khutbah menyaring berdasarkan bahasa naskah; buku menyaring
  // berdasarkan kategori buku. Tanggalnya juga beda makna: "Tgl
  // Upload" naskah vs. "Tgl Terbit" buku — tapi interaksi & tampilan
  // popup-nya sengaja dibuat identik.
  const checklistOptions = isKhutbah
    ? (config.languages || KHUTBAH_LANGUAGES)
    : (config.categories || []).filter(function (c) { return c !== "Semua"; });
  const checklistLabel = isKhutbah ? "Berdasarkan Bahasa" : "Berdasarkan Kategori";
  const dateLabel = isKhutbah ? "Berdasarkan Tgl Upload" : "Berdasarkan Tgl Terbit";
  const months = config.months || KHUTBAH_MONTHS;

  const years = Array.from(new Set(
    config.data.map(function (item) {
      const parsed = parseKhutbahDate(item.date);
      return parsed ? parsed.year : null;
    }).filter(Boolean))
  ).sort(function (a, b) { return b - a; });

  const days = [];
  for (let d = 1; d <= 31; d++) days.push(d);

  filterRow.classList.add("filter-menu");
  filterRow.innerHTML =
    buildFilterDropdown("checklist", checklistLabel, buildChecklist(checklistOptions, "checklist")) +
    buildFilterDropdown("tanggal", dateLabel, buildDateFields(days, months, years)) +
    buildFilterDropdown("abjad", "Berdasarkan Abjad", buildSortOptions());

  // Backdrop gelap di belakang popup filter (dibuat sekali, dipakai bersama)
  const backdrop = document.createElement("div");
  backdrop.className = "filter-modal-backdrop";
  backdrop.id = "filterModalBackdrop";
  filterRow.insertAdjacentElement("afterend", backdrop);

  const activeChipsBar = document.createElement("div");
  activeChipsBar.className = "filter-active-bar";
  activeChipsBar.id = "filterActiveBar";
  activeChipsBar.style.display = "none";
  backdrop.insertAdjacentElement("afterend", activeChipsBar);

  const dropdowns = filterRow.querySelectorAll(".filter-dropdown");

  function updateBackdrop() {
    const anyOpen = Array.from(dropdowns).some(function (dd) { return dd.classList.contains("is-open"); });
    backdrop.classList.toggle("is-open", anyOpen);
    document.body.classList.toggle("filter-modal-lock", anyOpen);
  }

  function closeAll(except) {
    dropdowns.forEach(function (dd) {
      if (dd !== except) {
        dd.classList.remove("is-open");
        dd.querySelector(".filter-dropdown-btn").setAttribute("aria-expanded", "false");
      }
    });
    updateBackdrop();
  }

  dropdowns.forEach(function (dd) {
    const btn = dd.querySelector(".filter-dropdown-btn");
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const willOpen = !dd.classList.contains("is-open");
      closeAll(dd);
      dd.classList.toggle("is-open", willOpen);
      btn.setAttribute("aria-expanded", String(willOpen));
      updateBackdrop();
    });

    // Tombol × di dalam popup untuk menutup
    const closeBtn = dd.querySelector(".filter-modal-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAll(null);
      });
    }
  });

  // Klik area gelap di luar popup -> tutup
  backdrop.addEventListener("click", function () { closeAll(null); });

  // Tombol Escape -> tutup
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAll(null);
  });

  document.addEventListener("click", function (e) {
    if (!filterRow.contains(e.target)) closeAll(null);
  });

  // --- Bahasa/Kategori: checkbox multi-pilih ---
  const checklistPanel = filterRow.querySelector('[data-filter="checklist"] .filter-dropdown-panel');
  checklistPanel.addEventListener("change", function () {
    state.checklist = Array.from(checklistPanel.querySelectorAll('input[type="checkbox"]:checked')).map(function (cb) { return cb.value; });
    updateDropdownLabel("checklist", state.checklist.length ? state.checklist.length + " dipilih" : "");
    renderActiveBar();
    onChange();
  });
  checklistPanel.querySelector('[data-reset="checklist"]').addEventListener("click", function () {
    checklistPanel.querySelectorAll('input[type="checkbox"]').forEach(function (cb) { cb.checked = false; });
    state.checklist = [];
    updateDropdownLabel("checklist", "");
    renderActiveBar();
    onChange();
  });

  // --- Tgl Upload: tanggal / bulan / tahun independen ---
  const tanggalPanel = filterRow.querySelector('[data-filter="tanggal"] .filter-dropdown-panel');
  tanggalPanel.addEventListener("change", function (e) {
    const part = e.target.dataset.datePart;
    if (!part) return;
    state[part] = e.target.value;
    updateTanggalLabel();
    renderActiveBar();
    onChange();
  });
  tanggalPanel.querySelector('[data-reset="tanggal"]').addEventListener("click", function () {
    tanggalPanel.querySelectorAll("select").forEach(function (sel) { sel.value = ""; });
    state.day = ""; state.month = ""; state.year = "";
    updateTanggalLabel();
    renderActiveBar();
    onChange();
  });

  // --- Abjad: radio A-Z / Z-A ---
  const abjadPanel = filterRow.querySelector('[data-filter="abjad"] .filter-dropdown-panel');
  abjadPanel.addEventListener("change", function (e) {
    if (e.target.name !== "abjadSort") return;
    state.sort = e.target.value;
    updateDropdownLabel("abjad", state.sort === "asc" ? "A - Z" : state.sort === "desc" ? "Z - A" : "");
    renderActiveBar();
    onChange();
  });

  function updateDropdownLabel(key, extra) {
    const labelEl = filterRow.querySelector('[data-filter="' + key + '"] .filter-dropdown-label');
    const base = labelEl.dataset.base;
    labelEl.textContent = extra ? base + " (" + extra + ")" : base;
    filterRow.querySelector('[data-filter="' + key + '"]').classList.toggle("has-value", !!extra);
  }

  function updateTanggalLabel() {
    const parts = [state.day, state.month, state.year].filter(Boolean);
    updateDropdownLabel("tanggal", parts.length ? parts.join(" ") : "");
  }

  function renderActiveBar() {
    const chips = [];
    state.checklist.forEach(function (val) {
      chips.push({ label: val, onRemove: function () {
        const cb = checklistPanel.querySelector('input[value="' + cssEscape(val) + '"]');
        if (cb) cb.checked = false;
        state.checklist = state.checklist.filter(function (v) { return v !== val; });
        updateDropdownLabel("checklist", state.checklist.length ? state.checklist.length + " dipilih" : "");
      }});
    });
    if (state.day) chips.push({ label: "Tanggal " + state.day, onRemove: function () {
      tanggalPanel.querySelector('[data-date-part="day"]').value = "";
      state.day = ""; updateTanggalLabel();
    }});
    if (state.month) chips.push({ label: "Bulan " + state.month, onRemove: function () {
      tanggalPanel.querySelector('[data-date-part="month"]').value = "";
      state.month = ""; updateTanggalLabel();
    }});
    if (state.year) chips.push({ label: "Tahun " + state.year, onRemove: function () {
      tanggalPanel.querySelector('[data-date-part="year"]').value = "";
      state.year = ""; updateTanggalLabel();
    }});
    if (state.sort) chips.push({ label: "Abjad " + (state.sort === "asc" ? "A-Z" : "Z-A"), onRemove: function () {
      const radio = abjadPanel.querySelector('input[value=""]');
      if (radio) radio.checked = true;
      state.sort = "";
      updateDropdownLabel("abjad", "");
    }});

    if (!chips.length) {
      activeChipsBar.style.display = "none";
      activeChipsBar.innerHTML = "";
      return;
    }

    activeChipsBar.style.display = "flex";
    activeChipsBar.innerHTML = chips.map(function (c, i) {
      return '<span class="filter-active-chip" data-chip-index="' + i + '">' + c.label + ' <button type="button" aria-label="Hapus filter ' + c.label + '">&times;</button></span>';
    }).join("") + '<button type="button" class="filter-clear-all" id="filterClearAll">Hapus Semua Filter</button>';

    activeChipsBar.querySelectorAll(".filter-active-chip button").forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        chips[i].onRemove();
        renderActiveBar();
        onChange();
      });
    });
    const clearAll = document.getElementById("filterClearAll");
    if (clearAll) {
      clearAll.addEventListener("click", function () {
        checklistPanel.querySelectorAll('input[type="checkbox"]').forEach(function (cb) { cb.checked = false; });
        tanggalPanel.querySelectorAll("select").forEach(function (sel) { sel.value = ""; });
        const std = abjadPanel.querySelector('input[value=""]');
        if (std) std.checked = true;
        state.checklist = []; state.day = ""; state.month = ""; state.year = ""; state.sort = "";
        updateDropdownLabel("checklist", "");
        updateTanggalLabel();
        updateDropdownLabel("abjad", "");
        renderActiveBar();
        onChange();
      });
    }
  }
}

function cssEscape(str) {
  return String(str).replace(/["\\]/g, "\\$&");
}

function buildFilterDropdown(key, label, panelHtml) {
  return (
    '<div class="filter-dropdown" data-filter="' + key + '">' +
      '<button type="button" class="filter-dropdown-btn" aria-expanded="false">' +
        '<span class="filter-dropdown-label" data-base="' + label + '">' + label + '</span>' +
        CHEVRON_SVG +
      '</button>' +
      '<div class="filter-dropdown-panel">' +
        '<div class="filter-modal-header">' +
          '<span class="filter-modal-title">' + label + '</span>' +
          '<button type="button" class="filter-modal-close" aria-label="Tutup filter">&times;</button>' +
        '</div>' +
        '<div class="filter-modal-body">' + panelHtml + '</div>' +
      '</div>' +
    '</div>'
  );
}

function buildChecklist(options, resetKey) {
  return (
    '<div class="filter-checklist">' +
      options.map(function (val) {
        return '<label class="filter-check-item"><input type="checkbox" value="' + val + '"> ' + val + '</label>';
      }).join('') +
    '</div>' +
    '<div class="filter-dropdown-actions">' +
      '<button type="button" class="filter-reset-link" data-reset="' + resetKey + '">Atur Ulang</button>' +
    '</div>'
  );
}

function buildDateFields(days, months, years) {
  const daySelect = '<select data-date-part="day"><option value="">Tanggal</option>' +
    days.map(function (d) { return '<option value="' + d + '">' + d + '</option>'; }).join('') + '</select>';
  const monthSelect = '<select data-date-part="month"><option value="">Bulan</option>' +
    months.map(function (m) { return '<option value="' + m + '">' + m + '</option>'; }).join('') + '</select>';
  const yearSelect = '<select data-date-part="year"><option value="">Tahun</option>' +
    years.map(function (y) { return '<option value="' + y + '">' + y + '</option>'; }).join('') + '</select>';

  return (
    '<div class="filter-date-row">' + daySelect + monthSelect + yearSelect + '</div>' +
    '<p class="filter-hint">Pilih salah satu atau gabungkan tanggal, bulan, dan tahun.</p>' +
    '<div class="filter-dropdown-actions">' +
      '<button type="button" class="filter-reset-link" data-reset="tanggal">Atur Ulang</button>' +
    '</div>'
  );
}

function buildSortOptions() {
  return (
    '<div class="filter-checklist">' +
      '<label class="filter-check-item"><input type="radio" name="abjadSort" value="" checked> Standar</label>' +
      '<label class="filter-check-item"><input type="radio" name="abjadSort" value="asc"> A - Z</label>' +
      '<label class="filter-check-item"><input type="radio" name="abjadSort" value="desc"> Z - A</label>' +
    '</div>'
  );
}