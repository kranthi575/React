import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import BodyContainer from "./src/components/BodyContainer";
import Footer from "./src/components/Footer";
import {RouterProvider, createBrowserRouter,Outlet} from "react-router-dom";

import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import ResturMenu from "./src/components/ResturMenu";
import Carrers from "./src/components/Carrers";
import UserContext, { UserProvider } from "./src/utils/UserContext";
import ResturMenuCard from "./src/components/ResturMenuCard";
import CartMain from "./src/components/CartMain";
import CartContextProvider from "./src/utils/CartContextProvider";

import { Provider } from "react-redux";
import appStore from "./src/utils/reduxjs/appStore";
import Login from "./src/components/access/Login";
import Register from "./src/components/access/Register";
const AppLayout=()=>{
    
    return<>
    <Provider store={appStore}>   
        <CartContextProvider>
            
            <Outlet/>
        </CartContextProvider>
    </Provider>
    </>
}
const appRouter=createBrowserRouter(
    [
        {   path:"/",
            element:<AppLayout/>,
            errorElement:<Error/>,
            children:[
                {   
                    path:"/",
                    element:[<Header/>,<BodyContainer/>,<Footer/>]
                },
                {   
                    path:"/about",
                    element:[<Header/>,<About/>,<Footer/>]
                },
                {
                    path:"/contact",
                    element:[<Header/>,<Contact/>,<Footer/>]
                },
                {
                    path:"/carrers",
                    element:[<Header/>,<Carrers/>,<Footer/>]
                },
                {
                    path:"/resturant/:resturID",
                    element:[<Header/>,<ResturMenu />,<Footer/>]
                },
                {
                    path:"/checkout",
                    element:[<Header/>,<CartMain/>,<Footer/>]
                },
                {
                    path:"/login",
                    element:[<Login/>]
                },
                {
                    path:"/register",
                    element:[<Register/>],
                }
            ]
        }

       
    ]
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter} />);