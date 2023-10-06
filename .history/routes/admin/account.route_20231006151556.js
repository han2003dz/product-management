const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/account.controller");

router.get("/", controller.index);

router.pget("/create", controller.create);

module.exports = router;
