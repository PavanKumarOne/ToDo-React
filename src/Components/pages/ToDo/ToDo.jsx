import React, { useState,useEffect, useContext } from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { Navbar} from "../../organisms/Navbar/Navbar";
import { Context } from "../../Context/Context";
import "./Todo.css";
import { Droppable } from "react-beautiful-dnd";


export const ToDo = () => {
    const {data,setData} = useContext(Context)
    // const [data,setData] = useState([]);
    console.log("datawithout =",data);

    useEffect(() => {
      console.log("data",data);
     if (localStorage.getItem("Todo") === null) {
            localStorage.setItem("Todo", JSON.stringify({}));
        }      
          let basket = JSON.parse(localStorage.getItem("Todo"));
          for(let i = 0; i < data.length; i++) {
            if(data[i].status ) {
                basket[data[i].id] = data[i];
            }
            if(data[i].status === false && basket[data[i].id]) {
                console.log("data====",data);
                console.log("basket====",basket);
                delete basket[data[i].id];
            }
          }         
          localStorage.setItem("Todo", JSON.stringify(basket));
    }, [data])
    

    const handleToggle = (ele) => {
        let toggle = data.map(e => e.id==ele.id ? {...e,status:!e.status} : e) ;  

        setData(toggle);
    }

    const handleDelete = (id) => {
        let deletes = data.filter(e => e.id!==id) ;
        setData(deletes);
    }

    return (
        <>
            <Navbar />
            <Droppable droppableId="TodosList">
            {
                (provided) => (
                    <>
                <TodoItem />
                <div className="todo" ref={provided.innerRef} {...provided.droppableProps}>
                    {
                        data && data.map((e,index) => {
                            {/* console.log("e = ",e); */}
                            return <TodoList key={e.id} index={index} ele={e} {...e} handleDelete={handleDelete} handleToggle={handleToggle}/>
                        })
                    }
                 {provided.placeholder}
                </div>
                    </>
                )
            }
            </Droppable>
        </>
    )
}