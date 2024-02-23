const mysql = require("mysql2");

// Konfigurasi MySQL
const pool = mysql.createPool({
  host: "localhost", //ubah ke localhost (untuk normal) atau mysql (untuk docker)
  user: "twitter.apip.dev",
  password: "twitter.apip.dev",
  database: "twitter.apip.dev",
});

module.exports = {
  pool,
};
