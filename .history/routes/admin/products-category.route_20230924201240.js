const express = require("express");
const router = express.Router();
const multer = require("multer");
const controller = require("../../controllers/admin/products-category.controller");
const upload = multer();
const validate = require("../../validates/admin/product-category.validate");
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware");

router.get("/", controller.index);
// :status truyền data động
router.patch("/change-status/:status/:id", controller.changeStatus);
router.get("/create", controller.create);
router.post(
  "/create",
  upload.single("thumbnail"),
  uploadCloud.upload,
  validate.createPost,
  controller.createPost
);

router.get("/edit/:id", controller.edit)
module.exports = router;
