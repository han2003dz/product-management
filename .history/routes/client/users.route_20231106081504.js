const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/users.controller");
// const validate = require("../../validates/client/user.validate");
// const authMiddleware = require("../../middlewares/client/auth.middleware");

router.get("/not-friend", controller.notFriend);
router.get("/request", controller.request);
module.exports = router;
