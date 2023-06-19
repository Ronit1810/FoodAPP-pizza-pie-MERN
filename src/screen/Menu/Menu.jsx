import React from "react"
import "./Menu.scss"
import Dish from "../Dish/Dish"

import { IoIosArrowDroprightCircle } from "react-icons/io";

const Menu = () => {
    return(
        <div className="menu-section">
            <div className="header-title">
                <span>Our menu</span>
                <h1>Our Popular Dishes</h1>
                <p>Best cooks and best dilevery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
            </div>
            <div className="menu-content">
                <Dish />
                <Dish />
                <Dish />
                <Dish />
                <Dish />
                <Dish />
                <Dish />
                <Dish />
            </div>
            <div className="btn">
                See all Menu <IoIosArrowDroprightCircle />
            </div>
        </div>
    )
}

export default Menu