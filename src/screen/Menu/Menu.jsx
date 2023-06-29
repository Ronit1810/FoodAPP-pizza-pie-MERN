
import "./Menu.scss"
import Dish from "../Dish/Dish"
import React, { useEffect, useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import axios from "axios";


const Menu = () => {
    

    const [data, setData] = useState([]);
    const apicall = (e)=>{

    
     axios.get(`${process.env.REACT_APP_API}/api/v1/auth/dishItem`)
     .then((d)=>{
        setData(d.data)
        console.log(d);
     }).catch((err)=>{
        console.log(err)}
     )

     }

     useEffect(() => {

            apicall();
            console.log(data);
        }, [])
    


    return(
        <div>
        <div className="menu-section">
            <div className="header-title">
                <span>Our menu</span>
                <h1>Our Popular Dishes</h1>
                <p>Best cooks and best dilevery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
            </div>
            <div className="menu-content">
                {
                    data.dishItem?.map((item, index)=>{
                        return(
                            <Dish key={index} img={item.img} name={item.name} price={item.price} _id={item._id}></Dish>
                        )
                    })

                    
                }
                
            </div>
            <div className="btn">
                See all Menu <IoIosArrowDroprightCircle />
            </div>
        </div></div> 
    )

    }
export default Menu;