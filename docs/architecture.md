# Architecture & Tech Stack

File ini mendokumentasikan arsitektur sistem dan teknologi yang digunakan. Selalu update file ini jika ada penambahan library besar atau perubahan pola arsitektur.

## 1. Tech Stack
- **Frontend:** [Framework/Library]
- **Backend:** [Framework/Runtime]
- **Database:** [RDBMS/NoSQL]
- **Styling:** [Tailwind/CSS Modules]
- **State Management:** [Zustand/Redux/Context]

## 2. Struktur Direktori Utama
```
src/
├── components/   # Komponen UI reusable
├── features/     # Modul spesifik per fitur (Domain-driven)
├── lib/          # Konfigurasi library pihak ketiga
├── services/     # API calls dan business logic eksternal
└── utils/        # Fungsi helper murni
```

## 3. Pola Arsitektur (Rules)
- Komponen UI tidak boleh melakukan *fetch data* secara langsung (pisahkan logic dan view).
- Semua secret key harus melalui `.env` dan divalidasi saat aplikasi *bootstrap*.