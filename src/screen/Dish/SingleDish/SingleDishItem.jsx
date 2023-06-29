// import { useEffect, useState } from "react"
// import SingleDish from "./SingleDish"
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const SingleDishItem = () => {
//     const params = useParams();
//     const [Item, setItem] = useState([]);
//     const dishId = params.id;
//     const singleApi = (e) => {
//         axios.get(`${process.env.REACT_APP_API}/api/v1/auth/singleItem/${params.id}`)
//         .then((p) =>{
//             setItem(p.Item)
//             console.log(p);
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }
//     useEffect(()=>{
//         singleApi();
//         console.log(Item);
//     }, [])
//     return(
//         <div>
//             {
//                 Item.SingleItem?.map((dish, index) =>{
//                     return(
//                         <SingleDish key={index} img={dish.img}></SingleDish>
//                     )
//                 })
//             }
//         </div>
        
//     )
// }

// export default SingleDishItem