const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/cart.controller");

router.get("/", controller.index);

router.get("/detail/:slugProduct", controller.detail);

router.get("/:slugCategory", controller.category);

module.exports = router;