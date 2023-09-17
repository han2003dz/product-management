const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "./public/uploads/" });

const controller = require("../../controllers/admin/product.controller");

// const storageMulter = require("../../helpers/storageMulter");

router.get("/", controller.index);

// :status truyền data động
router.patch("/change-status/:status/:id", controller.changeStatus);

router.patch("/change-multi", controller.changeMulti);

router.delete("/delete/:id", controller.deleteItem);

router.get("/create", controller.create);

router.post("/create",upload.single("thumbnail") controller.createPost);

router.post("/create", upload.single("thumbnail"), controller.createPost);

router.get("/trash", controller.trash);

router.post("/trash", controller.trashPost);

module.exports = router;
