import React from "react";
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineFacebook } from "react-icons/ai";

import "./Footer.scss"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">Pizza-Pie</div>
                    <div className="text">Best cook and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</div>
                    <div className="icon">
                        <AiOutlineWhatsApp />
                        <AiOutlineInstagram />
                        <AiOutlineFacebook />
                    </div>
                </div>

                <div className="col">
                    <div className="title">Company</div>
                    <div className="text">Career</div>
                    <div className="text">About us</div>
                    <div className="text">Blog</div>
                    <div className="text">Press Info</div>
                    <div className="text">Features</div>
                </div>

                <div className="col">
                    <div className="title">Pizza-Pie</div>
                    <div className="text">Why Pizza-pie</div>
                    <div className="text">How it work</div>
                    <div className="text">Why choose Us</div>
                    <div className="text">Client stories</div>
                    <div className="text">Gallery</div>
                </div>

                <div className="col">
                    <div className="title">Menu</div>
                    <div className="text">Breakfast</div>
                    <div className="text">Lunch</div>
                    <div className="text">Dinner</div>
                    <div className="text">Fast Food</div>
                    <div className="text">Drinks</div>
                </div>

                
            </div>

            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        RP1810 ©2023 CREATED BY RONIT PATEL
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer