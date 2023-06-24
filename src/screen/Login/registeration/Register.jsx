import { useState } from "react";
import "./Register.scss";
import { SiHellofresh } from "react-icons/si";
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    const Navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {name, email, phone, address, password});
            if (res.data.success) {
                toast.success(res.data && res.data.message);
                Navigate("/login");
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
    }
    return(
        <div className="main-div">
            <div className="greeting-emogi">
                <SiHellofresh size={20} />
            </div>
            <div className="form" >
                <div className="detail">
                    <label>Username</label>
                    <input type="text" placeholder="enter your name.." required value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="detail">
                    <label>email</label>
                    <input type="email" placeholder="enter your email address.." required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="detail">
                    <label>phone no.</label>
                    <input type="number" placeholder="enter your phone number.." required value={phone} onChange={(e) => setPhone(e.target.value)}  />
                </div>
                <div className="detail">
                    <label>Address</label>
                    <input type="text" placeholder="enter your address.." required value={address} onChange={(e) => setAddress(e.target.value)}  />
                </div>
                <div className="detail">
                    <label>Password</label>
                    <input type="password" placeholder="enter your password.." required value={password} onChange={(e) => setPassword(e.target.value)}  />
                </div>
                <div className="btn">
                    <span onClick={handlesubmit}>Login</span>
                </div>
            </div>
        </div>
    )
}

export default Register