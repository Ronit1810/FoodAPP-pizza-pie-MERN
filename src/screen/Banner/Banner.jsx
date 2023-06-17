import "./Banner.scss"
import ban from "../../assets/pizza delivery.jpeg"

const Banner = () =>{
    return(
        <div className="hero-banner">
            <div className="banner-content">
                <div className="text-content">
                    <div className="span-1">Quality Food</div>
                    <h1>Fastest Delivery & Easy Pickup</h1>
                    <span className="span-2">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</span>
                    <div className="form">
                        <input type="text" autoFocus placeholder="Food Search" />
                        <div className="text">Search</div>
                    </div>
                </div>
                <img className="banner-img" src={ban} alt="" />
            </div>
        </div>
    )
}

export default Banner;