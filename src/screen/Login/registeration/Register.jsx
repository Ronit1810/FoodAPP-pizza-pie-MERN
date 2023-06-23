import "./Register.scss";
import { SiHellofresh } from "react-icons/si";

const Register = () => {
    return(
        <div className="main-div">
            <div className="greeting-emogi">
                <SiHellofresh />
            </div>
            <div className="form" >
                <div className="detail">
                    <label>Username</label>
                    <input type="text" placeholder="enter your name.." required />
                </div>
                <div className="detail">
                    <label>User email</label>
                    <input type="text" placeholder="enter your email address.." required />
                </div>
                <div className="detail">
                    <label>phone no.</label>
                    <input type="number" placeholder="enter your phone number.." required />
                </div>
                <div className="detail">
                    <label>Address</label>
                    <input type="text" placeholder="enter your address.." required />
                </div>
                <div className="detail">
                    <label>Password</label>
                    <input type="password" placeholder="enter your password.." required />
                </div>
                <div className="btn">
                    <span>Login</span>
                </div>
            </div>
        </div>
    )
}

export default Register