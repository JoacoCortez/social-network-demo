const { Schema, Types } = require("mongoose");
const MongodbBase = require("../controllers/mongodbController");


class User extends MongodbBase{
    constructor(){   
        console.log("------------------------------------------------")  
        super("Users", new Schema({
            username: { type: String, required: true, unique: true},
            email: {type: String, required: true, unique: true},
            password: {type: String, required: true},

        }))
    }
} 


module.exports = User;