import itemModel from "../models/itemModel.js";

const itemController = async(req, res) => {
    try {
        const dishItem = await itemModel.find({});
        res.status(200).send({
            success: true,
            message: "all dishitem listed successfully",
            dishItem,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in itemController",
            error,
        })
    }
}

export default itemController