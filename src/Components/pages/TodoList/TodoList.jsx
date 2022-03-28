import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { CustomButton } from "../../atoms/Button/Button";

export const TodoList = ({index,ele,title,id,status,handleToggle,handleDelete}) => {
    // console.log(title,id,status);
    
  const strike = {
    textDecoration: status ? "line-through" : null
  };
  const style = { display: "flex", border: "1px solid blue",justifyContent : "space-evenly",width: "60%",margin: "auto",marginTop:"1%",height : "40px",boxSizing : "border-box"}

    return (
      <Draggable index={index} draggableId={id.toString()}>
      {
        (provided) => (
          <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
              <h1 style={strike}>{title}</h1>
              <CustomButton onClick={() => handleToggle(ele)}>{status ? "Done" : "Not Done"}</CustomButton>
              <CustomButton onClick={() => handleDelete(id)}>Delete</CustomButton>           
          </div>
        )
      } 
        </Draggable>
    )
}