import React from "react";
import { CustomButton } from "../../atoms/Button/Button";

export const TodoList = ({ele,title,id,status,handleToggle,handleDelete}) => {
    // console.log(title,id,status);
    
  const strike = {
    textDecoration: status ? "line-through" : null
  };
  const style = { display: "flex", border: "1px solid blue",justifyContent : "space-evenly",width: "60%",margin: "auto",marginTop:"1%",height : "40px",boxSizing : "border-box"}

    return (
        <>
            <h1 style={strike}>{title}</h1>
            <CustomButton onClick={() => handleToggle(ele)}>{status ? "Done" : "Not Done"}</CustomButton>
            <CustomButton onClick={() => handleDelete(id)}>Delete</CustomButton>           
        </>
    )
}