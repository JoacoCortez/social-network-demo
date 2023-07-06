const express = require("express");
const {Router} = express;
const router = Router();
const passportMiddleware = require("../../security/passport");

const PostModel = require("../../models/post");
const controller = new PostModel



router.get("/home", passportMiddleware, controller.getAll)

router.post("/home/post", controller.post)

router.post("/home", passportMiddleware, controller.getAll)

router.put("/home/post/:id", controller.update)

router.delete("/home/post/:id", controller.delete)


module.exports = {
    router,
    controller
}





