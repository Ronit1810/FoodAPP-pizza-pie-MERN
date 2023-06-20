import React from "react";
import "./SingleDish.scss"
import { AiOutlineSend } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest} from "react-icons/fa";
import dish from "../../../assets/pizza-3.jpeg"

const SingleDish = () => {
    return(
        <div className="single-dish-main">
            <div className="layout">
                <div className="left">
                    <img src={dish} alt="" />
                </div>
                <div className="right">
                    <span className="name">Name</span>
                    <span className="price">&#8377;1999</span>
                    <span className="des">description</span>
                    <div className="buy">
                        <div className="quantity-btn">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <div className="btn">
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

            </div>
        </div>
    )
}

export default SingleDish