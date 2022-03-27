import React from "react";
import {createContext,useState} from "react";


export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [data,setData] = useState([]);
    const [marked,setMarked] = useState([]);      

    return (
        <Context.Provider value={{data,setData,marked,setMarked}}>{children}</Context.Provider>
    )
}