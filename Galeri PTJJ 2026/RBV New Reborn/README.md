# Panduan RBV New Reborn Backdrop

## Struktur Folder & File

```
RBV New Reborn/
├── index.html           <- Player utama pameran
├── logo.png             <- File logo RBV New Reborn (format PNG transparan)
├── qrcode.png           <- File gambar QR Code untuk scan akses aplikasi (kiri bawah)
├── qrcode_presensi.png  <- File gambar QR Code untuk scan daftar hadir (kanan bawah)
├── README.md            <- Panduan ini
└── videos/
    ├── landscape/       <- Video Landscape biasa (1.mp4, 2.mp4, dst)
    ├── portrait/        <- Video Portrait biasa (1.mp4, 2.mp4, dst)
    └── demo/            <- Khusus Demo Aplikasi (Tampil Bersamaan)
        ├── landscape/   <- Video Demo Web/Tablet (1.mp4, dst)
        └── portrait/    <- Video Demo Mobile/Phone (1.mp4, dst)
```

## Cara Kerja Tampilan RBV New Reborn
- **Mode Hybrid Dinamis:**
  1. **Video Biasa:** Diputar bergantian 1 video di tengah layar (Tablet untuk Landscape, Phone untuk Portrait) agar fokus dan nyaman dipandang.
  2. **Mode Demo Aplikasi:** Saat giliran video demo aplikasi tiba, panggung bertransformasi otomatis menjadi **Dual-Device Mode (Tablet 16:9 + Phone 9:16 tampil bersamaan)** untuk menampilkan demo aplikasi web dan mobile secara sinkron!
  3. Setelah video demo selesai, tampilan kembali otomatis ke mode single video dan looping terus-menerus.
- **Logo RBV New Reborn:**
  - Letakkan file logo Anda dengan nama `logo.png` tepat di folder ini (sejajar dengan `index.html`).
  - Logo akan otomatis muncul menempel anggun di atas frame perangkat (Tablet/Smartphone) dengan efek pendaran cahaya (*luminous cyan glow*) tanpa kotak.
  - Jika `logo.png` belum ditaruh, sistem secara elegan menampilkan teks artistik neon "RBV NEW REBORN UNIVERSITAS TERBUKA".
- **Kontrol Audio & Layar:**
  - Tombol kontrol ditempatkan di tengah bawah layar agar seimbang dan rapi.
  - Cukup 1 tombol audio terpadu untuk menghidupkan/mematikan suara video yang sedang aktif.
  - Tekan tombol Fullscreen atau tombol `F` / `F11` pada keyboard untuk beralih ke mode Layar Penuh (*Fullscreen*).
- **Dual QR Code (Akses Aplikasi & Daftar Hadir):**
  - **Akses Aplikasi (Pojok Kiri Bawah):** Simpan file gambar QR dengan nama `qrcode.png` tepat di folder ini.
  - **Daftar Hadir (Pojok Kanan Bawah):** Simpan file gambar QR presensi dengan nama `qrcode_presensi.png` tepat di folder ini.
  - Kedua QR Code berukuran proporsional besar yang seragam dalam bingkai glassmorphism futuristik agar sangat mudah dipindai oleh pengunjung booth pameran.
  - Jika file gambar belum diletakkan, sistem otomatis menampilkan ikon scan holografik cadangan.
