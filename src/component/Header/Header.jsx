import "./Header.scss"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/food-app logo.png"

const Header = () => {
    const Navigate = useNavigate();

    return(
        <div className="main-header">
            <div className="header-content">
                <div className="left">
                    <img src={logo} alt="" onClick={() => Navigate("/")}/>
                </div>
                <ul className="center">
                    <li onClick={() => Navigate("/")}>Home</li>
                    <li>Menu</li>
                    <li>About</li>
                    <li>contact</li>
                </ul>
                <div className="right">
                    <div className="text" onClick={() => Navigate("/login")}>Log in</div>
                    <div className="btn" onClick={() => Navigate("/register")}>Sign up</div>
                </div>
            </div>
        </div>
    )
}

export default Header;