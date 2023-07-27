import { CDN_URL } from "../../utils/constants";

// const stylesCard = {
//     backgroundColor: "rgb(231, 231, 230)",
//     width: "200px",
//     borderRadius: "20px",
//     padding: "10px",
//     margin: "10px",
//   };

  const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines,avgRating, costForTwo, deliveryTime, id} = resData.data
    return(
      <div className= "bg-gray-200 w-48  p-3 m-3 rounded-xl shadow-lg" key={id}>
      <img
        src={
          CDN_URL +
          cloudinaryImageId
        }
        className="w-40 rounded-lg justify-center"
      ></img>
      <h3 className="font-bold">{name}</h3>
      <h4 className="flex flex-wrap">{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>Rs.{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime}</h4>
    </div>
    )
      };


export const WithPromotedRestaurant = (RestaurantCard)=>{
 return(props)=>{
  return(
    <div>
    <h1 className="absolute bg-black text-yellow-50 shadow-md rounded-md p-1"> Promoted </h1>
    {console.log("PROMOTED")}
    <RestaurantCard {...props}/>
    </div>
  )
 }
}
  
export default RestaurantCard;