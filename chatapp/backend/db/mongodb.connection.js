import mongoose from 'mongoose'
const connection=async()=>{
    try{
       await  mongoose.connect(process.env.MONGO_DB_URI,)
    console.log("database connected")
    }catch(error){
        console.log("error ",error.message);
    }
}
export default connection 

