import { useState } from "react";
import { Link } from "react-router-dom";
import ResturMenuCard from "./ResturMenuCard";
import { useSelector } from "react-redux";
const ResturMenuCardMain=({resturName,resturID,index,accordStatus,setshowUphandleClick,category})=>{

    const cardTitle=category?.card?.["card"]?.title;
    const cardLength=category?.card?.["card"]?.itemCards.length;
    const resturCatMenuData=category?.card?.["card"]?.itemCards;

    //var quantityVal=0;
    //reading data from cartslice
    const {cartItems}=useSelector((store)=>store.cart);

    const handleArrowClick=(param)=>{
        setshowUphandleClick(param);
      
    }
    
    const handleAccordStatus=()=>{
        accordStatus?handleArrowClick(null):handleArrowClick(index);
    }

    const handleQuantity=(itemId)=>{
       console.log("handleQuantity::",itemId);
       console.log("cartLength::",cartItems.length)
      if(cartItems.length==0)
       return 0;
      
      cartItems.map((cartItem)=>{
        //console.log(cartItem.id,":::",itemId);
        if(cartItem.id==itemId){
        console.log("cartItem found");
        console.log("cartItem quanity");
        console.log(typeof cartItem.quantity);
        console.log(cartItem.quantity)
        return cartItem.quantity;
        }
        else{
       // console.log("Cartzitem not found")
        return 0;}
        });

        return 0;
    }
    return <>
   
        <div className="flex justify-center flex-col space-y-4 w-8/12 h-auto shadow-lg ml-[10px]">

        <div className="flex justify-between m-2 ">    
            <span className="font-bold text-l ml-2">{cardTitle}({cardLength})</span>
            <span className="font-bold mr-6"><button onClick={()=>{handleAccordStatus();}}>{(accordStatus)? "⬆️":"⬇"}</button></span> 

        </div>
        <div className="m-10">
        {
            (accordStatus) ?

            resturCatMenuData.map((foodItem)=>{
              //  console.log(foodItem);
              var quantityVal= handleQuantity(foodItem.card.info.id);
              console.log("Quantity val",quantityVal);
               return <ResturMenuCard resturName={resturName} resturID={resturID} key={foodItem.card.info.id} quantity={quantityVal} resturMenuData={...foodItem.card.info} />
            })
            :
            null
            }
        </div>
    
        </div>
    </>
};

export default ResturMenuCardMain;