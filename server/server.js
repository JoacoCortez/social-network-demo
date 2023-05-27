import express from "express"
import http  from "http"


const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const userOpts = require("./routers/api/user")






app.use("/api/user", userOpts)





server.listen(PORT, () => {

    console.log("Server running")

})



server.on("error", () => {

    console.log("Something failed", "error")

})










