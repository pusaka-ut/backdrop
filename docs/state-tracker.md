# State Tracker & Progress — Backdrop System

File ini digunakan untuk melacak status fitur dan modul di repositori backdrop Perpustakaan Pusat Universitas Terbuka.

## 1. Fokus Saat Ini / Recent Updates
- [x] Rancang & bangun modul `daily/` (Claymorphism Display — Perpustakaan Universitas Terbuka)
- [x] Panggung animasi aktif 4 karakter hewan (Kucing, Pinguin, Kelinci, Hamster) berganti otomatis
- [x] Kartu baru "Info Hari Ini" di kolom tengah (bisa dikosongkan dengan fallback ramah otomatis)
- [x] Kartu sorot foto 18 staf resmi perpustakaan dari `foto-staff/` lengkap dengan quote inspiratif
- [x] Evaluasi skema tebak-tebakan logika: Mystery Vault terkunci + Clue petunjuk, jawaban tertutup hingga countdown habis
- [x] Penataan jadwal sholat 5 waktu hisab resmi Kemenag RI (Kota Tangerang Selatan) dengan auto-fetch API & offline fallback
- [x] Integrasi Text-to-Speech otomatis setiap 12 menit (Fair Shuffled Queue memastikan 18 staf terbaca minimal 2x sehari) dengan narasi variatif sesuai jobdesk tiap staf
- [x] Dual-Engine Audio TV: Pemutar audio stream MP3 via Google TTS (kompatibel penuh Smart TV) + Audio Gesture Unlocker + Persistent Blessed Audio Element
- [x] Tri-Guard TV Keep-Alive: Screen Wake Lock API + Hardware Video Stream Loop (`canvas.captureStream`) untuk mencegah TV sleep / standby otomatis
- [x] 3 Variasi narasi per staf untuk 18 staf resmi (Jobdesk, Humor Karakter, Motivasi Membara)
- [x] Pembersihan total teks header atas dan running text, hanya tersisa tombol kontrol semi-transparan (Theme, Mic, Fullscreen)
- [x] Sistem 4 Tema Warna Waktu Alami (Pagi 🌅, Siang ☀️, Sore 🌇, Malam 🌙) otomatis sesuai jam lokal & tombol switcher manual (`#btn-theme` / shortcut `T`)
- [x] Fast Version Watcher: Pengecekan remote HEAD ETag otomatis per 60 detik untuk auto-refresh TV instan saat ada push baru
- [x] Tautkan modul `daily/` ke menu portal root `index.html`

## 2. Modul & Fitur Selesai (Completed)
- [x] Portal Menu Utama (`index.html`)
- [x] Modul Display Harian (`daily/` — Claymorphism Adaptive Themes, Foto Staf, Info Hari Ini, Mystery Vault, TV Audio Stream, TV Anti-Sleep Keep-Alive)
- [x] Modul Workshop Akreditasi 2027 (`Workshop-29092026/` — Player Animasi Maskot Interaktif)
- [x] Modul Galeri PTJJ 2026 (`Galeri PTJJ 2026/SISORA/` & `RBV New Reborn/` — Video kompresi under 100MB)
- [x] Generator Video Otomatis (`generate_backdrop_video.py`)

## 3. Catatan Penggunaan Khusus (Known Notes)
- Display `daily/index.html` dirancang berjalan 24/7 non-stop secara otomatis di TV ruang tengah.
- Pemutar audio menggunakan dual-engine: streaming MP3 audio universal yang bekerja di browser Smart TV mana pun, dengan fallback ke Web Speech API.
- Fitur anti-sleep TV menggabungkan Screen Wake Lock API dan loop video hardware decoding untuk mencegah layar Smart TV mati otomatis.
- Tombol Fullscreen tersedia di pojok kanan atas atau dapat menekan tombol `F` / `F11` pada keyboard remote.