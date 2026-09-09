# frontend-nrp

Repo tugas mata kuliah **Frontend**, dibuat dari template [`webdev-if-its/frontend-template`](https://github.com/webdev-if-its/frontend-template). Ganti judul di atas jadi nama repo kalian sendiri (`frontend-nrp`, contoh: `frontend-5025201012`).

## Aturan Umum

- Tugas tiap pertemuan disimpan di folder `pertemuan-XX/` pada repo ini — masing-masing adalah project Vite + React + TypeScript sendiri (`npm install` terpisah per folder).
- Commit message wajib menyebut level yang dicapai: `pertemuan-XX: level N selesai`.
- Deadline push: sebelum pertemuan berikutnya dimulai.
- Semua level dicek otomatis lewat `npm run levels` (Vitest) — baca `pertemuan-XX/SOAL.md` tiap minggu untuk detail levelnya.

## Mengambil Pertemuan Baru Tiap Minggu

Repo ini **tidak otomatis sinkron** dengan template dosen. Begitu ada pertemuan baru, jalankan (ganti `pertemuan-02` sesuai minggu berjalan):

```bash
git fetch https://github.com/webdev-if-its/frontend-template.git main
git checkout FETCH_HEAD -- pertemuan-02
```

Perintah ini **aman dijalankan kapan pun** — tidak akan menimpa folder pertemuan lain yang sudah kalian kerjakan, karena hanya mengambil folder yang disebutkan. Setelah itu, `cd pertemuan-02 && npm install`, lalu commit folder barunya seperti biasa.

Kalau dosen memperbaiki sesuatu di pertemuan yang sudah dirilis (mis. ada bug di test), biasanya cukup ambil ulang file yang diperbaiki saja, bukan seluruh folder — akan diumumkan file mana yang berubah.

---

Bagian di bawah ini **isi bertahap** sesuai level yang sedang kalian kerjakan (lihat `pertemuan-XX/SOAL.md`) — heading-nya dicek otomatis, jangan diganti namanya.

## Struktur Project
peran main.tsx di dalam struktur project adalah sebagai satu file yang nantinya itu akan dipanggil pertama kali oleh react untuk dijalankan. di dalam file main.tsx ini nantinya bisa berisi komponen komponen lain yang akan dipanggil dan dijalankan contohnya seperti App.tsx tersebut. 
sedangkan peran untuk App.tsx ini adalah file yang berisi kode untuk satu komponen spesifik yang akan digunakan berkali kali nantinya dan bisa dipanggil di main.tsx

## Identitas
- Nama: Hanifah Dwi Setyowati
- NRP: 5053241022
- Kelas: M

## Commit vs Push
git commit adalah ketika programmer menyimpan perubahan yang ada di kode di konteks lokal komputernya. sedangkan git push adalah ketika programmer mengirimkan perubahan kodenya ke atas, dari lokal komputer ke online agar bisa diakses oleh timnya.

contoh situasinya misal ada anggota tim yang commit satu modul fitur aplikasi tetapi lupa untuk push kodenya. akibatnya, anggota tim lain yang pull dari github tidak melihat adanya pembaruan dari modul fitur tersebut dan bisa saja mengerjakannya sendiri dari awal. ini mengakibatkan adanya pemborosan waktu karena tim jadi mengerjakan ulang modul yang sebenarnya sudah dikerjakan sebelumnya.

## JSX vs TSX
(tulis di sini)

## Kenapa Union Type untuk Status
(tulis di sini)

## Refleksi
(tulis di sini)
