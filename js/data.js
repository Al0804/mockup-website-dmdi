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
    title: "Meraih Ketakwaan yang Hakiki",
    category: "Khutbah Jumat",
    author: "Ust. Ahmad Fauzan, Lc.",
    date: "10 Jan 2025",
    language: "Bahasa Indonesia",
    excerpt: "Membahas makna takwa yang sesungguhnya, bukan sekadar ibadah ritual, melainkan kesadaran akan pengawasan Allah dalam setiap keadaan.",
    content: [
      "Takwa sering diucapkan namun tidak selalu dipahami maknanya secara utuh. Khutbah ini mengajak jamaah untuk melihat takwa bukan sekadar kepatuhan pada ritual ibadah, tetapi sebagai kesadaran batin yang hadir di setiap tarikan napas dan keputusan hidup.",
      "Diuraikan pula bagaimana para sahabat Nabi menempatkan takwa sebagai timbangan dalam setiap urusan, baik yang tampak di hadapan manusia maupun yang tersembunyi. Ketakwaan yang hakiki tumbuh dari rasa cinta, bukan semata rasa takut.",
      "Di bagian akhir, khatib mengajak jamaah merenungkan praktik takwa dalam keseharian: menjaga amanah pekerjaan, tutur kata, dan hak-hak sesama, sebagai bukti nyata bahwa ketakwaan bukan slogan melainkan sikap hidup."
    ]
  },
  {
    id: 2,
    title: "Menjaga Lisan dalam Kehidupan Bermasyarakat",
    category: "Khutbah Jumat",
    author: "Dr. KH. Ridho Ilahi, M.A.",
    date: "24 Jan 2025",
    language: "Bahasa Indonesia",
    excerpt: "Lisan menjadi cermin keimanan seseorang. Khutbah ini mengupas adab berbicara, bahaya gibah, serta pentingnya berkata baik atau memilih diam.",
    content: [
      "Rasulullah shallallahu 'alaihi wa sallam mengaitkan kesempurnaan iman seseorang dengan kemampuannya menjaga lisan. Khutbah ini membuka dengan renungan tentang betapa mudahnya lisan tergelincir dibanding anggota tubuh lainnya.",
      "Khatib menguraikan beberapa bentuk kerusakan lisan yang marak di zaman digital: gibah yang berpindah rupa menjadi komentar di media sosial, fitnah yang tersebar cepat tanpa tabayun, serta candaan yang menyakiti tanpa disadari.",
      "Sebagai penutup, jamaah diajak membiasakan tiga hal sebelum berbicara atau menulis: memastikan kebenarannya, memastikan manfaatnya, dan memastikan waktunya tepat. Bila ketiganya tidak terpenuhi, diam adalah pilihan yang lebih mulia."
    ]
  },
  {
    id: 3,
    title: "Keutamaan Sabar Menghadapi Ujian Hidup",
    category: "Khutbah Jumat",
    author: "Ustadzah Hj. Aminah Zahra, S.Ag.",
    date: "7 Feb 2025",
    language: "Bahasa Indonesia",
    excerpt: "Ujian adalah bagian dari perjalanan iman. Khutbah ini menegaskan sabar bukan pasrah tanpa usaha, melainkan ketenangan hati yang disertai ikhtiar.",
    content: [
      "Setiap manusia pasti diuji, dan ukurannya disesuaikan dengan kadar kesanggupannya. Khutbah ini membuka dengan penegasan bahwa ujian bukan tanda kebencian Allah, melainkan bagian dari proses pendewasaan iman.",
      "Dijelaskan tiga tingkatan sabar yang biasa diajarkan ulama: sabar dalam menjalankan ketaatan, sabar dalam menjauhi larangan, dan sabar dalam menerima takdir yang tidak menyenangkan. Ketiganya membutuhkan latihan yang terus-menerus.",
      "Khatib mengingatkan bahwa sabar tidak identik dengan diam tanpa ikhtiar. Justru sabar yang benar mendorong seseorang tetap berusaha sambil menjaga hati agar tidak berburuk sangka kepada Allah atas apa yang belum terwujud."
    ]
  },
  {
    id: 4,
    title: "Membangun Keluarga Sakinah, Mawaddah, dan Rahmah",
    category: "Khutbah Jumat",
    author: "Ust. Faisal Rahman, M.Pd.I",
    date: "21 Feb 2025",
    language: "Bahasa Indonesia",
    excerpt: "Rumah tangga yang tenteram tidak datang dengan sendirinya. Khutbah ini membahas peran suami-istri dalam merawat cinta dan komunikasi.",
    content: [
      "Pernikahan digambarkan Al-Qur'an sebagai tanda kebesaran Allah, tempat lahirnya ketenangan (sakinah), cinta (mawaddah), dan kasih sayang (rahmah). Khutbah ini mengajak jamaah menilik kembali fondasi rumah tangga masing-masing.",
      "Khatib menyoroti pentingnya komunikasi yang jujur antara suami dan istri, pembagian peran yang saling melengkapi, serta kesediaan memaafkan kesalahan kecil sebelum berubah menjadi luka yang menumpuk.",
      "Di akhir khutbah, disampaikan bahwa keluarga yang kuat bukan keluarga tanpa masalah, melainkan keluarga yang selalu kembali kepada nilai-nilai agama setiap kali menghadapi persoalan."
    ]
  },
  {
    id: 5,
    title: "Syukur Nikmat: Kunci Kebahagiaan Sejati",
    category: "Khutbah Jumat",
    author: "Dr. Yusuf Al-Bantani, M.A.",
    date: "25 Apr 2025",
    language: "Bahasa Indonesia",
    excerpt: "Syukur menjadi jalan menuju ketenangan jiwa. Khutbah ini mengajak jamaah mensyukuri nikmat yang sering terlewat dari perhatian.",
    content: [
      "Manusia cenderung menyadari nikmat setelah kehilangannya. Khutbah ini mengajak jamaah menghitung kembali nikmat-nikmat yang selama ini dianggap biasa: kesehatan, waktu luang, serta rasa aman dalam menjalani hari.",
      "Dijelaskan bahwa syukur memiliki tiga rukun: mengakui nikmat dalam hati, mengucapkannya dengan lisan, dan menggunakannya sesuai dengan tujuan pemberiannya. Ketiganya harus hadir bersamaan agar syukur menjadi utuh.",
      "Khatib menutup dengan pengingat bahwa syukur bukan hanya diucapkan saat lapang, tetapi juga perlu dihadirkan saat sempit, karena di balik kesulitan pun selalu ada nikmat yang tersembunyi."
    ]
  },
  {
    id: 6,
    title: "Menuntut Ilmu, Kewajiban Sepanjang Hayat",
    category: "Khutbah Jumat",
    author: "Ust. Zainal Arifin, Lc., M.H.",
    date: "9 Mei 2025",
    language: "Bahasa Indonesia",
    excerpt: "Ilmu adalah cahaya yang menuntun langkah seorang muslim. Khutbah ini mengajak jamaah menjadikan belajar sebagai kebiasaan seumur hidup.",
    content: [
      "Islam menempatkan ilmu sebagai syarat sahnya amal. Khutbah ini membuka dengan pengingat bahwa menuntut ilmu bukan tahapan yang berakhir di bangku sekolah, melainkan perjalanan yang menyertai seseorang hingga akhir hayat.",
      "Khatib mengajak jamaah untuk memprioritaskan ilmu agama sebagai bekal utama, sambil tetap menghargai ilmu-ilmu dunia yang bermanfaat bagi kemaslahatan umat, karena keduanya saling melengkapi dalam kehidupan seorang muslim.",
      "Sebagai penutup, disampaikan bahwa majelis ilmu sekecil apa pun bernilai besar di sisi Allah, dan hendaknya setiap muslim menyediakan waktu khusus untuk hadir dalam majelis tersebut secara rutin."
    ]
  },
  {
    id: 7,
    title: "Adab Bertetangga dalam Ajaran Islam",
    category: "Khutbah Jumat",
    author: "Ustadzah Halimah Sa'diyah, S.Th.I",
    date: "13 Jun 2025",
    language: "Bahasa Indonesia",
    excerpt: "Islam mengajarkan hak tetangga yang begitu besar. Khutbah ini menguraikan adab bertetangga yang mulai jarang dijaga di masyarakat modern.",
    content: [
      "Kedekatan tempat tinggal semestinya melahirkan kedekatan hati. Khutbah ini mengangkat kembali perhatian besar yang diberikan ajaran Islam terhadap hak-hak tetangga, tanpa memandang latar belakang agama maupun sukunya.",
      "Beberapa adab yang diuraikan meliputi: tidak mengganggu dengan suara maupun perbuatan, berbagi ketika memiliki kelapangan rezeki, serta segera menjenguk saat tetangga sakit atau tertimpa musibah.",
      "Khatib mengingatkan bahwa di tengah kehidupan perkotaan yang individualis, menghidupkan kembali adab bertetangga adalah bentuk dakwah yang nyata dan dirasakan langsung oleh masyarakat sekitar."
    ]
  },
  {
    id: 8,
    title: "Menjauhi Sifat Hasad dan Dengki",
    category: "Khutbah Jumat",
    author: "Ust. Ibrahim Maulana, Lc.",
    date: "11 Jul 2025",
    language: "Bahasa Indonesia",
    excerpt: "Hasad diam-diam menggerogoti hati. Khutbah ini membahas bahaya dengki serta cara menumbuhkan rasa lapang atas keberhasilan orang lain.",
    content: [
      "Hasad digambarkan sebagai penyakit hati yang membakar kebaikan sebagaimana api membakar kayu bakar. Khutbah ini mengajak jamaah mengenali gejala-gejala kecil hasad sebelum berkembang menjadi permusuhan yang nyata.",
      "Khatib menjelaskan bahwa hasad muncul karena lupa bahwa rezeki dan kedudukan setiap orang telah ditentukan oleh Allah. Menerima ketentuan ini dengan lapang adalah langkah pertama menyembuhkan hati dari dengki.",
      "Di akhir khutbah, disampaikan amalan-amalan yang membantu meredam hasad: memperbanyak doa kebaikan untuk orang lain, mensyukuri apa yang dimiliki, serta menyibukkan diri dengan perbaikan diri sendiri."
    ]
  },
  {
    id: 9,
    title: "Menjaga Amanah dalam Setiap Urusan",
    category: "Khutbah Jumat",
    author: "Dr. H. Syamsul Hadi, M.A.",
    date: "15 Agu 2025",
    language: "Bahasa Indonesia",
    excerpt: "Amanah adalah pondasi kepercayaan dalam masyarakat. Khutbah ini mengingatkan pentingnya menjaga amanah, sekecil apa pun bentuknya.",
    content: [
      "Amanah mencakup makna yang luas: pekerjaan yang dipercayakan, jabatan yang diemban, hingga rahasia yang dititipkan. Khutbah ini membuka dengan pengingat bahwa hilangnya amanah menjadi salah satu tanda rusaknya suatu zaman.",
      "Khatib menekankan bahwa amanah paling mendasar justru sering terlupakan, yaitu amanah waktu dan amanah terhadap diri sendiri, sebelum berbicara amanah yang lebih besar seperti jabatan dan harta.",
      "Sebagai penutup, jamaah diajak menjadikan amanah sebagai identitas, bukan sekadar kewajiban formal, sehingga kepercayaan yang diberikan orang lain benar-benar dijaga dengan sepenuh hati."
    ]
  },
  {
    id: 10,
    title: "Silaturahmi, Perekat Ukhuwah Islamiyah",
    category: "Khutbah Jumat",
    author: "Ust. Umar Hasyim, Lc.",
    date: "17 Okt 2025",
    language: "Bahasa Indonesia",
    excerpt: "Silaturahmi melapangkan rezeki dan memanjangkan keberkahan usia. Khutbah ini mengajak jamaah merawat hubungan kekerabatan dan persaudaraan.",
    content: [
      "Silaturahmi bukan sekadar tradisi sosial, melainkan ibadah yang memiliki janji keberkahan tersendiri. Khutbah ini membuka dengan mengingatkan jamaah akan keutamaan menyambung hubungan kekerabatan yang mungkin sempat renggang.",
      "Khatib menguraikan bahwa silaturahmi tidak selalu berbentuk kunjungan fisik, tetapi juga bisa dijaga lewat kabar, doa, dan bantuan di saat yang tepat, terutama bagi kerabat yang berjauhan tempat tinggal.",
      "Di penghujung khutbah, jamaah diajak memulai langkah kecil: menghubungi kembali kerabat yang lama tidak disapa, sebagai wujud nyata menjaga ukhuwah yang diperintahkan agama."
    ]
  },
  {
    id: 11,
    title: "Ikhlas dalam Beramal dan Berkarya",
    category: "Khutbah Jumat",
    author: "Ustadzah Fatimah Az-Zahra, S.Ag.",
    date: "14 Nov 2025",
    language: "Bahasa Indonesia",
    excerpt: "Amal tanpa keikhlasan ibarat bangunan tanpa fondasi. Khutbah ini mengupas cara menjaga niat agar tetap murni karena Allah semata.",
    content: [
      "Ikhlas menjadi ruh dari setiap amal, sekecil apa pun bentuknya. Khutbah ini mengajak jamaah merenungkan kembali niat di balik ibadah dan pekerjaan yang dijalani sehari-hari.",
      "Khatib menjelaskan bahwa godaan riya tidak selalu tampak jelas, kadang hadir dalam bentuk halus seperti keinginan dipuji atau diakui, sehingga diperlukan muhasabah yang terus-menerus untuk menjaga kemurnian niat.",
      "Sebagai penutup, disampaikan bahwa amal yang ikhlas meski kecil lebih bernilai di sisi Allah dibanding amal besar yang dicampuri kepentingan duniawi."
    ]
  },
  {
    id: 12,
    title: "Menjemput Rezeki dengan Ikhtiar dan Tawakal",
    category: "Khutbah Jumat",
    author: "Ust. Rizki Ramadhan, M.Pd.I",
    date: "13 Feb 2026",
    language: "Bahasa Indonesia",
    excerpt: "Rezeki telah ditetapkan, namun ikhtiar tetap wajib dijalankan. Khutbah ini menjelaskan keseimbangan antara usaha dan tawakal kepada Allah.",
    content: [
      "Sebagian orang keliru memahami tawakal sebagai berpangku tangan menunggu rezeki datang. Khutbah ini meluruskan pemahaman tersebut dengan menegaskan bahwa tawakal justru dimulai dari ikhtiar yang sungguh-sungguh.",
      "Khatib menguraikan teladan burung yang disebut dalam hadits: berangkat pagi dalam keadaan lapar dan pulang sore dalam keadaan kenyang, sebagai gambaran usaha yang disertai penyerahan hasil kepada Allah.",
      "Di bagian akhir, jamaah diingatkan agar tidak berputus asa saat rezeki belum tampak, karena boleh jadi Allah sedang menyiapkan jalan yang lebih baik dari yang direncanakan."
    ]
  },
  {
    id: 13,
    title: "Kemenangan Sejati Setelah Sebulan Berpuasa",
    category: "Khutbah Idul Fitri",
    author: "Dr. KH. Abdullah Nashir, M.A.",
    date: "30 Mar 2025",
    language: "Bahasa Indonesia",
    excerpt: "Idul Fitri bukan sekadar perayaan, melainkan penanda kemenangan atas hawa nafsu. Khutbah ini mengajak jamaah menjaga capaian Ramadhan.",
    content: [
      "Takbir yang berkumandang menjadi penanda bahwa satu bulan penempaan telah usai. Khutbah ini mengajak jamaah merenungkan makna kemenangan yang sesungguhnya, yaitu keberhasilan mengendalikan hawa nafsu selama Ramadhan.",
      "Khatib mengingatkan bahwa kemenangan ini akan sia-sia bila tidak dijaga setelah bulan puasa berlalu. Kebiasaan baik yang telah terbentuk semestinya terus dirawat di sebelas bulan berikutnya.",
      "Sebagai penutup, jamaah diajak saling memaafkan sebagai bagian dari kesucian hari raya, sekaligus membuka lembaran baru dalam hubungan dengan keluarga dan sesama."
    ]
  },
  {
    id: 14,
    title: "Meraih Fitrah Suci di Hari Kemenangan",
    category: "Khutbah Idul Fitri",
    author: "Ust. Hasan Basri, Lc.",
    date: "31 Mar 2025",
    language: "Bahasa Indonesia",
    excerpt: "Fitrah manusia yang suci kembali dijemput di hari kemenangan. Khutbah ini mengulas makna kembali kepada kesucian setelah Ramadhan.",
    content: [
      "Manusia dilahirkan dalam keadaan fitrah, suci dan cenderung pada kebaikan. Khutbah ini membahas bagaimana Ramadhan menjadi sarana untuk membersihkan kembali fitrah yang mungkin tertutup debu kelalaian.",
      "Khatib menjelaskan bahwa tanda diterimanya ibadah Ramadhan bukan dilihat dari pakaian baru atau hidangan istimewa, melainkan dari perubahan sikap yang lebih baik setelah hari raya.",
      "Di akhir khutbah, jamaah diajak menjadikan Idul Fitri sebagai titik awal, bukan garis akhir, dalam perjalanan memperbaiki diri menuju Ramadhan berikutnya."
    ]
  },
  {
    id: 15,
    title: "Idul Fitri, Momentum Memperkuat Silaturahmi",
    category: "Khutbah Idul Fitri",
    author: "Ustadzah Khadijah Nuraini, S.Th.I",
    date: "19 Mar 2026",
    language: "Bahasa Indonesia",
    excerpt: "Hari raya menjadi momen istimewa mempererat hubungan keluarga dan tetangga. Khutbah ini mengajak jamaah menghidupkan kembali silaturahmi.",
    content: [
      "Tradisi saling berkunjung saat Idul Fitri memiliki nilai ibadah yang mendalam. Khutbah ini mengajak jamaah memaknai kembali kebiasaan tersebut sebagai sarana merajut ukhuwah yang mungkin renggang sepanjang tahun.",
      "Khatib mengingatkan bahwa silaturahmi hari raya semestinya tidak berhenti pada seremoni saling bermaafan, tetapi berlanjut dalam bentuk kepedulian yang nyata sepanjang tahun berikutnya.",
      "Sebagai penutup, disampaikan bahwa keluarga yang jauh maupun kerabat yang pernah berselisih layak menjadi prioritas utama untuk didatangi atau dihubungi di hari yang penuh berkah ini."
    ]
  },
  {
    id: 16,
    title: "Merawat Ketakwaan Usai Ramadhan Berlalu",
    category: "Khutbah Idul Fitri",
    author: "Ust. Malik Ibrahim, M.H.",
    date: "20 Mar 2026",
    language: "Bahasa Indonesia",
    excerpt: "Tantangan sesungguhnya justru dimulai setelah Ramadhan usai. Khutbah ini membahas cara menjaga konsistensi ibadah pasca hari raya.",
    content: [
      "Banyak yang bersemangat beribadah selama Ramadhan namun kendur begitu bulan itu berlalu. Khutbah ini mengangkat keresahan tersebut sebagai bahan renungan bersama di hari kemenangan.",
      "Khatib menawarkan beberapa langkah sederhana untuk menjaga ritme ibadah: memilih satu atau dua amalan Ramadhan untuk dilanjutkan, menjaga lingkar pertemanan yang mendukung kebaikan, serta rutin mengevaluasi diri.",
      "Di akhir khutbah, jamaah diingatkan bahwa ibadah yang paling dicintai Allah adalah yang dilakukan secara konsisten, walau sedikit, dibanding ibadah besar yang hanya musiman."
    ]
  },
  {
    id: 17,
    title: "Hikmah di Balik Peristiwa Gerhana",
    category: "Khutbah Gerhana",
    author: "Dr. Yasin Habibi, M.A.",
    date: "14 Mar 2025",
    language: "Bahasa Indonesia",
    excerpt: "Gerhana mengingatkan manusia akan kebesaran Allah di balik keteraturan alam semesta. Khutbah ini mengulas hikmah dan sikap yang dianjurkan.",
    content: [
      "Peristiwa gerhana disambut Rasulullah dengan mendirikan shalat, bukan dengan ketakutan berlebihan atau anggapan mistis. Khutbah ini mengajak jamaah meneladani sikap tersebut ketika menyaksikan fenomena alam yang menakjubkan.",
      "Khatib menjelaskan bahwa gerhana adalah pengingat akan keteraturan ciptaan Allah sekaligus kefanaan dunia, bahwa benda-benda langit yang tampak begitu besar dan kekal pun tunduk pada ketentuan-Nya.",
      "Sebagai penutup, jamaah diajak menjadikan momen gerhana sebagai waktu untuk memperbanyak dzikir, sedekah, dan introspeksi diri, sebagaimana dicontohkan dalam tuntunan shalat gerhana."
    ]
  },
  {
    id: 18,
    title: "Tanda Kekuasaan Allah pada Fenomena Alam",
    category: "Khutbah Gerhana",
    author: "Ust. Bilal Mustofa, Lc.",
    date: "29 Mar 2025",
    language: "Bahasa Indonesia",
    excerpt: "Matahari dan bulan beredar dalam garis edarnya yang presisi. Khutbah ini mengaitkan fenomena gerhana dengan keimanan kepada Sang Pencipta.",
    content: [
      "Ketepatan perhitungan waktu terjadinya gerhana yang bisa diprediksi jauh hari menjadi bukti keteraturan penciptaan. Khutbah ini mengajak jamaah merenungkan kebesaran Allah lewat ilmu falak yang telah berkembang pesat.",
      "Khatib menegaskan bahwa sains dan keimanan tidak saling bertentangan; justru semakin dalam ilmu pengetahuan tentang alam semesta dipelajari, semakin tampak jelas kesempurnaan rancangan Sang Pencipta.",
      "Di akhir khutbah, disampaikan ajakan untuk tidak mengaitkan gerhana dengan mitos atau ramalan yang tidak berdasar, melainkan menyikapinya dengan ilmu dan ibadah sebagaimana tuntunan syariat."
    ]
  },
  {
    id: 19,
    title: "Muhasabah Diri di Tengah Gerhana",
    category: "Khutbah Gerhana",
    author: "Ustadzah Siti Rahmawati, S.Ag.",
    date: "7 Sep 2025",
    language: "Bahasa Indonesia",
    excerpt: "Cahaya yang meredup untuk sesaat mengajarkan makna kefanaan. Khutbah ini mengajak jamaah menjadikan gerhana sebagai momentum muhasabah.",
    content: [
      "Cahaya bulan yang meredup saat gerhana menjadi metafora yang kuat tentang kefanaan segala sesuatu selain Allah. Khutbah ini mengajak jamaah merenungkan hal-hal duniawi yang selama ini dianggap kekal.",
      "Khatib mengajak jamaah menghadirkan shalat gerhana sebagai ruang muhasabah, mengevaluasi hubungan dengan Allah, keluarga, dan sesama yang mungkin selama ini kurang mendapat perhatian.",
      "Sebagai penutup, disampaikan bahwa fenomena alam sebesar gerhana pun berlalu dalam hitungan jam, sebagaimana dunia yang fana ini juga akan berlalu, sehingga bekal akhirat semestinya menjadi prioritas."
    ]
  },
  {
    id: 20,
    title: "Gerhana: Pelajaran tentang Kebesaran Sang Pencipta",
    category: "Khutbah Gerhana",
    author: "Ust. Farid Nu'man, Lc., M.A.",
    date: "21 Sep 2025",
    language: "Bahasa Indonesia",
    excerpt: "Fenomena langit yang megah ini mengundang decak kagum sekaligus kerendahan hati. Khutbah ini membahas adab menyaksikan tanda-tanda kekuasaan Allah.",
    content: [
      "Setiap fenomena langit yang jarang terjadi selalu mengundang perhatian besar dari manusia. Khutbah ini mengajak jamaah menempatkan rasa kagum tersebut pada tempatnya, yaitu kagum kepada Allah yang menciptakannya.",
      "Khatib menjelaskan tuntunan shalat gerhana secara ringkas: dua rakaat dengan bacaan yang panjang, sebagai bentuk kesungguhan doa dan permohonan ampun di tengah peristiwa alam yang menakjubkan.",
      "Di akhir khutbah, jamaah diajak menjadikan setiap keajaiban alam sebagai pengingat untuk kembali kepada Allah, bukan sekadar tontonan ilmiah yang berlalu tanpa bekas dalam hati."
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
