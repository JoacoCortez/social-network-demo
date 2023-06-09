const mongoose = require("mongoose");
const config = require("../db/config");



async function conectDB(){
    try {
        await mongoose.connect(config.URI)
        console.log("MongoDB connection succesfull") 
    } catch (error) {
        console.log(error)
    }

}
conectDB()



class MongodbBase{
    constructor(modelName, schema){
        this.collection = mongoose.model(modelName, schema)
    }

    
    getAll = async (req, res) => {
        try {
              
                const documents = await this.collection.find({})
                return res.status(200).json(documents)

        } catch (error) {
            console.log("[MONGODB CONTROLLER GETALL ERROR] ", error)
            res.status(500).json("[MONGODB CONTROLLER GETALL ERROR] ", error)
        }

    }
    
    
    
    
    getByEmail = async (req, res) =>{
        try {
            const data = req.body

            const documents = await this.collection.find({email: data.email})
            return res.status(200).json(documents)
        } catch (error) {
            console.log("[MONGODB CONTROLLER GETBYID ERROR] ", error)
            return res.status(500).json("[MONGODB CONTROLLER GETBYID ERROR]" , error)
        }
    }
    
    
    post = async (req, res) =>{
        try {
            const data = req.body
            const documents = await this.collection.create(data)
            return res.status(201).json(documents)
        } catch (error) {
            console.log("[MONGODB CONTROLLER POST ERROR] ", error)
            return res.status(500).json("[MONGODB CONTROLLER POST ERROR]" , error)
        }
    }
    

    update = async (req, res) =>{
        try {
            const data = req.body

            const documents = await this.collection.updateOne({email: data.email}, {data})
            return res.status(200).json(documents)
        } catch (error) {
            console.log("[MONGODB CONTROLLER UPDATE ERROR] ", error)
            return res.status(500).json("[MONGODB CONTROLLER UPDATE ERROR]" , error)
        }
    }


    updateInteraction = async (req, res) =>{
        try {
            const data = req.body
            const targetPost = await this.collection.findOne({_id: data._id})

            console.log(data, "DATAAA")
            console.log(targetPost, "TARGET POST")

            targetPost.interactionData.push({
                userId: data.userID,
                interactionType: data.targetValue
            })
           
            await targetPost.save()

            return res.status(201).end()
        } catch (error) {
            console.log("[MONGODB CONTROLLER UPDATEINTERACTION ERROR] ", error)
            return res.status(500).json("[MONGODB CONTROLLER UPDATEINTERACTION ERROR]" , error)
        }
    }

    
    
    delete = async (req, res) =>{
        try {
            const id = req.params.id
            console.log("IDEEEEWE", id)

            const documents = await this.collection.deleteOne({postID: id})
            return res.status(200).send("Post deleted")
        } catch (error) {
            console.log("[MONGODB CONTROLLER DELETE ERROR] ", error)
            return res.status(500).json("[MONGODB CONTROLLER DELETE ERROR]" , error)
        }
    }


    verify = async (req, res) =>{
        try {
            const data = req.body
            console.log("DATA ", data)
            const result = await this.collection.find({ username: data.username, password: data.password })
            
            if(result.length !== 0){
                console.log("Verification successfull")
                
                return res.status(200).json(result)
            }else{
                console.log("Nombre de usuario o contraseña incorrecta")
                return res.status(401).end()
            }
        } catch (error) {
            console.log("[MONGODB CONTROLLER VERIFY ERROR] ", error)
            return res.status(500).json("[MONGODB CONTROLLER VERIFY ERROR]" , error)
        }
    }


    register = async (req, res) =>{
        try {
            const data = req.body
            const result = await this.collection.create(data)
            console.log("User created ", result)
            return res.status(201).json(result)
        } catch (error) {
            console.log("[MONGODB CONTROLLER REGISTER ERROR] ", error)
            return res.status(500).json("[MONGODB CONTROLLER REGISTER ERROR]" , error)
        }
    }

    auth = async (username, password) =>{
        try {
            const user = {username, password}
            console.log("USER ", user)
            const result = await this.collection.find({ username: user.username, password: user.password })
            
            console.log("RESULT ", result)
            if(result.length !== 0){
                console.log("Authentication successfull")
                
                return {status: 200, user: result}
            }else{
                console.log("Nombre de usuario o contraseña incorrecta")
                return null
            }
        } catch (error) {
            console.log("[MONGODB CONTROLLER VERIFY ERROR] ", error)
            throw error
        }
    }
    
}

module.exports = MongodbBase