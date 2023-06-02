const mongoose = require("mongoose");
const config = require("../db/config");



async function conectDB(){
    try {
        await mongoose.connect(config.URI)
        console.log("jidjsa") 
    } catch (error) {
        console.log(error)
    }

}
conectDB()



class MongodbBase{
    constructor(modelName, schema){
        this.collection = mongoose.model(modelName, schema)
    }


    
    async getAll(req, res){
        try {
            const documents = await this.collection.find({})
            return res.status(200).json(documents)

        } catch (error) {
            console.log("[MONGODB CONTROLLER GETALL ERROR] ", error)
            res.status(500).json("[MONGODB CONTROLLER GETALL ERROR] ", error)
        }

    }
    
    
    
    async getByID(req, res){
        try {
            const id = req.query

            const documents = await this.collection.find({_id: id})
            return res.status(200).json(documents)
        } catch (error) {
            console.log("[MONGODB CONTROLLER GETBYID ERROR] ", error)
            return res.status(500).json("[MONGODB CONTROLLER GETBYID ERROR]" , error)
        }
    }
    
    
    async post(req, res){
        try {
            const data = req.body

            const documents = await this.collection.create(data)
            return res.status(201).json(documents)
        } catch (error) {
            console.log("[MONGODB CONTROLLER POST ERROR] ", error)
            return res.status(500).json("[MONGODB CONTROLLER POST ERROR]" , error)
        }
    }
    

    async update(req, res){
        try {
            const data = req.body

            const documents = await this.collection.updateOne({email: data.email}, {data})
            return res.status(200).json(documents)
        } catch (error) {
            console.log("[MONGODB CONTROLLER UPDATE ERROR] ", error)
            return res.status(500).json("[MONGODB CONTROLLER UPDATE ERROR]" , error)
        }
    }
    
    
    async delete(req, res){
        try {
            const id = req.params

            const documents = await this.collection.delete({_id: id})
            return res.status(200)
        } catch (error) {
            console.log("[MONGODB CONTROLLER DELETE ERROR] ", error)
            return res.status(500).json("[MONGODB CONTROLLER DELETE ERROR]" , error)
        }
    }


    async verify(req, res){
        try {
            const data = req.body

            const documents = await this.collection.find({ username: data.username, password: data.password })
            return res.status(200).json(documents)
        } catch (error) {
            console.log("[MONGODB CONTROLLER VERIFY ERROR] ", error)
            return res.status(500).json("[MONGODB CONTROLLER VERIFY ERROR]" , error)
        }
    }
}

module.exports = MongodbBase