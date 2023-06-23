import "./Login.scss";
import { CgProfile } from "react-icons/cg";

const Login = () => {
    return(
        <div className="main-login">
            <div className="profile">
                <CgProfile />
            </div>
            <div className="detail">
                <label>User</label>
                <input type="text" placeholder="enter your email address.." required />
            </div>
            <div className="detail">
                <label>Password</label>
                <input type="password" placeholder="enter your password.." required />
            </div>
            <div className="btn">
                <span>Login</span>
            </div>
        </div>
    )
}

export default Login