/* =============================================================
   PERILAKU BERSAMA — Navigasi, Header, dan Form Opini
   ============================================================= */

document.addEventListener("components:ready", function (e) {
  initHeaderScroll();
  initMobileNav();
  initOpiniForm();
  initScrollReveal();
  if (e.detail && e.detail.page === "index") initScrollSpy();
});

/* ---------- Tampilkan bagian halaman secara halus saat discroll ---------- */
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || reduceMotion) {
    elements.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  // Jika halaman dimuat langsung menuju sebuah #section (misalnya dari
  // menu navbar di halaman lain), tampilkan section itu seketika supaya
  // tidak terasa "berkedip" saat mendarat di sana.
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target && target.classList.contains("reveal")) {
      target.classList.add("is-visible");
    }
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -70px 0px" });

  elements.forEach(function (el) {
    if (!el.classList.contains("is-visible")) observer.observe(el);
  });
}

/* ---------- Bayangan header saat halaman digulir ---------- */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Menu navigasi mobile ---------- */
function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const navbar = document.getElementById("navbar");
  if (!toggle || !navbar) return;

  function closeNav() {
    navbar.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
  function openNav() {
    navbar.classList.add("is-open");
    toggle.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.addEventListener("click", function () {
    navbar.classList.contains("is-open") ? closeNav() : openNav();
  });

  navbar.querySelectorAll(".nav-link, .mobile-wa").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  document.addEventListener("click", function (e) {
    if (!navbar.classList.contains("is-open")) return;
    if (navbar.contains(e.target) || toggle.contains(e.target)) return;
    closeNav();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) closeNav();
  });
}

/* ---------- Sorot menu aktif sesuai bagian yang sedang dilihat (beranda) ---------- */
function initScrollSpy() {
  const ids = ["tentang", "khutbah", "buku", "opini"];
  const sections = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
  const navLinks = document.querySelectorAll(".nav-link[data-nav]");
  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(function (link) {
        link.classList.toggle("is-active", link.dataset.nav === id);
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  sections.forEach(function (section) { observer.observe(section); });
}

/* ---------- Form Opini (saran / kritik / pertanyaan) ---------- */
function initOpiniForm() {
  const form = document.getElementById("opiniForm");
  if (!form) return;

  const successBox = document.getElementById("opiniSuccess");
  const nameInput = document.getElementById("opiniName");
  const emailInput = document.getElementById("opiniEmail");
  const msgInput = document.getElementById("opiniMessage");

  function clearError(input) {
    const group = input.closest(".form-group");
    if (group) group.classList.remove("has-error");
  }

  [nameInput, emailInput, msgInput].forEach(function (input) {
    if (!input) return;
    input.addEventListener("input", function () {
      clearError(input);
      if (successBox) successBox.classList.remove("is-visible");
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameInput.value.trim()) {
      nameInput.closest(".form-group").classList.add("has-error");
      valid = false;
    }
    if (!emailPattern.test(emailInput.value.trim())) {
      emailInput.closest(".form-group").classList.add("has-error");
      valid = false;
    }
    if (msgInput.value.trim().length < 10) {
      msgInput.closest(".form-group").classList.add("has-error");
      valid = false;
    }
    if (!valid) return;

    /* =================================================================
       CATATAN UNTUK PENGEMBANG
       Form ini saat ini murni front-end (belum terhubung server/email).
       Agar pesan benar-benar terkirim, sambungkan ke salah satu:
         1) Layanan pihak ketiga: Formspree, Getform, atau EmailJS
            (biasanya tinggal mengganti action form / menambah fetch()
            memakai endpoint & kunci API dari layanan tersebut)
         2) Backend milik sendiri (PHP/Node/dll.) yang mengirim email
            atau menyimpan pesan ke database
       Ganti blok simulasi "tampilkan sukses" di bawah ini dengan
       pemanggilan fetch() ke endpoint pilihan Anda.
       ================================================================= */
    if (successBox) {
      successBox.classList.add("is-visible");
      successBox.setAttribute("tabindex", "-1");
      successBox.focus();
    }
    form.reset();
  });
}
