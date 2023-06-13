const express = require("express");
const {Router} = express;

const router = Router();

const UserModel = require("../../models/user");
const controller = new UserModel



router.get("/login", controller.verify)

router.get("/home", controller.getAll)

router.post("/login", controller.verify)

router.put("/login", controller.update)

router.post("/login/r", controller.register)


// router.post("/login", (req, res) =>{
//     const data = req.body

//     const usersDB = controller.getAll


//     try {
//         if(usersDB.map( users => users.username && users.password === data.username && data.password)){

//             res.status(200).send("Welcome")

//         } else{
//             res.status(401).send("Nombre de usuario o Contraseña incorrectos")
//         }
    
    
//     } catch (error) {
//         console.log(`[ROUTER POST "/LOGIN" ERROR] `, error)
    
        
//     }

// })

    





module.exports = router