const sharp = require("sharp");

const { pool } = require("../utils/mysql");
const { uploadDir } = require("../utils/uploadDir");
const { renameFile } = require("../utils/renameFile");
const { v4: uuidv4 } = require("uuid");

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

module.exports = {
  upload_gambar,
};
