const{Schema,model}=require("mongoose")
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required:true,
        unique:true
    },
    number:{
        type:String,
        required:true,
 match: [/^\d{10}$/, 'Phone number must be exactly 10 digits and contain only numbers'],
    },
    gender:{
        type:String,
        enum:["male","female","other"],
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:[6,"password length should be 6 or more"]
    }
},{
    versionKey:false,
    timestamps:true,
    strict:true
})

module.exports=model("user",userSchema)