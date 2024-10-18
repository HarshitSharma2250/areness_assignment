const userSchema=require("../model/user.model")
const bcrypt = require('bcryptjs');
require("dotenv").config()
const jwt=require("jsonwebtoken")



const registration=async(req,res)=>{
    const data=req.body
    try {
        const checkdata= await userSchema.findOne({email:data.email})
        if(checkdata){
            return res.status(409).josn({
                message:"you are already register please login "
            })
        }

        bcrypt.hash(data.password, 5, async function(err, hash) {
       if(err){
        return res.status(500).json({
            message:err.message
        })

    }
    const addData=new userSchema({...data,password:hash})
      await addData.save()
    });
    res.status(201).json({
        message:"registration has been completed successfully"
    })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

const login=async(req,res)=>{
    const data=req.body
    try {
        if(!data.email && !data.password){
            return res.status(401).json({
                message:"please write necessory credentials"
            })
        }

const checkuserExist=await userSchema.findOne({email:data.email})
if(!checkuserExist){
    return res.status(404).json({
        message:"data not found or incorrect credentials"
    })
}

        bcrypt.compare(data.password, checkuserExist.password, function(err, ress) {
         if(err){
            return res.status(500).json({
                message:err.message
            })
         }

if(ress){
    token = jwt.sign({userId:checkuserExist._id}, `${process.env.KEY}`);

    res.setHeader('authorization', `Bearer ${token}`);
res.status(200).json({
    message:"user logged in successfully",
    token
})
}
        });
    
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}




module.exports={registration,login}