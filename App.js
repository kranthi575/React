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

const AppLayout=()=>{
    return<>
    <Header/>
    <Outlet/>
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
                    element:[<BodyContainer/>,<Footer/>]
                },
                {   
                    path:"/about",
                    element:[<About/>,<Footer/>]
                },
                {
                    path:"/contact",
                    element:[<Contact/>,<Footer/>]
                },
                {
                    path:"/carrers",
                    element:[<Carrers/>,<Footer/>]
                },
                {
                    path:"/resturant/:resturID",
                    element:[<ResturMenu/>,<Footer/>]
                }
            ]
        }

       
    ]
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider key={Math.random} router={appRouter} />);