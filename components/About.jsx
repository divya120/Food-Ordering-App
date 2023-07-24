import User from "./User";
import UserClass from "./UserClass"
import { Component } from "react";
// const About = () =>{
//     return(
//         <div> 
//             <h1> About us! </h1>
//             <User name={"Divya"} location={"Jogeshwari"}/>
//             <UserClass name={"Divya"} location={"Jogeshwari"}/>
//         </div>
//     )
// }

// export default About;

class About extends Component{
    constructor(props){
        super(props)
        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent componentDidMount")
    }

    render(){
        console.log("Parent Render")
        return(
        <div> 
            <h1> About us! </h1>
            <User name={"Divya"} location={"Jogeshwari"}/>
            <UserClass name={"Priya"} location={"Jogeshwari"}/>
        </div>

        )
    }

}

export default About;