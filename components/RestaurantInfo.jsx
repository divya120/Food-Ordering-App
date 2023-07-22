import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const RestaurantInfo = () =>{
    const [resInfo, setresInfo] = useState(null);
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1202009&lng=72.8392592&restaurantId=23702&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        // console.log(json)
        setresInfo(json.data);
        console.log(resInfo)
    }
    
    const {name, avgRating, cuisines, costForTwo} = resInfo.cards[0].card.card.info;


    return resInfo===null? <Shimmer/>:
    (
        <div className="rest-info-ctn">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h3>{costForTwo}</h3>
            <h3>{avgRating}</h3>
        </div>
    )
}

export default RestaurantInfo;