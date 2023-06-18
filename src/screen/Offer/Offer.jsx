import React from "react";
import "./Offer.scss";

import OfferImg from "../../assets/offer-2.jpeg"

const Offer = () =>{
    return (
        <div className="offer-section">
            <div className="content">
                <img className="offer-img" src={OfferImg} alt="" />
                <div className="text-content">
                    <span>-50%</span>
                    <h1>Pizza Special Offer</h1>
                    <p>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
                </div>
                <div className="btns">
                    <div className="btn">Explore</div>
                    
                </div>
            </div>
        </div>
    )
}

export default Offer