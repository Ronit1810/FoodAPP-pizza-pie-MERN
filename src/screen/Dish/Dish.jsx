import React from "react";
import "./Dish.scss";
import { useNavigate } from "react-router-dom";

// import Dis from "../../assets/pizza -1.jpeg"
// import { toast } from "react-hot-toast";
// import axios from "axios";


const Dish = (props) => {
    const Navigate = useNavigate()
    // const [dish, setDish] = useState("")

    // //get all DISH ITEM
    // const getAllDish = async () => {
    //     try {
    //         const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/dishItem`);
    //         setDish(data.dishItem)
    //     } catch (error) {
    //         console.log(error);
    //         toast.error("Something went Wrong")
    //     }
    // }

    // useEffect(() => {
    //     getAllDish();
    // }, [])
    

    return (
        
       

        <div key={props.key} className="dish-cart" onClick={() => Navigate(`/dish/${props._id}`)}>
            <div className="thumbnail">
                
                <img src={props.img} alt="dish image" />
            </div>
            <div className="dish-detail">
                <span className="name">{props.name}</span>
                <span className="price">&#8377;{props.price}</span>
            </div>
        </div>
     
        
    )
}

export default Dish