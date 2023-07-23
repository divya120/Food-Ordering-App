import User from "./User";
import UserClass from "./UserClass"
const About = () =>{
    return(
        <div> 
            <h1> About us! </h1>
            <User name={"Divya"} location={"Jogeshwari"}/>
            <UserClass name={"Divya"} location={"Jogeshwari"}/>
        </div>
    )
}

export default About;