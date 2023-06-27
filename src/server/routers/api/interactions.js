const express = require("express")
const {Router} = express
const router = Router()

const {controller} = require("./posts")

router.get("/", controller.getAll)

router.post("/", controller.post)

router.put("/", controller.updateInteraction)

router.delete("/", controller.delete)



// router.delete("/api/interactions/:id", (req, res) =>{
//     try {
        
//         res.status(200)
//     } catch (error) {
//         console.log("[DELETE INTERACTIONS ERROR] " , error)
//         res.status(500).send("Algo salió mal ", error)
//     }


// })

module.exports = router