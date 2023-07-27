import { useEffect, useState } from "react"
import RestaurantInfo from "../src/components/RestaurantInfo"
import { RES_URL } from "./constants"

const useRestaurantInfo=(resId)=>{

    const[resInfo, setresInfo] = useState(null);

    useEffect(() => {
      fetchData()
    }, []);

    const fetchData=async()=>{
        const data = await fetch(RES_URL+resId);
        const json = await data.json();
        setresInfo(json.data)
    }
    
    return resInfo;
}

export default useRestaurantInfo;