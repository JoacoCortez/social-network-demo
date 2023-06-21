const express = require("express")
const {Router} = express
const router = Router()

const {controller} = require("./posts")

router.get("/api/interactions", controller.getAll)

router.post("/api/interactions", controller.post)

router.delete("/api/interactions", controller.delete)



// router.delete("/api/interactions/:id", (req, res) =>{
//     try {
        
//         res.status(200)
//     } catch (error) {
//         console.log("[DELETE INTERACTIONS ERROR] " , error)
//         res.status(500).send("Algo salió mal ", error)
//     }


// })

module.exports = router