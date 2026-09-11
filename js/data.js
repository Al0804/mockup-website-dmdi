/* =============================================================
   DATA KONTEN — Naskah Khutbah & Buku
   -------------------------------------------------------------
   File ini berisi CONTOH data (dummy) supaya tata letak website
   bisa langsung terlihat berfungsi penuh. Silakan ganti isi
   array KHUTBAH_DATA dan BUKU_DATA di bawah ini dengan naskah
   khutbah/buku yang sebenarnya. Struktur field-nya dipertahankan
   sama supaya halaman tetap berjalan normal.
   ============================================================= */

const KHUTBAH_CATEGORIES = ["Semua", "Khutbah Jumat", "Khutbah Idul Fitri", "Khutbah Gerhana"];

const BUKU_CATEGORIES = ["Semua", "Fiqih", "Aqidah", "Akhlak & Adab", "Sirah Nabawiyah", "Tafsir", "Hadits", "Dakwah"];

const KHUTBAH_DATA = [
  {
    id: 1,
    title: "Cukuplah Islam Ala Rasulullah",
    category: "Khutbah Jumat",
    author: "Tim Redaksi Naskah Khutbah",
    date: "28 Agu 2026",
    language: "Bahasa Indonesia",
    image: "images/khutbah-1.png",
    file: "images/khutbah-1.doc",
    excerpt: "Menyoroti polemik penamaan buku \"Islam Ala Prabowo\" sebagai pengingat bahwa kebenaran Islam bersumber dari Al-Qur'an dan as-Sunnah, bukan dari sosok penguasa mana pun.",
    content: [
      "<p class=\"khutbah-heading\">KHUTBAH PERTAMA</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْنَ، اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَرْسَلَ رَسُوْلَهُ بِالْهُدَى وَدِيْنِ الْحَـقِّ لِيُظْهِرَهُ عَلَى الدِّيْنِ كُلِّهِ وَلَوْ كَرِهَ الْمُشْرِكُوْنَ، أَشْهَدُ أَنْ لَا اِلٰهَ إِلَّا اللّٰه وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللّٰه، اَللّٰهُـمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَأَصْحَابِهِ أَجْمَعِيْنَ، أَمَّا بَعْدُ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">فَيَا عِبَادَ اللّٰه، أُوْصِيْنِيِ نَفْسِيْ وَإِيَّاكُمْ بِتَقْوَى اللهِ، فَقَدْ فَازَ الْمُتَّقُوْنَ. قَالَ اللهُ تَعَالَى: قُلْ اِنْ كُنْتُمْ تُحِبُّوْنَ اللّٰهَ فَاتَّبِعُوْنِيْ يُحْبِبْكُمُ اللّٰهُ وَيَغْفِرْ لَكُمْ ذُنُوْبَكُمْۗ وَاللّٰهُ غَفُوْرٌ رَّحِيْمٌ ۝٣١ (اٰلِ عِمْرَانَ)</p>",
      "<p>Alhamdulillah, kita masih dipertemukan oleh Allah di hari mulia, hari Jumat. Di tempat yang dimuliakan, masjid. Bersama orang-orang yang insya Allah dimuliakan, orang-orang bertakwa. Shalawat serta salam semoga senantiasa tercurah kepada junjungan alam Nabi Besar Muhammad saw.</p>",
      "<p>Pertama dan paling utama, mari tingkatkan takwa kita kepada Allah. Taati perintah-Nya dan jauhi larangan-Nya. Allah Swt. berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اتَّقُوا اللّٰهَ حَقَّ تُقٰىتِهٖ وَلَا تَمُوْتُنَّ اِلَّا وَاَنْتُمْ مُّسْلِمُوْنَ</p>",
      "<p>“Wahai orang-orang yang beriman, bertakwalah kepada Allah dengan sebenar-benar takwa kepada-Nya dan janganlah kamu mati kecuali dalam keadaan muslim.” (QS. Âli ‘Imrân [3]: 102).</p>",
      "<p class=\"khutbah-address\">Ma’âsyiral Muslimîn rahimakumullâh,</p>",
      "<p>Sejak kapan Islam boleh diberi nama sesuai nama seorang penguasa? Pertanyaan ini mencuat setelah MUI dan Baznas meluncurkan buku Islam Ala Prabowo pada 26 Agustus 2025 dalam rangkaian Rapat Koordinasi Nasional Baznas di Jakarta. Setahun kemudian, buku setebal 346 halaman itu ramai diperbincangkan dan diperdebatkan, terutama karena judulnya dinilai berlebihan dan membingungkan. Buku ini memuat kumpulan tulisan tentang sisi “keislaman” Presiden Prabowo Subianto, mulai dari kehidupan pribadi, karier militer hingga kepemimpinannya sebagai kepala negara. Ditulis oleh 21 tokoh agama, akademisi, diplomat, dan politisi, buku tersebut juga menuai persoalan karena beberapa tokoh yang namanya tercantum sebagai penulis mengaku tidak pernah menulis untuk buku itu.</p>",
      "<p>Yang menjadi persoalan utama bukanlah siapa presidennya, siapa saja yang menulis, atau seberapa banyak tokoh agama yang terlibat. Masalahnya terletak pada kesan bahwa Islam dapat dilekatkan pada sosok penguasa hingga melahirkan sebuah “versi” Islam. Padahal, Islam bukan milik pribadi, bukan pula identitas yang berubah mengikuti siapa yang sedang memegang kekuasaan—apalagi dalam sistem negara sekuler. Karena itu, penggunaan nama seorang penguasa sebagai bagian dari identitas Islam patut dipertanyakan secara serius.</p>",
      "<p class=\"khutbah-address\">Ma’âsyiral Muslimîn rahimakumullâh,</p>",
      "<p>Kalau Islam benar-benar sempurna, lalu siapa yang berhak menjadi ukuran Islam: wahyu atau manusia? Kita mengenal kepemimpinan istimewa Khalifah Umar bin al-Khaththab, jihad yang sangat heroik Shalahuddin al-Ayyubi atau penaklukan agung Muhammad al-Fatih. Namun, tidak pernah ada istilah “Islam ala Umar”, “Islam ala Shalahuddin”, atau “Islam ala Muhammad al-Fatih”. Sehebat apa pun keislaman seorang Muslim, termasuk pemimpin atau ulama, tetap tidak menjadikannya ukuran bagi Islam. Tolok ukur kebenaran adalah wahyu Allah Swt., yakni al-Quran dan as-Sunnah. Allah Swt. berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اَلْيَوْمَ اَكْمَلْتُ لَكُمْ دِيْنَكُمْ وَاَتْمَمْتُ عَلَيْكُمْ نِعْمَتِيْ وَرَضِيْتُ لَكُمُ الْاِسْلَامَ دِيْنًا</p>",
      "<p>“Pada hari ini telah Aku sempurnakan bagi kalian agama kalian, telah Aku cukupkan nikmat-Ku untuk kalian dan telah Aku ridhai Islam sebagai agama kalian.” (QS. al-Mâidah [5]: 3). Karena itu, kesalahan seorang Muslim adalah penyimpangan dari Islam, bukan bagian dari ajaran Islam.</p>",
      "<p>Islamlah yang menjadi standar untuk menilai penguasa, bukan penguasa yang menjadi standar untuk menentukan Islam. Islam tidak boleh dipersonifikasikan atau ditundukkan pada kepentingan penguasa. Setiap Muslim, termasuk rakyat, ulama, ilmuwan, maupun kepala negara, wajib tunduk kepada syariah dan tidak berwenang menentukan isinya. Bahkan ketaatan kepada ulil amri tetap berada di bawah ketaatan kepada Allah dan Rasul-Nya. Allah Swt. berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓاْ أَطِيعُواْ ٱللَّهَ وَأَطِيعُواْ ٱلرَّسُولَ وَأُوْلِي ٱلۡأَمۡرِ مِنكُمۡۖ فَإِن تَنَٰزَعۡتُمۡ فِي شَيۡءٖ فَرُدُّوهُ إِلَى ٱللَّهِ وَٱلرَّسُولِ إِن كُنتُمۡ تُؤۡمِنُونَ بِٱللَّهِ وَٱلۡيَوۡمِ ٱلۡأٓخِرِۚ ذَٰلِكَ خَيۡر وَأَحۡسَنُ تَأۡوِيلًا</p>",
      "<p>“Hai orang-orang yang beriman, taatilah Allah dan taatilah Rasul-Nya, serta ulil amri di antara kalian. Kemudian jika kalian berlainan pendapat tentang sesuatu, maka kembalikanlah ia kepada Allah dan Rasul-Nya jika kalian benar-benar mengimani Allah dan Hari Akhir. Yang demikian itu lebih utama dan lebih baik akibatnya.” (QS. an-Nisâ’ [4]: 59).</p>",
      "<p>Islam tidak membutuhkan legitimasi dari figur mana pun. Sebaliknya, manusialah yang dinilai berdasarkan sejauh mana pikiran, ucapan, dan perbuatannya sesuai dengan Islam. Kebenaran Islam tidak bergantung pada kharisma atau kekuasaan seseorang, karena Islam adalah agama wahyu yang universal. Rasulullah saw. bersabda:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">مَنْ أَطَاعَنِيْ فَقَدْ أَطَاعَ اللَّهَ، وَمَنْ عَصَانِيْ فَقَدْ عَصَى اللَّهَ</p>",
      "<p>“Siapa saja yang menaati aku, sungguh ia telah menaati Allah. Siapa saja yang mendurhakai aku, sungguh ia telah mendurhakai Allah.” (HR. al-Bukhari dan Muslim).</p>",
      "<p>Dengan demikian, siapa pun kedudukannya, seorang Muslim wajib menjadikan Islam sebagai ukuran dalam berpikir dan bertindak, bukan menjadikan dirinya sebagai ukuran Islam.</p>",
      "<p class=\"khutbah-address\">Ma’âsyiral Muslimîn rahimakumullâh,</p>",
      "<p>Islam bukan ditentukan oleh siapa tokohnya, tetapi oleh siapa yang menjadi sumber kebenarannya. Islam bersumber dari wahyu Allah Swt., yakni al-Quran dan as-Sunnah, bukan dari penguasa, ulama, atau cendekiawan. Karena itu, Islam tidak boleh dinisbatkan kepada figur, apalagi dijadikan alat kepentingan politik. Kaum Muslim wajib menjadikan Rasulullah saw. sebagai teladan dalam berislam (QS. al-Ahzâb [33]: 21).</p>",
      "<p>Allah juga berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">قُلْ اِنْ كُنْتُمْ تُحِبُّوْنَ اللّٰهَ فَاتَّبِعُوْنِيْ يُحْبِبْكُمُ اللّٰهُ وَيَغْفِرْ لَكُمْ ذُنُوْبَكُمْۗ وَاللّٰهُ غَفُوْرٌ رَّحِيْمٌ</p>",
      "<p>“Katakanlah, ‘Jika kalian benar-benar mencintai Allah, ikutilah aku (Muhammad), niscaya Allah mencintai kalian dan mengampuni dosa-dosa kalian. Allah Maha Pengampun lagi Maha Penyayang.’” (QS. Âli ’Imrân [3]: 31).</p>",
      "<p>Dalam perspektif fiqih siyasah, pemimpin tertinggi (Imam atau Khalifah) pun wajib meneladani kepemimpinan Rasulullah saw. sebagai kepala negara di Madinah, dengan menjalankan syariah dan mewujudkan keadilan serta menjaga agama, jiwa, akal, harta, dan kehormatan masyarakat. Allah Swt. berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">ثُمَّ جَعَلْنٰكَ عَلٰى شَرِيْعَةٍ مِّنَ الْاَمْرِ فَاتَّبِعْهَا وَلَا تَتَّبِعْ اَهْوَاۤءَ الَّذِيْنَ لَا يَعْلَمُوْنَ</p>",
      "<p>“Kemudian Kami menjadikan kamu berada di atas suatu syariah dari urusan (agama itu). Karena itu ikutilah syariah itu dan janganlah kamu mengikuti hawa nafsu orang-orang yang tidak mengetahui.” (QS. al-Jâtsiyah [45]: 18).</p>",
      "<p>Karena itu, Islam tidak cukup hanya dijadikan identitas pribadi, tetapi wajib diterapkan secara kaaffah dalam kehidupan sebagaimana dicontohkan Rasulullah saw. dan Khulafaur Rasyidin. Makna firman Allah Swt. dalam QS. al-Baqarah [2]: 208 adalah perintah kepada orang-orang beriman untuk menjalankan Islam secara menyeluruh dan tidak mengikuti langkah-langkah setan.</p>",
      "<p>Jika kita benar-benar menginginkan kehidupan yang penuh keberkahan, jangan menjadikan manusia sebagai ukuran Islam dan jangan pula menundukkan Islam pada kepentingan kekuasaan. Kembalikan Islam kepada sumbernya: al-Quran dan as-Sunnah, lalu wujudkan ajarannya secara kaaffah dalam kehidupan. Sebab Allah Swt. telah menjanjikan:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">وَلَوْ اَنَّ اَهْلَ الْقُرٰٓى اٰمَنُوْا وَاتَّقَوْا لَفَتَحْنَا عَلَيْهِمْ بَرَكٰتٍ مِّنَ السَّمَاۤءِ وَالْاَرْضِ وَلٰكِنْ كَذَّبُوْا فَاَخَذْنٰهُمْ بِمَا كَانُوْا يَكْسِبُوْنَ</p>",
      "<p>“Sekiranya penduduk negeri-negeri beriman dan bertakwa, pasti Kami akan melimpahkan kepada mereka keberkahan dari langit dan bumi.” (QS. al-A’râf [7]: 96).</p>",
      "<p>Maka, sudah saatnya kita menempatkan Islam di atas segala kepentingan manusia dan menjadikan syariah Allah sebagai pedoman dalam seluruh aspek kehidupan. Wallâhu a‘lam bish-shawâb.[]</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">بَارَكَ اللهُ لِيْ وَلَكُمْ فِى الْقُرْآنِ الْعَظِيْمِ، وَنَفَعَنِيْ وَإِيَّاكُمْ بِمَا فِيْهِ مِنَ الْآيَاتِ وَالذِّكْرِ الْحَكِيْمِ، وَتَقَبَّلَ مِنَّا وَمِنْكُمْ تِلَاوَتَهُ وَإِنَّهُ هُوَ السَّمِيْعُ الْعَلِيْمُ. أَقُوْلُ قَوْلِيْ هَذَا، وَأَسْتَغْفِرُ اللهَ الْعَظِيْمَ لِيْ وَلَكُمْ، إِنَّهُ هُوَ الْغَفُوْرُ الرَّحِيْمُ</p>",
      "<p class=\"khutbah-heading\">KHUTBAH KEDUA</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اَلْحَمْدُ لِلّٰهِ عَلَى إِحْسَانِهِ، وَالشُّكْرُ لَهُ عَلَى تَوْفِيْقِهِ وَامْتِنَانِهِ. وَأَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، وَأَشْهَدُ أنَّ سَيِّدَنَا مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ الدَّاعِى إِلَى رِضْوَانِهِ. اللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَأَصْحَابِهِ وَسَلِّمْ تَسْلِيْمًا كَثِيْرًا.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">أَمَّا بَعْدُ؛ فَياَ أَيُّهَا النَّاسُ اتَّقُوا اللّٰهَ فِيْمَا أَمَرَ وَانْتَهُوْا عَمَّا نَهَى، وَاعْلَمُوْا أَنَّ اللهَ أَمَرَكُمْ بِأَمْرٍ بَدَأَ فِيْهِ بِنَفْسِهِ وَثَنَّى بِمَلَائِكَتِهِ الْمُسَبِّحَةِ بِقُدْسِهِ، وَقَالَ تَعاَلَى: إِنَّ اللهَ وَمَلَائِكَتَهُ يُصَلُّوْنَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِيْنَ آمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوْا تَسْلِيْمًا.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِناَ مُحَمَّدٍ، وَعَلَى أَنْبِيَائِكَ وَرُسُلِكَ وَمَلَائِكَتِكَ الْمُقَرَّبِيْنَ، وَارْضَ اللّٰهُمَّ عَنِ الْخُلَفَاءِ الرَّاشِدِيْنَ، أَبِى بَكْرٍ وَعُمَرَ وَعُثْمَانَ وَعَلِيٍّ، وَعَنْ بَقِيَّةِ الصَّحَابَةِ وَالتَّابِعِيْنَ، وَالتَّابِعِيْنَ لَهُمْ بِإِحْسَانٍ اِلَى يَوْمِ الدِّيْنِ، وَارْضَ عَنَّا مَعَهُمْ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اَللّٰهُمَّ اغْفِرْ لِلْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ وَالْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ الْأَحْيَاءِ مِنْهُمْ وَالْأَمْوَاتِ. اللّٰهُمَّ أَعِزَّ الْإِسْلَامَ وَالْمُسْلِمِيْنَ، وَأَذِلَّ الشِّرْكَ وَالْمُشْرِكِيْنَ، وَانْصُرْ مَنْ نَصَرَ الدِّيْنَ، وَاخْذُلْ مَنْ خَذَلَ الْمُسْلِمِيْنَ، وَدَمِّرْ أَعْدَاءَ الدِّيْنِ، وَأَعْلِ كَلِمَاتِكَ إِلَى يَوْمِ الدِّيْنِ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اَللّٰهُمَّ إِنَّا نَسْأَلُكَ دَوْلَةَ الْخِلاَفَةِ عَلَى مِنْهَاجِ النُّبُوَّةِ تُعِزُّ بِهَا الْإِسْلَامَ وَاَهْلَهُ وَتُذِلُّ بِهَا الْكُفْرَ وَاَهْلَهُ، وَاجْعَلْنَا مِنَ الْعَامِلِيْنَ الْمُخْلِصِيْنَ لِإِقَامَتِهَا بِإِذْنِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اللّٰهُمَّ ادْفَعْ عَنَّا الْغَلَاءَ وَالْبَلاَءَ وَالْوَبَاءَ وَالزَّلَازِلَ وَالْمِحَنَ، وَسُوْءَ الْفِتَنِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ، عَنْ بَلَدِنَا إِنْدُوْنِيْسِيَا خَاصَّةً وَسَائِرِ بُلْدَانِ الْمُسْلِمِيْنَ عَامَّةً يَا رَبَّ الْعَالَمِيْنَ. رَبَّنَا آتِنَا فِى الدُّنْيَا حَسَنَةً وَفِى الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">عِبَادَ اللهِ! إِنَّ اللهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيْتآءِ ذِي الْقُرْبَى وَيَنْهَى عَنِ الْفَحْشآءِ وَالْمُنْكَرِ وَالْبَغْيِ يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُوْنَ، وَاذْكُرُوا اللهَ الْعَظِيْمَ يَذْكُرْكُمْ، وَاسْأَلُوْهُ مِنْ فَضْلِهِ يُعْطِكُمْ، وَاشْكُرُوْهُ عَلَى نِعَمِهِ يَزِدْكُمْ، وَلَذِكْرُ اللهِ أَكْبَرْ.</p>"
    ]
  },
  {
    id: 2,
    title: "Meneladani Perjuangan dan Kepemimpinan Rasulullah",
    category: "Khutbah Jumat",
    author: "Tim Redaksi Naskah Khutbah",
    date: "4 Sep 2026",
    language: "Bahasa Indonesia",
    image: "images/khutbah-2.jpeg",
    file: "images/khutbah-2.doc",
    excerpt: "Mengajak jamaah membuktikan kecintaan kepada Rasulullah ﷺ bukan sekadar lewat peringatan Maulid, melainkan dengan meneladani keteguhan, kesabaran, dan kepemimpinan beliau secara menyeluruh.",
    content: [
      "<p class=\"khutbah-heading\">KHUTBAH PERTAMA</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْنَ، اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَرْسَلَ رَسُوْلَهُ بِالْهُدَى وَدِيْنِ الْحَـقِّ لِيُظْهِرَهُ عَلَى الدِّيْنِ كُلِّهِ وَلَوْ كَرِهَ الْمُشْرِكُوْنَ، أَشْهَدُ أَنْ لَا اِلٰهَ إِلَّا اللّٰه وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللّٰه، اَللّٰهُـمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَأَصْحَابِهِ أَجْمَعِيْنَ، أَمَّا بَعْدُ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">فَيَا عِبَادَ اللّٰه، أُوْصِيْنِيِ نَفْسِيْ وَإِيَّاكُمْ بِتَقْوَى اللهِ، فَقَدْ فَازَ الْمُتَّقُوْنَ. قَالَ اللهُ تَعَالَى: قُلْ اِنْ كُنْتُمْ تُحِبُّوْنَ اللّٰهَ فَاتَّبِعُوْنِيْ يُحْبِبْكُمُ اللّٰهُ وَيَغْفِرْ لَكُمْ ذُنُوْبَكُمْۗ وَاللّٰهُ غَفُوْرٌ رَّحِيْمٌ ۝٣١ (آلِ عِمْرَانَ)</p>",
      "<p>Alhamdulillah, kita masih dipertemukan oleh Allah di hari mulia, hari Jumat. Di tempat yang dimuliakan, masjid. Bersama orang-orang yang insya Allah dimuliakan, orang-orang bertakwa. Shalawat serta salam semoga senantiasa tercurah kepada junjungan alam Nabi Besar Muhammad saw.</p>",
      "<p>Pertama dan paling utama, mari tingkatkan takwa kita kepada Allah. Taati perintah-Nya dan jauhi larangan-Nya. Pesan Nabi Muhammad saw.;</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اِتَّقِ اللهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ</p>",
      "<p>“Bertakwalah kepada Allah di mana pun engkau berada. Iringilah perbuatan buruk dengan perbuatan baik, niscaya kebaikan itu akan menghapus (kesalahan)nya. Dan bergaullah dengan manusia dengan akhlak yang baik.” (HR. Tirmidzi).</p>",
      "<p class=\"khutbah-address\">Ma’âsyiral Muslimîn rahimakumullâh,</p>",
      "<p>Bulan Rabi’ul Awwal dikenal sebagai bulan Maulid, bulan yang bagi sebagian umat Islam menjadi momentum untuk menumbuhkan cinta kepada Rasulullah ﷺ. Namun, mari kita renungkan: apakah cinta kepada Rasulullah ﷺ cukup dengan mengenang kelahiran beliau dan memperbanyak shalawat, atau harus diwujudkan dalam kehidupan? Kelahiran beliau adalah datangnya cahaya petunjuk dan agama yang Allah Swt. janjikan untuk dimenangkan atas seluruh agama (QS. at-Taubah [9]: 33). Karena itu, cinta kepada Rasulullah ﷺ harus dibuktikan dengan mengikuti sunnah dan menaati ajarannya. Allah Swt. berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">قُلْ اِنْ كُنْتُمْ تُحِبُّوْنَ اللّٰهَ فَاتَّبِعُوْنِيْ يُحْبِبْكُمُ اللّٰهُ وَيَغْفِرْ لَكُمْ ذُنُوْبَكُمْۗ وَاللّٰهُ غَفُوْرٌ رَّحِيْمٌ</p>",
      "<p>“Jika kalian mencintai Allah, maka ikutilah aku, niscaya Allah mencintai kalian dan mengampuni dosa-dosa kalian. Allah Maha Pengampun, Maha Penyayang” (QS. Âli 'Imrân [3]: 31).</p>",
      "<p>Cinta kepada Allah dan Rasul-Nya juga harus lebih utama daripada cinta kepada keluarga, harta, dan kenikmatan dunia (QS. at-Taubah [9]: 24). Rasulullah ﷺ bersabda:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ وَالنَّاسِ أَجْمَعِينَ</p>",
      "<p>“Tidaklah sempurna iman salah seorang di antara kalian hingga aku lebih dia cintai daripada ayahnya, anaknya, dan seluruh manusia” (HR. al-Bukhari dan Muslim). Beliau juga bersabda:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اَلْمَرْءُ مَعَ مَنْ أَحَبَّ</p>",
      "<p>“Seseorang akan bersama dengan orang yang dia cintai” (HR. al-Bukhari dan Muslim).</p>",
      "<p>Maka, mencintai Rasulullah ﷺ adalah bagian dari kesempurnaan iman, jalan mendapatkan cinta dan ampunan Allah, serta jalan untuk berharap dikumpulkan bersama beliau di akhirat.</p>",
      "<p class=\"khutbah-address\">Ma’âsyiral Muslimîn rahimakumullâh,</p>",
      "<p>Ketika kita mengaku mencintai Rasulullah ﷺ, sudahkah kita menjadikan beliau sebagai teladan dalam kehidupan dan perjuangan kita? Allah Swt. menegaskan:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">لَقَدْ كَانَ لَكُمْ فِيْ رَسُوْلِ اللّٰهِ اُسْوَةٌ حَسَنَةٌ</p>",
      "<p>“Sungguh, telah ada pada diri Rasulullah itu suri teladan yang baik bagi kalian” (QS. al-Ahzâb [33]: 21).</p>",
      "<p>Selama 23 tahun berdakwah, Rasulullah ﷺ tidak memperjuangkan kepentingan pribadi atau golongan, tetapi menyampaikan risalah Islam. Ketika ditawari harta, kekuasaan dan kedudukan agar menghentikan dakwah, Beliau tetap teguh. Sabda Beliau:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">وَاللهِ، لَوْ وَضَعُوْا الشَّمْسَ فِي يَمِيْنِى وَالْقَمَرَ فِي يَسَارِى عَلَى أَنْ أَتْرُكَ هَذَا اْلأَمْرَ - حَتَّى يُظْهِرَهُ اللهُ أَوْ أَهْلِكُ فِيْهِ - مَا تَرَكْتُهُ</p>",
      "<p>“Demi Allah, seandainya mereka meletakkan matahari di tangan kananku dan bulan di tangan kiriku agar aku meninggalkan urusan ini, aku tidak akan meninggalkannya hingga Allah memenangkan agama ini atau aku binasa karenanya” (Al-Mubarakfuri, Ar-Rahiiq al-Makhtuum, 1/69).</p>",
      "<p>Keteguhan Rasulullah ﷺ juga disertai kesabaran dan tawakal. Beliau menghadapi caci-maki, pemboikotan, penyiksaan, pengusiran hingga peperangan, tetapi tidak pernah kehilangan keyakinan kepada pertolongan Allah. Allah Swt. berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">فَاصْبِرْ كَمَا صَبَرَ اُولُوا الْعَزْمِ مِنَ الرُّسُلِ</p>",
      "<p>“Bersabarlah kamu seperti para rasul sebelumnya yang mempunyai keteguhan hati” (QS. al-Ahqâf [46]: 35), dan,</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اِنْ تَنْصُرُوا اللّٰهَ يَنْصُرْكُمْ</p>",
      "<p>“Jika kalian menolong agama Allah, niscaya Dia akan menolong kalian” (QS. Muhammad [47]: 7). Rasulullah ﷺ bersabda,</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">إِنَّ النَّصْرَ مَعَ الصّبْرِ وَإِنَّ الْفَرَجِ مَعَ الْكَرْبِ وَإِنَّ مَعَ الْعُسْرِ يُسْرًا</p>",
      "<p>“Sesungguhnya pertolongan itu datang bersama kesabaran, jalan keluar datang bersama kesulitan dan bersama kesukaran ada kemudahan” (HR. Ahmad dan at-Tirmidzi).</p>",
      "<p>Maka, meneladani Rasulullah ﷺ berarti istiqamah dalam memperjuangkan kebenaran, tidak mudah tunduk pada tekanan, godaan, maupun kompromi yang bertentangan dengan syariah. Kita harus menjadikan iman sebagai kompas, kesabaran sebagai bekal, dan keyakinan kepada pertolongan Allah sebagai sumber optimisme dalam menjalani perjuangan.</p>",
      "<p class=\"khutbah-address\">Ma’âsyiral Muslimîn rahimakumullâh,</p>",
      "<p>Ketika Rasulullah ﷺ menjadi pemimpin di Madinah, bagaimana beliau menjalankan kekuasaan? Beliau menjadikan wahyu Allah sebagai landasan hukum, menegakkan keadilan tanpa membedakan status, serta memilih pejabat berdasarkan amanah dan kemampuan. Allah Swt. berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">وَاَنِ احْكُمْ بَيْنَهُمْ بِمَآ اَنْزَلَ اللّٰهُ وَلَا تَتَّبِعْ اَهْوَاۤءَهُمْ</p>",
      "<p>”Hendaklah kamu (Muhammad) memutuskan perkara di antara mereka menurut wahyu yang telah Allah turunkan dan janganlah kamu mengikuti hawa nafsu mereka” (QS. al-Mâidah [5]: 49).</p>",
      "<p>Rasulullah ﷺ juga bersabda,</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">وَالَّذِى نَفْسِى بِيَدِهِ لَوْ فَاطِمَةُ فَعَلَتْ ذَلِكَ لَقَطَعْتُ يَدَهَا</p>",
      "<p>“Demi Allah, seandainya Fatimah binti Muhammad melakukan demikian, niscaya aku sendiri yang akan memotong tangannya” (HR. al-Bukhari dan Muslim).</p>",
      "<p>Dalam memilih orang untuk menjalankan amanah, Allah Swt. berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اِنَّ خَيْرَ مَنِ اسْتَأْجَرْتَ الْقَوِيُّ الْاَمِيْنُ</p>",
      "<p>“Sesungguhnya orang yang paling baik yang engkau ambil untuk bekerja ialah orang yang kuat lagi dapat dipercaya” (QS. al-Qashshash [28]: 26), serta firman-Nya:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اِنَّ اللّٰهَ يَأْمُرُكُمْ اَنْ تُؤَدُّوا الْاَمٰنٰتِ اِلٰٓى اَهْلِهَا</p>",
      "<p>“Sesungguhnya Allah menyuruh kamu memberikan amanah kepada yang berhak menerimanya” (QS. an-Nisâ’ [4]: 58).</p>",
      "<p>Karena itu, keteladanan Rasulullah ﷺ tidak boleh dipahami hanya dalam urusan ibadah dan akhlak pribadi. Beliau adalah hamba Allah, pendidik, da’i, kepala keluarga, hakim, panglima, pemimpin masyarakat dan kepala pemerintahan. Beliau mengajarkan shalat dan puasa, sekaligus membangun masyarakat yang adil, menegakkan hukum, bermusyawarah, mengangkat pejabat yang amanah dan kompeten, membuat perjanjian, serta menjaga keamanan dan kesejahteraan masyarakat. Inilah keteladanan yang menyeluruh (kaaffah), sebagaimana Allah Swt. memerintahkan,</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا ادْخُلُوْا فِى السِّلْمِ كَاۤفَّةً</p>",
      "<p>“Masuklah kalian ke dalam Islam secara keseluruhan” (QS. al-Baqarah [2]: 208).</p>",
      "<p>Maka, jangan sampai pemisahan agama dari kehidupan membuat kita hanya mengambil sebagian keteladanan Rasulullah ﷺ dan meninggalkan sebagian yang lain. Meneladani beliau berarti berusaha menerapkan ajaran Islam secara menyeluruh dalam kehidupan pribadi, keluarga, masyarakat hingga pemerintahan. Dalam perjuangan Islam, penerapan syariah secara kaaffah memerlukan sistem pemerintahan Islam atau Khilafah, sebagaimana sistem pemerintahan yang pernah dipraktikkan Rasulullah ﷺ di Madinah. Inilah bentuk kesungguhan kita dalam menjadikan Rasulullah ﷺ bukan sekadar tokoh yang kita cintai, tetapi teladan yang kita ikuti dalam seluruh aspek kehidupan. Wallâhu a‘lam bish-shawâb.[]</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">بَارَكَ اللهُ لِيْ وَلَكُمْ فِى الْقُرْآنِ الْعَظِيْمِ، وَنَفَعَنِيْ وَإِيَّاكُمْ بِمَا فِيْهِ مِنَ الْآيَاتِ وَالذِّكْرِ الْحَكِيْمِ، وَتَقَبَّلَ مِنَّا وَمِنْكُمْ تِلَاوَتَهُ وَإِنَّهُ هُوَ السَّمِيْعُ الْعَلِيْمُ. أَقُوْلُ قَوْلِيْ هَذَا، وَأَسْتَغْفِرُ اللهَ الْعَظِيْمَ لِيْ وَلَكُمْ، إِنَّهُ هُوَ الْغَفُوْرُ الرَّحِيْمُ</p>",
      "<p class=\"khutbah-heading\">KHUTBAH KEDUA</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اَلْحَمْدُ لِلّٰهِ عَلَى إِحْسَانِهِ، وَالشُّكْرُ لَهُ عَلَى تَوْفِيْقِهِ وَامْتِنَانِهِ. وَأَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، وَأَشْهَدُ أنَّ سَيِّدَنَا مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ الدَّاعِى إِلَى رِضْوَانِهِ. اللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَأَصْحَابِهِ وَسَلِّمْ تَسْلِيْمًا كَثِيْرًا.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">أَمَّا بَعْدُ؛ فَياَ أَيُّهَا النَّاسُ اتَّقُوا اللّٰهَ فِيْمَا أَمَرَ وَانْتَهُوْا عَمَّا نَهَى، وَاعْلَمُوْا أَنَّ اللهَ أَمَرَكُمْ بِأَمْرٍ بَدَأَ فِيْهِ بِنَفْسِهِ وَثَنَّى بِمَلَائِكَتِهِ الْمُسَبِّحَةِ بِقُدْسِهِ، وَقَالَ تَعاَلَى: إِنَّ اللهَ وَمَلَائِكَتَهُ يُصَلُّوْنَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِيْنَ آمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوْا تَسْلِيْمًا.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِناَ مُحَمَّدٍ، وَعَلَى أَنْبِيَائِكَ وَرُسُلِكَ وَمَلَائِكَتِكَ الْمُقَرَّبِيْنَ، وَارْضَ اللّٰهُمَّ عَنِ الْخُلَفَاءِ الرَّاشِدِيْنَ، أَبِى بَكْرٍ وَعُمَرَ وَعُثْمَانَ وَعَلِيٍّ، وَعَنْ بَقِيَّةِ الصَّحَابَةِ وَالتَّابِعِيْنَ، وَالتَّابِعِيْنَ لَهُمْ بِإِحْسَانٍ اِلَى يَوْمِ الدِّيْنِ، وَارْضَ عَنَّا مَعَهُمْ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اَللّٰهُمَّ اغْفِرْ لِلْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ وَالْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ الْأَحْيَاءِ مِنْهُمْ وَالْأَمْوَاتِ. اللّٰهُمَّ أَعِزَّ الْإِسْلَامَ وَالْمُسْلِمِيْنَ، وَأَذِلَّ الشِّرْكَ وَالْمُشْرِكِيْنَ، وَانْصُرْ مَنْ نَصَرَ الدِّيْنَ، وَاخْذُلْ مَنْ خَذَلَ الْمُسْلِمِيْنَ، وَدَمِّرْ أَعْدَاءَ الدِّيْنِ، وَأَعْلِ كَلِمَاتِكَ إِلَى يَوْمِ الدِّيْنِ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اَللّٰهُمَّ إِنَّا نَسْأَلُكَ دَوْلَةَ الْخِلاَفَةِ عَلَى مِنْهَاجِ النُّبُوَّةِ تُعِزُّ بِهَا الْإِسْلَامَ وَاَهْلَهُ وَتُذِلُّ بِهَا الْكُفْرَ وَاَهْلَهُ، وَاجْعَلْنَا مِنَ الْعَامِلِيْنَ الْمُخْلِصِيْنَ لِإِقَامَتِهَا بِإِذْنِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اللّٰهُمَّ ادْفَعْ عَنَّا الْغَلَاءَ وَالْبَلاَءَ وَالْوَبَاءَ وَالزَّلَازِلَ وَالْمِحَنَ، وَسُوْءَ الْفِتَنِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ، عَنْ بَلَدِنَا إِنْدُوْنِيْسِيَا خَاصَّةً وَسَائِرِ بُلْدَانِ الْمُسْلِمِيْنَ عَامَّةً يَا رَبَّ الْعَالَمِيْنَ. رَبَّنَا آتِنَا فِى الدُّنْيَا حَسَنَةً وَفِى الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">عِبَادَ اللهِ! إِنَّ اللهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيْتآءِ ذِي الْقُرْبَى وَيَنْهَى عَنِ الْفَحْشآءِ وَالْمُنْكَرِ وَالْبَغْيِ يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُوْنَ، وَاذْكُرُوا اللهَ الْعَظِيْمَ يَذْكُرْكُمْ، وَاسْأَلُوْهُ مِنْ فَضْلِهِ يُعْطِكُمْ، وَاشْكُرُوْهُ عَلَى نِعَمِهِ يَزِدْكُمْ، وَلَذِكْرُ اللهِ أَكْبَرْ.</p>"
    ]
  },
  {
    id: 3,
    title: "Negara Wajib Melindungi Rakyat dari Bencana",
    category: "Khutbah Jumat",
    author: "Tim Redaksi Naskah Khutbah",
    date: "21 Agu 2026",
    language: "Bahasa Indonesia",
    image: "images/khutbah-3.jpeg",
    file: "images/khutbah-3.doc",
    excerpt: "Merenungkan rentetan bencana kebakaran hutan dan gempa Flores sebagai pengingat bahwa negara wajib membangun mitigasi bencana yang serius, bukan sekadar reaktif pasca-kejadian.",
    content: [
      "<p class=\"khutbah-heading\">KHUTBAH PERTAMA</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْنَ، اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَرْسَلَ رَسُوْلَهُ بِالْهُدَى وَدِيْنِ الْحَـقِّ لِيُظْهِرَهُ عَلَى الدِّيْنِ كُلِّهِ وَلَوْ كَرِهَ الْمُشْرِكُوْنَ، أَشْهَدُ أَنْ لَا اِلٰهَ إِلَّا اللّٰه وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللّٰه، اَللّٰهُـمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَأَصْحَابِهِ أَجْمَعِيْنَ، أَمَّا بَعْدُ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">فَيَا عِبَادَ اللّٰه، أُوْصِيْنِيِ نَفْسِيْ وَإِيَّاكُمْ بِتَقْوَى اللهِ، فَقَدْ فَازَ الْمُتَّقُوْنَ. قَالَ اللهُ تَعَالَى: كُلُّ نَفْسٍ ذَاۤىِٕقَةُ الْمَوْتِۗ وَنَبْلُوْكُمْ بِالشَّرِّ وَالْخَيْرِ فِتْنَةًۗ وَاِلَيْنَا تُرْجَعُوْنَ ۝٣٥ (اَلْأَنْبِيَاءُ)</p>",
      "<p>Alhamdulillah, kita masih dipertemukan oleh Allah di hari mulia, hari Jumat. Di tempat yang dimuliakan, masjid. Bersama orang-orang yang insya Allah dimuliakan, orang-orang bertakwa. Shalawat serta salam semoga senantiasa tercurah kepada junjungan alam Nabi Besar Muhammad saw.</p>",
      "<p>Pertama dan paling utama, mari tingkatkan takwa kita kepada Allah. Taati perintah-Nya dan jauhi larangan-Nya. Allah Swt. berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اتَّقُوا اللّٰهَ حَقَّ تُقٰىتِهٖ وَلَا تَمُوْتُنَّ اِلَّا وَاَنْتُمْ مُّسْلِمُوْنَ</p>",
      "<p>“Wahai orang-orang yang beriman, bertakwalah kepada Allah dengan sebenar-benar takwa kepada-Nya dan janganlah kamu mati kecuali dalam keadaan muslim.” (QS. Âli Imrân [3]: 102).</p>",
      "<p class=\"khutbah-address\">Ma’âsyiral Muslimîn rahimakumullâh,</p>",
      "<p>Hari-hari ini sebagian negeri kita terbakar. Kalimantan, Papua bahkan di Jawa, api menghanguskan apapun di atasnya. Ribuan hektar hutan dan lahan lenyap, tersisa abu.</p>",
      "<p>Sementara di Bumi Flores pada 15 Agustus 2026 diguncang gempa dengan magnitudo 7,7 T. Rumah dan bangunan hancur. Ribuan orang terpaksa mengungsi.</p>",
      "<p class=\"khutbah-address\">Ma’âsyiral Muslimîn rahimakumullâh,</p>",
      "<p>Bencana alam seperti gempa bumi, banjir, longsor dan kebakaran merupakan musibah. Musibah tersebut adalah ujian dari Allah Swt. bagi umat manusia. Allah Swt. berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">كُلُّ نَفْسٍ ذَاۤىِٕقَةُ الْمَوْتِۗ وَنَبْلُوْكُمْ بِالشَّرِّ وَالْخَيْرِ فِتْنَةًۗ وَاِلَيْنَا تُرْجَعُوْنَ</p>",
      "<p>“Setiap yang bernyawa akan merasakan kematian. Kami menguji kamu dengan keburukan dan kebaikan sebagai cobaan. Kepada Kamilah kamu akan dikembalikan.” (QS. al-Anbiyâ’ [21]: 35).</p>",
      "<p>Islam mewajibkan kita mengimani bahwa semua musibah adalah ketetapan Allah Swt. Islam juga menuntut kita agar senantiasa ridha dan bersabar terhadap ketetapan tersebut. Dengan kesabaran tersebut Allah Swt. akan menggugurkan dosa-dosa pada diri mereka. Sabda Nabi saw.:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلَا وَصَبٍ وَلَا هَمٍّ وَلَا حُزْنٍ وَلَا أَذًى وَلَا غَمٍّ حَتَّى الشَّوْكَةِ يُشَاكُهَا إِلَّا كَفَّرَ اللهُ بِهَا مِنْ خَطَايَاهُ</p>",
      "<p>”Tidaklah seorang Muslim ditimpa kepayahan, penyakit, kegelisahan, kesedihan, gangguan dan kesusahan hingga duri yang menusuk dirinya melainkan Allah akan menghapus dosa-dosanya dengan sebab itu.” (HR. Muttafaq ’alayh).</p>",
      "<p>Akan tetapi, bersabar bukan berarti berdiam diri. Kaum Muslim dituntut untuk berikhtiar guna mengubah keadaan menuju kondisi yang lebih baik. Allah Swt. berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اِنَّ اللّٰهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتّٰى يُغَيِّرُوْا مَا بِاَنْفُسِهِمْ</p>",
      "<p>“Sesungguhnya Allah tidak mengubah keadaan suatu kaum hingga mereka mengubah apa yang ada pada diri mereka.” (QS. ar-Ra’du [13]: 11).</p>",
      "<p class=\"khutbah-address\">Ma’âsyiral Muslimîn rahimakumullâh,</p>",
      "<p>Negeri kita memang berada di kawasan bencana. Karenanya, mestinya persiapan menghadapi hal itu menjadi suatu keharusan. Termasuk menyiapkan anggaran yang cukup. Namun faktanya, anggaran kebencanaan malah dipangkas. Wajar jika kita lihat bagaimana pasca bencana di berbagai daerah, penanganannya tidak tuntas. Inilah ironi yang terjadi negeri ini.</p>",
      "<p class=\"khutbah-address\">Ma’âsyiral Muslimîn rahimakumullâh,</p>",
      "<p>Jika kita kembali kepada ajaran Islam, Islam menetapkan Negara adalah penanggung jawab urusan masyarakat, termasuk dalam pencegahan dan penanggulangan pasca bencana. Rasulullah saw. bersabda:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">فَالأَمِيرُ الَّذِي عَلَى النَّاسِ رَاعٍ وَهُوَ مَسْئُولٌ عَنْهُمْ</p>",
      "<p>”Pemimpin yang mengurus banyak orang itu ibarat penggembala; ia akan ditanya tentang urusan mereka.” (HR Muttafaq ’alayh).</p>",
      "<p>Negara juga harus melakukan mitigasi bencana secara menyeluruh. Melalaikan potensi bencana adalah haram karena sama dengan menghadapkan rakyat pada situasi berbahaya. Rasulullah saw. bersabda:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">لَا ضَرَرَ وَلَا ضِرَارَ، مَنْ ضَارَّ ضَرَّهُ اللَّهُ، وَمَنْ شَاقَّ شَقَّ اللَّهُ عَلَيْهِ</p>",
      "<p>”Janganlah membahayakan diri sendiri dan membahayakan orang lain. Siapa saja yang membahayakan orang lain, niscaya Allah akan menimpakan bahaya kepada dirinya. Siapa saja yang mempersulit orang lain, niscaya Allah akan mempersulit dirinya.” (HR. al-Baihaqi, al-Hakim dan ad-Daruquthni).</p>",
      "<p>Langkah yang wajib dilakukan oleh Negara dalam menghadapi berbagai potensi bencana adalah sebagai berikut: Pertama, Negara wajib membangun sistem peringatan dini seperti memasang dan memelihara sistem pemantauan gempa, tsunami, aktivitas gunung api, cuaca ekstrem, dan banjir. Dengan itu masyarakat memperoleh informasi secepat mungkin ketika ancaman muncul.</p>",
      "<p>Kedua, Negara wajib menata tata ruang berbasis risiko bencana. Negara harus mencegah pembangunan pemukiman, sekolah, rumah sakit, atau fasilitas vital di kawasan yang sangat rawan bencana. Pengendalian tata ruang merupakan kunci mengurangi korban dan kerugian</p>",
      "<p>Ketiga, Negara wajib membangun infrastruktur mitigasi seperti merancang bangunan tahan gempa, tanggul dan sistem drainase pengendali banjir, normalisasi sungai, sabo dam (semacam bendungan) untuk menahan lahar gunung berapi, juga membangun jalur dan tempat evakuasi yang memadai.</p>",
      "<p>Keempat, Negara wajib mencegah pengrusakan lingkungan seperti pembalakan hutan secara liar, termasuk pembakaran hutan. Hal ini telah diharamkan berdasarkan sabda Nabi saw.:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">مَنْ قَطَعَ سِدْرَةً فِي فَلَاةٍ يَسْتَظِلُّ بِهَا ابْنُ السَّبِيلِ وَالْبَهَائِمُ عَبَثًا وَظُلْمًا بِغَيْرِ حَقٍّ يَكُونُ لَهُ فِيهَا صَوَّبَ اللَّهُ رَأْسَهُ فِي النَّارِ</p>",
      "<p>”Siapa saja yang menebang pohon bidara yang menaungi ibnu sabil dan hewan-hewan ternak secara serampangan, zalim dan dengan cara yang tidak dibenarkan, maka Allah akan menuangkan air panas pada kepalanya di neraka.” (HR. Abu Dawud).</p>",
      "<p>Kelima, Negara wajib mengedukasi dan simulasi kebencanaan kepada masyarakat. Dengan itu masyarakat terlatih dalam menghadapi berbagai bencana sehingga dapat melakukan penyelamatan diri.</p>",
      "<p>Keenam, Negara wajib memastikan pemulihan pasca bencana berjalan sampai tuntas. Berbagai infrastruktur yang vital harus segera dibangun agar kehidupan masyarakat dapat kembali normal. Negara juga harus menjamin pemenuhan kebutuhan hidup warga terdampak bencana seperti sandang, pangan dan hunian. Termasuk menjamin pencaharian warganya.</p>",
      "<p class=\"khutbah-address\">Ma’âsyiral Muslimîn rahimakumullâh,</p>",
      "<p>Inilah pandangan Islam. Sangat berbeda dengan sistem yang berlaku kapitalis-sekuler dalam penanganan bencana.</p>",
      "<p>Dalam Islam, nyawa manusia bukanlah angka statistik. Ia amat berharga di mata Allah Swt. Itulah sebabnya para khalifah bekerja keras melindungi rakyatnya saat tertimpa bencana. Saat Madinah dilanda kelaparan hebat, Khalifah Umar bin al-Khaththab ra. memerintahkan para gubernur di Irak, Syam dan Mesir untuk menyuplai bantuan pangan ke Madinah. Akhirnya, krisis pangan itu dapat diselesaikan oleh Khalifah Umar ra. dan para pejabatnya.</p>",
      "<p>Walhasil, kebutuhan umat akan penegakkan syariah Islam dan Khilafah sudah amat mendesak. Ini adalah kewajiban agama yang wajib ditunaikan dengan segera. Hanya dengan syariah Islam dan keberadaan Khilafah rakyat akan terjaga dan terlindungi dengan nyata. Wallâhu a‘lam bish-shawâb.[]</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">بَارَكَ اللهُ لِيْ وَلَكُمْ فِى الْقُرْآنِ الْعَظِيْمِ، وَنَفَعَنِيْ وَإِيَّاكُمْ بِمَا فِيْهِ مِنَ الْآيَاتِ وَالذِّكْرِ الْحَكِيْمِ، وَتَقَبَّلَ مِنَّا وَمِنْكُمْ تِلَاوَتَهُ وَإِنَّهُ هُوَ السَّمِيْعُ الْعَلِيْمُ. أَقُوْلُ قَوْلِيْ هَذَا، وَأَسْتَغْفِرُ اللهَ الْعَظِيْمَ لِيْ وَلَكُمْ، إِنَّهُ هُوَ الْغَفُوْرُ الرَّحِيْمُ</p>",
      "<p class=\"khutbah-heading\">KHUTBAH KEDUA</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اَلْحَمْدُ لِلّٰهِ عَلَى إِحْسَانِهِ، وَالشُّكْرُ لَهُ عَلَى تَوْفِيْقِهِ وَامْتِنَانِهِ. وَأَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، وَأَشْهَدُ أنَّ سَيِّدَنَا مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ الدَّاعِى إِلَى رِضْوَانِهِ. اللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَأَصْحَابِهِ وَسَلِّمْ تَسْلِيْمًا كَثِيْرًا.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">أَمَّا بَعْدُ؛ فَياَ أَيُّهَا النَّاسُ اتَّقُوا اللّٰهَ فِيْمَا أَمَرَ وَانْتَهُوْا عَمَّا نَهَى، وَاعْلَمُوْا أَنَّ اللهَ أَمَرَكُمْ بِأَمْرٍ بَدَأَ فِيْهِ بِنَفْسِهِ وَثَنَّى بِمَلَائِكَتِهِ الْمُسَبِّحَةِ بِقُدْسِهِ، وَقَالَ تَعاَلَى: إِنَّ اللهَ وَمَلَائِكَتَهُ يُصَلُّوْنَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِيْنَ آمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوْا تَسْلِيْمًا.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِناَ مُحَمَّدٍ، وَعَلَى أَنْبِيَائِكَ وَرُسُلِكَ وَمَلَائِكَتِكَ الْمُقَرَّبِيْنَ، وَارْضَ اللّٰهُمَّ عَنِ الْخُلَفَاءِ الرَّاشِدِيْنَ، أَبِى بَكْرٍ وَعُمَرَ وَعُثْمَانَ وَعَلِيٍّ، وَعَنْ بَقِيَّةِ الصَّحَابَةِ وَالتَّابِعِيْنَ، وَالتَّابِعِيْنَ لَهُمْ بِإِحْسَانٍ اِلَى يَوْمِ الدِّيْنِ، وَارْضَ عَنَّا مَعَهُمْ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اَللّٰهُمَّ اغْفِرْ لِلْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ وَالْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ الْأَحْيَاءِ مِنْهُمْ وَالْأَمْوَاتِ. اللّٰهُمَّ أَعِزَّ الْإِسْلَامَ وَالْمُسْلِمِيْنَ، وَأَذِلَّ الشِّرْكَ وَالْمُشْرِكِيْنَ، وَانْصُرْ مَنْ نَصَرَ الدِّيْنَ، وَاخْذُلْ مَنْ خَذَلَ الْمُسْلِمِيْنَ، وَدَمِّرْ أَعْدَاءَ الدِّيْنِ، وَأَعْلِ كَلِمَاتِكَ إِلَى يَوْمِ الدِّيْنِ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اَللّٰهُمَّ إِنَّا نَسْأَلُكَ دَوْلَةَ الْخِلاَفَةِ عَلَى مِنْهَاجِ النُّبُوَّةِ تُعِزُّ بِهَا الْإِسْلَامَ وَاَهْلَهُ وَتُذِلُّ بِهَا الْكُفْرَ وَاَهْلَهُ، وَاجْعَلْنَا مِنَ الْعَامِلِيْنَ الْمُخْلِصِيْنَ لِإِقَامَتِهَا بِإِذْنِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اللّٰهُمَّ ادْفَعْ عَنَّا الْغَلَاءَ وَالْبَلاَءَ وَالْوَبَاءَ وَالزَّلَازِلَ وَالْمِحَنَ، وَسُوْءَ الْفِتَنِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ، عَنْ بَلَدِنَا إِنْدُوْنِيْسِيَا خَاصَّةً وَسَائِرِ بُلْدَانِ الْمُسْلِمِيْنَ عَامَّةً يَا رَبَّ الْعَالَمِيْنَ. رَبَّنَا آتِنَا فِى الدُّنْيَا حَسَنَةً وَفِى الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">عِبَادَ اللهِ! إِنَّ اللهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيْتآءِ ذِي الْقُرْبَى وَيَنْهَى عَنِ الْفَحْشآءِ وَالْمُنْكَرِ وَالْبَغْيِ يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُوْنَ، وَاذْكُرُوا اللهَ الْعَظِيْمَ يَذْكُرْكُمْ، وَاسْأَلُوْهُ مِنْ فَضْلِهِ يُعْطِكُمْ، وَاشْكُرُوْهُ عَلَى نِعَمِهِ يَزِدْكُمْ، وَلَذِكْرُ اللهِ أَكْبَرْ.</p>"
    ]
  },
  {
    id: 4,
    title: "Cara Syar'i Membasmi Korupsi",
    category: "Khutbah Jumat",
    author: "Tim Redaksi Naskah Khutbah",
    date: "11 Sep 2026",
    language: "Bahasa Indonesia",
    image: "images/khutbah-4.jpeg",
    file: "images/khutbah-4.doc",
    excerpt: "Membedah akar persoalan korupsi sebagai pengkhianatan amanah, serta menguraikan langkah-langkah syariat mulai dari ketakwaan individu hingga penegakan hukum yang tegas tanpa tebang pilih.",
    content: [
      "<p class=\"khutbah-heading\">KHUTBAH PERTAMA</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْنَ، اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَرْسَلَ رَسُوْلَهُ بِالْهُدَى وَدِيْنِ الْحَـقِّ لِيُظْهِرَهُ عَلَى الدِّيْنِ كُلِّهِ وَلَوْ كَرِهَ الْمُشْرِكُوْنَ، أَشْهَدُ أَنْ لَا اِلٰهَ إِلَّا اللّٰه وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللّٰه، اَللّٰهُـمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَأَصْحَابِهِ أَجْمَعِيْنَ، أَمَّا بَعْدُ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">فَيَا عِبَادَ اللّٰه، أُوْصِيْنِيِ نَفْسِيْ وَإِيَّاكُمْ بِتَقْوَى اللهِ، فَقَدْ فَازَ الْمُتَّقُوْنَ. قَالَ اللهُ تَعَالَى:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">وَلَا تَأْكُلُوْٓا اَمْوَالَكُمْ بَيْنَكُمْ بِالْبَاطِلِ وَتُدْلُوْا بِهَآ اِلَى الْحُكَّامِ لِتَأْكُلُوْا فَرِيْقًا مِّنْ اَمْوَالِ النَّاسِ بِالْاِثْمِ وَاَنْتُمْ تَعْلَمُوْنَࣖ ۝١٨٨ (اَلْبَقَرَةُ)</p>",
      "<p>Alhamdulillah, kita masih dipertemukan oleh Allah di hari mulia, hari Jumat. Di tempat yang dimuliakan, masjid. Bersama orang-orang yang insya Allah dimuliakan, orang-orang bertakwa. Shalawat serta salam semoga senantiasa tercurah kepada junjungan alam Nabi Besar Muhammad saw.</p>",
      "<p>Pertama dan paling utama, mari tingkatkan takwa kita kepada Allah. Taati perintah-Nya dan jauhi larangan-Nya. Allah Swt. berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اتَّقُوا اللّٰهَ حَقَّ تُقٰىتِهٖ وَلَا تَمُوْتُنَّ اِلَّا وَاَنْتُمْ مُّسْلِمُوْنَ</p>",
      "<p>“Wahai orang-orang yang beriman, bertakwalah kepada Allah dengan sebenar-benar takwa kepada-Nya dan janganlah kamu mati kecuali dalam keadaan muslim.” (QS. Âli ‘Imrân [3]: 102).</p>",
      "<p class=\"khutbah-address\">Ma’âsyiral Muslimîn rahimakumullâh,</p>",
      "<p>Ada pertanyaan yang terus menggelitik di benak kita: mengapa korupsi terus terjadi, padahal masyarakat sudah begitu muak dan berbagai aturan sudah dibuat untuk memberantasnya? Belakangan ini berbagai demonstrasi kembali terjadi. Di antaranya menuntut Pemerintah dan DPR segera mengesahkan Rancangan Undang-Undang Perampasan Aset, bahkan ada yang menuntut agar koruptor dihukum mati. Ini menunjukkan betapa korupsi telah menjadi persoalan besar yang merusak kepercayaan masyarakat. Islam sejak awal sudah memberikan peringatan tegas. Allah Swt. berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">وَلَا تَأْكُلُوْٓا اَمْوَالَكُمْ بَيْنَكُمْ بِالْبَاطِلِ وَتُدْلُوْا بِهَآ اِلَى الْحُكَّامِ لِتَأْكُلُوْا فَرِيْقًا مِّنْ اَمْوَالِ النَّاسِ بِالْاِثْمِ وَاَنْتُمْ تَعْلَمُوْنَࣖ</p>",
      "<p>“Janganlah kalian memakan harta di antara kalian dengan jalan yang batil. Jangan pula kalian menyuap hakim dengan harta agar kalian dapat memakan sebagian harta orang lain dengan jalan dosa, padahal kalian tahu.” (QS. Al-Baqarah [2]: 188).</p>",
      "<p>Ayat ini melarang mengambil harta dengan cara yang batil, termasuk menggunakan uang untuk mempengaruhi orang yang memiliki kekuasaan agar mendapatkan sesuatu yang sebenarnya bukan hak kita.</p>",
      "<p>Allah Swt. juga berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">وَمَنْ يَّغْلُلْ يَأْتِ بِمَا غَلَّ يَوْمَ الْقِيٰمَةِۚ</p>",
      "<p>“Siapa saja yang berkhianat, niscaya pada Hari Kiamat ia akan datang membawa apa yang dia khianati itu.” (QS. Âli ’Imrân [3]: 161).</p>",
      "<p>Inilah ghuluul, yaitu mengambil atau menyalahgunakan harta yang diamanahkan. Maka, korupsi bukan sekadar pelanggaran hukum, tetapi perbuatan haram dan pengkhianatan terhadap amanah. Harta yang dapat disembunyikan dari manusia, tidak akan pernah tersembunyi dari Allah Swt.</p>",
      "<p class=\"khutbah-address\">Ma’âsyiral Muslimîn rahimakumullâh,</p>",
      "<p>Korupsi bukan hanya soal orang yang tamak, tetapi juga bisa tumbuh karena lingkungan dan sistem yang membuka peluang untuk korupsi. Politik yang mahal, biaya perebutan kekuasaan, kedekatan penguasa dengan pemilik modal, transaksi kepentingan, budaya materialisme, dan lemahnya pengawasan dapat membuat jabatan berubah dari amanah menjadi alat mencari keuntungan.</p>",
      "<p>Rasulullah ﷺ bersabda kepada Abu Dzar ra.:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">إِنَّهَا أَمَانَةٌ، وَإِنَّهَا يَوْمَ الْقِيَامَةِ خِزْيٌ وَنَدَامَةٌ، إِلَّا مَنْ أَخَذَهَا بِحَقِّهَا وَأَدَّى الَّذِي عَلَيْهِ فِيْهَا</p>",
      "<p>“Sesungguhnya jabatan itu adalah amanah. Pada Hari Kiamat ia menjadi kehinaan dan penyesalan, kecuali bagi orang yang mengambilnya dengan benar dan menunaikan kewajibannya.” (HR. Muslim).</p>",
      "<p>Hadits ini menegaskan bahwa jabatan adalah amanah, bukan sarana memperkaya diri. Siapa pun yang menggunakan kekuasaan untuk kepentingan pribadi berarti telah mengkhianati amanah tersebut.</p>",
      "<p class=\"khutbah-address\">Ma’âsyiral Muslimîn rahimakumullâh,</p>",
      "<p>Jika korupsi terus berulang, pertanyaannya bukan hanya bagaimana menghukum koruptor, tetapi bagaimana mencegah korupsi sejak awal. Islam tidak hanya mengatur hukuman setelah korupsi terjadi, tetapi juga membangun sistem yang mencegah, menutup jalan menuju korupsi, mengawasi pejabat, mengoreksi penguasa, mengembalikan harta yang diambil secara tidak sah, dan memberikan sanksi kepada pelakunya. Inilah penyelesaian yang menyeluruh.</p>",
      "<p>Pertama, membentuk ketakwaan individu. Benteng pertama adalah kesadaran bahwa Allah selalu mengawasi. Allah Swt. berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">يَعْلَمُ خَاۤىِٕنَةَ الْاَعْيُنِ وَمَا تُخْفِى الصُّدُوْرُ</p>",
      "<p>“Allah mengetahui pandangan mata yang khianat dan apa yang disembunyikan di dalam dada.” (QS. Ghâfir [40]: 19).</p>",
      "<p>Kedua, menjadikan penguasa sebagai pengurus rakyat. Rasulullah ﷺ bersabda:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">مَا مِنْ عَبْدٍ يَسْتَرْعِيهِ اللَّهُ رَعِيَّةً، يَمُوتُ يَوْمَ يَمُوتُ وَهُوَ غَاشٌّ لِرَعِيَّتِهِ، إِلَّا حَرَّمَ اللَّهُ عَلَيْهِ الْجَنَّةَ</p>",
      "<p>“Tidaklah seorang hamba yang Allah beri amanah untuk mengurus rakyat, kemudian ia meninggal dalam keadaan menipu rakyatnya, kecuali Allah mengharamkan surga baginya.” (HR. al-Bukhari dan Muslim). Jabatan adalah amanah, bukan kesempatan memperkaya diri.</p>",
      "<p>Ketiga, melarang pejabat menerima hadiah karena jabatannya. Rasulullah ﷺ menegur Ibn al-Lutbiyyah, petugas zakat, dan bersabda: “Mengapa ia tidak duduk saja di rumah ayah dan ibunya, lalu melihat apakah ia akan diberi hadiah atau tidak?!” (HR. Muslim).</p>",
      "<p>Keempat, mengawasi harta pejabat. Rasulullah ﷺ memeriksa harta Ibn al-Lutbiyyah dan mempertanggungjawabkan pemberian yang diterimanya. Ini menunjukkan bahwa pejabat tidak boleh mengelola harta publik tanpa pengawasan.</p>",
      "<p>Kelima, memberikan gaji atau kompensasi yang cukup. Rasulullah ﷺ berpesan dalam sabdanya bahwa orang yang diberi tugas negara dan membutuhkan rumah, istri, pelayan, atau kendaraan, boleh mengambilnya sesuai kebutuhan;</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">فَمَنْ أَصَابَ سِوَى ذَلِكَ فَهُوَ غَالٌّ أَوْ سَارِقٌ</p>",
      "<p>“Siapa saja yang mengambil selain itu, maka ia telah berkhianat atau mencuri.” (HR. Abu Dawud).</p>",
      "<p>Keenam, masyarakat wajib mengoreksi penguasa. Allah SWT berfirman:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">وَلْتَكُنْ مِّنْكُمْ اُمَّةٌ يَّدْعُوْنَ اِلَى الْخَيْرِ وَيَأْمُرُوْنَ بِالْمَعْرُوْفِ وَيَنْهَوْنَ عَنِ الْمُنْكَرِۗ وَاُولٰۤىِٕكَ هُمُ الْمُفْلِحُوْنَ</p>",
      "<p>“Hendaklah ada di antara kalian segolongan umat yang menyeru kepada kebajikan, menyuruh kepada yang makruf, dan mencegah dari yang mungkar. Mereka itulah orang-orang yang beruntung.” (QS. Âli ’Imrân [3]: 104).</p>",
      "<p>Ketujuh, menegakkan hukum secara tegas dan tanpa tebang pilih. Sanksi berfungsi sebagai zawajir, yaitu pencegah kejahatan. Rasulullah ﷺ bersabda:</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">وَايْمُ اللَّهِ، لَوْ أَنَّ فَاطِمَةَ بِنْتَ مُحَمَّدٍ سَرَقَتْ لَقَطَعْتُ يَدَهَا</p>",
      "<p>“Demi Allah! Seandainya Fatimah binti Muhammad mencuri, pasti aku potong tangannya.” (HR. al-Bukhari dan Muslim). Pesannya jelas: hukum tidak boleh tajam kepada rakyat kecil tetapi tumpul kepada pejabat, orang kaya, keluarga, atau orang yang dekat dengan penguasa.</p>",
      "<p class=\"khutbah-address\">Ma’âsyiral Muslimîn rahimakumullâh,</p>",
      "<p>Korupsi tidak cukup hanya dilawan dengan hukuman setelah kejahatan terjadi. Islam membangun pencegahan sekaligus penindakan. Korupsi dapat termasuk pengkhianatan amanah, ghuluul, suap, dan pengambilan harta secara batil, dengan sanksi ta’ziir yang ditetapkan negara sesuai syariah. Khalifah Umar bin al-Khaththab ra. bahkan pernah mengambil separuh harta pejabat yang bertambah secara mencolok dan tidak wajar selama menjabat, lalu memasukkannya ke Baitul Mal (Ibn Sa‘d, Ath-Thabaqât al-Kubrâ, 3/307).</p>",
      "<p>Maka, pemberantasan korupsi harus dilakukan dari akarnya: membentuk individu yang bertakwa, membuka ruang amar makruf nahi mungkar, menjadikan kekuasaan sebagai amanah, memperkuat pengawasan, menjamin kebutuhan masyarakat dan aparat secara layak, serta menegakkan hukum yang tegas, adil, dan tanpa tebang pilih. Solusi yang menyeluruh ini membutuhkan penerapan Islam secara kaaffah dalam seluruh aspek kehidupan. Sebab, jika akar persoalannya adalah rusaknya amanah dan sistem, maka solusinya pun harus menyentuh manusia, sistem, dan hukum secara bersamaan. Wallâhu a‘lam bish-shawâb.[]</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">بَارَكَ اللهُ لِيْ وَلَكُمْ فِى الْقُرْآنِ الْعَظِيْمِ، وَنَفَعَنِيْ وَإِيَّاكُمْ بِمَا فِيْهِ مِنَ الْآيَاتِ وَالذِّكْرِ الْحَكِيْمِ، وَتَقَبَّلَ مِنَّا وَمِنْكُمْ تِلَاوَتَهُ وَإِنَّهُ هُوَ السَّمِيْعُ الْعَلِيْمُ. أَقُوْلُ قَوْلِيْ هَذَا، وَأَسْتَغْفِرُ اللهَ الْعَظِيْمَ لِيْ وَلَكُمْ، إِنَّهُ هُوَ الْغَفُوْرُ الرَّحِيْمُ</p>",
      "<p class=\"khutbah-heading\">KHUTBAH KEDUA</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اَلْحَمْدُ لِلّٰهِ عَلَى إِحْسَانِهِ، وَالشُّكْرُ لَهُ عَلَى تَوْفِيْقِهِ وَامْتِنَانِهِ. وَأَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، وَأَشْهَدُ أنَّ سَيِّدَنَا مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ الدَّاعِى إِلَى رِضْوَانِهِ. اللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَأَصْحَابِهِ وَسَلِّمْ تَسْلِيْمًا كَثِيْرًا.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">أَمَّا بَعْدُ؛ فَياَ أَيُّهَا النَّاسُ اتَّقُوا اللّٰهَ فِيْمَا أَمَرَ وَانْتَهُوْا عَمَّا نَهَى، وَاعْلَمُوْا أَنَّ اللهَ أَمَرَكُمْ بِأَمْرٍ بَدَأَ فِيْهِ بِنَفْسِهِ وَثَنَّى بِمَلَائِكَتِهِ الْمُسَبِّحَةِ بِقُدْسِهِ، وَقَالَ تَعاَلَى: إِنَّ اللهَ وَمَلَائِكَتَهُ يُصَلُّوْنَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِيْنَ آمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوْا تَسْلِيْمًا.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِناَ مُحَمَّدٍ، وَعَلَى أَنْبِيَائِكَ وَرُسُلِكَ وَمَلَائِكَتِكَ الْمُقَرَّبِيْنَ، وَارْضَ اللّٰهُمَّ عَنِ الْخُلَفَاءِ الرَّاشِدِيْنَ، أَبِى بَكْرٍ وَعُمَرَ وَعُثْمَانَ وَعَلِيٍّ، وَعَنْ بَقِيَّةِ الصَّحَابَةِ وَالتَّابِعِيْنَ، وَالتَّابِعِيْنَ لَهُمْ بِإِحْسَانٍ اِلَى يَوْمِ الدِّيْنِ، وَارْضَ عَنَّا مَعَهُمْ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اَللّٰهُمَّ اغْفِرْ لِلْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ وَالْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ الْأَحْيَاءِ مِنْهُمْ وَالْأَمْوَاتِ. اللّٰهُمَّ أَعِزَّ الْإِسْلَامَ وَالْمُسْلِمِيْنَ، وَأَذِلَّ الشِّرْكَ وَالْمُشْرِكِيْنَ، وَانْصُرْ مَنْ نَصَرَ الدِّيْنَ، وَاخْذُلْ مَنْ خَذَلَ الْمُسْلِمِيْنَ، وَدَمِّرْ أَعْدَاءَ الدِّيْنِ، وَأَعْلِ كَلِمَاتِكَ إِلَى يَوْمِ الدِّيْنِ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اَللّٰهُمَّ إِنَّا نَسْأَلُكَ دَوْلَةَ الْخِلاَفَةِ عَلَى مِنْهَاجِ النُّبُوَّةِ تُعِزُّ بِهَا الْإِسْلَامَ وَاَهْلَهُ وَتُذِلُّ بِهَا الْكُفْرَ وَاَهْلَهُ، وَاجْعَلْنَا مِنَ الْعَامِلِيْنَ الْمُخْلِصِيْنَ لِإِقَامَتِهَا بِإِذْنِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">اللّٰهُمَّ ادْفَعْ عَنَّا الْغَلَاءَ وَالْبَلاَءَ وَالْوَبَاءَ وَالزَّلَازِلَ وَالْمِحَنَ، وَسُوْءَ الْفِتَنِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ، عَنْ بَلَدِنَا إِنْدُوْنِيْسِيَا خَاصَّةً وَسَائِرِ بُلْدَانِ الْمُسْلِمِيْنَ عَامَّةً يَا رَبَّ الْعَالَمِيْنَ. رَبَّنَا آتِنَا فِى الدُّنْيَا حَسَنَةً وَفِى الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.</p>",
      "<p class=\"arabic-quote\" dir=\"rtl\" lang=\"ar\">عِبَادَ اللهِ! إِنَّ اللهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيْتآءِ ذِي الْقُرْبَى وَيَنْهَى عَنِ الْفَحْشآءِ وَالْمُنْكَرِ وَالْبَغْيِ يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُوْنَ، وَاذْكُرُوا اللهَ الْعَظِيْمَ يَذْكُرْكُمْ، وَاسْأَلُوْهُ مِنْ فَضْلِهِ يُعْطِكُمْ، وَاشْكُرُوْهُ عَلَى نِعَمِهِ يَزِدْكُمْ، وَلَذِكْرُ اللهِ أَكْبَرْ.</p>"
    ]
  }
];

const BUKU_DATA = [
  {
    id: 1,
    title: "Fiqih Ibadah Sehari-hari",
    category: "Fiqih",
    author: "Dr. H. Ahmad Sarwono, M.A.",
    year: "2023",
    pages: "184 halaman",
    excerpt: "Panduan ringkas fiqih ibadah harian mulai dari bersuci, shalat, hingga puasa, disusun dengan bahasa yang mudah dipahami pemula.",
    content: [
      "Buku ini disusun sebagai panduan dasar bagi siapa saja yang ingin memahami tata cara ibadah sehari-hari secara benar dan runtut, mulai dari bab bersuci, wudu, tayamum, hingga shalat lima waktu.",
      "Setiap bab dilengkapi dengan penjelasan dalil secara ringkas serta contoh penerapan praktis yang memudahkan pembaca mempraktikkannya langsung dalam kehidupan sehari-hari, tanpa perlu latar belakang keilmuan yang mendalam.",
      "Buku ini cocok dijadikan pegangan bagi keluarga muda, pengajar TPA, maupun siapa saja yang ingin menyegarkan kembali pemahaman fiqih ibadah dasar."
    ]
  },
  {
    id: 2,
    title: "Aqidah Ahlussunnah wal Jamaah",
    category: "Aqidah",
    author: "Ust. Luqman Hakim, Lc.",
    year: "2022",
    pages: "212 halaman",
    excerpt: "Mengupas pokok-pokok akidah secara sistematis, membantu pembaca memahami keyakinan dasar dengan dalil yang kuat dan bahasa yang jernih.",
    content: [
      "Buku ini menghadirkan pembahasan pokok-pokok akidah Ahlussunnah wal Jamaah secara sistematis, dimulai dari pembahasan rukun iman hingga isu-isu akidah kontemporer yang kerap membingungkan masyarakat awam.",
      "Penulis menyajikan setiap pembahasan dengan alur yang runtut, memadukan dalil naqli dan penjelasan logis, sehingga pembaca tidak hanya menghafal keyakinan tetapi juga memahami dasar argumentasinya.",
      "Buku ini direkomendasikan sebagai bacaan awal bagi para pengajar maupun jamaah yang ingin memperkokoh fondasi keyakinannya di tengah derasnya arus informasi keagamaan."
    ]
  },
  {
    id: 3,
    title: "Panduan Praktis Zakat, Infak, dan Sedekah",
    category: "Fiqih",
    author: "Ustadzah Zubaidah Rahman, S.Ag.",
    year: "2024",
    pages: "156 halaman",
    excerpt: "Menjelaskan perhitungan zakat secara praktis beserta perbedaan zakat, infak, dan sedekah yang sering tertukar di masyarakat.",
    content: [
      "Buku ini hadir untuk menjawab kebingungan yang sering muncul di masyarakat mengenai perbedaan zakat, infak, dan sedekah, lengkap dengan tata cara perhitungan zakat mal, zakat profesi, dan zakat fitrah.",
      "Dilengkapi dengan simulasi perhitungan dan tabel nisab yang mudah diikuti, buku ini membantu pembaca menunaikan kewajiban zakatnya secara tepat sekaligus memahami keutamaan sedekah dalam kehidupan sehari-hari.",
      "Cocok digunakan oleh pengurus lembaga amil zakat, takmir masjid, maupun individu yang ingin memastikan kewajiban zakatnya ditunaikan dengan benar."
    ]
  },
  {
    id: 4,
    title: "Kisah Teladan Para Sahabat Nabi",
    category: "Sirah Nabawiyah",
    author: "Dr. Mahmud Yunus, M.A.",
    year: "2021",
    pages: "240 halaman",
    excerpt: "Merangkum kisah-kisah inspiratif para sahabat Nabi yang sarat dengan pelajaran keteguhan iman, pengorbanan, dan persaudaraan.",
    content: [
      "Buku ini menghimpun kisah-kisah para sahabat Nabi shallallahu 'alaihi wa sallam yang dikenal dengan keteguhan iman dan pengorbanannya, disajikan dengan gaya bertutur yang hidup dan mudah dinikmati segala usia.",
      "Setiap kisah ditutup dengan poin pelajaran yang dapat direnungkan dan diterapkan dalam konteks kehidupan modern, menjadikan buku ini relevan meski kisahnya terjadi berabad-abad lampau.",
      "Buku ini cocok dibacakan sebagai pengantar tidur anak, bahan kultum, maupun bacaan pribadi untuk menumbuhkan semangat meneladani generasi terbaik umat ini."
    ]
  },
  {
    id: 5,
    title: "Tafsir Ringkas Juz Amma",
    category: "Tafsir",
    author: "Ust. Anwar Sanusi, Lc., M.H.",
    year: "2023",
    pages: "198 halaman",
    excerpt: "Menyajikan tafsir surat-surat pendek Juz Amma secara ringkas dan aplikatif, disertai pelajaran yang relevan dengan kehidupan sehari-hari.",
    content: [
      "Buku ini menafsirkan surat-surat pendek dalam Juz Amma dengan pendekatan yang ringkas namun tetap mendalam, memudahkan pembaca memahami kandungan surat yang sering dibaca dalam shalat sehari-hari.",
      "Setiap surat diberi pengantar asbabun nuzul secara singkat, penjelasan makna per kelompok ayat, serta pelajaran praktis yang dapat diterapkan, tanpa memerlukan latar belakang ilmu tafsir yang rumit.",
      "Buku ini sangat membantu bagi para penghafal Al-Qur'an maupun jamaah yang ingin lebih memahami makna surat-surat yang selama ini hanya dibaca tanpa mengetahui artinya secara mendalam."
    ]
  },
  {
    id: 6,
    title: "Adab dan Akhlak Seorang Muslim",
    category: "Akhlak & Adab",
    author: "Ustadzah Aisyah Putri, S.Th.I",
    year: "2022",
    pages: "168 halaman",
    excerpt: "Membahas adab keseharian seorang muslim, dari adab makan hingga adab bermedia sosial, dengan pendekatan yang membumi.",
    content: [
      "Buku ini mengangkat kembali pentingnya adab dalam kehidupan seorang muslim, mencakup adab yang klasik seperti adab makan dan berpakaian, hingga adab kontemporer seperti bermedia sosial dan berkomunikasi daring.",
      "Penulis menekankan bahwa akhlak yang baik adalah buah dari ilmu yang benar, sehingga buku ini juga menyisipkan penjelasan singkat mengenai landasan dari setiap adab yang dibahas.",
      "Buku ringan ini cocok dibaca oleh remaja dan pemuda yang ingin memperbaiki kebiasaan sehari-hari agar lebih selaras dengan tuntunan agama."
    ]
  },
  {
    id: 7,
    title: "Sirah Nabawiyah: Perjalanan Hidup Rasulullah",
    category: "Sirah Nabawiyah",
    author: "Dr. KH. Wahid Zaini, M.A.",
    year: "2020",
    pages: "288 halaman",
    excerpt: "Menelusuri perjalanan hidup Rasulullah secara kronologis, dari masa kecil hingga wafatnya, sebagai teladan utama umat.",
    content: [
      "Buku ini menyajikan perjalanan hidup Rasulullah shallallahu 'alaihi wa sallam secara kronologis, mulai dari kelahiran, masa kenabian, hijrah, hingga wafatnya, dengan bahasa yang mengalir dan mudah diikuti.",
      "Selain memaparkan peristiwa penting, penulis juga menyisipkan konteks sosial dan budaya Arab pada masa itu, membantu pembaca memahami latar belakang di balik setiap peristiwa dalam sirah.",
      "Buku ini menjadi rujukan awal yang baik bagi siapa saja yang ingin mengenal lebih dekat sosok Rasulullah sebagai teladan dalam berbagai aspek kehidupan."
    ]
  },
  {
    id: 8,
    title: "Fiqih Muamalah di Era Kontemporer",
    category: "Fiqih",
    author: "Ust. Sulaiman Nasir, Lc.",
    year: "2024",
    pages: "204 halaman",
    excerpt: "Mengulas hukum transaksi modern seperti jual beli daring, investasi, dan perbankan syariah dari sudut pandang fiqih muamalah.",
    content: [
      "Perkembangan ekonomi digital memunculkan banyak bentuk transaksi baru yang membutuhkan kejelasan hukum fiqih. Buku ini membahas isu-isu tersebut dengan merujuk pada kaidah-kaidah muamalah klasik yang tetap relevan.",
      "Topik yang dibahas meliputi jual beli daring, sistem investasi syariah, akad-akad dalam perbankan syariah, hingga isu seputar mata uang digital yang kian marak diperbincangkan masyarakat.",
      "Buku ini bermanfaat bagi pelaku usaha, praktisi keuangan syariah, maupun masyarakat umum yang ingin memastikan transaksi kesehariannya sesuai dengan tuntunan syariat."
    ]
  },
  {
    id: 9,
    title: "Panduan Meraih Shalat yang Khusyuk",
    category: "Fiqih",
    author: "Ustadzah Maryam Kusuma, S.Ag.",
    year: "2021",
    pages: "132 halaman",
    excerpt: "Menawarkan langkah-langkah praktis membangun kekhusyukan shalat, mulai dari persiapan hati hingga memahami makna bacaan.",
    content: [
      "Kekhusyukan menjadi elemen yang paling banyak dicari namun paling sulit dijaga dalam shalat. Buku ini menawarkan pendekatan bertahap untuk membangun kembali kualitas shalat yang selama ini terasa hampa.",
      "Pembahasan mencakup persiapan sebelum shalat, memahami makna setiap bacaan dan gerakan, hingga cara mengatasi pikiran yang mudah teralihkan di tengah shalat.",
      "Buku ini ditulis dengan bahasa yang reflektif, mengajak pembaca tidak hanya menambah ilmu tetapi juga benar-benar mempraktikkan setiap langkah yang disampaikan."
    ]
  },
  {
    id: 10,
    title: "Menyelami Makna Asmaul Husna",
    category: "Aqidah",
    author: "Dr. Yahya Ridwan, M.A.",
    year: "2023",
    pages: "220 halaman",
    excerpt: "Mengupas makna di balik nama-nama indah Allah dan bagaimana menghadirkannya dalam sikap dan doa sehari-hari.",
    content: [
      "Buku ini mengajak pembaca menyelami makna di balik sembilan puluh sembilan nama Allah yang indah, tidak sekadar menghafal, tetapi memahami keterkaitannya dengan kehidupan sehari-hari.",
      "Setiap nama dijelaskan maknanya secara bahasa dan istilah, disertai renungan tentang bagaimana sifat tersebut semestinya membentuk sikap seorang hamba dalam berdoa dan bermuamalah dengan sesama.",
      "Buku ini cocok dijadikan bahan tadabur harian, membantu pembaca membangun kedekatan yang lebih personal dengan Allah melalui pengenalan nama-nama-Nya."
    ]
  },
  {
    id: 11,
    title: "Bekal Dakwah bagi Da'i Muda",
    category: "Dakwah",
    author: "Ust. Ismail Fadhil, Lc., M.Pd.I",
    year: "2024",
    pages: "176 halaman",
    excerpt: "Panduan praktis bagi para da'i pemula, mencakup teknik menyampaikan materi, adab berdakwah, dan menghadapi tantangan di lapangan.",
    content: [
      "Ditujukan bagi para da'i muda yang baru memulai perjalanan dakwahnya, buku ini membahas keterampilan dasar yang sering luput dari perhatian, seperti teknik menyusun materi dan membaca kondisi audiens.",
      "Selain aspek teknis, buku ini juga menekankan pentingnya adab seorang da'i: kerendahan hati, kesabaran menghadapi kritik, serta menjaga keikhlasan di tengah tantangan dakwah di era digital.",
      "Dilengkapi dengan kisah pengalaman lapangan dari berbagai da'i, buku ini memberi gambaran nyata tentang suka duka dakwah yang jarang dibahas di bangku pelatihan formal."
    ]
  },
  {
    id: 12,
    title: "Kumpulan Hadits Pilihan tentang Akhlak",
    category: "Hadits",
    author: "Ustadzah Nur Halisa, S.Th.I",
    year: "2022",
    pages: "192 halaman",
    excerpt: "Menghimpun hadits-hadits shahih seputar akhlak mulia, lengkap dengan penjelasan singkat dan konteks penerapannya.",
    content: [
      "Buku ini menghimpun hadits-hadits shahih yang berkaitan dengan akhlak mulia, mulai dari kejujuran, kasih sayang, hingga kesabaran, disusun secara tematik agar mudah dijadikan rujukan.",
      "Setiap hadits disertai penjelasan singkat mengenai konteks dan pelajaran yang dapat diambil, membantu pembaca memahami bukan hanya teksnya tetapi juga semangat di baliknya.",
      "Buku saku ini praktis dibawa ke mana saja dan cocok dijadikan bahan kultum singkat maupun bahan renungan pribadi setiap hari."
    ]
  },
  {
    id: 13,
    title: "Fiqih Puasa dan Zakat Fitrah",
    category: "Fiqih",
    author: "Dr. H. Zulkarnain, M.A.",
    year: "2023",
    pages: "144 halaman",
    excerpt: "Panduan lengkap seputar puasa Ramadhan, mulai dari syarat, hal-hal yang membatalkan, hingga tata cara zakat fitrah.",
    content: [
      "Menjelang bulan Ramadhan, pertanyaan seputar fiqih puasa selalu ramai bermunculan di masyarakat. Buku ini hadir sebagai panduan lengkap yang menjawab pertanyaan tersebut secara sistematis dan mudah dipahami.",
      "Pembahasan mencakup syarat wajib dan sah puasa, hal-hal yang membatalkan puasa, keringanan bagi golongan tertentu, hingga tata cara dan waktu penunaian zakat fitrah yang tepat.",
      "Buku ini cocok dijadikan pegangan menjelang Ramadhan bagi keluarga, pengajar, maupun pengurus masjid yang sering menerima pertanyaan seputar fiqih puasa."
    ]
  },
  {
    id: 14,
    title: "Panduan Lengkap Manasik Haji dan Umrah",
    category: "Fiqih",
    author: "Ust. Dawud Prasetyo, Lc.",
    year: "2021",
    pages: "216 halaman",
    excerpt: "Menuntun jamaah memahami rangkaian ibadah haji dan umrah secara runtut, dilengkapi tips praktis persiapan perjalanan.",
    content: [
      "Buku ini disusun sebagai bekal bagi calon jamaah haji dan umrah, menjelaskan setiap rangkaian ibadah secara runtut mulai dari niat ihram hingga tahalul, disertai dalil dan hikmah di baliknya.",
      "Selain aspek fiqih, buku ini juga menyisipkan tips praktis seputar persiapan fisik, mental, dan perlengkapan perjalanan, yang sering luput dari buku manasik pada umumnya.",
      "Ditulis dengan bahasa yang komunikatif, buku ini membantu jamaah menjalankan ibadah haji dan umrah dengan lebih tenang karena telah memahami setiap tahapannya dengan baik."
    ]
  },
  {
    id: 15,
    title: "Kumpulan Doa dan Dzikir Harian",
    category: "Akhlak & Adab",
    author: "Ustadzah Salma Wijaya, S.Ag.",
    year: "2024",
    pages: "160 halaman",
    excerpt: "Menghimpun doa dan dzikir dari pagi hingga malam yang diajarkan dalam sunnah, lengkap dengan keterangan waktu dan keutamaannya.",
    content: [
      "Buku saku ini menghimpun doa dan dzikir yang diajarkan dalam sunnah untuk berbagai momen harian, mulai dari bangun tidur, keluar rumah, hingga menjelang tidur kembali.",
      "Setiap doa disertai keterangan singkat mengenai waktu yang tepat serta keutamaannya, membantu pembaca menghadirkan kesadaran akan makna di balik setiap dzikir yang dibaca.",
      "Ukurannya yang ringkas membuat buku ini mudah dibawa dan dijadikan pegangan harian bagi siapa saja yang ingin membiasakan dzikir pagi dan petang secara konsisten."
    ]
  },
  {
    id: 16,
    title: "Membangun Rumah Tangga yang Islami",
    category: "Akhlak & Adab",
    author: "Dr. Hamzah Firdaus, M.A.",
    year: "2022",
    pages: "228 halaman",
    excerpt: "Membahas fondasi rumah tangga Islami, dari pemilihan pasangan, komunikasi, hingga pendidikan anak dalam naungan keluarga muslim.",
    content: [
      "Buku ini membahas rumah tangga Islami secara menyeluruh, dimulai dari tahap pemilihan pasangan, membangun komunikasi yang sehat, hingga tantangan-tantangan yang biasa muncul di tahun-tahun awal pernikahan.",
      "Bagian khusus juga membahas pendidikan anak dalam naungan keluarga muslim, termasuk bagaimana menanamkan nilai-nilai agama sejak dini tanpa mengabaikan pendekatan psikologis yang sesuai usia anak.",
      "Buku ini cocok dibaca oleh pasangan yang baru menikah maupun yang telah lama berumah tangga namun ingin menyegarkan kembali fondasi keislaman dalam keluarganya."
    ]
  },
  {
    id: 17,
    title: "Mengenal Ilmu Waris dalam Islam",
    category: "Fiqih",
    author: "Ust. Yakub Santoso, Lc., M.H.",
    year: "2023",
    pages: "172 halaman",
    excerpt: "Menjelaskan dasar-dasar ilmu waris (faraidh) secara sistematis, dilengkapi contoh kasus pembagian yang sering ditemui di masyarakat.",
    content: [
      "Ilmu waris kerap dianggap rumit karena melibatkan perhitungan yang detail. Buku ini menyederhanakan pembahasan tersebut dengan pendekatan bertahap, dimulai dari konsep dasar hingga contoh kasus nyata.",
      "Berbagai skema pembagian warisan yang umum ditemui di masyarakat dijelaskan dengan ilustrasi perhitungan yang mudah diikuti, membantu pembaca memahami hak setiap ahli waris secara adil.",
      "Buku ini bermanfaat bagi tokoh masyarakat, penyuluh agama, maupun keluarga yang sedang menghadapi proses pembagian warisan agar dapat diselesaikan sesuai tuntunan syariat."
    ]
  },
  {
    id: 18,
    title: "Tazkiyatun Nafs, Jalan Penyucian Jiwa",
    category: "Akhlak & Adab",
    author: "Ustadzah Ruqayyah Amelia, S.Th.I",
    year: "2021",
    pages: "188 halaman",
    excerpt: "Mengulas konsep penyucian jiwa dalam tradisi Islam, membantu pembaca mengenali penyakit hati dan cara mengobatinya.",
    content: [
      "Buku ini mengangkat kembali konsep tazkiyatun nafs atau penyucian jiwa yang menjadi salah satu inti ajaran Islam, namun kerap terlupakan di tengah kesibukan duniawi.",
      "Berbagai penyakit hati seperti sombong, riya, dan cinta dunia berlebihan dibahas satu per satu, disertai langkah-langkah praktis untuk mengobatinya berdasarkan tuntunan Al-Qur'an dan sunnah.",
      "Buku reflektif ini cocok dibaca perlahan sebagai bahan muhasabah, bukan sekadar dibaca sekali lalu ditutup, karena setiap babnya mengundang perenungan yang mendalam."
    ]
  },
  {
    id: 19,
    title: "Fiqih Kontemporer di Era Digital",
    category: "Fiqih",
    author: "Dr. KH. Idris Marzuki, M.A.",
    year: "2024",
    pages: "196 halaman",
    excerpt: "Membahas fatwa dan pandangan fiqih atas isu-isu kekinian seperti media sosial, konten digital, dan interaksi daring.",
    content: [
      "Kemajuan teknologi digital memunculkan berbagai persoalan baru yang belum tentu memiliki jawaban eksplisit dalam kitab-kitab klasik. Buku ini mencoba menjawab persoalan tersebut dengan kaidah fiqih yang relevan.",
      "Topik yang dibahas antara lain etika bermedia sosial, hukum seputar konten digital, hingga batasan interaksi daring antara laki-laki dan perempuan yang bukan mahram.",
      "Buku ini penting dibaca oleh generasi muda muslim yang tumbuh besar bersama teknologi, agar dapat memanfaatkan dunia digital tanpa mengabaikan rambu-rambu syariat."
    ]
  },
  {
    id: 20,
    title: "Pengantar Ilmu Ushul Fiqih",
    category: "Fiqih",
    author: "Ust. Musa Kurniawan, Lc.",
    year: "2020",
    pages: "232 halaman",
    excerpt: "Memperkenalkan kaidah-kaidah dasar ushul fiqih sebagai fondasi memahami bagaimana hukum Islam digali dari sumber-sumbernya.",
    content: [
      "Sebelum mempelajari fiqih secara praktis, memahami ushul fiqih sebagai metodologinya menjadi langkah yang penting. Buku ini memperkenalkan kaidah-kaidah dasar tersebut dengan bahasa pengantar yang bersahabat bagi pemula.",
      "Pembahasan mencakup sumber-sumber hukum Islam, kaidah penetapan hukum, hingga pengenalan singkat mengenai perbedaan pendapat ulama dalam beberapa metode istinbath hukum.",
      "Buku ini menjadi jembatan yang baik bagi siapa saja yang ingin melanjutkan kajian fiqih ke tingkat yang lebih mendalam dengan fondasi metodologi yang kokoh."
    ]
  }
];

/* Ambil data berdasarkan id — dipakai oleh halaman detail */
function getKhutbahById(id) {
  return KHUTBAH_DATA.find(function (item) { return String(item.id) === String(id); });
}
function getBukuById(id) {
  return BUKU_DATA.find(function (item) { return String(item.id) === String(id); });
}