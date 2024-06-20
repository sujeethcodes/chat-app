const mongoose  = require("mongoose");

const chatSchema = new mongoose.Schema({
    senderId:{
        type:Number,
        required:true
    },
    reciverId:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    }

},
{ timestamps: true }
)
const Chat = mongoose.model("Chat", chatSchema)
module.exports = Chat