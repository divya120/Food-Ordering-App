import RestaurantCard, {WithPromotedRestaurant} from "./RestaurantCard";
import swiggyData from "../../utils/swiggy.json";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_LIST } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

export const resParsed = swiggyData.data.cards[2].data.data.cards;

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurant] = useState([]);
  const [searchText, setsearchtext] = useState();
  const [filterList, setfilterList] = useState([]);

  const RestaurantCardWithPromotedLabel = WithPromotedRestaurant(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST);
    const json = await data.json();
    // console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    console.log(json);
    // setlistOfRestaurant(json?.data?.cards[2]?.data?.data.cards)
    // setfilterList(json?.data?.cards[2]?.data?.data.cards)
    setlistOfRestaurant(resParsed);
    setfilterList(resParsed);
  };

  // console.log(listOfRestaurants)

  const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus)

  if (onlineStatus === false) {
    return <h1>Sorrryyyy! You are offline!</h1>;
  }

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center items-center m-5 space-x-10 ">
        <input
          type="text"
          className="p-2 w-[300px] border-solid border-gray-200 border-2 rounded-xl m-5"
          value={searchText}
          placeholder="Search"
          onChange={(event) => {
            setsearchtext(event.target.value);
          }}
        ></input>
        <button
          className="bg-blue-300 p-2 rounded-lg font-bold"
          onClick={(event) => {
            let tempFilterList = listOfRestaurants.filter((res) => {
              return res.data.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setfilterList(tempFilterList);
          }}
        >
          Search
        </button>
        <div className="top-10">
          <button
            className="bg-green-300 border-solid border-2 border-gray-200 p-2 rounded-xl hover:bg-green-500"
            onClick={() => {
              console.log(listOfRestaurants);
              let tempFilterList = listOfRestaurants.filter(
                (res) => res.data.avgRating > 4
              );
              setfilterList(tempFilterList);
            }}
          >
            Top Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap p-4 m-5">
        {filterList.map((restaurant, index) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              {/* <RestaurantCards resData={restaurant} /> */}
              {console.log(restaurant.data.promoted)}
              {restaurant.data.promoted?(<RestaurantCardWithPromotedLabel resData={restaurant} />):(<RestaurantCard resData={restaurant}/>)}
              
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
