import { useState } from "react";
import "./Login.scss";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../component/context/auth";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [auth, setAuth] = useAuth()

    const Navigate = useNavigate()

    const handleclick = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {email, password});
            if (res.data.success) {
                toast.success(res.data.message)
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                Navigate("/"); 
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error("something went wrong")
        }
    }
    return(
        <div className="main-login">
            <div className="profile">
                <CgProfile />
            </div>
            <div className="detail">
                <label>User</label>
                <input type="text" placeholder="enter your email address.." required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="detail">
                <label>Password</label>
                <input type="password" placeholder="enter your password.." required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="btn">
                <span onClick={handleclick}>Login</span>
            </div>
        </div>
    )
}

export default Login