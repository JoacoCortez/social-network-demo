const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

const jwt = require("jsonwebtoken")
const secretKey = process.env.SECRET_KEY


const controller = require("../controllers/userController")







passport.use("auth", new LocalStrategy(
    async (username, password, done) => {
        try {
            const result = await controller.auth(username, password)  
            
            console.log("PASSPORT USER: ", result)
            if(result.status === 200){
                const serializedUser = {email: result.user[0].email}
                
                const payload = {
                    username: result.user[0].username,
                    email: result.user[0].email
                
                }
                const token = jwt.sign(payload, secretKey, {expiresIn: "1h" })

                console.log("token  ", token)
                return done(null, serializedUser, token)
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
    console.log("DESERIALIZED", email)
    done(null, email)
})




const checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()){ 
        return next() 
    }else{
        res.status(302).redirect("http://localhost:3000/login")
    }
}



const checkToken = (req, res, next) =>{
    const token = req.headers.authorization?.split(" ")[1]
        if(!token){
            return res.status(401).json({message: "Token no proporcionada"})
        }
    try {
        const decoded = jwt.verify(token, secretKey)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(403).json(error)
    }
}

module.exports = {
    checkToken,
    checkAuthenticated,
    passport
}