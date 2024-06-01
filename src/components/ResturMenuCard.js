import { useState } from "react";
import Description from "./Description";
import { useContext } from "react";
import CartContext from "../utils/CartContext";

    const ResturMenuCard=(resturMenuData)=>{
    const rating=resturMenuData.ratings.aggregatedRating.rating;
    const [isExpand,setisExpand]=useState(false);
    var [countItems,setcountItems]=useState(0);
    const cloudinaryImageId=resturMenuData.imageId;
    const name=resturMenuData.name;
    const price=resturMenuData.price/100;

    //destructuring useContext params
    const {cartItemList,updatecartItemList,removecartItemList}=useContext(CartContext);
    //console.log(useContext(CartContext));
//     console.log("resturMenuData::");
//     console.log(resturMenuData);
//    // console.log(price);
    var descp=resturMenuData.description;
   // console.log(typeof descp);
    const foodType=resturMenuData.itemAttribute.vegClassifier;
    const imgurl=swiggyRestaurantImgURL+cloudinaryImageId;

    //adding order items to cart using usecontext i.e.., CartContext

    const handleaddItem=()=>{
        setcountItems(++countItems);
        const quantity=countItems;
        const cartItemtoAdd={...resturMenuData,quantity};
        updatecartItemList(cartItemtoAdd);

    }

    const handleremoveItem=()=>{
        if(countItems!=0){
            setcountItems(--countItems);
            const quantity=countItems;
            const cartItemtoRemove={...resturMenuData,quantity};
            removecartItemList(cartItemtoRemove);
    
        }
    }

   
    
   //console.log("Menu card called..")
    return <>

<div className="flex justify-center  ">
    <div className="h-auto w-[600px] flex justify-between  border-b-2 ">
        <div className="h-auto w-[400px]  rounded">
            
            <span className="text-grey">{foodType}</span>
            <h2 className="font-bold">{name}</h2>
            <h3 className="text-grey"><span>&#8377;</span>{price||resturMenuData.defaultPrice/100}</h3>
            <h3>{rating}⭐️</h3>
            {typeof descp === 'string'?<Description descp={descp}/>:<p></p>}
        </div>
        <div className="">
        <div className="absolute ml-5 bg-white w-20 h-10 rounded-md flex justify-between ">
                <button className="text-xl" onClick={()=>{handleaddItem()}}>+</button>
                <span className="p-1">{countItems}</span>
                <button className="text-xl" onClick={()=>{handleremoveItem()}}>-</button>
            </div>
            <img alt="Image not found" className=" mt-0 rounded-lg h-[180px] w-[180px] border border-black" src={imgurl}></img>
            
        </div>
    </div>    

</div>
    </>

}
export default ResturMenuCard;