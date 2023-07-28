import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_URL } from "../../utils/constants";
import useRestaurantInfo from "../../utils/useRestaurantInfo";
import Accordion from "./Accordion";

const RestaurantInfo = () =>{


    const {resId} = useParams();


    const resInfo = useRestaurantInfo(resId);
     


    // const{ name, cuisines, avgRating, cloudinaryImageId, costForTwo} = resInfo?.cards[0]?.card.card.info
    
    if(resInfo===null) return <Shimmer/>;

    const {cards} =resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR;



    const categories = cards.filter((card) => card.card?.card?.["@type"].endsWith("ItemCategory"))

    
    return(
        <div>
            {/* <h1 className="flex justify-center text-3xl font-bold m-5 text-gray-700">{name}</h1>
            <div className="flex justify-center space-x-6">
            <span>  <p className="flex justify-center text-md text-gray-500">{cuisines.join(", ")}</p></span>
           <span><p className="flex justify-center text-md text-gray-500">₹{costForTwo/100}</p></span>
           <span><p className="flex justify-center text-md text-gray-500">🔥 {avgRating}</p></span>
            </div> */}
           
           {categories.map((category)=>{
            return(
                <div>
                    <Accordion data={category}/>
                    </div>
                
            )
           })}
        </div>
    )
}

export default RestaurantInfo;