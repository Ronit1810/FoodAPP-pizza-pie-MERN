import "./Header.scss"
 import logo from "../../assets/food-app logo.png"

const Header = () => {
    return(
        <div className="main-header">
            <div className="header-content">
                <div className="left">
                    <img src={logo} alt="" />
                </div>
                <ul className="center">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About</li>
                    <li>contact</li>
                </ul>
                <div className="right">
                    <div className="text">Log in</div>
                    <div className="btn">Sign up</div>
                </div>
            </div>
        </div>
    )
}

export default Header;