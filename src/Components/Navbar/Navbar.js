import React from "react";
import "./Navbar.css";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="LNavbar">
        <Link to="/" id="Name" className="MyName"><b>Anuprash</b></Link>
        <Link to="/" id="Surname" className="MyName"><b>&nbsp;Gautam</b></Link>
      </div>
      
      <div className="RNavbar">
        <Buttons />
      </div>
    </div>
  );
};

export default Navbar;
