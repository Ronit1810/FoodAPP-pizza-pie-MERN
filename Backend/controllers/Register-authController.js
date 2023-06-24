import { hashPasssword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
// import { Jwt } from "jsonwebtoken";


const registerController = async(req, res) => {
    try {
        const {name,email,phone,address,password} = req.body
        //validation
        if (!name) {
            return res.send({message:"name is Required"})
        }
        if (!email) {
            return res.send({message:"email is Required"})
        }
        if (!phone) {
            return res.send({message:"phone is Required"})
        }
        if (!address) {
            return res.send({message:"address is Required"})
        }
        if (!password) {
            return res.send({message:"password is Required"})
        }

        //check user
        const existingUser = await userModel.findOne({email})
        //existing user
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already Register Please Login",
            })
        }

        //register user
        const hashedPassword = await hashPasssword(password)
        //save
        const user = await new userModel({name, email, address, phone, password:hashedPassword}).save()

        res.status(201).send({
            success:true,
            message:"User Register Successfully",
            user
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:'Error in Registration',
            error
        })
    }
};

export default registerController