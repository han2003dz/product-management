const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/product.controller");

router.get("/");

module.exports = router;
