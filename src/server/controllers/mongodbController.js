const mongoose = require("mongoose")



class MongodbBase{
    constructor(modelName, schema){
        this.collection = mongoose.model(modelName, schema)
    }


    getAll = async () =>{
        try {
            
        } catch (error) {
            
        }

    }
    
    getByID = async () =>{
        try {
            
        } catch (error) {
            
        }

    }
    
    post = async () =>{
        try {
            
        } catch (error) {
            
        }

    }

    update = async () =>{
        try {
            
        } catch (error) {
            
        }

    }


    delete = async () =>{
        try {
            
        } catch (error) {
            
        }

    }





}

module.exports = MongodbBase