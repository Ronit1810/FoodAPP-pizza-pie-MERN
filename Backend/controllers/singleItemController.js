import itemModel from "../models/itemModel.js";

const singleItemController = async (req, res) =>{
    try {
        // const ProId = ;
        const singleItem = await itemModel.findById({_id: req.params._id});
        res.status(200).send({
            succes: true,
            singleItem
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in singleItemController",
            error,
        })
    }
}

export default singleItemController