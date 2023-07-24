import { useState } from "react";

const User = (props) =>{
    const[count, setcount] =useState(1);
    const {name,location} = props
    return (
        <div className="functional-component">
            <h1> Name : {name}</h1>
            <h2> Location: {location}</h2>
            <h3> Contact: divya12.6ashsu </h3>
            <h4>Count = {count}</h4>
        </div>
    )
}

export default User;
