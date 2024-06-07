import { useState } from "react";
import Description from "./Description";
import { useContext } from "react";
import CartContext from "../utils/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { addcartItem,removecartItem,addactiveResturId } from "../utils/reduxjs/cartSlice";
import ClearCartPopUp from "./ClearCartPopUp";

const ResturMenuCard=({resturName,resturID,resturMenuData})=>{
   
    const [clearcartPopUp,setclearcartPopUp]=useState(false);

    const rating=resturMenuData.ratings.aggregatedRating.rating;
    const cloudinaryImageId=resturMenuData.imageId;
    const name=resturMenuData.name;
    const price=resturMenuData.price/100;
   
    var descp=resturMenuData.description;
    const foodType=resturMenuData?.itemAttribute?.vegClassifier;
    const imgurl=swiggyRestaurantImgURL+cloudinaryImageId;

   
   // console.log(resturMenuData);
    //implementing redux cartSlice
    const {cartItems,activeResturant,cartItemsIds}=useSelector((store)=>store.cart);
    var quantityofItem;
    if(cartItems.length!=0){
        
        cartItems?.map((cartItem)=>{
            if(cartItem.id==resturMenuData.id){
                console.log("ItemFound");
                quantityofItem = cartItem.quantity;
            }else{
                console.log("Item not found")
                if(quantityofItem==null)
                quantityofItem= 0;
            }
        
        })
    
    }else
    {   
       // console.log("Item not found");
        quantityofItem=0;  
    }
    const cartDispatch=useDispatch();

   
   //console.log("Quantity",quantityofItem);
    const handleaddItem=()=>{
       
        //validating things before adding to the cart
        //check for active resturantId 1.null or matching with active resturant id 
        //if true allow to add item to the cart (To-do)
        //else show pop-up  need to clear cart,like to add new resturant items?
        if(activeResturant.length==0 || activeResturant.includes(resturID)){
        //To-do
        //resturitem json has to add to cart
        //resturantID has to be updated as active resturant id
        //check the cartItems Ids to avoid duplicates and update the items count
        //track itemscount thorughout the application alive
       //making activeresturant if null
       console.log([resturID,resturName]);
        if(activeResturant.length==0){
            cartDispatch(addactiveResturId([resturID,resturName]));
        }
        console.log("active resturID:",activeResturant);
        cartDispatch(addcartItem(resturMenuData));
        

        }else{
            console.log("Already you have active resturant..",activeResturant);
            setclearcartPopUp(true);
        }


    }

    const handleremoveItem=()=>{

    
        //Validate before removing items form cart
        //check the quantity of item if zero ignore
        //if quantity==1
        //decrease the quantity to zero and remove item form the cart
        //if quanitty>1
        //decrease the quanity of the item

        //checking for itemid
        if(!cartItemsIds.includes(resturMenuData.id)){
            console.log("Item not avialable to remove from cart")
        }
        else{
            cartDispatch(removecartItem(resturMenuData.id));
        }
    }

   
    
   //console.log("Menu card called..")
    return <>
{clearcartPopUp?<ClearCartPopUp setclearcartPopUp={setclearcartPopUp}/>:null}
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
                <span className="p-1">{quantityofItem}</span>
                <button className="text-xl" onClick={()=>{handleremoveItem()}}>-</button>
            </div>
            <img alt="Image not found" className=" mt-0 rounded-lg h-[180px] w-[180px] border border-black" src={imgurl}></img>
            
        </div>
    </div>    

</div>
    </>

}
export default ResturMenuCard;