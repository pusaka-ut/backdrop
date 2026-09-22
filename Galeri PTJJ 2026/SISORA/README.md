# Cara Menambahkan Video

## Struktur Folder

```
RBV New Reborn/
├── index.html
├── config.js
└── videos/
    ├── landscape/   <- taruh video LANDSCAPE (16:9) di sini
    └── portrait/    <- taruh video PORTRAIT (9:16) di sini
```

Format video yang didukung: `.mp4`, `.webm`

## Cara Edit config.js

Buka `config.js`, isi nama file video sesuai yang sudah ditaruh:

```js
window.BACKDROP_CONFIG = {
  landscape: [
    "videos/landscape/nama-video-1.mp4",
    "videos/landscape/nama-video-2.mp4"
  ],
  portrait: [
    "videos/portrait/nama-video-a.mp4"
  ]
};
```

- Video diputar berurutan dan looping otomatis
- Boleh 1 video atau lebih di masing-masing zona

## Cara Tampilkan di TV

1. Buka URL backdrop ini di browser TV
2. Tekan `F` atau klik ikon pojok kanan bawah untuk fullscreen
3. Klik ikon suara untuk mengaktifkan audio
