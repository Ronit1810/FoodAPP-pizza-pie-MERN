import jwt from "jsonwebtoken";

//protected routes using token
const requireSignIn = async(req, res, next) => {
    try {
        const decode = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        next();
        
    } catch (error) {
        console.log(error);

    }
}

export default requireSignIn