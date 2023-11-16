const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/users.controller");
router.get("/not-friend", controller.notFriend);
router.get("/request", controller.request);
router.get("/accept", controller.accept);
router.get("/friends", controller.friends);
router.get("/room-chat", controller.roomChat);
router.get("/room-chat/create", controller.createRoomChat);
router.post("/room-chat/create", controller.createRoomChatPost);
module.exports = router;
