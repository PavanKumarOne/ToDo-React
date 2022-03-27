import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">ToDo</Link>
      <Link to="/result">result</Link>
    </div>
  );
};
