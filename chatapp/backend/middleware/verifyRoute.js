import jwt from "jsonwebtoken"
import User from "../models/auth.models.js";

const verifyRoute=async (req,res,next)=>{
console.log("verify route")
    try{
    const token=req.cookies.jwt;
    console.log("token",token);
    if(!token){
        return res.status(404).send({message: "token not found"});
    }

const decodedtoken= jwt.verify(token,process.env.JWT_SECRET_KEY);
if(!decodedtoken){
    return res.status(401).send({message:"token invalid"});
}

const user=await User.findOne(decodedtoken.userid).select("-password");
console.log("user without password",user);
if(!user){
    return res.status(404).send({message:"user not found"});

}
req.user=user;
next()

    }catch(error){
        return res.status(500).send("internal server error",error.message);
    }
    
};
export default verifyRoute;