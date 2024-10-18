const userSchema=require("../model/user.model")
const jwt=require("jsonwebtoken")
require("dotenv").config()

const AuthenticationUser=async(req,res,next)=>{
    const token=req.headers["authorization"]?.split(' ')[1]
try{
    if(!token){
        return res.status(403).json({
            message:"invalid token please login again"
        })
    }
            const decoded = jwt.verify(token,`${process.env.KEY}`);
            req.userDetail=await userSchema.findById(decoded.userId)
        
    next()
        } catch (error) {
            res.status(500).json({
                message:error.message
            })
        }
}

module.exports=AuthenticationUser