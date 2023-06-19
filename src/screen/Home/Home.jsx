import React from "react";

import Banner from "../Banner/Banner";
import Offer from "../Offer/Offer";
import Menu from "../Menu/Menu";

const Home = () => {
    return(
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Offer />
                    <Menu />
                </div>
            </div>

        </div>
    )
}

export default Home