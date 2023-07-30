import React from 'react'
import { useState } from 'react';
import ItemList from './ItemList';


const MyAccordion = ({data, isOpen = false}) => {
    const[open, setOpen]=useState(isOpen);

    const handleChange = () =>{
        setOpen(!open)
    }
  return (
    <div className="flex justify-center mt-5">
    <div className="w-6/12 bg-gray-100 p-4 rounded-md shadow-lg cursor-pointer" onClick={handleChange}>
        {/* Header */}
        <div className="flex justify-between">
        <span className="font-bold text-xl">{data.card.card.title}</span>
        <span>⏬</span>
        </div>
        <div className="my-4">

            {open && <ItemList items={data.card.card.itemCards}/>}
        </div>
        

    </div>
</div>
  )
}

export default MyAccordion