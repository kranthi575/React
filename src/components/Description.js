import { useState } from "react";

const Description=({descp})=>{
    const maxChars=90;
    const [isExpand,setisExpand]=useState(false);
    
    if(descp.toString().length<=maxChars){return <p>{descp}</p>}

    const text=descp.toString().substring(0,maxChars);

    return <>
    {!isExpand && <p>{text}...</p>}{!isExpand &&<a onClick={()=>{setisExpand(true)}} >...Read more</a>}
    {isExpand && <p>{descp}</p>}{isExpand && <a onClick={()=>{setisExpand(false)}}>...Read less</a>}
    </>

}
export default Description;