# Cara Menambahkan Video

## Struktur Folder
Letakkan file video di dalam folder berikut:

  videos/
  ├── landscape/   <- taruh video LANDSCAPE (16:9) di sini
  └── portrait/    <- taruh video PORTRAIT (9:16) di sini

Format video yang didukung: .mp4, .webm

## Cara Edit Daftar Video
Buka file config.js, isi nama file video sesuai yang sudah ditaruh di folder videos/:

  window.BACKDROP_CONFIG = {
    landscape: [
      "videos/landscape/nama-video-1.mp4",
      "videos/landscape/nama-video-2.mp4"
    ],
    portrait: [
      "videos/portrait/nama-video-a.mp4",
      "videos/portrait/nama-video-b.mp4"
    ]
  };

Video akan diputar berurutan dan looping otomatis.

## Cara Tampilkan di TV
1. Buka URL backdrop ini di browser TV
2. Tekan F atau klik tombol di pojok kanan bawah untuk fullscreen
3. Klik ikon suara (pojok kanan bawah) untuk mengaktifkan audio