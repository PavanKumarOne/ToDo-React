import { v4 as uuid} from "uuid";
import React, { useState,useContext } from "react";
import { Context } from "../../Context/Context";
import "./TodoItem.css"
import { CustomButton } from "../../atoms/Button/Button";

let obj = {
    title : "",
    status : false
}

export const TodoItem = () => {
    const {data,setData} = useContext(Context)
    const [query,setQuery] = useState(obj);

    const handleChange = (e) => {
        let payload = {
            ...query,
            title : e.target.value
        }
        setQuery(payload);
    }

    const handleAdd = () => {
        let payload = {
            title : query.title,
            status : query.status,
            id : uuid()
        }
        setData([...data,payload]);
    }
   

    return (
        <div className="inp">
            <input type="text" placeholder = "Add Todo" onChange={handleChange} />  
            <CustomButton onClick={handleAdd}>Add</CustomButton> 
        </div>
    )
}