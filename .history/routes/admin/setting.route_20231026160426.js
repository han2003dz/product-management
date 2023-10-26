const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/setting.controller");

const multer = require("multer");
const upload = multer();
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware");

router.get(
  "/general",
  controller.general
);

router.patch(
  "/general",
  upload.single("logo"),
  up
  controller.generalPatch
);

module.exports = router;
