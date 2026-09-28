const STAFF_MEMBERS = [
  {
    nick: 'Kak Kani',
    name: 'Kani, S.Kom., M.Kom.',
    role: 'Manajer Perpustakaan',
    photo: './foto-staff/pak kani.webp',
    quote: 'Kepemimpinan yang sejati adalah memberdayakan setiap orang untuk berkembang dan memberikan karya terbaiknya.',
    speech: 'Halo Kak Kani, terima kasih atas kepemimpinan dan arahan strategisnya dalam memajukan Perpustakaan Universitas Terbuka. Tetap semangat menginspirasi tim hari ini.'
  },
  {
    nick: 'Kak Nining',
    name: 'Nining Setianingsih, S.E.',
    role: 'Manajer Keuangan, Sumber Daya, dan Umum',
    photo: './foto-staff/bu nining.webp',
    quote: 'Ketertiban tata kelola dan ketelitian kerja adalah pilar utama kokohnya sebuah institusi besar.',
    speech: 'Halo Kak Nining, terima kasih atas ketelitian tata kelola dan pengawalan sumber daya perpustakaan. Semangat selalu menjaga ketertiban operasional kita.'
  },
  {
    nick: 'Kak Lufiana',
    name: 'Tengku Lufiana, S.Sos.',
    role: 'Analis Pemanfaatan & Fasilitas Perpustakaan dan Arsip',
    photo: './foto-staff/bu fia.webp',
    quote: 'Fasilitas terbaik bukan hanya soal kelengkapan fisik, tetapi seberapa besar ia memberi kenyamanan bagi pemustaka.',
    speech: 'Halo Kak Lufiana, terima kasih atas dedikasinya menganalisis pemanfaatan sarana dan fasilitas perpustakaan. Semangat menghadirkan ruang yang semakin nyaman bagi pemustaka.'
  },
  {
    nick: 'Kak Pandu',
    name: 'Mohamad Pandu Ristiyono, S.Sos., M.P.',
    role: 'Pustakawan Ahli Madya',
    photo: './foto-staff/pak pandu.webp',
    quote: 'Menjaga kemurnian ilmu dan mempermudah akses informasi adalah pengabdian intelektual yang tak pernah usai.',
    speech: 'Halo Kak Pandu, terima kasih atas pengabdian literasi dan pengembangan koleksi ilmiah perpustakaan. Semangat terus menebarkan ilmu pengetahuan.'
  },
  {
    nick: 'Kak Rudi',
    name: 'Rudi Susilo Darmawan, S.Sos.',
    role: 'Pustakawan Ahli Muda',
    photo: './foto-staff/pak rudi.webp',
    quote: 'Kecermatan dalam setiap pengolahan koleksi adalah wujud dedikasi bagi ribuan pencari ilmu di luar sana.',
    speech: 'Halo Kak Rudi, terima kasih atas kecermatan dan ketelitian dalam pengolahan koleksi pustaka. Semangat berkarya menjaga mutu bahan pustaka kita.'
  },
  {
    nick: 'Kak Irma',
    name: 'Irmayati, S.IP.',
    role: 'Pustakawan Ahli Muda',
    photo: './foto-staff/bu irma.webp',
    quote: 'Pelayanan yang ramah dan tulus mampu mengubah pertanyaan rumit menjadi solusi yang mencerahkan.',
    speech: 'Halo Kak Irma, terima kasih atas keramahan pelayanan dan bimbingan referensi bagi pemustaka. Senyum dan kehangatan layanan Kak Irma selalu membawa solusi.'
  },
  {
    nick: 'Kak Cherrie',
    name: 'Cherrie Rachman, S.Sos.',
    role: 'Pustakawan Ahli Muda',
    photo: './foto-staff/pak ceri.webp',
    quote: 'Dunia informasi bergerak cepat, dan keterbukaan untuk terus belajar adalah kunci profesionalisme.',
    speech: 'Halo Kak Cherrie, terima kasih atas dedikasinya dalam pengembangan layanan dan inovasi kepustakawanan modern. Semangat berkarya untuk kemajuan perpustakaan.'
  },
  {
    nick: 'Kak Jayanto',
    name: 'Jayanto, S.I.Pust.',
    role: 'Pengadministrasi Perpustakaan',
    photo: './foto-staff/pak jay.webp',
    quote: 'Setiap berkas dan data yang tersusun rapi hari ini menyelamatkan waktu banyak orang di masa depan.',
    speech: 'Halo Kak Jayanto, terima kasih atas ketertiban administrasi dan sirkulasi dokumen yang selalu rapi. Semangat bertugas dan menjaga kelancaran layanan.'
  },
  {
    nick: 'Kak Miftah',
    name: 'Miftah Agung Permana, S.I.Pust.',
    role: 'Pengadministrasi Perpustakaan',
    photo: './foto-staff/pak miftah.webp',
    quote: 'Bekerja dengan disiplin dan ketenangan menciptakan suasana kerja yang harmonis dan produktif.',
    speech: 'Halo Kak Miftah, terima kasih atas kedisiplinan dan kerapian pengelolaan administrasi persuratan harian. Tetap semangat dan selalu prima dalam bertugas.'
  },
  {
    nick: 'Kak Erlinda',
    name: 'Erlinda Dwi Septiani, A.Md.Lib.',
    role: 'Pengadministrasi Perpustakaan',
    photo: './foto-staff/mba erlinda.webp',
    quote: 'Ketelitian dalam detail kecil menghasilkan kualitas layanan prima yang diakui banyak orang.',
    speech: 'Halo Kak Erlinda, terima kasih atas ketelitian layanan repositori dan pengelolaan data perpustakaan. Semangat berkarya dan memberikan pelayanan terbaik.'
  },
  {
    nick: 'Kak Bella',
    name: 'Ratu Belladina Harteni Aprilia Kartini, S.I.Kom.',
    role: 'Pengadministrasi Data dan Informasi',
    photo: './foto-staff/mba ratu.webp',
    quote: 'Komunikasi yang jernih dan data yang akurat adalah jembatan kepercayaan civitas akademika.',
    speech: 'Halo Kak Bella, terima kasih atas keakuratan pengolahan data dan komunikasi informasi publik perpustakaan. Tetap semangat dan penuh keceriaan hari ini.'
  },
  {
    nick: 'Kak Nina',
    name: 'Nina Triana Somad',
    role: 'Pengadministrasi Umum',
    photo: './foto-staff/bu nina.webp',
    quote: 'Kelancaran operasional harian terwujud berkat koordinasi yang sigap dan semangat kerja bersama.',
    speech: 'Halo Kak Nina, terima kasih atas kesigapan koordinasi operasional harian dan ketertiban tata laksana kantor. Semangat selalu mendampingi tim perpustakaan.'
  },
  {
    nick: 'Kak Oki',
    name: 'Oki Adi Haryono, S.E.',
    role: 'Pengadministrasi Umum',
    photo: './foto-staff/pak oki.webp',
    quote: 'Tanggung jawab yang diemban dengan ikhlas akan selalu menghasilkan jalan kemudahan dalam setiap tugas.',
    speech: 'Halo Kak Oki, terima kasih atas kesiapan dan dukungan logistik operasional perpustakaan. Semangat bertugas dan selalu sehat penuh energi positif.'
  },
  {
    nick: 'Kak Fatimah',
    name: 'Fatimah, S.E.',
    role: 'Pengelola Keuangan',
    photo: './foto-staff/bu fatimah.webp',
    quote: 'Integritas dan akuntabilitas adalah mahkota tertinggi dalam setiap proses pengelolaan sumber daya.',
    speech: 'Halo Kak Fatimah, terima kasih atas akuntabilitas, ketelitian, dan integritas tinggi dalam pengelolaan keuangan unit. Semangat mengawal tata kelola yang bersih.'
  },
  {
    nick: 'Kak Dina',
    name: 'Dina Desmira, A.Md.',
    role: 'Bendahara Pengeluaran Unit',
    photo: './foto-staff/mba dina.webp',
    quote: 'Kerapian pencatatan finansial memberikan ketenangan dan kepastian bagi seluruh gerak organisasi.',
    speech: 'Halo Kak Dina, terima kasih atas kerapian pencatatan finansial dan kelancaran transaksi perbendaharaan. Tetap semangat dan teliti dalam setiap tugas.'
  },
  {
    nick: 'Kak David',
    name: 'Nurpadillah David, S.Kom.',
    role: 'Penata Laman',
    photo: './foto-staff/pak david.webp',
    quote: 'Baris-baris kode yang dirancang dengan rapi mampu menghubungkan ribuan pengguna dengan ilmu pengetahuan.',
    speech: 'Halo Kak David, terima kasih atas dedikasi menjaga keandalan portal dan sistem web perpustakaan. Semangat merangkai kode dan menghadirkan sistem yang andal.'
  },
  {
    nick: 'Kak Septian',
    name: 'Septian Dwi Cahyo, S.T.',
    role: 'Penata Laman',
    photo: './foto-staff/pak septian.webp',
    quote: 'Teknologi adalah seni mempermudah kehidupan manusia lewat solusi digital yang andal dan elegan.',
    speech: 'Halo Kak Septian, terima kasih atas inovasi pengembangan antarmuka dan solusi digital perpustakaan. Semangat terus berkarya melahirkan teknologi canggih.'
  },
  {
    nick: 'Kak Deyan',
    name: 'Firstdeyan Septiana Putra, A.Md.Kom.',
    role: 'Penata Laman',
    photo: './foto-staff/deyan.webp',
    quote: 'Kombinasi kreativitas tanpa batas dan arsitektur sistem yang kokoh melahirkan karya teknologi yang berdampak nyata.',
    speech: 'Halo Kak Deyan, terima kasih atas arsitektur sistem, kreativitas tampilan, dan otomasi canggih perpustakaan. Semangat berkarya membangun karya teknologi berdampak nyata.'
  }
];

const DAILY_RIDDLES = [
  {
    category: 'Logika Cerdas',
    question: 'Jika kamu memiliki aku, kamu ingin membagiku. Jika kamu membagiku, kamu tidak lagi memilikiku. Apakah aku?',
    answer: 'Sebuah Rahasia',
    hint: 'Sering diceritakan diam-diam'
  },
  {
    category: 'Trivia Perpustakaan',
    question: 'Punya punggung tapi tak punya tulang, punya ratusan daun tapi bukan tanaman. Apakah itu?',
    answer: 'Buku di Rak Perpustakaan',
    hint: 'Sumber ilmu pengetahuan'
  },
  {
    category: 'Teka-Teki IT & Coding',
    question: 'Aku diciptakan manusia, tapi jika aku bertambah satu saja di program, semua orang bisa lembur semalaman. Siapakah aku?',
    answer: 'Bug / Typo Titik Koma (;)',
    hint: 'Sering tersembunyi di ribuan baris kode'
  },
  {
    category: 'Filsafat Ringan',
    question: 'Makin banyak yang kamu pelajari dari aku, makin kamu sadar betapa sedikitnya yang kamu ketahui. Apakah aku?',
    answer: 'Ilmu Pengetahuan',
    hint: 'Semesta pemikiran manusia'
  },
  {
    category: 'Logika Visual',
    question: 'Aku selalu berada di depan matamu setiap hari, tapi tak pernah bisa kamu lihat secara langsung tanpa cermin. Apakah aku?',
    answer: 'Masa Depanmu',
    hint: 'Selalu menunggumu melangkah'
  },
  {
    category: 'Humor Kantor Cerdas',
    question: 'Benda apa yang selalu dipencet dengan penuh harapan dan doa saat revisi mendadak datang?',
    answer: 'Kombinasi Tombol Ctrl + Z',
    hint: 'Penyelamat instan seluruh pekerja digital'
  },
  {
    category: 'Sains & Fisika',
    question: 'Bisa mengisi satu ruangan penuh tanpa memakan ruang satu sentimeter pun. Apakah itu?',
    answer: 'Cahaya & Gelombang Wi-Fi',
    hint: 'Menerangi dan menghubungkan'
  },
  {
    category: 'Teka-Teki Kata',
    question: 'Bisa dipatahkan tanpa pernah disentuh, dan bisa dipegang tanpa pernah digenggam. Apakah itu?',
    answer: 'Janji & Komitmen',
    hint: 'Ukuran integritas sejati'
  }
];

const CURIOSITY_INSIGHTS = [
  {
    tag: 'Sains Fokus',
    title: 'Metode 20-20-20',
    desc: 'Setiap 20 menit menatap layar monitor, alihkan pandangan ke objek sejauh 6 meter selama 20 detik untuk merelaksasi otot siliaris mata.'
  },
  {
    tag: 'Literasi Global',
    title: 'Aroma Petrichor Buku',
    desc: 'Wangi khas kertas buku kuno dihasilkan oleh senyawa vanilin dan benzaldehida yang menguap alami, terbukti secara ilmiah memberi efek ketenangan pikiran.'
  },
  {
    tag: 'Neuroscience',
    title: 'Kekuatan Micro-Pause',
    desc: 'Jeda peregangan selama 30 detik setiap jam terbukti mengembalikan kecepatan pemrosesan informasi di otak hingga 35%.'
  },
  {
    tag: 'Psikologi Ruang',
    title: 'Cahaya Biru Langit',
    desc: 'Warna gradasi biru muda dan cyan merangsang produksi hormon serotonin, menjaga suasana hati tetap damai, segar, dan fokus.'
  },
  {
    tag: 'Produktivitas Tim',
    title: 'Efek Sinergi Spontan',
    desc: 'Berbincang santai 3 menit bersama rekan kerja mampu menurunkan kadar kortisol stres dan memicu ide-ide kreatif out of the box.'
  },
  {
    tag: 'Sejarah Buku',
    title: 'Perpustakaan Kuno Alexandria',
    desc: 'Perpustakaan terbesar di dunia kuno ini mewajibkan setiap kapal asing yang bersandar untuk menyerahkan buku mereka agar disalin oleh para juru tulis.'
  },
  {
    tag: 'Kesehatan Postur',
    title: 'Aturan 90 Derajat',
    desc: 'Menjaga siku dan lutut pada sudut 90 derajat saat duduk mampu mencegah penumpukan tekanan pada tulang belakang hingga 60%.'
  }
];

const PRAYER_SCHEDULE = [
  { name: 'Subuh', hour: 4, minute: 38, icon: '🌅' },
  { name: 'Dzuhur', hour: 11, minute: 56, icon: '☀️' },
  { name: 'Ashar', hour: 15, minute: 10, icon: '🌤️' },
  { name: 'Maghrib', hour: 17, minute: 59, icon: '🌇' },
  { name: 'Isya', hour: 19, minute: 8, icon: '🌙' }
];

const SPEECH_MESSAGES = [
  'Halo {nick}, semangat berkarya dan memberikan pelayanan terbaik untuk civitas akademika hari ini.',
  'Selamat bertugas {nick}, semoga hari ini lancar, penuh energi positif, dan selalu berkah.',
  'Halo {nick}, jangan lupa rehat sejenak dan minum air putih agar tetap segar dan fokus.',
  '{nick}, dedikasi dan kerja samamu membuat Perpustakaan Universitas Terbuka semakin maju.',
  'Semangat bekerja {nick}, ide cemerlang dan inovasimu selalu memberi arti besar bagi tim.',
  '{nick}, terima kasih atas ketelitian dan dedikasinya dalam menjaga mutu layanan kita hari ini.'
];

const DAILY_NOTICES = [];


