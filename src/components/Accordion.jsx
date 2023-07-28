import { useState } from "react";
import ItemList from "./ItemList";


const Accordion = (data) => {
    // console.log(data)

    const [isClicked, setisClicked] = useState(false);
    const handleClick=()=>{
        isClicked? setisClicked(false):setisClicked(true)
    }
  return (
    <div className="flex justify-center mt-5">
        <div className="w-6/12 bg-gray-100 p-4 rounded-md shadow-lg cursor-pointer" onClick={handleClick}>
            {/* Header */}
            <div className="flex justify-between">
            <span className="font-bold text-xl">{data.data.card.card.title}</span>
            <span>⏬</span>
            </div>
            <div className="my-4">
                {isClicked && <ItemList items={data.data.card.card.itemCards}/>}
            </div>
            

        </div>
    </div>
  );
};

export default Accordion;
