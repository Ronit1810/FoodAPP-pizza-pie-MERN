import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js";
import { comparePassword } from "../helpers/authHelper.js";

//POST LOGIN
const loginController = async(req, res) => {
    try {
        const {email, password} = req.body
        //validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            })
        }

        //checking user
        const user = await userModel.findOne({email})
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "email is not register, please Register",
            })
        }

        //comparing user
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid password"
            })
        }

        //token
        const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn:"7d"});
        res.status(200).send({
            success: true,
            message: "Login Successfully",
            user:{
                name: user.name,
                email: user.email,
                address: user.address,
            },
            token,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error
        })
    }
}

export default loginController