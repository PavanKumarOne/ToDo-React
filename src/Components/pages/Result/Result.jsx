import React, { useState } from "react";
import { useContext,useEffect } from "react";
import { Navbar } from "../../organisms/Navbar/Navbar";
// import { Context } from "../../Context/Context";

export const Result = () => {
    var arr = [];
    const [array,setArray] = useState([]);

    useEffect(() => {
      getResult();
    }, [])
    
function getResult() {
    const localed = JSON.parse(localStorage.getItem("Todo"));
    console.log("localed",localed);    
    for(let key in localed) {
        arr.push(localed[key]);        
    }
    setArray(arr);
}
console.log("Array",array);
    return (
        
        <>
            <div>
                <Navbar />
            </div>            
            <div>
                {
                    array.length? (array.map(e => <h1 key={e.id}> {e.title}</h1>)) : (<div>Empty</div>)
                }
            </div>
            
        </>
    )
}