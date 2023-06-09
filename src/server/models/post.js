const mongoose = require("mongoose");
const { Schema, Types } = require("mongoose");
const MongodbBase = require("../controllers/mongodbController");


class Post extends MongodbBase{
    constructor(){
        const interactionsSchema = new mongoose.Schema({
            userId: {type: String, required: true},
            interactionType: {type: String, enum: ["like"]}      

        })
        
        super("Posts", new Schema({
            author: {type: String, required: true, unique: true},
            content: {type: "Mixed", required: true},
            interactionData : [interactionsSchema]

        }))
    }
} 


module.exports = Post;