import { LOGO_URL } from "../utils/constants";  

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;