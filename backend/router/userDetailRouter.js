import userDetails from "../model/UserDetailModel.js"; 
import express from "express";

const Router = express.Router();

Router.post("/userdetail", async (req, res) => {
    console.log("req======>" , req.body)
    try {
        const userInfo = new userDetails({
            name: req.body.name,
            last: req.body.last,
            user: req.body.username, // Updated to match your payload
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
        });

        const saveUserDate = await userInfo.save(); // Save the document in the MongoDB collection

        if(saveUserDate){
            return res.status(200).send({
                name : saveUserDate.name,
                last : saveUserDate.last,
                user : saveUserDate.user,
                city : saveUserDate.city,
                state : saveUserDate.state,
                zip : saveUserDate.zip,
            });
        }

        res.status(200).json({ message: 'User data saved successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving user data', error });
    }
});

export default Router;
