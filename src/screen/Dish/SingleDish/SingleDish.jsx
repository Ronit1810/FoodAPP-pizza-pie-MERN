import React, { useEffect, useState } from "react";
import "./SingleDish.scss"
import { AiOutlineSend } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest} from "react-icons/fa";
import dish from "../../../assets/pizza-3.jpeg"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const SingleDish = () => {
    const Navigate = useNavigate()
    const [singleDishItem, setSingleDishItem] = useState({});
    const params = useParams()
    // const callsingleapi = (e) => {
    //     axios.get(`${process.env.REACT_APP_API}/api/v1/auth/singleItem/${params.id}`)
    //     .then((d) => {
    //         setSingleDishItem(d.singleDishItem)
    //         console.log(d);
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }
    // useEffect(() => {
    //     callsingleapi();
    // }, [])

    useEffect(() =>{
        if (params?.id) getDish()
    }, [params?.id])
    const getDish = async()=>{
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/singleItem/${params.id}`)
            console.log(data);
            setSingleDishItem(data.singleItem)
        } catch (error) {
            console.log(error);
        }
    }
    // useEffect(() => {
    //     getDish()
    // })
    return(
        <div  className="single-dish-main">
        
            <div className="layout">
            {/* {JSON.stringify(singleDishItem, null, 4)} */}
                {/* {
                    singleDishItem.singleItem?.map((p) =>{
                        return(
                            <> */}

                            <div className="left">
                                
                                <img src={singleDishItem.img} alt="" />
                            </div>
                            <div className="right">
                                <span className="name">{singleDishItem.name}</span>
                                <span className="price">&#8377;{singleDishItem.price}</span>
                                <span className="des">{singleDishItem.description}</span>
                                <div className="buy">
                                    <div className="quantity-btn">
                                        <span>-</span>
                                        <span>1</span>
                                        <span>+</span>
                                    </div>
                                    <div className="btn" onClick={() => {Navigate('/') ; toast.success("Thank You") ; toast.success("Order Placed Successfully")}}>
                                        Place Order
                                        <AiOutlineSend size={20} />
                                    </div>
                                </div>
                                <hr />
                                
                                <div className="social-icon">
                                    <span className="text">
                                        Share: 
                                        <span className="icon">
                                            <FaFacebookF size={15} />
                                            <FaInstagram size={15} />
                                            <FaLinkedinIn size={15} />
                                            <FaPinterest size={15} />
                                            <FaTwitter size={15} />
                                            
                                        </span>
                                    </span>
                                </div>
                            </div>
                            {/* </>

                        )
                    })
                } */}
                    


            </div>
        </div>
    )
}

export default SingleDish