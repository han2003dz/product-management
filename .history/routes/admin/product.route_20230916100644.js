const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/product.controller");

router.get("/", controller.index);

// :status truyền data động
router.patch("/change-status/:status/:id", controller.changeStatus);

router.patch("/change-multi", controller.changeMulti);

router.delete("/delete/:id", controller.deleteItem);

router.get("/create", controller.create);

router.post("/create", controller.createPost);



router.get("/trash", controller.trash);

router.post("/trash", controller.trashPost);

module.exports = router;
