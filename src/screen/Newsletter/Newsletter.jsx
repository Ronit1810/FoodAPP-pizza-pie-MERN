import React from "react";
import "./Newsletter.scss"
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, } from "react-icons/fa";

const Newsletter = () => {
    return(
        <div className="newsletter">
            <div className="newsletter-content">
                <span className="big-text">Subscribe Our Newsletter</span>
                <span className="small-text">Best cooks and best dilevery guys all at your service. Hot tasty food will reach you in 60 minutes.</span>
                <div className="form">
                    <input type="text" placeholder="Your email address..." />
                    <button>Subscribe<IoIosArrowDroprightCircle /></button>
                </div>
                <div className="social-icon">
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaPinterest size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter