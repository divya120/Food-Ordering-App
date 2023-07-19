import { LOGO_URL } from "../utils/constants";  
import { useEffect, useState } from "react";


const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="res-logo">
        <img
          src= {LOGO_URL}
          className="logo"
          alt="logo"
        ></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li> <button className="login-btn" onClick={(event)=>{
          btnName==="Login"?setbtnName("Logout"):setbtnName("Login");
        }}>{btnName}</button></li>
        </ul>
       
      </div>
    </div>
  );
};

export default Header;