
// import { ToDo } from "./Components/pages/ToDo/ToDo";
import { useContext } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Context } from "./Components/Context/Context";
import { Myrouter } from "./Components/myRoutes/Myrouter";
import "./styles.css";

export default function App() {
  const {data,setData} = useContext(Context);

  const onDragEnd = (result) => {
    console.log("result=",result);
    const {source,destination} = result;
    if(!destination) {
      return;
    }
    if(destination.droppableId===source.droppableId && destination.index===source.index) {
      return;
    }

    let add,
      active = data;
     
    if(source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index,1);
    }  
    if(destination.droppableId === "TodosList") {
      active.splice(destination.index,0,add);
    }  
    setData(active);
  }


  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <Myrouter />
    </div>
    </DragDropContext>
  ); 
}
