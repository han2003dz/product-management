const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/product.controller");

router.get("/", controller.index);

router.get("/change-status/inactive/123", controller.changeStatus);

module.exports = router;
