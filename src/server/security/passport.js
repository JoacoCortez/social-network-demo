const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy


const {controller} = require("../routers/api/user")



passport.use("sign-in", new LocalStrategy(
    async (username, password, done) => {
        try {
            const result = await controller.auth(username, password)
            
            console.log("PASSPORT USER: ", result)
            if(result.status === 200){
               return done(null, result.user)
            }else{
                return done(null, false, {message: "Usuario no encontrado"})
            }
            
        } catch (error) {
            console.log("PASSPORT SIGN IN ERROR ", error)
            return done(null, error)
        }
    }
))




passport.serializeUser((user, done) =>{
    console.log("SERIALIZE")
    done(null, user.email)

})



passport.deserializeUser((email, done) =>{
    const result = controller.getByEmail(email)
    done(null, result)
})


module.exports = passport



// const passportMiddleware = (req, res, next) =>{
//     passport.authenticate("sign-in", (err, user) => {
//         if(err){
//             return next(err)
//         }
//         if(!user){
//             console.log("Usuario no encontrado")
//             return res.status(401).json("Usuario no encontrado")
//         } else{

//             next()
//         }
    
//     })
//     (req, res, next)

// }