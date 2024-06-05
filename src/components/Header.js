import "../../index.css";
import React, { useEffect } from "react";
import { useContext } from "react";
import BodyContainer from "./BodyContainer";
import { Link } from "react-router-dom";
import UseCheckOnlineStatus from "../customhooks/useCheckOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/reduxjs/cartSlice";
const Header=()=>{

    const [status,setStatus]=React.useState("SignOn");
    const signOnButton=()=>{
      setStatus(status === "SignOn"?"Logout":"SignOn");
      
    }


    //reading carSlice data
    //reading useContext data
    // const data=useContext(UserContext);
    // console.log(data.loggedInUser);

    return <div className="flex justify-between bg-lime-200-300 h-150 border-b-4 border-black shadow-lg">
        <div className=" ml- 10 m-5 outline-double">
         <Link to="/">  <img className="h-[100px] w-[150px]" alt="image not found" src="https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg"></img></Link>
        </div>
        <div className="flex items-center">
        <ul className="flex m-10 p-5">
                {console.log(UseCheckOnlineStatus())}
               <li className="px-5" ><Link to="/">Home</Link> </li>
               <li className="px-5" ><a href="">Search</a></li>
               <li className="px-5" ><a href="">Offers</a></li>
               <li className="px-5" ><a href="">Help</a></li>
               <li className="px-5" ><a href="">Sign in</a></li>
               <li className="px-5" ><Link to="/checkout">Cart</Link></li>
          <Link to="/login"><li  id="statusButton" onClick={signOnButton}>{status}</li></Link>
        </ul>
        </div>
    </div>
}

//exporting this component to App.js file
export default Header;
