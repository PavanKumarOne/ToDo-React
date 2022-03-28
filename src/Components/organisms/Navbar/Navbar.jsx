import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav">
      <Link className="link" to="/">ToDo</Link>
      <Link className="link" to="/result">result</Link>
    </div>
  );
};
