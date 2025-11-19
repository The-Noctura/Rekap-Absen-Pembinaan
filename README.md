# Rekap-Absen-Pembinaan

## Rekap Absen Pembinaan Kelas X
Aplikasi web sederhana untuk melakukan rekap absensi pembinaan per kelas dan menghasilkan file Word (.docx) sesuai format tabel resmi sekolah.

Website ini membantu guru atau petugas pembinaan untuk:

- memilih kelas
- mengisi jumlah siswa hadir
- menginput daftar siswa tidak hadir (berdasarkan nomor absen)
- secara otomatis memetakan nomor → nama siswa
- menghasilkan file Word berdasarkan template yang sudah ditentukan

## ✨ Fitur Utama

### ✅ Input Absensi

- Pilih kelas
- Sistem menampilkan:
  - Jumlah siswa laki-laki
  - Jumlah siswa perempuan
  - Jumlah total siswa
-Petugas menginput:
  - jumlah siswa hadir
  - daftar siswa tidak hadir + keterangan (S/I/A)

### ✅ Export ke Word (.docx)

- Menggunakan Docxtemplater
- Data dimasukkan ke tabel Word sesuai template sekolah
- Baris tabel akan berisi:
  - No
  - Nama/Jurusan kelas
  - Jumlah laki-laki
  - Jumlah perempuan
  - Jumlah keseluruhan
  - Jumlah hadir
  - Daftar nama siswa yang tidak hadir

### ✅ Data Siswa Manual

- Data siswa per kelas disimpan dalam data/kelas.json
- Berisi:
- Jumlah laki-laki
- Jumlah perempuan
- -Jumlah total
- Daftar siswa (no + nama)

🗂 Struktur Folder

---project/
---│
---├─ server.js
---├─ package.json
---│
---├─ data/
---│   └─ kelas.json
---│
---├─ public/
---│   ├─ index.html
---│   ├─ absen.html
---│   └─ style.css
---│
---└─ templates/
---   └─ template-absen.docx


