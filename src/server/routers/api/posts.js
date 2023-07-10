const express = require("express");
const {Router} = express;
const router = Router();

const PostModel = require("../../models/post");
const controller = new PostModel

const {passport} = require("../../security/passport");
const {checkAuthenticated} = require("../../security/passport")

router.get("/home", checkAuthenticated, controller.getAll)

router.post("/home/post", controller.post)

//router.post("/home", passport.authenticate("auth"), controller.getAll)

router.put("/home/post/:id", controller.update)

router.delete("/home/post/:id", controller.delete)


module.exports = {
    router,
    controller
}





