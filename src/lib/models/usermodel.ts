import {Schema,model,models}from "mongoose";
import { stringify } from "node:querystring";
const userSchema =new Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,

    },
    username:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        required:true,
    }
},{timestamps:true});
const User=models.User||model("User",userSchema)
export default User;