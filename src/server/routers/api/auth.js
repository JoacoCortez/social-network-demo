const express = require("express");
const {Router} = express;
const router = Router();

const passport = require("passport")
const passportAuth = require("../../security/passport");

router.post("/", passportAuth.authenticate("sign-in", {
    successRedirect: "/",
    failureRedirect: "/"
})) 

module.exports = router