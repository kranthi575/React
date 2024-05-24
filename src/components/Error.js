import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return (<div className="errorPage">
         <h1>Oops! something went wrong</h1>
         <h2>seems you are in wrong path</h2>
         <h2>{err.data}</h2>
        <a href="http://localhost:1234/">Home</a>
    </div>);
}
export default Error;