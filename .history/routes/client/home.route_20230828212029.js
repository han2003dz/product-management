const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client")

router.get("/", controller);

module.exports = router;
