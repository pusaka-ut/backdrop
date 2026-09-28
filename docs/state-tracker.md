# State Tracker & Progress — Backdrop System

File ini digunakan untuk melacak status fitur dan modul di repositori backdrop Perpustakaan Pusat Universitas Terbuka.

## 1. Fokus Saat Ini / Recent Updates
- [x] Rancang & bangun modul `daily/` (Claymorphism Display — Perpustakaan Universitas Terbuka)
- [x] Panggung animasi aktif 4 karakter hewan (Kucing, Pinguin, Kelinci, Hamster) berganti otomatis
- [x] Kartu baru "Info Hari Ini" di kolom tengah (bisa dikosongkan dengan fallback ramah otomatis)
- [x] Kartu sorot foto 18 staf resmi perpustakaan dari `foto-staff/` lengkap dengan quote inspiratif
- [x] Evaluasi skema tebak-tebakan logika: Mystery Vault terkunci + Clue petunjuk, jawaban tertutup hingga countdown habis
- [x] Penataan jadwal sholat 5 waktu yang super rapi, simetris, dan berhitung mundur
- [x] Integrasi Text-to-Speech otomatis setiap 30 menit dengan narasi khusus relevan sesuai jobdesk tiap staf
- [x] Pembersihan total teks header atas dan running text, hanya tersisa 2 tombol ikon semi-transparan (Mic & Fullscreen)
- [x] Tautkan modul `daily/` ke menu portal root `index.html`

## 2. Modul & Fitur Selesai (Completed)
- [x] Portal Menu Utama (`index.html`)
- [x] Modul Display Harian (`daily/` — Claymorphism Light Cyan, Foto Staf, Info Hari Ini, Mystery Vault, TTS Jobdesk)
- [x] Modul Workshop Akreditasi 2027 (`Workshop-29092026/` — Player Animasi Maskot Interaktif)
- [x] Modul Galeri PTJJ 2026 (`Galeri PTJJ 2026/SISORA/` & `RBV New Reborn/` — Video kompresi under 100MB)
- [x] Generator Video Otomatis (`generate_backdrop_video.py`)

## 3. Catatan Penggunaan Khusus (Known Notes)
- Display `daily/index.html` dirancang berjalan 24/7 non-stop secara otomatis di TV ruang tengah.
- TTS otomatis berbunyi setiap 30 menit menyapa staf sesuai bidang tugas masing-masing, atau manual lewat tombol mic / keyboard `M` / `Spasi`.
- Tombol Fullscreen tersedia di pojok kanan atas atau dapat menekan tombol `F` / `F11` pada keyboard.