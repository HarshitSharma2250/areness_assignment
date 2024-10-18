// const AuthenticationUser=require("../middleware/Auth")
const{registration,login}=require("../controllers/user.controller")
const {Router}=require("express")
const userRouter=Router()

userRouter.post("/register",registration)
userRouter.post("/login",login)

module.exports=userRouter