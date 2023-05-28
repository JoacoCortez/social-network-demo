const mongoose = require("mongoose")


class Post {
    constructor(){
        const postSchema = new mongoose.Schema({
            postID: {type: idkbro, required: true, unique: true},
            author: {type: String, required: true,},
            content: {type: idkbro, required: true},
            interactions : [interactionsSchema]


        })

        const interactionsSchema = new mongoose.Schema({
            userId: {type: String, required: true},
            interactionType: {type: idkbro, enum: ["like", "comment", "bones"]}      

        })

        this.model = mongoose.model("postSchema", postSchema)
    }
}

module.exports = Post