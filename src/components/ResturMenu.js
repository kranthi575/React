import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import ResturMenuCard from "./ResturMenuCard";
import constants from "../utils/constants";

const ResturMenu=()=>{

    const [resturMenuData,setResturIndivData]=useState(null);
    const [resturName,setresturName]=useState();
    const {resturID}=useParams();
    const swiggyIndividualResturData=swiggyRestaurantMenuData+resturID;    
    useEffect(()=>{
        fetchData();}
    ,[]);
   const fetchData=async ()=>{
    const resturIndividualData= await fetch(swiggyIndividualResturData);
    const resturIndividualDataJson=await resturIndividualData.json();
    const resturMenuData=resturIndividualDataJson.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    const resturMenuDataName=resturIndividualDataJson.data.cards[0].card.card.text;
   
    //console.log("data from menu card:")
    //console.log(resturIndividualDataJson)
  // console.log(resturMenuDataName);
    setresturName(resturMenuDataName);
    setResturIndivData(resturMenuData);
}
if(resturMenuData===null)
return <><h2>Page is loading...</h2></>

return<>
        
        <h2 className="font-bold text-xl px-[240px] m-10">{resturName}</h2>

       { 
        
        resturMenuData?.map((foodItem)=>{
            console.log(foodItem);
        return <div className="flex flex-col space-y-5 justify-center m-4">
        <ResturMenuCard key={foodItem.card.info.id} {...foodItem.card.info} />
        </div>
        })}
        
    </>
   
}
export default ResturMenu;