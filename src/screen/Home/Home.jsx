import React from "react";

import Banner from "../Banner/Banner";
import Offer from "../Offer/Offer";

const Home = () => {
    return(
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Offer />
                </div>
            </div>

        </div>
    )
}

export default Home