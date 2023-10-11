const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer();

const controller = require("../../controllers/admin/my-account.controller");

router.get("/", controller.index);

router.get("/edit:id", controller.edit)
module.exports = router;
