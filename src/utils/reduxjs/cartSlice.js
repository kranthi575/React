import { createSlice } from "@reduxjs/toolkit";


function handleaddcartItem(state,action){

    const newItem = action.payload;
    //checking duplicate or existing item
    if(!state.cartItemsIds.has(newItem.id)){
        //new item

        //pushing id into the cartItemsIds
        state.cartItemsIds.add(newItem.id);
        //pushing item into cart
        state.cartItems.push({...newItem,quantity:1})
        //updating cartTotalPrice
        state.cartTotalPrice+=newItem.price;
        //updating cartTotalItems
        state.cartTotalItems+=1;
    }else{
        //getting the existing item
        const exisitingItem =  state.cartItems.find(item=>item.id==newItem.id);
        //updating quanity of the item inside the state
        exisitingItem.quantity+=1;
        //updating the total cart price
        state.cartTotalPrice+=exisitingItem.price;
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
        state.cartItemsIds.delete(removeItemId);
        //removing item from cart
        //filter returns items which are not matching with ids ::similar to deleting items::
        state.cartItems=state.cartItems.filter((item)=>item.id!=removeItemId);

        state.cartTotalPrice-=removingItem.price;
        state.cartTotalItems-=1;
    }


}
const initialState={
    cartItems:[],
    activeResturantID:null,
    cartItemsIds:new Set(),

    cartTotalPrice:0,
    cartTotalItems:0,
}
const cartSlice=createSlice({

    name:'cart',
    initialState,
    reducers:{
        addactiveResturId:(state,action)=>{state.activeResturantID=action.payload},
        addcartItem:(state,action)=>{
            handleaddcartItem(state,action);
        },
        removecartItem:(state,action)=>{
            handleremovecartItem(state,action);
        },
        clearcartItems:(state,action)=>{state.cartItems.length==0},
    }

});

export const {addactiveResturId,addcartItem,removecartItem,clearcartItems}=cartSlice.actions;
export default cartSlice.reducer;