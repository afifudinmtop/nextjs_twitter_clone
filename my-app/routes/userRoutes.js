const express = require("express");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");

const router = express.Router();
const userController = require("../controllers/userController");
const { uploadDir } = require("../utils/uploadDir");

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

router.post("/get_user", userController.get_user);
router.post("/get_user2", userController.get_user2);

router.post("/search", userController.search);

router.post(
  "/update_profil",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "banner", maxCount: 1 },
  ]),
  userController.update_profil
);

module.exports = router;
