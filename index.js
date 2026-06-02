const express = require('express');
const app = express();
const port = 3000;

// Middleware: parsing body JSON
app.use(express.json());

// Import & gunakan routes mahasiswa
const mahasiswaRoutes = require('./routes/mahasiswa');
app.use('/api/mahasiswa', mahasiswaRoutes);

// Route dasar
app.get('/', (req, res) => {
    res.json({ pesan: 'Server CRUD aktif!' });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});