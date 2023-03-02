import React from "react";


const Navbar = () => {

    return(
        <>
        <div className="navbar">
         <div className="logo">
          <img src="images1/Logo.jpg" width="125px" />
         </div>
         <div className="nav">
          <ul>
           <li>Home</li>
           <li>Products</li>
           <li>About</li>
           <li>contact</li>
           <li>Account</li>
          </ul>
         </div>
         <img className="log" src="images1/cart.png" width="30px" />
        </div>
        </>
    )
}
export default Navbar;