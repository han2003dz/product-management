const express = require("express");
const router = express.Router();
const controller = require("../../controllers/client/chat.controller");
const chatMiddleware = require("../../middlewares/client/user.middleware");
router.get("/:roomChatId", controller.index);
module.exports = router;
