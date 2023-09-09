const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/product.controller");

router.get("/", controller.index);

// :status truyen data 
router.get("/change-status/:status/123", controller.changeStatus);

module.exports = router;
