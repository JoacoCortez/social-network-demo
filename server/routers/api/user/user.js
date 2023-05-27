const express = require("express")
const {Router} = express()

const router = Router()


router.get("/login", (req, res) =>{
    try {
            
        
        
    } catch (error) {
        console.log(`[ROUTER GET "/LOGIN" ERROR] `, error)
    
    
    }


})

router.post("/login", (req, res) =>{
    const data = req.body

    async function verifyUser(data){
       
        
        const usersDB = 2 //traemos los usuarios de mongo y verificamos si existe uno
        
        try {
            if(usersDB.map( users => users.username && users.password === data.username && data.password)){

                res.status(200).send("Welcome")

            } else{
                res.status(401).send("Nombre de usuario o Contraseña incorrectos")
            }
        
        
        } catch (error) {
            console.log(`[ROUTER POST "/LOGIN" ERROR] `, error)
        
            
        }
    }


})

router.put("/login", (req, res) =>{
    try {
            
        
        
    } catch (error) {
        console.log(`[ROUTER PUT "/LOGIN" ERROR] `, error)
    
    
    }



})