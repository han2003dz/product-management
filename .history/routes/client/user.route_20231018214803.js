const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/user.controller");

router.get("/", controller.register);

module.exports = router;