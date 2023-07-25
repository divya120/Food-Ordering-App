import { useEffect, useState } from "react";
import { RES_LIST } from "./constants";


const useListOfRestaurants = () =>{
    const [listOfRestaurants, setlistOfRestaurant] = useState([]);
    const [filterList, setfilterList] = useState([]);

    useEffect(()=>{
        fetchData()
    },[])


    const fetchData = async() =>{
        const data = await fetch(RES_LIST);
        const json = await data.json();
        setlistOfRestaurant(json?.data?.cards[2]?.data?.data.cards)
        setfilterList(json?.data?.cards[2]?.data?.data.cards)
      }
    return [listOfRestaurants, filterList]
}

export default useListOfRestaurants;