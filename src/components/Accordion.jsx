import { useState } from "react";
import ItemList from "./ItemList";

const Accordion = ({ data, isClicked = false, onClick }) => {
  // console.log(data)
  const [isOpen, setIsOpen] = useState(isClicked);
  // const [isClicked, setisClicked] = useState(false);
  const handleClick = () => {
    onClick();
    // isClicked? setisClicked(false):setisClicked(true)
    // setshowIndex();
  };

  return (
    <div className="flex justify-center mt-5">
      <div
        className="w-6/12 bg-gray-100 p-4 rounded-md shadow-lg cursor-pointer"
        onClick={handleClick}
      >
        {/* Header */}
        <div className="flex justify-between">
          <span className="font-bold text-xl">{data.card.card.title}</span>
          <span>⏬</span>
        </div>
        <div className="my-4">
          {isClicked && <ItemList items={data.card.card.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
