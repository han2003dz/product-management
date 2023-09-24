const express = require("express");
const router = express.Router();
const multer = require("multer");
const controller = require("../../controllers/admin/products-category.controller");
const upload = multer();
const validate = require("../../validates/admin/product-category.validate");
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware");

router.get("/", controller.index);
router.get("/create", controller.create);
router.post(
  "/create",
  controller.createPost
);
module.exports = router;
