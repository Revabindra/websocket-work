import User from "../models/auth.models.js";
import bcrypt from 'bcrypt';
import generateJWT from "../utilities/generateJWT.js";
export const signup = async (req, res)=>{
    console.log(req.body);

    const {fullname, username,email, password, confirmPassword, gender}=req.body;
    
    try {
        if(password!= confirmPassword){
            return res.status(400).send({message:"Password and confirm Password are different"});
        }    

        const user = await User.findOne({
            username
        })

        if(user){
            return res.status(400).send({message:"user already exist"})
        }
        const passwordhash = await bcrypt.hash(password, 10); 

        const boypic = "";
        const girlpic = "";
        

        const newuser = new User({
            fullname,
            username,
            email, 
            password:passwordhash, 
            gender,
            profilePic:gender=="male"?boypic:girlpic
        });
    

        await newuser.save();
        res.status(201).json({
            _id: newuser._id,
            fullname: newuser.fullname,
            username: newuser.username,
            email: newuser.email,
            gender: newuser.gender,
            profilePic: newuser.profilePic
        })
    } 
    
    catch (error) {
        res.status(500).send({message: "internal server error", error:error.message})
    }


    
};
export const login =async (req, res)=>{
    const {username, password} =  req.body;
    const user = await User.findOne({username});

    
    const isvalidpassword = await bcrypt.compare(password, user? user.password: " ");

    if(!user || !isvalidpassword){
        return res.status(404).send({message: "user does not exist"});
    }
    
    res.status(201).json({
        _id: user._id,
        fullname: user.fullname,
        username: user.username,
        email: user.email,
        gender: user.gender,
        profilePic: user.profilePic
    })
    generateJWT(user._id,res); //jwt function call 
}
export const logout = (req, res)=>{
    res.cookie("jwt"," ",{
        maxAge:0
    })
    res.status(200).send("logout succcessfully")
}



 