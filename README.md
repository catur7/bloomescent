# Bloomé Scent

[Live website on Vercel](https://bloomescent.vercel.app)

Storefront scented wax dengan SvelteKit dan API katalog terpisah berbasis Rust/Axum. Keduanya membaca `catalog/products.json`. Perubahan katalog masuk ke storefront pada build berikutnya dan ke API pada kompilasi berikutnya.

## Frontend

Gunakan Node.js 24 dan jalankan dari root repositori.

```sh
npm ci
npm run dev
npm run check
npm run build
```

Untuk mengaktifkan chat langsung, salin `.env.example` ke `.env` dan isi `PUBLIC_WHATSAPP_NUMBER` dengan nomor internasional tanpa `+`, spasi, atau tanda hubung. Jika kosong, tautan WhatsApp hanya membawa teks. Pada Vercel, isi variabel yang sama di pengaturan proyek dan deploy ulang karena nilainya dibaca saat build.

## Backend

Jalankan dari root repositori dengan Rust stable.

```sh
cargo run --locked --manifest-path backend/Cargo.toml
cargo test --locked --manifest-path backend/Cargo.toml
```

API mendengarkan pada `127.0.0.1:8080` secara default. Gunakan `HOST` dan `PORT` untuk mengubah alamatnya. `GET /healthz` mengembalikan `204`. `GET /api/v1/products` mengembalikan array katalog dengan harga integer dalam rupiah. Storefront dirender saat build sehingga tidak perlu menunggu layanan ini.

## Vercel

Import repositori dengan root `.` dan preset SvelteKit. Gunakan Node.js 24. Adapter resmi membuat output Vercel saat `npm run build`. Proyek ini menerbitkan frontend melalui preset tersebut. API Axum dapat dijalankan secara independen dengan perintah Cargo di atas.
