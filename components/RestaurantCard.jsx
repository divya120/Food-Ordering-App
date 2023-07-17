import { CDN_URL } from "../utils/constants";

const stylesCard = {
    backgroundColor: "rgb(231, 231, 230)",
    width: "200px",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
  };

  const RestaurantCards = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines,avgRating, costForTwo, deliveryTime, id} = resData.data
    return(
      <div className="res-cards" style={stylesCard} key={id}>
      <img
        src={
          CDN_URL +
          cloudinaryImageId
        }
        className="card-img"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>Rs.{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime}</h4>
    </div>
    )
      };
  
export default RestaurantCards;