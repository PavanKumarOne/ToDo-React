import React from "react";
import { Route, Routes } from "react-router-dom";
import { Result } from "../pages/Result/Result";
import { ToDo } from "../pages/ToDo/ToDo";

export const Myrouter = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<ToDo />}></Route>    
        <Route path="/result" element={<Result />}></Route>      
      </Routes>
    </div>
  );
};
