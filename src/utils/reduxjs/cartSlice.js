import { createSlice } from "@reduxjs/toolkit";
function handleaddcartItem(state,action){

    const newItem = action.payload;
    //checking duplicate or existing item
    if(!state.cartItemsIds.includes(newItem.id)){
        //pushing id into the cartItemsIds
        state.cartItemsIds.push(newItem.id);
        //pushing item into cart
        state.cartItems.push({...newItem,quantity:1})
        //updating cartTotalPrice
        console.log("NEW ITEM PRICE",newItem.price);
        state.cartTotalPrice+=newItem.price ==null? 13900:newItem.price;
        //updating cartTotalItems
        state.cartTotalItems+=1;
    }else{
        //getting the existing item
        const exisitingItem =  state.cartItems.find(item=>item.id==newItem.id);
        //updating quanity of the item inside the state
        exisitingItem.quantity+=1;
        //updating the total cart price
        state.cartTotalPrice+=exisitingItem.price==null?13900:exisitingItem.price;
        //updating totalItems count
        state.cartTotalItems+=1;
    }
}

function handleremovecartItem(state,action){

    //already validated removing conditon
    const removeItemId=action.payload;

    //check for item quantity first if quantity is equal to one remove item else decrease the quantity
    const removingItem=state.cartItems.find((item)=>item.id==removeItemId);
    if(removingItem.quantity==1){
        //remove item from cartItemIds
        state.cartItemsIds=state.cartItemsIds.filter((itemId)=>itemId!=removeItemId);
        //removing item from cart
        //filter returns items which are not matching with ids ::similar to deleting items::
        state.cartItems=state.cartItems.filter((item)=>item.id!=removeItemId);

        state.cartTotalPrice-=removingItem.price ==null? 13900:removingItem.price;
        state.cartTotalItems-=1;
    }else{
        removingItem.quantity-=1;
        state.cartTotalPrice-=removingItem.price ==null? 13900:removingItem.price;
        state.cartTotalItems-=1;

    }


}
const initialState={
    cartItems:[],
    activeResturant:[],
    cartItemsIds:[],

    cartTotalPrice:0,
    cartTotalItems:0,
}
const cartSlice=createSlice({

    name:'cart',
    initialState,
    reducers:{
        addactiveResturId:(state,action)=>{
            console.log("addactive resturID");
            state.activeResturant.push(...action.payload)
        },
        addcartItem:(state,action)=>{
            handleaddcartItem(state,action);
        },
        removecartItem:(state,action)=>{
            handleremovecartItem(state,action);
        },
        clearcartItems:(state)=>{
            state.cartItems=[];
            state.activeResturant=[];
            state.cartItemsIds=[];
            state.cartTotalPrice=0;
            state.cartTotalItems=0;
            },
    }

});

export const {addactiveResturId,addcartItem,removecartItem,clearcartItems}=cartSlice.actions;
export default cartSlice.reducer;