const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/cart.controller");

router.post("/add/:productId", controller.addPost);

ro

module.exports = router;
