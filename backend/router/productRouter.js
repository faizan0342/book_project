
import express from "express"
import data from '../data.js'
import products from "../model/productModel.js" 


var productRouter = express.Router()

productRouter.get("/seed" , async(req , res) => {
    var product = await products.insertMany(data.product)

    res.send(product)
})

productRouter.get("/" , async(req , res) => {
    var product = await products.find({})

    res.send(product)
})

productRouter.get("/:id" , async(req , res) => {

    var productId = await products.findById(req.params.id)

    if(productId){
        res.send(productId)
    }else{
        res.status(404).send({message : "product not found"})
    }
})

productRouter.get("/order-cart/:id" , async(req , res) => {

    var productId = await products.findById(req.params.id)

    if(productId){
        res.send(productId)
    }else{
        res.status(404).send({message : "product not found"})
    }
})

export default productRouter