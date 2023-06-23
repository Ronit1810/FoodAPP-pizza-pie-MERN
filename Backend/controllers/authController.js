import { hashPasssword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";

const registerController = async(req, res) => {
    try {
        const {name,email,phone,address,password} = req.body
        //validation
        if (!name) {
            return res.send({error:"name is Required"})
        }
        if (!email) {
            return res.send({error:"email is Required"})
        }
        if (!phone) {
            return res.send({error:"phone is Required"})
        }
        if (!address) {
            return res.send({error:"address is Required"})
        }
        if (!password) {
            return res.send({error:"password is Required"})
        }

        //check user
        const existingUser = await userModel.findOne({email})
        //existing user
        if (existingUser) {
            return res.status(200).send({
                success: true,
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