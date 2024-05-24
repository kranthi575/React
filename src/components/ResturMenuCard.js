import constants from "../utils/constants";
import veg from "../imgs/veg.png";
import nonveg from "../imgs/nonveg.png";
import { useState } from "react";
import Description from "./Description";
const ResturMenuCard=(resturMenuData)=>{

    const [isExpand,setisExpand]=useState(false);
    const cloudinaryImageId=resturMenuData.imageId;
    const name=resturMenuData.name;
    const price=resturMenuData.price/100;
   // console.log(price);
    var descp=resturMenuData.description;
    console.log(typeof descp);
    const foodType=resturMenuData.itemAttribute.vegClassifier;
    const imgurl=swiggyRestaurantImgURL+cloudinaryImageId;

    
   // console.log("Menu card called..")
    return <>

<div className="flex justify-center ">
    <div className="h-auto w-[600px] flex justify-between border border-solid border-black">
        <div className="h-auto w-[400px] border border-b-2 border-solid border-black rounded">
            
            <span className="text-grey">{foodType}</span>
            <h2 className="font-bold">{name}</h2>
            <h3 className="text-grey"><span>&#8377;</span>{price||resturMenuData.defaultPrice/100}</h3>
            {typeof descp === 'string'?<Description descp={descp}/>:<p></p>}
        </div>
        <div className="">
            <img alt="Image not found" className=" mt-0 rounded-lg h-[200px] w-[200px] border border-black" src={imgurl}></img>
        </div>
    </div>    

</div>
    </>

}
export default ResturMenuCard;