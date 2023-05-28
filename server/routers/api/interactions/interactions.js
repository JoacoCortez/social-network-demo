const express = require("express")
const {Router} = express
const router = Router()





router.get("/api/interactions", (req, res) =>{
    try {
        
        res.status(200)
    } catch (error) {
        console.log("[GET INTERACTIONS ERROR] " , error)
        res.status(500).send("Algo salió mal ", error)
    }


})


router.post("/api/interactions", (req, res) =>{
    try {
        
        res.status(200)
    } catch (error) {
        console.log("[POST INTERACTIONS ERROR] " , error)
        res.status(500).send("Algo salió mal ", error)
    }


})


router.delete("/api/interactions/:id", (req, res) =>{
    try {
        
        res.status(200)
    } catch (error) {
        console.log("[DELETE INTERACTIONS ERROR] " , error)
        res.status(500).send("Algo salió mal ", error)
    }


})