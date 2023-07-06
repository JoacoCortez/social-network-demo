const express = require("express");
const {Router} = express;
const router = Router();


const passportMiddleware = require("../../security/passport");

router.post("/", passportMiddleware, (req, res) =>{
    res.json("hola")
}) 

module.exports = router

// {
//     successRedirect: "/",
//     failureRedirect: "/"
// }