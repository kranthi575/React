import { useEffect, useState } from "react";
const UseCheckOnlineStatus=()=>{

    var status="offline";
    if(navigator.onLine){
      status="online"
    }else{
      status="offline"
    }
return status==='online'? true:false;
};

export default UseCheckOnlineStatus;
