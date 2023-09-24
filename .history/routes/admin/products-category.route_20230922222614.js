const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/products-category.controller");
const upload = multer();
const validate = require("../../validates/admin/product.validate");

router.get("/", controller.index);
router.get("/create", controller.create);
module.exports = router;
