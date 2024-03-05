const sharp = require("sharp");

const { pool } = require("../utils/mysql");
const { uploadDir } = require("../utils/uploadDir");
const { renameFile } = require("../utils/renameFile");
const { v4: uuidv4 } = require("uuid");

const feed = async (req, res) => {
  try {
    const user_uuid = req.session.user.uuid;

    // get data
    pool.query(
      `
            SELECT 
                post.id AS id, 
                post.uuid AS post_uuid, 
                post.gambar AS post_gambar, 
                post.caption AS post_caption, 
                post.ts AS post_ts, 
                user.uuid AS user_uuid, 
                user.username AS user_username, 
                user.nama AS user_nama, 
                user.gambar AS user_gambar 
            FROM post 
            JOIN follow ON post.user = follow.user2 
            JOIN user ON post.user = user.uuid 
            WHERE follow.user1 = ? 
            ORDER BY id DESC;
            `,
      [user_uuid],
      (error, results, fields) => {
        res.json(results);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const feed_user = async (req, res) => {
  try {
    const username = req.body.username;

    // get data
    pool.query(
      `
            SELECT 
                post.id AS id, 
                post.uuid AS post_uuid, 
                post.gambar AS post_gambar, 
                post.caption AS post_caption, 
                post.ts AS post_ts, 
                user.uuid AS user_uuid, 
                user.username AS user_username, 
                user.nama AS user_nama, 
                user.gambar AS user_gambar 
            FROM post 
            JOIN user ON post.user = user.uuid 
            WHERE user.username = ? 
            ORDER BY id DESC;
            `,
      [username],
      (error, results, fields) => {
        res.json(results);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const upload_gambar = async (req, res) => {
  try {
    const caption = req.body.caption;
    const file = req.file;
    let resizedFilename = "";

    // Jika ada file yang di-upload, maka resize dan update nama file
    if (file) {
      resizedFilename = file.filename;

      // Resize gambar
      await sharp(file.path)
        .resize(375, 375)
        .toFile(`${uploadDir}/x-${resizedFilename}`);

      renameFile(
        `${uploadDir}/x-${resizedFilename}`,
        `${uploadDir}/${resizedFilename}`
      );
    }

    // Simpan data ke MySQL
    pool.query(
      "INSERT INTO post SET ?",
      {
        uuid: file ? resizedFilename.split(".")[0] : uuidv4(),
        gambar: resizedFilename,
        caption: caption,
        user: req.session.user.uuid,
      },
      (error, results, fields) => {
        if (error) throw error;
        return res.json({ pesan: "sukses!" });
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
      `
      SELECT 
          post.id AS id, 
          post.uuid AS post_uuid, 
          post.gambar AS post_gambar, 
          post.caption AS post_caption, 
          post.ts AS post_ts, 
          user.uuid AS user_uuid, 
          user.username AS user_username, 
          user.nama AS user_nama, 
          user.gambar AS user_gambar 
      FROM post 
      JOIN user ON post.user = user.uuid 
      WHERE post.caption LIKE ? 
      ORDER BY id DESC;
      `,
      [terms],
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
  upload_gambar,
  feed,
  feed_user,
  search,
};
