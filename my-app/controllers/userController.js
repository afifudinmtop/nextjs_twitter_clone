const sharp = require("sharp");

const { pool } = require("../utils/mysql");
const { uploadDir } = require("../utils/uploadDir");
const { deleteFile } = require("../utils/deleteFile");
const { renameFile } = require("../utils/renameFile");

const get_user = async (req, res) => {
  try {
    const username = req.body.username;

    pool.query(
      "SELECT uuid, username, nama, bio, gambar, banner FROM user WHERE username = ?",
      [username],
      (error, results, fields) => {
        return res.json(results);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const get_user2 = async (req, res) => {
  try {
    const uuid_user = req.body.uuid_user;

    pool.query(
      "SELECT uuid, username, nama, bio, gambar, banner FROM user WHERE uuid = ?",
      [uuid_user],
      (error, results, fields) => {
        return res.json(results);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const update_profil = async (req, res) => {
  try {
    const user_uuid = req.session.user.uuid;
    const bio = req.body.bio;
    const nama = req.body.nama;

    // avatar
    if (req.files && req.files.avatar) {
      const avatarFile = req.files.avatar[0];
      let resizedFilename1 = avatarFile.filename;

      // Resize gambar
      await sharp(avatarFile.path)
        .resize(90, 90)
        .toFile(`${uploadDir}/x-${resizedFilename1}`);

      renameFile(
        `${uploadDir}/x-${resizedFilename1}`,
        `${uploadDir}/${resizedFilename1}`
      );

      let resizedFilename1x = `/uploads/${resizedFilename1}`;

      // Simpan data ke MySQL
      pool.query(
        "UPDATE user SET gambar = ? WHERE uuid = ?",
        [resizedFilename1x, user_uuid],
        (error, results, fields) => {
          if (error) {
            return res.status(500).send("Server error");
          }
        }
      );
    }

    // banner
    if (req.files && req.files.banner) {
      const bannerFile = req.files.banner[0];
      let resizedFilename2 = bannerFile.filename;

      // Resize gambar
      await sharp(bannerFile.path)
        .resize(375, 125)
        .toFile(`${uploadDir}/x-${resizedFilename2}`);

      renameFile(
        `${uploadDir}/x-${resizedFilename2}`,
        `${uploadDir}/${resizedFilename2}`
      );

      let resizedFilename2x = `/uploads/${resizedFilename2}`;

      // Simpan data ke MySQL
      pool.query(
        "UPDATE user SET banner = ? WHERE uuid = ?",
        [resizedFilename2x, user_uuid],
        (error, results, fields) => {
          if (error) {
            return res.status(500).send("Server error");
          }
        }
      );
    }

    // Simpan data ke MySQL
    pool.query(
      "UPDATE user SET bio = ?, nama = ? WHERE uuid = ?",
      [bio, nama, user_uuid],
      (error, results, fields) => {
        if (error) {
          return res.status(500).send("Server error");
        }

        // update user session
        pool.query(
          "SELECT * FROM user WHERE uuid = ?",
          [user_uuid],
          (error2, results2, fields) => {
            if (error2) {
              return res.status(500).send("Server error");
            }

            req.session.user = {
              uuid: results2[0].uuid,
              nama: results2[0].nama,
              email: results2[0].email,
              username: results2[0].username,
              gambar: results2[0].gambar,
              bio: results2[0].bio,
              banner: results2[0].banner,
              isLoggedIn: true,
            };

            return res.json({ pesan: "sukses!" });
          }
        );
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const search = async (req, res) => {
  try {
    const terms = "%" + req.body.terms + "%";

    pool.query(
      "SELECT uuid, username, nama, bio, gambar FROM user WHERE username LIKE ? OR nama LIKE ?",
      [terms, terms],
      (error, results, fields) => {
        return res.json(results);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

module.exports = {
  get_user,
  update_profil,
  search,
  get_user2,
};
