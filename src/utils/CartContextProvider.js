import {  useState } from "react";
import CartContext from "./CartContext";
const CartContextProvider=({children})=>{

    const [activeResturant,setactiveResturant]=useState(null);
    const [cartItemList,setcartItemList]=useState([]);
    const [cartItemIdsSet,setcartItemIdsSet]=useState(new Set(['1']));

    const settodefaultCart=()=>{
        setactiveResturant(null);
        setcartItemList([]);
        setcartItemIdsSet(new Set['1']);
    }
    const updatecartItemList=(cartitemtoAdd)=>{
        
        //checking id in ids to avoid duplicates.
        //console.log(cartitemtoAdd.id);
       if(!cartItemIdsSet?.has(cartitemtoAdd.id)){
            setcartItemIdsSet(new Set([...cartItemIdsSet,cartitemtoAdd.id]));
            cartItemList.push(cartitemtoAdd);
            setcartItemList(cartItemList);
            }
        else{
            
            cartItemList.map((cartItem)=>{

                if(cartItem.id===cartitemtoAdd.id){
                  return  {...cartItem,quantity: cartItem.quantity+=1}
                }

            });
        }
        // setcartItemList(cartitem);
    }

    const removecartItemList=(cartitemtoRemove)=>{
        if(  !cartItemIdsSet.has(cartitemtoRemove.id)){
            console.log("No item exists with that item id");
            }
        else{
            const updatedCart= cartItemList.map((cartItem)=>{
                console.log("cartitemtoRemove");
                console.log(cartitemtoRemove)
                if(cartItem.id===cartitemtoRemove.id){
                  return  {...cartItem,quantity: cartItem.quantity-=1}
                }else{
                   return {...cartItem};
                }

            });

            //removing cartitems with quantity has 0
            console.log("updateing cart")
            console.log(updatedCart)
            const updatedCartwithNoZeroQuantity= updatedCart.filter(cartItem=>cartItem.quantity>0);
            console.log("updatedwithzero");
            console.log(updatedCartwithNoZeroQuantity)
            setcartItemList(updatedCartwithNoZeroQuantity);
            
            //removing ids from idSet
           if(!updatedCartwithNoZeroQuantity.some(cartItem=>cartItem?.id==cartitemtoRemove.id)){
            cartItemIdsSet.delete(cartitemtoRemove.id);
            const updatedcartIdsSet=new Set(cartItemIdsSet);
            console.log("updatedcartIdsSet");
            console.log(updatedcartIdsSet);
            setcartItemIdsSet(updatedcartIdsSet);
           
           }
            
            
        }

    }
    console.log("final CartIds")
    console.log(cartItemIdsSet);  
    console.log("final cartitemlist");
    console.log(cartItemList);  

    return(
        <CartContext.Provider value={{activeResturant,settodefaultCart,cartItemList,updatecartItemList,removecartItemList}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;