import { useEffect, useState } from "react";
import constants from "../utils/constants";
import { Link } from "react-router-dom";
const HomeFoodCards=(restaurantData)=>{
   // console.log("this is homefoodcard data::");
   // console.log(restaurantData);
    const restaurantID=restaurantData.info.id;
   // console.log("the home foodcard restaurant id is",restaurantID);
    
    const url=swiggyRestaurantImgURL+restaurantData.info.cloudinaryImageId;

    return <div  className="h-[350px] w-[240px] border border-2 rounded hover:border-black">
        
       <Link to={`/resturant/${restaurantID}`}> <img className=" m-5 h-[200px] w-[200px] border border-solid border-black rounded" src={url}></img></Link>
        <h3 className="font-bold px-4">{restaurantData.info.name}</h3>
        <h4 className="px-4">{restaurantData.info.areaName}</h4>
        <h4 className="px-4">{restaurantData.info.avgRating}⭐️</h4>
       
    </div>
}
export default HomeFoodCards;