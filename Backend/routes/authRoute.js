import express from "express";
import  registerController from "../controllers/Register-authController.js";
import loginController from "../controllers/Login-authController.js";
import testController from "../controllers/testController.js";
import requireSignIn from "../middlewares/authMiddleware.js";
import itemController from "../controllers/itemController.js";
import singleItemController from "../controllers/singleItemController.js";


//router object
const router = express.Router()

//routing
//
//REGISTER || Method Post
router.post('/register', registerController);

//  login || post  Method
router.post('/login',loginController);

//test_router
router.get('/test', requireSignIn, testController);

//item_router
router.get('/dishItem', itemController);

//single_item_router
router.get("/singleItem/:_id", singleItemController)

export default router