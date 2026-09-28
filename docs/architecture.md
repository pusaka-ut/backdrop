# Architecture & Tech Stack — Backdrop System

File ini mendokumentasikan arsitektur sistem dan teknologi yang digunakan dalam ekosistem backdrop digital Perpustakaan Pusat Universitas Terbuka.

## 1. Tech Stack
- **Display Engine:** HTML5, Modern Canvas API (60 FPS procedural rendering), Web Animations API
- **Audio Synthesis:** Web Speech API (`speechSynthesis`) untuk asisten suara berkala
- **Styling:** Modern Glassmorphism CSS, Flexbox & CSS Grid, Responsive 16:9 Full HD / 4K
- **Media Support:** Video MP4 (H.264/AAC di bawah batas 100MB untuk GitHub Pages), SVG vectors
- **Architecture Pattern:** Modular single-page app (SPA) per folder acara/kebutuhan display

## 2. Struktur Direktori Utama
```
backdrop/
├── index.html                    # Portal utama pilihan backdrop
├── daily/                        # Pusaka Living Ambient Hub (Display Ruang Tengah Staf)
│   ├── index.html                # Ambient display player (Bento, Lo-Fi, Generatif, Ticker, TTS)
│   └── data.js                   # Konfigurasi nama staf, template suara, berita, & jadwal
├── Workshop-29092026/            # Backdrop Workshop Akreditasi 2027 (Animasi interaktif maskot)
├── Galeri PTJJ 2026/             # Galeri Digital Pameran (SISORA & RBV New Reborn)
└── docs/                         # Kitab suci dokumentasi project
```

## 3. Pola Arsitektur Khusus Daily Display
- **3D Claymorphism & Light Theme:** Menggunakan palet cerah Cyan & Sky Blue dengan efek timbul 3D clay lembut (dual inset shadow dan puffy outer drop shadow).
- **Lively Animated Multi-Actor Stage:** Panggung beranimasi aktif yang merotasi 4 karakter hewan (Kucing, Pinguin, Kelinci, Hamster) secara otomatis dengan animasi CSS/SVG 60 FPS.
- **Precision Prayer Schedule:** Jadwal sholat 5 waktu yang terstruktur rapi, simetris, dan dilengkapi penghitung mundur waktu sholat berikutnya.
- **Interactive Daily Riddles:** Menampilkan teka-teki santai dan wawasan sains yang berganti secara otomatis.
- **Zero-Comments Rule Mutlak:** Seluruh file kode dipastikan 100% bebas komentar.