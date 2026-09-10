/* =============================================================
   WIDGET JADWAL SHOLAT — Carousel kecil di bagian Tentang Kami
   -------------------------------------------------------------
   Sumber data: api.myquran.com (bersumber dari Bimas Islam
   Kementerian Agama RI). Kota Jakarta (id 1301) mencakup wilayah
   Jakarta Timur — Kemenag menerbitkan satu jadwal untuk seluruh
   DKI Jakarta karena selisih waktunya antar wilayah hanya hitungan
   detik. Jika API sedang tidak bisa diakses (mis. offline / CORS
   di sebagian jaringan), widget otomatis memakai data cadangan di
   bawah supaya carousel tetap tampil & berfungsi.
   ============================================================= */

const PRAYER_CONFIG = {
  cityId: "1301", // KOTA JAKARTA — sumber: https://api.myquran.com/v2/sholat/kota/semua
  cityLabel: "Jakarta Timur"
};

// GANTI ANGKA DI BAWAH INI bila sewaktu-waktu ingin memperbarui perkiraan
// cadangan (dipakai HANYA saat API tidak dapat diakses sama sekali).
const PRAYER_FALLBACK = {
  imsak: "04:24",
  subuh: "04:34",
  dzuhur: "11:54",
  ashar: "15:16",
  maghrib: "17:52",
  isya: "19:05"
};

const PRAYER_LABELS = [
  { key: "imsak", label: "Imsak" },
  { key: "subuh", label: "Subuh" },
  { key: "dzuhur", label: "Dzuhur" },
  { key: "ashar", label: "Ashar" },
  { key: "maghrib", label: "Maghrib" },
  { key: "isya", label: "Isya" }
];

document.addEventListener("components:ready", function () {
  initPrayerWidget();
});

async function initPrayerWidget() {
  const track = document.getElementById("prayerTrack");
  if (!track) return;

  const dotsWrap = document.getElementById("prayerDots");
  const dateEl = document.getElementById("prayerDate");
  const noteEl = document.getElementById("prayerNote");

  const now = new Date();
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  }

  const times = await fetchPrayerTimes(now);

  track.innerHTML = PRAYER_LABELS.map(function (p) {
    return '<div class="prayer-slide"><span class="prayer-slide-name">' + p.label + '</span><span class="prayer-slide-time">' + (times[p.key] || "--:--") + '</span></div>';
  }).join("");

  if (dotsWrap) {
    dotsWrap.innerHTML = PRAYER_LABELS.map(function (_, i) {
      return '<button type="button" class="prayer-dot' + (i === 0 ? " is-active" : "") + '" data-index="' + i + '" aria-label="Lihat ' + PRAYER_LABELS[i].label + '"></button>';
    }).join("");
  }

  if (noteEl && times.source === "fallback") {
    noteEl.textContent = "Menampilkan perkiraan umum — data langsung sedang tidak dapat diakses.";
    noteEl.style.display = "block";
  }

  setupPrayerCarousel(track, dotsWrap, PRAYER_LABELS.length);
}

/* Ambil jadwal hari ini dari API. Jika gagal (jaringan, format tak sesuai,
   atau tidak merespons dalam 6 detik), otomatis pakai data cadangan. */
async function fetchPrayerTimes(now) {
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  const url = "https://api.myquran.com/v2/sholat/jadwal/" + PRAYER_CONFIG.cityId + "/" + y + "/" + m + "/" + d;

  const controller = ("AbortController" in window) ? new AbortController() : null;
  const timeoutId = controller ? setTimeout(function () { controller.abort(); }, 6000) : null;

  try {
    const res = await fetch(url, controller ? { signal: controller.signal } : {});
    if (timeoutId) clearTimeout(timeoutId);
    if (!res.ok) throw new Error("HTTP " + res.status);

    const json = await res.json();
    const jadwal = json && json.data && json.data.jadwal;
    if (!jadwal || !jadwal.subuh || !jadwal.dzuhur) throw new Error("Format respons tidak sesuai");

    return {
      imsak: jadwal.imsak, subuh: jadwal.subuh, dzuhur: jadwal.dzuhur,
      ashar: jadwal.ashar, maghrib: jadwal.maghrib, isya: jadwal.isya,
      source: "live"
    };
  } catch (err) {
    if (timeoutId) clearTimeout(timeoutId);
    const fallback = {};
    PRAYER_LABELS.forEach(function (p) { fallback[p.key] = PRAYER_FALLBACK[p.key]; });
    fallback.source = "fallback";
    return fallback;
  }
}

/* Carousel: geser otomatis tiap ~3.2 detik, atau geser manual lewat
   tombol panah, titik indikator, maupun swipe di layar sentuh. */
function setupPrayerCarousel(track, dotsWrap, count) {
  const wrap = track.closest(".prayer-widget");
  if (!wrap) return;

  let index = 0;
  let timer = null;

  function goTo(i) {
    index = (i + count) % count;
    track.style.transform = "translateX(-" + (index * 100) + "%)";
    if (dotsWrap) {
      dotsWrap.querySelectorAll(".prayer-dot").forEach(function (dot, di) {
        dot.classList.toggle("is-active", di === index);
      });
    }
  }
  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  function startAuto() {
    stopAuto();
    timer = setInterval(next, 3200);
  }
  function stopAuto() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  const prevBtn = wrap.querySelector(".prayer-nav-prev");
  const nextBtn = wrap.querySelector(".prayer-nav-next");
  if (prevBtn) prevBtn.addEventListener("click", function () { prev(); startAuto(); });
  if (nextBtn) nextBtn.addEventListener("click", function () { next(); startAuto(); });

  if (dotsWrap) {
    dotsWrap.addEventListener("click", function (e) {
      const dot = e.target.closest(".prayer-dot");
      if (!dot) return;
      goTo(parseInt(dot.dataset.index, 10));
      startAuto();
    });
  }

  // geser manual dengan swipe (layar sentuh)
  let touchStartX = null;
  track.addEventListener("touchstart", function (e) {
    touchStartX = e.touches[0].clientX;
    stopAuto();
  }, { passive: true });
  track.addEventListener("touchend", function (e) {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 40) prev();
    else if (dx < -40) next();
    touchStartX = null;
    startAuto();
  });

  // jeda otomatis saat kursor berada di atas widget (mouse), lanjut lagi saat menjauh
  wrap.addEventListener("mouseenter", stopAuto);
  wrap.addEventListener("mouseleave", startAuto);

  goTo(0);
  startAuto();
}
