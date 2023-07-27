import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_URL } from "../../utils/constants";
import useRestaurantInfo from "../../utils/useRestaurantInfo";

const RestaurantInfo = () =>{

    const[isClicked, setisClicked] = useState(false);

    const {resId} = useParams();
    console.log(resId);

    const resInfo = useRestaurantInfo(resId);
    
    if(resInfo===null) return <Shimmer/>;

    const {cards} =resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR;
    console.log(cards)


    const categories = cards.filter((card) => card.card?.card?.["@type"].endsWith("ItemCategory"))
    console.log(categories)

    
    return(
        <div>
            {/* <Accordion/> */}
        </div>
    )
}

export default RestaurantInfo;