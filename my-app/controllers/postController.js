const sharp = require("sharp");

const { pool } = require("../utils/mysql");
const { uploadDir } = require("../utils/uploadDir");
const { renameFile } = require("../utils/renameFile");

const upload_gambar = async (req, res) => {
  try {
    const caption = req.body.caption;
    const file = req.file;
    const resizedFilename = file.filename;

    // Resize gambar
    await sharp(file.path)
      .resize(375, 375)
      .toFile(`${uploadDir}/x-${resizedFilename}`);

    renameFile(
      `${uploadDir}/x-${resizedFilename}`,
      `${uploadDir}/${resizedFilename}`
    );

    // Simpan data ke MySQL
    pool.query(
      "INSERT INTO post SET ?",
      {
        uuid: resizedFilename.split(".")[0],
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
