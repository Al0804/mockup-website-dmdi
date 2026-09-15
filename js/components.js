/* =============================================================
   KOMPONEN BERSAMA — Header, Footer, Ikon, Konfigurasi Situs
   -------------------------------------------------------------
   Header & footer dirender lewat JavaScript supaya tidak perlu
   menyalin kode yang sama di setiap halaman. Untuk mengubah
   navigasi/footer di seluruh situs, cukup edit file ini saja.
   ============================================================= */

/* ---------- KONFIGURASI SITUS ----------
   Berisikan mengenai informasi untuk bagian header dan footer. */
const SITE_CONFIG = {
  orgName: "Dewan Masjid Digital Indonesia",
  orgShort: "DMDI",
  tagline: "خادم الأمة والدعاة",
  aboutText: "Seruan Masjid adalah wadah kolaborasi keilmuan Islam. Kami mengumpulkan dan menyediakan bank data naskah khutbah Jumat, Idul Fitri, dan Gerhana, yang disusun oleh ulama dan da'i dari berbagai latar belakang bahasa, menjadi jembatan antara keilmuan Islam dan praktik dakwah di lapangan.",
  whatsappNumber: "6283852081945",
  whatsappMessage: "Assalamu'alaikum, saya ingin bertanya lebih lanjut mengenai Dewan Masjid Digital Indonesia.",
  email: "naskahkhutbahjumatdmdi@gmail.com",
  instagramHandle: "@dmdi.id",
  instagramUrl: "https://www.instagram.com/dmdi.id",
  address: "Gg. Lurah No.01, RT.01/RW.11, Ciputat, Kec. Ciputat, Kota Tangerang Selatan, Banten 15114",
  year: "2026"
};

function waLink(customMessage) {
  const msg = customMessage || SITE_CONFIG.whatsappMessage;
  return "https://wa.me/" + SITE_CONFIG.whatsappNumber + "?text=" + encodeURIComponent(msg);
}

/* ---------- IKON (SVG inline, memakai currentColor) ---------- */
const Icons = {
  menu: '<svg class="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>',
  close: '<svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z"/><path d="M12.02 2C6.5 2 2.03 6.46 2.03 11.97c0 1.9.53 3.66 1.44 5.17L2 22l5-1.42a10 10 0 0 0 5.02 1.35h.01c5.5 0 9.97-4.46 9.97-9.97C22 6.46 17.53 2 12.02 2zm0 18.2h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.89.87-3.04-.2-.31a8.16 8.16 0 0 1-1.26-4.44c0-4.53 3.7-8.22 8.24-8.22 2.2 0 4.27.86 5.83 2.42a8.15 8.15 0 0 1 2.4 5.81c0 4.54-3.7 8.22-8.26 8.22z"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  scroll: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><path d="M7 3a2 2 0 0 0-2 2v13.5A1.5 1.5 0 0 0 6.5 20H19a2 2 0 0 1-2-2v-1H7"/><line x1="10" y1="8" x2="16" y2="8"/><line x1="10" y1="11.5" x2="16" y2="11.5"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></svg>',
  checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  messageSquare: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>',
  buildingLogo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6"/></svg>',
  seal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="9"/><path d="M12 6.5 13.6 10 17.5 10.4 14.6 13 15.5 16.8 12 14.7 8.5 16.8 9.4 13 6.5 10.4 10.4 10Z"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="10.5" x2="15.4" y2="6.5"/><line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  inbox: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  chevronDown: '<svg class="icon-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>'
};

/* Placeholder gambar: dipanggil lewat atribut onerror pada <img>
   supaya saat file gambar (logo / simbol) belum ditaruh, yang
   muncul adalah kotak placeholder yang rapi, bukan ikon rusak. */
function imgFallback(imgEl, label) {
  if (!imgEl || imgEl.dataset.fallbackApplied) return;
  const wrap = document.createElement("div");
  wrap.dataset.fallbackApplied = "true";
  wrap.className = imgEl.className + " img-placeholder";
  const isSymbol = imgEl.classList.contains("about-symbol");
  wrap.innerHTML = (isSymbol ? Icons.seal : Icons.buildingLogo) + "<span>" + label + "</span>";
  imgEl.replaceWith(wrap);
}

/* ---------- POLA GEOMETRIS (satu-satunya elemen dekoratif berulang) ---------- */
function getAboutPatternSVG() {
  return '<svg viewBox="0 0 240 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">' +
    '<defs><pattern id="geoPattern" width="60" height="60" patternUnits="userSpaceOnUse">' +
    '<polygon points="30,6 54,30 30,54 6,30" fill="none" stroke="currentColor" stroke-width="1"></polygon>' +
    '<rect x="14" y="14" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1"></rect>' +
    '</pattern></defs>' +
    '<rect width="100%" height="100%" fill="url(#geoPattern)"></rect></svg>';
}

/* ---------- NAVIGASI ----------
   Semua menu navbar (Tentang Kami, Khutbah, Buku, Opini) mengarah ke
   section-nya di beranda (index.html), bukan langsung ke halaman
   khutbah.html/buku.html — supaya klik di navbar selalu turun ke bagian
   awal section terkait dulu. Untuk masuk ke daftar lengkap, pengguna
   memakai tautan "Lihat Semua" di dalam section tersebut. */
function navHref(page, target) {
  const prefix = page === "index" ? "" : "index.html";
  return prefix + "#" + target;
}

/* ---------- DROPDOWN "INFO LEBIH LANJUT" ----------
   Menampilkan pilihan kontak (Instagram, WhatsApp, Email) saat tombol
   "Info Lebih Lanjut" diklik/disentuh. extraClass membedakan versi
   desktop (header-wa) dan versi mobile (mobile-wa) supaya aturan CSS
   responsif yang sudah ada tetap berfungsi. */
function renderInfoDropdown(extraClass) {
  return (
    '<div class="info-dropdown">' +
      '<button type="button" class="btn btn-whatsapp ' + extraClass + ' info-dropdown-toggle" aria-haspopup="true" aria-expanded="false">' +
        Icons.whatsapp + ' Info Lebih Lanjut ' + Icons.chevronDown +
      '</button>' +
      '<div class="info-dropdown-menu" role="menu">' +
        '<a href="' + SITE_CONFIG.instagramUrl + '" target="_blank" rel="noopener" role="menuitem">' + Icons.instagram + ' Instagram</a>' +
        '<a href="' + waLink() + '" target="_blank" rel="noopener" role="menuitem">' + Icons.whatsapp + ' WhatsApp</a>' +
        '<a href="mailto:' + SITE_CONFIG.email + '" role="menuitem">' + Icons.mail + ' Email</a>' +
      '</div>' +
    '</div>'
  );
}

/* ---------- HEADER ---------- */
function renderHeader(page) {
  const khutbahActive = (page === "khutbah" || page === "khutbah-detail") ? " is-active" : "";
  const bukuActive = (page === "buku" || page === "buku-detail") ? " is-active" : "";
  const homeHref = page === "index" ? "#top" : "index.html";

  return (
    '<div class="header-inner container">' +
      '<a href="' + homeHref + '" class="brand" aria-label="Beranda ' + SITE_CONFIG.orgName + '">' +
        '<!-- ==========================================================\n' +
        '             GANTI LOGO ORGANISASI DI SINI\n' +
        '             1) Simpan file logo ke folder images/ dengan nama logo.png\n' +
        '             2) Format PNG/SVG latar transparan, disarankan persegi (mis. 300x300px)\n' +
        '             3) Jika nama file berbeda, ubah "images/logo.png" di bawah ini\n' +
        '             Selama file belum ada, kotak placeholder akan tampil otomatis.\n' +
        '        ========================================================== -->' +
        '<img src="images/logo.png" alt="Logo ' + SITE_CONFIG.orgName + '" class="brand-logo" onerror="imgFallback(this, \'Logo\')">' +
        '<span class="brand-name"><strong>' + SITE_CONFIG.orgName + '</strong><span>' + SITE_CONFIG.tagline + '</span></span>' +
      '</a>' +

      '<nav class="navbar" id="navbar">' +
        '<ul class="nav-list">' +
          '<li><a href="' + navHref(page, "tentang") + '" class="nav-link" data-nav="tentang">Tentang Kami</a></li>' +
          '<li><a href="' + navHref(page, "khutbah") + '" class="nav-link' + khutbahActive + '" data-nav="khutbah">Khutbah</a></li>' +
          '<li><a href="' + navHref(page, "buku") + '" class="nav-link' + bukuActive + '" data-nav="buku">Buku</a></li>' +
          '<li><a href="' + navHref(page, "opini") + '" class="nav-link" data-nav="opini">Opini</a></li>' +
        '</ul>' +
        renderInfoDropdown('mobile-wa') +
      '</nav>' +

      '<div class="header-actions">' +
        renderInfoDropdown('header-wa') +
        '<button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="navbar" aria-label="Buka menu navigasi">' +
          Icons.menu + Icons.close +
        '</button>' +
      '</div>' +
    '</div>'
  );
}

/* ---------- FOOTER ---------- */
function renderFooter() {
  const mapSrc = "https://www.google.com/maps?q=" + encodeURIComponent(SITE_CONFIG.address) + "&output=embed";
  return (
    '<div class="container">' +
      '<div class="footer-top">' +
        '<div class="footer-col">' +
          '<div class="footer-brand">' +
            '<img src="images/logo.png" alt="Logo ' + SITE_CONFIG.orgName + '" class="brand-logo" onerror="imgFallback(this, \'Logo\')">' +
            '<strong>' + SITE_CONFIG.orgName + '</strong>' +
          '</div>' +
          '<p class="footer-desc">' + SITE_CONFIG.aboutText + '</p>' +
        '</div>' +

        '<div class="footer-col">' +
          '<h3 class="footer-heading">Tautan Cepat</h3>' +
          '<ul class="contact-list">' +
            '<li><a href="index.html#tentang" style="color:#C9D2CD">Tentang Kami</a></li>' +
            '<li><a href="khutbah.html" style="color:#C9D2CD">Khutbah</a></li>' +
            '<li><a href="buku.html" style="color:#C9D2CD">Buku</a></li>' +
            '<li><a href="index.html#opini" style="color:#C9D2CD">Opini &amp; Saran</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="footer-col">' +
          '<h3 class="footer-heading">Informasi Kontak</h3>' +
          '<div class="contact-list">' +
            '<div class="contact-item">' + Icons.whatsapp + '<a href="' + waLink() + '" target="_blank" rel="noopener">WA: ' + formatPhone(SITE_CONFIG.whatsappNumber) + '</a></div>' +
            '<div class="contact-item">' + Icons.mail + '<a href="mailto:' + SITE_CONFIG.email + '">' + SITE_CONFIG.email + '</a></div>' +
            '<div class="contact-item">' + Icons.instagram + '<a href="' + SITE_CONFIG.instagramUrl + '" target="_blank" rel="noopener">' + SITE_CONFIG.instagramHandle + '</a></div>' +
            '<div class="contact-item">' + Icons.mapPin + '<span>' + SITE_CONFIG.address + '</span></div>' +
          '</div>' +
          '<!-- Peta memakai Google Maps embed berdasarkan alamat di atas. Untuk koordinat pasti, ganti mapSrc di js/components.js dengan link "Sematkan peta" dari Google Maps. -->' +
          '<div class="map-embed"><iframe src="' + mapSrc + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Lokasi ' + SITE_CONFIG.orgName + '"></iframe></div>' +
        '</div>' +
      '</div>' +

      '<div class="footer-bottom">' +
        '<span>&copy; ' + SITE_CONFIG.year + ' ' + SITE_CONFIG.orgName + '. Hak cipta dilindungi.</span>' +
        '<div class="footer-bottom-links">' +
          '<a href="#">Syarat &amp; Ketentuan</a>' +
          '<a href="#">Kebijakan Privasi</a>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

function formatPhone(num) {
  // 6283852081945 -> 0838-5208-1945
  const local = "0" + num.slice(2);
  return local.replace(/(\d{4})(\d{4})(\d+)/, "$1-$2-$3");
}

/* ---------- INTERAKSI DROPDOWN "INFO LEBIH LANJUT" ----------
   Dipasang di sini (bukan lewat DOMContentLoaded) memakai event delegation
   di document, supaya tetap berfungsi walau header baru dirender belakangan
   oleh renderHeader() di atas.

   CATATAN PENTING (perbaikan bug mobile/tablet):
   Panel nav hamburger punya listener sendiri di js/main.js yang menutup menu
   begitu ada klik di dalam navbar atau di luar panel. Karena tombol + isi
   dropdown ini berada DI DALAM navbar, dulu sekali disentuh menunya keburu
   tertutup sebelum pilihan Instagram/WhatsApp/Email sempat dipakai.

   Solusinya: seluruh klik di area .info-dropdown ditangani pada fase CAPTURE
   di document — fase ini berjalan lebih dulu daripada listener penutup nav —
   lalu stopPropagation() supaya listener penutup itu tidak pernah menerima
   event-nya. Navigasi <a> tetap jalan normal karena stopPropagation hanya
   menghentikan listener, bukan aksi bawaan link. */
function closeAllInfoDropdowns() {
  document.querySelectorAll(".info-dropdown.is-open").forEach(function (d) {
    d.classList.remove("is-open");
    const toggle = d.querySelector(".info-dropdown-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });
}

document.addEventListener("click", function (e) {
  const inDropdown = e.target.closest(".info-dropdown");

  if (inDropdown) {
    // Jangan biarkan klik ini menutup panel nav hamburger.
    e.stopPropagation();

    const toggle = e.target.closest(".info-dropdown-toggle");
    if (toggle) {
      e.preventDefault();
      const willOpen = !inDropdown.classList.contains("is-open");
      closeAllInfoDropdowns();
      if (willOpen) {
        inDropdown.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }
      return;
    }

    // Klik pada salah satu tautan kontak: biarkan link bekerja seperti biasa,
    // dropdown-nya ditutup setelahnya.
    if (e.target.closest(".info-dropdown-menu a")) {
      closeAllInfoDropdowns();
    }
    return;
  }

  // Klik di luar area dropdown mana pun: tutup semuanya.
  closeAllInfoDropdowns();
}, true); // <- true = fase capture

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeAllInfoDropdowns();
});

/* Kalau panel nav hamburger ditutup, dropdown di dalamnya ikut ditutup
   supaya tidak tertinggal dalam keadaan terbuka saat dibuka lagi. */
document.addEventListener("click", function (e) {
  if (e.target.closest(".nav-toggle")) closeAllInfoDropdowns();
}, true);

/* ---------- PEMASANGAN HEADER & FOOTER KE SETIAP HALAMAN ---------- */
document.addEventListener("DOMContentLoaded", function () {
  const page = document.body.dataset.page || "index";
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  if (headerMount) headerMount.innerHTML = renderHeader(page);
  if (footerMount) footerMount.innerHTML = renderFooter();

  document.dispatchEvent(new CustomEvent("components:ready", { detail: { page: page } }));
});