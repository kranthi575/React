import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import ResturMenuCard from "./ResturMenuCard";
import constants from "../utils/constants";
import ResturMenuCardMain from "./ResturMenuCardMain";

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
    const resturTotalMenuData=resturIndividualDataJson.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    console.log("ResturTotalMenuData");
    console.log(resturTotalMenuData);
   const catList=resturTotalMenuData.filter((card)=>{
        if(card?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){ 
            console.log(card?.card?.["card"]?.["title"]);
            return card?.card?.["card"]?.["title"]}
    });
    console.log("catList")
    console.log(catList);
  /* const catList=resturTotalMenuData.filter((card)=>{console.log(card.card)})
    console.log("catList");
    console.log(catList);
    console.log("end of catList");*/
    //console.log("data from menu card:")
    //console.log(resturIndividualDataJson)
  // console.log(resturMenuDataName);
    setresturName(resturMenuDataName);
   // setResturIndivData(resturMenuData); <ResturMenuCard key={foodItem.card.info.id} {...foodItem.card.info} /> 
   //setting Catergory wise data 
    setResturIndivData(catList);
}
if(resturMenuData===null)
return <><h2>Page is loading...</h2></>

return<>
        
        <h2 className="font-bold text-[28px] px-[365px] m-10">{resturName}</h2>

       { 
        
        resturMenuData?.map((category,index)=>{
            console.log("this is from ::ResturMenu Component::");
            console.log(category);
        return <div className="flex justify-center space-y-10">
            <ResturMenuCardMain key={index} category={category}/>
        </div>
        })}
        
    </>
   
}
export default ResturMenu;