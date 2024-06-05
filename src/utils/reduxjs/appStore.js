
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { enableMapSet } from "immer";

//npm install immer
//this is mandatory to work with set and map inside reducers

enableMapSet();

const appStore=configureStore({
    reducer:{
    cart:cartReducer,
    }
});

export default appStore;