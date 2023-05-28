const mongoose = require("mongoose")


class User{
    constructor(Modelname, Schema){     //Arreglar esto 
        const userSchema = new mongoose.Schema({
            username: { type: String, required: true, unique: true},
            email: {type: String, required: true, unique: true},
            password: {type: String, required: true},
        })

        this.model = mongoose.model("User", userSchema)
    }


} 


module.exports = User;