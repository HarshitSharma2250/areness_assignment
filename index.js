const express=require("express")
require("dotenv").config()
const connection=require("./config/db")
const userRouter=require("./routes/user.routes")
const AuthenticationUser=require("./middleware/Auth")
// inilize the post
const PORT=process.env.PORT||3000




// server initilize
const server=express()


// routes
server.get('/home',(req,res)=>{
    res.send(`welcome to home page`)
})

// middleware
server.use(express.json())
server.use('/api',userRouter)





// server listening
server.listen(PORT,async()=>{
    try {
        await connection()
        console.log(`server is running at port ${PORT}`);
    } catch (error) {
        console.log(error.message);
    }
})