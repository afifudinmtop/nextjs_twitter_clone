const express = require("express");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");

const router = express.Router();
const postController = require("../controllers/postController");
const { uploadDir } = require("../utils/uploadDir.js");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const filename = uuidv4() + "." + ext;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/upload_gambar/",
  upload.single("gambar"),
  postController.upload_gambar
);

module.exports = router;
