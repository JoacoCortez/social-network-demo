const express = require("express");
const {Router} = express;
const router = Router();


const UserModel = require("../../models/user");
const controller = new UserModel



router.post("/login", controller.verify)

router.post("/login/r", controller.register)




module.exports = {
    router,
    controller
}