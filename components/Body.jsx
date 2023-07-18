import RestaurantCards from "./RestaurantCard";
import swiggyData from "../utils/swiggy.json"
import { useEffect, useState } from "react";

const resParsed = swiggyData.data.cards[2].data.data.cards;



const Body = () => {
  const [listOfRestaurants, setlistOfRestaurant] = useState([])

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1202009&lng=72.8392592&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json?.data?.cards[2]?.data?.data)
    setlistOfRestaurant(json?.data?.cards[2]?.data?.data.cards)
  }



  
  
  
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