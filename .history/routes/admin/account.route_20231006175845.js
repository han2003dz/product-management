const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/account.controller");

const multer = require("multer");
const upload = multer();
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware");
router.get("/", controller.index);

router.get("/create", controller.create);

router.post("/create", controller.createPost);
module.exports = router;
