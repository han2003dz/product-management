const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/setting.controller");

const upload = multer();

const controller = require("../../controllers/admin/setting.controller");
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware");

router.get("/general", controller.general);

module.exports = router;