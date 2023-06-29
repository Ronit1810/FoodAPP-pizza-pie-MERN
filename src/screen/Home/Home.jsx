import React from "react";

import Banner from "../Banner/Banner";
import Offer from "../Offer/Offer";
import Menu from "../Menu/Menu";

// import { useAuth } from "../../component/context/auth";

const Home = () => {
    // const [auth, setAuth] = useAuth()
    
    return(
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    {/* <pre> {JSON.stringify(auth, null, 4)}</pre> */}
                    <Offer />
                    <Menu />
                </div>
            </div>

        </div>
    )
}

export default Home