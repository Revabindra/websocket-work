import mongoose from "mongoose";
const messageSchema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    recieverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    } 
},{timestamps:true})

const Messages=mongoose.model("message",messgaeSchema) 


 export default message 