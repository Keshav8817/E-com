import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="images1/Logo.jpg" width="125px" />
      </div>
      <div className="navItem">
        <ul>
           
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/">Products</NavLink></li>
          <li><NavLink to="/">About</NavLink></li>
          <li><NavLink to="/contact">contact</NavLink></li>
          <li><NavLink to="/login">Account</NavLink></li>
        </ul>
      </div>
      <img className="log" src="images1/cart.png" width="30px" />
    </div>
  );
};
export default Navbar;
