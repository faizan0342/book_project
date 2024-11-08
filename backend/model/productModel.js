import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
     name: {type : String , require : true} ,
     brand : {type : String , required : true} ,
     stock : {type : String , required : true} ,
     listprice : {type : Number , required : true} ,
     ourPrice : {type : Number , required : true}, 
     discount : {type : String , required : true} , 
     image: {type : String , required : true}
},{
    timestamps : true
})

var product = mongoose.model("Product" , productSchema)

export default product