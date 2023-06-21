const express = require("express");
const http = require("http");
const cors = require("cors")

const app = express();
const PORT = 8080;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const userRouter = require("./routers/api/user")
const {router} = require("./routers/api/posts") // postRouter
const interactionsRouter = require("./routers/api/interactions")



app.use("/api/user", userRouter)
app.use("/api/post", router)    
app.use("/api/interactions", interactionsRouter)




const server = http.createServer(app)
server.listen(PORT, () => {

    console.log("Server running")

})



server.on("error", () => {

    console.log("Something failed", "error")

})










