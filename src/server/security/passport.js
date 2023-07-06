const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy


const {controller} = require("../routers/api/user")



passport.use("auth", new LocalStrategy(
    async (username, password, done) => {
        try {
            const result = await controller.auth(username, password)
            
            console.log("PASSPORT USER: ", result)
            if(result.status === 200){
                const serializedUser = {email: result.user.email}
                return done(null,serializedUser)
            }else{
                return done(null, false, {message: "Usuario no encontrado"})
            }
            
        } catch (error) {
            console.log("PASSPORT AUTH ERROR ", error)
            return done(null, error)
        }
    }
))




passport.serializeUser((email, done) =>{
    console.log("SERIALIZED")
    done(null, email)

})



passport.deserializeUser((email, done) =>{
    //const result = controller.getByEmail(email)
    console.log("DESERIALIZED", email)
    done(null, email)
})



const passportMiddleware = () =>{
    passport.authenticate("auth", (req, res, next) => {
        console.log("SDSADASDASAD")
        if(req.isAuthenticated()){
            res.status(200).json({ message: "Inicio de sesión exitoso" });
            next()
        }else{
            res.status(401).json({message: "Unauthorized"})
        }
    })
}


// const passportMiddleware = () => {
//     return (req, res, next) => {
//       passport.authenticate("auth", (err, user) => {
//         if (err) {
//           return next(err);
//         }
//         if (!user) {
//           return res.status(401).json({ message: "Unauthorized" });
//         }
//         req.logIn(user, (err) => {
//           if (err) {
//             return next(err);
//           }
//           res.status(200).json({ message: "Inicio de sesión exitoso" });
//           next();
//         });
//       })(req, res, next);
//     };
//   };




module.exports = passportMiddleware