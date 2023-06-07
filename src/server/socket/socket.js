const {Server} = require("socket.io")

let io

class Socket{
    static init(httpServer){
        io = new Server(httpServer)

        const usersConnected = []
        
        io.on("connection", async (clientSocket) =>{
            console.log("New client connected id ", clientSocket.id)
            await usersConected.push(clientSocket.id)
            
            io.emit("connectedUsers", usersConected)
        
        
        
        
            
            clientSocket.on("disconnect", async () =>{
                console.log(`Client id ${clientSocket.id} disconnected`)
                clientsUpdated = await usersConected.filter(user => user.id !== id)
                usersConected.push(clientsUpdated)
                
                io.emit("connectedUsers", usersConnected)
            })
        })
    
    
    
    }


}



module.exports = Socket