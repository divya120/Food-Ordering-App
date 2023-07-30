import { LOGO_URL } from "../../utils/constants";  
import { useContext, useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import {useOnlineStatus} from '../../utils/useOnlineStatus';
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () => {

  const cartItems = useSelector((store)=>{
    return store.cart.items
  })

  const [btnName, setbtnName] = useState("Login");

  // const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  console.log(data)
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
          <li className="font-bold">Cart ({cartItems.length} items)</li>
          <li> <button className="login-btn" onClick={(event)=>{
          btnName==="Login"?setbtnName("Logout"):setbtnName("Login");
        }}>{btnName}</button></li>
        <li>Logged User : {data.loggedInUser}</li>
        </ul>
       
      </div>
    </div>
  );
};

export default Header;