const express = require("express");
const router = express.Router();
const tesController = require("../controllers/tesController");

router.get("/", tesController.tes);
router.get("/cek_mysql", tesController.cek_mysql);

module.exports = router;
