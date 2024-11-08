import mongoose from "mongoose";
import productRouter from "./router/productRouter.js"
import express from "express"
import userDetail from "./router/userDetailRouter.js"
import bodyParser from 'body-parser'

const app = express()

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded data (for form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/products" , productRouter)
app.use("/api" , userDetail)

// app.use(express.json())
// app.use(express.urlencoded({extended : true}))

mongoose.connect('mongodb://127.0.0.1:27017/book' , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected!'));

app.listen(5000 , () => {console.log("localhost:5000")})