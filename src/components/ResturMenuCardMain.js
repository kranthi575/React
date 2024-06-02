import { useState } from "react";
import { Link } from "react-router-dom";
import ResturMenuCard from "./ResturMenuCard";
const ResturMenuCardMain=({resturName,resturID,index,accordStatus,setshowUphandleClick,category})=>{

    //const [resturCatMenuData,setresturCatMenuData]=useState(null);
    //const [accordStatus,setaccordStatus]=useState(false);
   // console.log("this is ResturMenuCardMain comp..")
    //console.log(category?.card?.["card"]?.itemCards.length);
    const cardTitle=category?.card?.["card"]?.title;
    const cardLength=category?.card?.["card"]?.itemCards.length;
    const resturCatMenuData=category?.card?.["card"]?.itemCards;
    //console.log(resturCatMenuData)
    if(accordStatus){
       // console.log("false")
    }

    const handleArrowClick=(param)=>{
        setshowUphandleClick(param);
       // console.log(param)
    }
    
    const handleAccordStatus=()=>{
        accordStatus?handleArrowClick(null):handleArrowClick(index);
    }
    return <>
   
        <div className="flex justify-center flex-col space-y-4 w-8/12 h-auto shadow-lg ml-[10px]">

        <div className="flex justify-between m-2 ">    
            <span className="font-bold text-l ml-2">{cardTitle}({cardLength})</span>
            <span className="font-bold mr-6"><button onClick={()=>{handleAccordStatus();}}>{(accordStatus)? "⬆️":"⬇"}</button></span> 

        </div>
        <div className="m-10">
        {
            (accordStatus) ?

            resturCatMenuData.map((foodItem)=>{
              //  console.log(foodItem);
               return <ResturMenuCard resturName={resturName} resturID={resturID} key={foodItem.card.info.id} resturMenuData={...foodItem.card.info} />
            })
            :
            null
            }
        </div>
    
        </div>
    </>
};

export default ResturMenuCardMain;