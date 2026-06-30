import { useEffect } from "react";

function Counter({count, data}){

const handleCounter = () =>{
    console.log("HandleCounter called")
}


const handleData = () => {
    console.log("Handle Data");
}

useEffect(() => {
    handleCounter()
},[count]) 


useEffect(() => {
    handleData()
},[data])

    return(
        <div>
            <h1>Counter Value:- {count}</h1>
            <h1>Data Value:- {data}</h1>
        </div>
    )
}

export default Counter;