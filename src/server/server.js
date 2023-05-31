import express from "express"
import http  from "http"


const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const userRouter = require("./routers/api/user")
const postRouter = require("./routers/api/posts")





app.use("/api/user", userRouter)
app.use("/api/post", postRouter)




server.listen(PORT, () => {

    console.log("Server running")

})



server.on("error", () => {

    console.log("Something failed", "error")

})










