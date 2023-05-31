const mongoose = require("mongoose")
const {Schema} = require("mongoose")

class Post {
    constructor(){
        
        const interactionsSchema = new mongoose.Schema({
            userId: {type: String, required: true},
            interactionType: {type: String, enum: ["like", "comment", "bones"]}      

        })
        
        const postSchema = new mongoose.Schema({
            postID: {type: String, required: true, unique: true},
            author: {type: String, required: true,},
            content: {type: mongoose.Mixed    , required: true},
            interactionType : [interactionsSchema]


        })


        this.model = mongoose.model("postSchema", postSchema)
    }
}

module.exports = Post