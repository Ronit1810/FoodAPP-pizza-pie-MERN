import "./Header.scss"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/food-app logo.png"
import { useAuth } from "../context/auth"
import { toast } from "react-hot-toast"

import { AiOutlineShoppingCart } from  "react-icons/ai";

const Header = () => {
    const Navigate = useNavigate();

    const [auth, setAuth] = useAuth()

    const handleLogout = () => {
        setAuth({...auth,
        user: null,
        token: "",});
        localStorage.removeItem("auth")
        toast.success("Logout Successfully")
    }

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
                {/* when user is not present show LOGIN||REGISTER else show LOGOUT */}
                    {
                        !auth.user ? (
                            <>
                            <div className="text" onClick={() => Navigate("/login")}>Log in</div>
                            <div className="btn" onClick={() => Navigate("/register")}>Sign up</div>
                            </>
                        ) : (
                            <>
                            <div className="text"  onClick={() => {Navigate("/login"); handleLogout()}}>Log out</div>
                            <div className="addcart" onClick={() => Navigate("/cart")}> <AiOutlineShoppingCart size={25} color="red"/> </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;