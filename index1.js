const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware agar bisa membaca format JSON
app.use(express.json());

// Data dummy (Tema: Manajemen Buku)
let daftarBuku = [
    { id: 1, judul: 'Belajar Express.js Dasar', penulis: 'John Doe' },
    { id: 2, judul: 'Desain Web Modern Minimalis', penulis: 'Jane Smith' }
];

// Endpoint Route Utama (Home)
app.get('/', (req, res) => {
    res.send('Selamat datang di Web API Manajemen Buku menggunakan Express.js!');
});

// Endpoint untuk melihat semua data buku
app.get('/api/buku', (req, res) => {
    res.json(daftarBuku);
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berhasil berjalan di http://localhost:${port}`);
});