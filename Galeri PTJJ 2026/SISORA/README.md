# Panduan SISORA Backdrop

## Struktur Folder & File

```
SISORA/
├── index.html           <- Player utama pameran
├── logo.png             <- File logo SI SORA (format PNG transparan)
├── qrcode.png           <- File gambar QR Code untuk scan akses aplikasi (kiri bawah)
├── qrcode_presensi.png  <- File gambar QR Code untuk scan daftar hadir (kanan bawah)
├── README.md            <- Panduan ini
└── videos/
    ├── landscape/       <- Video Landscape 16:9 (1.mp4, 2.mp4, dst)
    └── portrait/        <- Video Portrait 9:16 (1.mp4, 2.mp4, dst)
```

## Cara Kerja Tampilan SISORA
- **1 Video Fokus di Tengah:** Tampilan berfokus pada satu video di tengah layar agar nyaman dan tidak pusing.
- **Transisi Perangkat Otomatis:**
  - Saat video Landscape diputar, panggung menampilkan **Frame Tablet 3D (16:9)** di tengah.
  - Saat video Portrait diputar, panggung menampilkan **Frame Smartphone 3D (9:16)** di tengah.
  - Video akan berputar bergantian secara sekuensial dan looping terus-menerus.
- **Logo SI SORA:**
  - Letakkan file logo Anda dengan nama `logo.png` tepat di folder ini (sejajar dengan `index.html`).
  - Logo akan otomatis muncul menempel anggun di atas frame perangkat (Tablet/Smartphone) dengan efek pendaran cahaya (*luminous cyan glow*) tanpa kotak.
  - Jika `logo.png` belum ditaruh, sistem secara elegan menampilkan teks artistik neon "SI SORA UNIVERSITAS TERBUKA".
- **Kontrol Audio & Layar:**
  - Tombol kontrol ditempatkan di tengah bawah layar agar seimbang dan rapi.
  - Cukup 1 tombol audio terpadu untuk menghidupkan/mematikan suara video yang sedang aktif.
  - Tekan tombol Fullscreen atau tombol `F` / `F11` pada keyboard untuk beralih ke mode Layar Penuh (*Fullscreen*).
- **Dual QR Code (Akses Aplikasi & Daftar Hadir):**
  - **Akses Aplikasi (Pojok Kiri Bawah):** Simpan file gambar QR dengan nama `qrcode.png` tepat di folder ini.
  - **Daftar Hadir (Pojok Kanan Bawah):** Simpan file gambar QR presensi dengan nama `qrcode_presensi.png` tepat di folder ini.
  - Kedua QR Code berukuran proporsional besar yang seragam dalam bingkai glassmorphism futuristik agar sangat mudah dipindai oleh pengunjung booth pameran.
  - Jika file gambar belum diletakkan, sistem otomatis menampilkan ikon scan holografik cadangan.
