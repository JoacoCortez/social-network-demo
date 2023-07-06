const express = require("express");
const {Router} = express;
const router = Router();
const passportMiddleware = require("../../security/passport");

const UserModel = require("../../models/user");
const controller = new UserModel



router.post("/login", controller.verify)

router.get("/home", passportMiddleware, controller.getAll)

router.put("/login", controller.update)

router.post("/login/r", controller.register)




module.exports = {
    router,
    controller
}