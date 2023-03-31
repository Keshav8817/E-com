import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="images1/Logo.jpg" width="125px" />
      </div>
      <div className="nav">
        <ul>
           
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">contact</NavLink></li>
          <li><NavLink to="/login">Account</NavLink></li>
        </ul>
      </div>
      <img className="log" src="images1/cart.png" width="30px" />
    </nav>
  );
};
export default Navbar;
