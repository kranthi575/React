import { useContext, useState } from "react";
import CartContext from "../utils/CartContext";
import CartItem from "./CartItem";

const CartMain=()=>{

    var totalPrice=0;
    const cartData=useContext(CartContext);
    const cartItemListData=cartData.cartItemList;
    const resturName=cartItemListData[0]?.resturName;
    console.log(cartItemListData)

    cartItemListData.map((cartItem)=>{
       // console.log(cartItem.price)
       var price= (cartItem.price!=null)? cartItem.price/100:139;
       var quantity=cartItem.quantity;
       totalPrice+=price*quantity;
    });

    return<>
    <div className="flex items-center flex-col  h-auto border border-solid border-green-800">
        <div >
            <p className="font-bold text-xl m-5 ">{resturName}</p>
        </div>
        <div className="">
    
            {cartItemListData.map((cartItem,index)=>{
                return <CartItem key={cartItem.id} cartItem={cartItem} />
                })}
        </div>
        <div className=" w-[450px] h-[100px] m-2 border border-solid border-black">
            <p >Billing Details:</p>
            <p>Total price : ₹{totalPrice}</p>
        </div>
    </div>
    </>

}
export default CartMain;