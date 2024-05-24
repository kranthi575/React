import HomeFoodCards from "./HomeFoodCards";

import React, { useEffect } from "react";
import constants from "../utils/constants";
const BodyContainer=()=>{
     
     const [resFilterData,setresFilterData]=React.useState([]);
     const [searchText,setsearchText]=React.useState('');
     const ShimmerUI=()=>{
        return <div className="shimmerUI">

        </div>
     };
     useEffect(()=>{
     //   console.log("UseEffect function is loading...");
        fetchData();

        
     },[]);
     
     const fetchData= async ()=>{
        const resData= await fetch(swiggyRestaurantAPI);

        const resDataJson= await resData.json();
        //console.log("this is original json");
       // console.log(resDataJson);
        const  restaurantData=resDataJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      //  console.log("this data is from Body Container");
       //console.log(restaurantData);
        setresFilterData(restaurantData);
        
     }

     
     
    return  <div className="m-5">
       <div className="flex space-x-4">
        <input type="text" className="border border-solid border-black" onChange={(event)=>{setsearchText(event.target.value)}}></input>
                <button className="px-2 border border-black rounded hover:bg-amber-200 " value={searchText} onClick={()=>{
                        const filterresData=resFilterData.filter((foodcard)=>foodcard.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        console.log("Search clicked");
                        
                        setresFilterData(filterresData);
                }}> search</button>
        
        
                
                <button  className="px-4 border border-solid border-black rounded-sm hover:bg-blue-300" onClick={()=>{
                        const filterData=resFilterData.filter((foodCard)=>foodCard.info.avgRating>4);
                        setresFilterData(filterData);
                }}>Filter top rated resturant</button>
            
            </div>

            {resFilterData.length===0 ? <div className="noMatchFound">
        <h4>no match found for your search</h4>
        <button onClick={fetchData}>Back to menu</button>
        </div>:null}
        
            <div className=" m-5 flex flex-wrap space-x-5 space-y-3">
                    {resFilterData.map((HomefoodcardData )=>{
                                
                            return < HomeFoodCards  key={HomefoodcardData.info.id}  {...HomefoodcardData}/>
                    })}
            </div>

    </div>
}
export default BodyContainer;