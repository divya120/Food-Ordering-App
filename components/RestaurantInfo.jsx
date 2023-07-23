import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const RestaurantInfo = () =>{
    const [resInfo, setresInfo] = useState(null);
    const[isClicked, setisClicked] = useState(false);
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1202009&lng=72.8392592&restaurantId=23702&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        // console.log(json)
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
                
            recommended.map((card)=>{
                // TODO: Create a div to make it look like a card.
                return <li>{card.card.info.name}</li>
            })}
            
         </div>

        </div>
        </>
    )
}

export default RestaurantInfo;