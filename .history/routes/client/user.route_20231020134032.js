const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/user.controller");
const validate = require("../../validates/client/user.validate");

router.get("/register", controller.register);

router.get("/register", validate.registerPost, controller.registerPost);

module.exports = router;
