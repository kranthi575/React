import { useDispatch, useSelector } from "react-redux";
import { clearcartItems } from "../utils/reduxjs/cartSlice";
const ClearCartPopUp=({setclearcartPopUp})=>{


    const {cartItems}=useSelector((store)=>store.cart);
    const cartDispatch=useDispatch();

    function handleClearCart(){
        cartDispatch(clearcartItems());
       // console.log("CartItems::",cartItems.length);
       setclearcartPopUp(false);
    }

    function handelNoClearCart(){
        setclearcartPopUp(false);
    }

    return <>
        <div className="flex flex-col">
            <h1>Items already in cart</h1>
            <span>Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?</span>
           <div className="flex flex-row p-4 m-2">
                <button className="border to-black" onClick={()=>{handelNoClearCart()}}>No</button>
                <button className="border to-black" onClick={()=>{handleClearCart()}}>Yes,start afresh</button>
            </div>
        </div>
    </>
}
export default ClearCartPopUp;