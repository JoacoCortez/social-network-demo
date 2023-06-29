const passport = require("passport")
const localStrategy = require("passport-local")

const UserModel = require("../models/user")
const controller = new UserModel







passport.serializeUser((user, done) =>{
    done(null, user.email)
})

passport.deserializeUser((email, done) =>{
    // sacas el email de la base de datos
    .then(user) => done(null, user)
})