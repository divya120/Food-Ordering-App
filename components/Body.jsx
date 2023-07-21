import RestaurantCards from "./RestaurantCard";
import swiggyData from "../utils/swiggy.json"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export const resParsed = swiggyData.data.cards[2].data.data.cards;


const Body = () => {
    const [listOfRestaurants, setlistOfRestaurant] = useState([])
    const [searchText, setsearchtext] = useState();
    const[filterList, setfilterList] = useState([]);


  useEffect(() => {
    fetchData()
  },[])



  const fetchData = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1202009&lng=72.8392592&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json?.data?.cards[2]?.data?.data)
    setlistOfRestaurant(json?.data?.cards[2]?.data?.data.cards)
    setfilterList(json?.data?.cards[2]?.data?.data.cards)
  }

  return listOfRestaurants.length == 0?<Shimmer/>:(
      <div className="body">
        <div className="search-ctn">
          <input type="text" className="search" value={searchText} placeholder="Search" onChange={(event)=>{
            setsearchtext(event.target.value)
          }}></input>
          <button className="button-rating"  onClick={(event)=>{
          let tempFilterList = listOfRestaurants.filter((res)=>{
            return (res.data.name.toLowerCase().includes(searchText.toLowerCase()))
           })
           setfilterList(tempFilterList)

          }}>Search</button>
        <div className="top-10">
          <button className="filter-btn" onClick={
            ()=> {
              console.log(listOfRestaurants)
              let tempFilterList = listOfRestaurants.filter((res)=>
              res.data.avgRating>4
              )
              setfilterList(tempFilterList);
            }
          }>
            Top Restaurants
          </button>
          </div>
        </div>
  
        <div className="res-container">
          {filterList.map((restaurant, index)=>{
              return(<RestaurantCards resData={restaurant} key={index} />)
          })
          
          }
          
        </div>
      </div>
    );
  };

  export default Body;