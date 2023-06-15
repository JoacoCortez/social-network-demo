const { Schema, Types } = require("mongoose");
const MongodbBase = require("../controllers/mongodbController");
// const { userPic } = require("../../media/blank-profile-picture-973460_960_720.jpg")

class User extends MongodbBase{
    constructor(){   
        console.log("------------------------------------------------")  
        super("Users", new Schema({
            username: { type: String, required: true, unique: true},
            email: {type: String, required: true, unique: true},
            password: {type: String, required: true},
            profilePic: { data: {type: Buffer, default: Buffer.from("../../media/blank-profile-picture-973460_960_720.jpg")} , contentType: {type: String, default: "newUser.jpg"} }
        }))
    }
} 


module.exports = User;