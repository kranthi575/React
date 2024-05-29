import "../../index.css";
import React from "react";
import BodyContainer from "./BodyContainer";
import { Link } from "react-router-dom";
import useCheckOnlineStatus from "../customhooks/useCheckOnlineStatus";
const Header=()=>{
    const [status,setStatus]=React.useState("SignOn");
    const signOnButton=()=>{
      setStatus(status === "SignOn"?"Logout":"SignOn");
      
    }
    return <div className="flex justify-between bg-lime-200-300 h-150 border-b-4 border-black shadow-lg">
        <div className=" ml- 10 m-5 outline-double">
         <Link to="/">  <img className="h-[100px] w-[150px]" alt="image not found" src="https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg"></img></Link>
        </div>
        <div className="flex items-center">
        <ul className="flex m-10 p-5">
              <li><useCheckOnlineStatus/></li>
               <li className="px-5" ><Link to="/">Home</Link> </li>
               <li className="px-5" ><a href="">Search</a></li>
               <li className="px-5" ><a href="">Offers</a></li>
               <li className="px-5" ><a href="">Help</a></li>
               <li className="px-5" ><a href="">Sign in</a></li>
               <li className="px-5" ><a href="">Cart</a></li>
          <Link to="/login"><li c id="statusButton" onClick={signOnButton}>{status}</li></Link>
        </ul>
        </div>
    </div>
}

//exporting this component to App.js file
export default Header;
