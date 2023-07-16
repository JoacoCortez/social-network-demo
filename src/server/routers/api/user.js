const express = require("express");
const {Router} = express;
const router = Router();


const controller = require("../../controllers/userController")

const {passport, checkToken} = require("../../security/passport");
const {checkAuthenticated} = require("../../security/passport")


router.post("/login", passport.authenticate("auth"),controller.verify)

router.post("/login/r", passport.authenticate("auth"), controller.register)

router.get("/profile", checkToken, controller.getAll)

router.put("/profile", checkToken, controller.update)





module.exports = {
    router,
    controller
}