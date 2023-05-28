const express = require("express")
const {Router} = express;
const router = Router()


router.get("/home", (req, res) =>{
    try {
        
        
        
        res.status(200)        
    } catch (error) {
        console.log("[ROUTER GET POSTS ERROR] ", error)
        res.status(500).send("Algo salió mal ", error)
    }


})


router.post("/home/post", (req, res) =>{
    try {
        

        res.status(201).send("Publicado")
    } catch (error) {
        console.log("[ROUTER POST POSTS ERROR] ", error)
        res.status(500).send("Algo salió mal ", error)
    }


})


router.put("/home/post/:id", (req, res) =>{
    try {
        

        res.status(200).send("Modificado correctamente")
    } catch (error) {
        console.log("[ROUTER PUT POSTS ERROR] ", error)
        res.status(500).send("Algo salió mal ", error)
    }


})

router.delete("/home/post/:id", (req, res) =>{
    try {
        

        res.status(200).send("Eliminado correctamente")
    } catch (error) {
        console.log("[ROUTER DELETE POSTS ERROR] ", error)
        res.status(500).send("Algo salió mal ", error)
    }


})






