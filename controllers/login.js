const User = require('../model/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user =await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid password"})
        }
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,{expiresIn:"5min"});
        res.status(200).json({message:"Login successful", token})
    }
    catch(error){
        res.status(500).json({message:"Login failed", error:error})
    }
}  