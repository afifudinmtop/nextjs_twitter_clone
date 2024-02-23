const mysql = require("mysql2");

const tes = (req, res) => {
  return res.json({ pesan: "tes!" });
};

const cek_mysql = (req, res) => {
  // Konfigurasi MySQL
  const pool = mysql.createPool({
    host: "localhost", // Ubah sesuai kebutuhan
    user: "twitter.apip.dev",
    password: "twitter.apip.dev",
    database: "twitter.apip.dev",
  });

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Tidak bisa terhubung ke database MySQL:", err);
      return res.json({ pesan: "Tidak bisa terhubung ke database MySQL" });
      return;
    }
    console.log("Berhasil terhubung ke database MySQL");

    connection.release(); // Jangan lupa melepas koneksi setelah selesai digunakan

    return res.json({ pesan: "Berhasil terhubung ke database MySQL" });
  });
};

module.exports = {
  tes,
  cek_mysql,
};
