const express = require("express");
const {Router} = express;
const router = Router();


const UserModel = require("../../models/user");
const controller = new UserModel

const {passport} = require("../../security/passport");
const {checkAuthenticated} = require("../../security/passport")


router.post("/login", passport.authenticate("auth"),controller.verify)

router.post("/login/r", passport.authenticate("auth"), controller.register)

router.get("/profile", checkAuthenticated, controller.getAll)

router.put("/profile", checkAuthenticated, controller.update)


module.exports = {
    router,
    controller
}