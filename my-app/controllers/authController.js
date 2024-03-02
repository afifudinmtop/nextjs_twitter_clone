const { pool } = require("../utils/mysql");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    // check existing username
    pool.query(
      "SELECT * FROM user WHERE username = ?",
      [username],
      (error, results, fields) => {
        if (results.length < 1) {
          return res.json({ pesan: "user not found!" });
        } else {
          const resultx = bcrypt.compareSync(password, results[0].password);
          if (resultx) {
            const gambar = results[0].gambar;
            const nama = results[0].nama;

            req.session.user = {
              nama: nama,
              gambar: gambar,
              username: username,
              uuid: results[0].uuid,
              isLoggedIn: true,
            };
            return res.json({ pesan: "sukses!" });
          } else {
            return res.json({ pesan: "wrong password!" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const register = async (req, res) => {
  try {
    const uuid = uuidv4();
    const nama = req.body.nama;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const hash = bcrypt.hashSync(password, 10);

    // check existing username
    pool.query(
      "SELECT * FROM user WHERE username = ? OR email = ?",
      [username, email],
      (error, results, fields) => {
        if (results.length > 0) {
          res.json({ pesan: "username or email exist!" });
        } else {
          // Simpan data ke MySQL
          pool.query(
            "INSERT INTO user SET ?",
            {
              uuid: uuid,
              nama: nama,
              email: email,
              username: username,
              password: hash,
              gambar: "avatar.png",
            },
            (error, results, fields) => {
              if (error) throw error;
              res.json({ pesan: "sukses!" });
            }
          );
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const logout = (req, res) => {
  req.session.destroy(); // Menghapus sesi
  res.redirect("/login");
};

const session = (req, res) => {
  res.json({ user: req.session.user || null });
};

const session_check = (req, res) => {
  if (req.session.user) {
    return res.json({ isLoggedIn: true });
  }
  return res.json({ isLoggedIn: false });
};

module.exports = {
  login,
  register,
  logout,
  session,
  session_check,
};
