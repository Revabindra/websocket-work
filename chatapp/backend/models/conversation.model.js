import mongoose from "mongoose"
const conversation=new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"
        }

    ],
    messages:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Messages"
    }
},{timestamps:true})

const Conversation=mongoose.model('conversation',conversationSchema)
export default Conversation;
