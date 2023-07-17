import RestaurantCards from "./RestaurantCard";
import swiggyData from "../utils/swiggy.json"
import { useState } from "react";

const resParsed = swiggyData.data.cards[2].data.data.cards;



const Body = () => {
  const [listOfRestaurants, setlistOfRestaurant] = useState(resParsed)
    return (
      <div className="body">
        <div className="search-ctn">
          <div className="search">Search</div>
        </div>
        <div className="top-10">
          <button className="filter-btn" onClick={
            ()=> {
              filterList = listOfRestaurants.filter((res)=>
              res.data.avgRating>4
              )
              setlistOfRestaurant(filterList);
            }
          }>
            Top Restaurants
          </button>
        </div>
  
        <div className="res-container">
          {listOfRestaurants.map((restaurant, index)=>{
              return(<RestaurantCards resData={restaurant} key={index} />)
          })}
          
        </div>
      </div>
    );
  };

  export default Body;