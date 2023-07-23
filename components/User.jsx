const User = (props) =>{

    const {name,location} = props
    return (
        <div className="functional-component">
            <h1> Name : {name}</h1>
            <h2> Location: {location}</h2>
            <h3> Contact: divya12.6ashsu </h3>
        </div>
    )
}

export default User;
