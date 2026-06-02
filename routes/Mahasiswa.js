// routes/mahasiswa.js
const express = require('express')
const router = express.Router()
const { mahasiswa, getNextId } = require('../data/dataMahasiswa')

// GET semua mahasiswa
router.get('/', (req, res) => {
    res.json({
        success: true,
        total: mahasiswa.length,
        data: mahasiswa
    })
})

// GET satu mahasiswa berdasarkan ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const mhs = mahasiswa.find(m => m.id === id)

    if (!mhs) {
        return res.status(404).json({
            success: false,
            pesan: 'Mahasiswa tidak ditemukan'
        })
    }

    res.json({
        success: true,
        data: mhs
    })
})

// POST tambah mahasiswa
router.post('/', (req, res) => {
    const { nama, nim, jurusan } = req.body

    // Validasi
    if (!nama || !nim || !jurusan) {
        return res.status(400).json({
            success: false,
            pesan: 'nama, nim, dan jurusan wajib diisi'
        })
    }

    const mhsBaru = {
        id: getNextId(),
        nama,
        nim,
        jurusan
    }

    mahasiswa.push(mhsBaru)

    res.status(201).json({
        success: true,
        pesan: 'Mahasiswa berhasil ditambahkan',
        data: mhsBaru
    })
})
// PUT update mahasiswa
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const idx = mahasiswa.findIndex(m => m.id === id);

    if (idx === -1) {
        return res.status(404).json({
            success: false,
            pesan: 'Mahasiswa tidak ditemukan'
        })
    }
    const { nama, nim, jurusan } = req.body

    // Partial update
    if (nama) mahasiswa[idx].nama = nama
    if (nim) mahasiswa[idx].nim = nim
    if (jurusan) mahasiswa[idx].jurusan = jurusan

    res.json({
        success: true,
        pesan: 'Data berhasil diupdate',
        data: mahasiswa[idx]
    })
})

// DELETE mahasiswa
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const idx = mahasiswa.findIndex(m => m.id === id)

    if (idx === -1) {
        return res.status(404).json({
            success: false,
            pesan: 'Mahasiswa tidak ditemukan'
        })
    }

    // Hapus data
    const dihapus = mahasiswa.splice(idx, 1)

    res.json({
        success: true,
        pesan: 'Data berhasil dihapus',
        data: dihapus[0]
    })
})

// Export router
module.exports = router