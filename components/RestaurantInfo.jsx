import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_URL } from "../utils/constants";

const RestaurantInfo = () =>{
    const [resInfo, setresInfo] = useState(null);
    const[isClicked, setisClicked] = useState(false);
    useEffect(() => {
        fetchData()
    }, [])

    const {resId} = useParams();
    console.log(resId);

    const fetchData = async() =>{
        const data = await fetch(RES_URL+resId);
        const json = await data.json();
        console.log(json)
        setresInfo(json.data);
        // console.log(resInfo)
    }
    
    if(resInfo===null) return <Shimmer/>;

    const {name, avgRating, cuisines, costForTwo} = resInfo?.cards[0]?.card?.card?.info;
    const {cards} =resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR;
    // let itemCards = cards[2].card.card;
    const recommended = cards[2].card.card.itemCards;
    
    return(
        <>
        <div className="rest-info-ctn">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h3>{costForTwo}</h3>
            <h3>{avgRating}</h3>
        </div>
        <div className="accordion-ctn">
        <button className="accordion" onClick={(event)=>{
            isClicked===true?setisClicked(false):setisClicked(true)
            console.log(isClicked)
        }
    }> Recommended Items</button>
        <div className="panel"
        style={{
            display: isClicked===true?"block":"none"
         } }>
            {
                
            recommended.map((card, index)=>{
                // TODO: Create a div to make it look like a card.
                
                return <li key={index}>{card.card.info.name}</li>
            })}
            
         </div>

        </div>
        </>
    )
}

export default RestaurantInfo;