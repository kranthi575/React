import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import ResturMenuCard from "./ResturMenuCard";
import constants from "../utils/constants";
import ResturMenuCardMain from "./ResturMenuCardMain";
import CartContextProvider from "../utils/CartContextProvider";

const ResturMenu=()=>{

    const [resturMenuData,setResturIndivData]=useState(null);
    const [resturName,setresturName]=useState();
    const {resturID}=useParams();
    const swiggyIndividualResturData=swiggyRestaurantMenuData+resturID;   
    
    const [showIndex,setshowIndex]=useState(0);
    
    useEffect(()=>{
        fetchData();}
    ,[]);
    const fetchData=async ()=>{
    const resturIndividualData= await fetch(swiggyIndividualResturData);
    const resturIndividualDataJson=await resturIndividualData.json();
    // console.log("ResturMenu");
    // console.log(resturIndividualDataJson);
    // console.log(resturIndividualDataJson.data.cards[4]);
    const resturMenuData=resturIndividualDataJson.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    const resturMenuDataName=resturIndividualDataJson.data.cards[0].card.card.text;
    const resturTotalMenuData=resturIndividualDataJson.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    
    const catList=resturTotalMenuData.filter((card)=>{
        if(card?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){ 
            //console.log(card?.card?.["card"]?.["title"]);
            return card?.card?.["card"]?.["title"]}
    });

    setresturName(resturMenuDataName);
    setResturIndivData(catList);
    }
    function setshowUphandleClick(showUpIndex){
        setshowIndex(showUpIndex);
    }
    if(resturMenuData===null)
    return <><h2>Page is loading...</h2></>

    return<>
        
        <h2 className="font-bold text-[28px] px-[365px] m-10">{resturName}</h2>

       { 
        
        resturMenuData?.map((category,index)=>{
        return <div className="flex justify-center space-y-10">
        
            <ResturMenuCardMain key={index} index={index} resturName={resturName} resturID={resturID} accordStatus={index==showIndex? true:false} setshowUphandleClick={setshowUphandleClick} category={category}/>
        
        </div>
        })}
        
    </>
   
}
export default ResturMenu;