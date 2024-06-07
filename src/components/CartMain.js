import { useContext, useState } from "react";
import CartContext from "../utils/CartContext";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartMain=()=>{

    const {activeResturant,cartItems,cartTotalPrice,cartTotalItems}=useSelector((store)=>store.cart);

    var totalPrice=cartTotalPrice;
    const resturName=activeResturant[1];
    //console.log(cartItemListData)
    //::Redux::
    //reading data from cartslice
   
    
    return<>
    <div className="flex items-center flex-col  h-auto border border-solid border-green-800">
        <div >
            <p className="font-bold text-xl m-5 ">{resturName}</p>
        </div>
        <div className="">
    
            {cartItems.map((cartItem,index)=>{
                return <CartItem key={cartItem.id} cartItem={cartItem} />
                })}
        </div>
        <div className=" w-[450px] h-[100px] m-2 border border-solid border-black">
            <p >Billing Details:</p>
            <p>Total Quantity:{cartTotalItems}</p>
            <p>Total price : ₹{totalPrice/100}</p>
        </div>
    </div>
    </>

}
export default CartMain;