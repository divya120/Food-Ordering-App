import { LOGO_URL } from "../utils/constants";  
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import {useOnlineStatus} from '../utils/useOnlineStatus';



const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  // const onlineStatus = useOnlineStatus();

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
          {/* <li> Online:{useOnlineStatus()? "✅":"🛑"}</li> */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li> <button className="login-btn" onClick={(event)=>{
          btnName==="Login"?setbtnName("Logout"):setbtnName("Login");
        }}>{btnName}</button></li>
        </ul>
       
      </div>
    </div>
  );
};

export default Header;