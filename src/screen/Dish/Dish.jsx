import React from "react";
import "./Dish.scss";
import { useNavigate } from "react-router-dom";

import Dis from "../../assets/pizza -1.jpeg"


const Dish = () => {
    const Navigate = useNavigate()

    return (
        <div className="dish-cart" onClick={() => Navigate("/dish")}>
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