const express = require("express");
const router = express.Router();
const controller = require("../../controllers/client/chat.controller");
const chatMiddlewa
router.get("/:roomChatId", controller.index);
module.exports = router;
