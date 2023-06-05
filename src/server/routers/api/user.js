const express = require("express");
const {Router} = express;

const router = Router();

const userModel = require("../../models/user");
const controller = new userModel()

console.log("CONTROLLERERRERE",  controller)

router.get("/login", controller.post)


// router.get("/home", (req, res) =>{
//     try {
            
        
        
//     } catch (error) {
//         console.log(`[ROUTER GET "/LOGIN" ERROR] `, error)
    
    
//     }


// })


router.post("/login", controller.post)





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

    


router.put("/login", (req, res) =>{
    try {
            
        
        
    } catch (error) {
        console.log(`[ROUTER PUT "/LOGIN" ERROR] `, error)
    
    
    }



})

module.exports = router