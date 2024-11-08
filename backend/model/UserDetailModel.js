import mongoose from "mongoose";

const UserDetailSchema = new mongoose.Schema({
    name :  {type : String } ,
    last : {type : String } ,
    user : {type : String } ,
    city : {type : String } ,
    state : {type : String }, 
    zip : {type : Number } , 
     
},{
    timestamps : true
})

var userDetails = mongoose.model("userDetail" , UserDetailSchema)

export default userDetails