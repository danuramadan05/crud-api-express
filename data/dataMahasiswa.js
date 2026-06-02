// Data sementara (in-memory)
// Pengganti database untuk latihan

let mahasiswa = [
    {
        id: 1,
        nama: "Prabowo Subianto",
        nim: "2024001",
        jurusan: "Jendral"
    },
    {
        id: 2,
        nama: "Susilo Bambang Yudoyono",
        nim: "2024002",
        jurusan: "Jendral"
    }
];

// nextId untuk auto-increment ID baru
let nextId = 3;

module.exports = { mahasiswa, getNextId: () => nextId++ };