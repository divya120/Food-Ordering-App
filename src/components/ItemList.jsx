import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItems } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items.items)
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addItems("pizza"));
  };
  return (
    <div>
      {!!items &&
        items.map((item) => {
          // console.log(item.card.info.price)
          return (
            <div className="text-left border-b-2 border-gray-300 flex justify-between">
              <span>
                <div className="p-2  bg-gray-100 text-md ">
                  {item.card.info.name}
                </div>
                <div className="flex items-center justify-between text-s ml-2 py-1">
                  ₹ {item.card.info.price / 100}
                </div>
                <div className="flex items-center justify-between text-xs ml-2 py-1 text-gray-500 w-10/12">
                  {item.card.info.description}
                </div>
              </span>
              <span className="flex w-3/12 p-4">
                <img
                  src={CDN_URL + item.card.info.imageId}
                  alt=""
                  className="w-auto"
                />
                <button className="absolute bg-gray-800 text-gray-100 px-3 py-1 rounded-xl" onClick={handleClick}>
                  {" "}
                  Add +{" "}
                </button>
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default ItemList;
