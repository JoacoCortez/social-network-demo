const express = require("express")
const passport = require("passport")
const session = require("express-session")
const http = require("http")
const cors = require("cors")

const MongoStore = require("connect-mongo")
const sessionOpts = {
    secret: "shhh",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://admin:CVLrBujN32D6wmoD@cluster0.0u89epz.mongodb.net/?retryWrites=true&w=majority",
        dbName: "test"

    })
}


const app = express();
const PORT = 8080;

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session(sessionOpts))
app.use(passport.initialize());
app.use(passport.session());



const { router: userRouter } = require("./routers/api/user");
const { router: postRouter } = require("./routers/api/posts");
const interactionsRouter = require("./routers/api/interactions")



app.use("/api/user", userRouter)
app.use("/api/post", postRouter)    
app.use("/api/interactions", interactionsRouter)




const server = http.createServer(app)
server.listen(PORT, () => {

    console.log("Server running")

})



server.on("error", () => {

    console.log("Something failed", "error")

})










