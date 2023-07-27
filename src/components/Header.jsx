import { LOGO_URL } from "../../utils/constants";  
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import {useOnlineStatus} from '../../utils/useOnlineStatus';



const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  // const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between p-2 bg-gray-200 shadow-xl">
      <div className="w-20 m-5">
        <img
          src= {LOGO_URL}
          className="logo"
          alt="logo"
        ></img>
      </div>

      <div className="flex items-center">
        <ul className="flex justify-center items-center p-5 space-x-9">
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