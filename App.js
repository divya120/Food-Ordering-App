import React from "react";
import ReactDOM from "react-dom";
import swiggyData from "./swiggy.json";

const Header = () => {
  return (
    <div className="header">
      <div className="res-logo">
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*v5SYqjYEdQMPIwNduRrnCw.png"
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

const stylesCard = {
  backgroundColor: "rgb(231, 231, 230)",
  width: "200px",
  borderRadius: "20px",
  padding: "10px",
  margin: "10px",
};

const resParsed = swiggyData.data.cards[2].data.data.cards;
console.log(resParsed)

const RestaurantCards = (props) => {
  const { resData } = props;
  const {cloudinaryImageId, name, cuisines,avgRating, costForTwo, deliveryTime, id} = resData.data
  return(
    <div className="res-cards" style={stylesCard} key={id}>
    <img
      src={
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
        cloudinaryImageId
      }
      className="card-img"
    ></img>
    <h3>{name}</h3>
    <h4>{cuisines.join(', ')}</h4>
    <h4>{avgRating}</h4>
    <h4>Rs.{costForTwo / 100} FOR TWO</h4>
    <h4>{deliveryTime}</h4>
  </div>
  )
    };

const Body = () => {
  return (
    <div className="body">
      <div className="search-ctn">
        <div className="search">Search</div>
      </div>

      <div className="res-container">
        {resParsed.map((restaurant)=>{
            return(<RestaurantCards resData={restaurant} key={restaurant.data.id} />)
        })}
        
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
