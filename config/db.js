const{connect}=require("mongoose")
require("dotenv").config()
const connection=async()=>{
    try {
        await connect(`${process.env.MONGO_URL}`)
        console.log(`db has connected`);
    } catch (error) {
        console.log(error.message);
    }
}
module.exports=connection