const {Server} = require("socket.io")

let io

class Socket{
    static init(httpServer){
        io = new Server(httpServer)

        io.on("connection",  (clientSocket) =>{
            
            console.log("New client connected id ", clientSocket.id)

        })
    }


}



module.exports = Socket