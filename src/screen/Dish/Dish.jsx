import React from "react";
import "./Dish.scss"

import Dis from "../../assets/pizza -1.jpeg"

const Dish = () => {
    return (
        <div className="dish-cart">
            <div className="thumbnail">
                
                <img src={Dis} alt="" />
            </div>
            <div className="dish-detail">
                <span className="name">pizza name</span>
                <span className="price">&#8377;599</span>
            </div>
        </div>
    )
}

export default Dish