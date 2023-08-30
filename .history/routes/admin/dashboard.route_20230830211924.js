const express = require("express");
const router = express.Router();

const controller = require("../../controllers/adi/home.controller");

router.get("/", controller.index);

module.exports = router;