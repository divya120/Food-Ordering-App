import React from "react";
import UserContext from "../../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // count:0,
        // count1:1,

        userInfo:{
            login:"Default",
        }
    };
    // console.log(this.props.name+"Child costructor called")
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users");
    const json = await data.json();
    console.log(json)

    // debugger;
    this.setState({
        userInfo:json,
    })
    console.log(this.state.userInfo)
  }

  render() {
    // this.state.userInfo.map(){

    // }
    console.log(this.state.userInfo)
    const { login, type, avatar_url, id} = this.state.userInfo;
    // const { count, count2 } = this.state;
    // console.log(this.props.name+"Child Render")
    return (
      <div>
        <img src={avatar_url} alt="" />
        <h2>Login: {login}</h2>
        <h3>Type: {type}</h3> 
        {/* <h3>count={count}</h3>
        {/* <button
          onClick={(e) => {
            this.setState = ({
              count: this.state.count + 1,
            });
          }}
        >
          Click
        </button> */}
        
        {/* <h4>count={count2}</h4> */}
        {/* <UserContext.Consumer>
          {(loggedInUser)=>{
            return( <h1>{loggedInUser}</h1>)
             
            
          }}
        </UserContext.Consumer> */}
      </div>
    );
  }
}

export default UserClass;

// this is the radiant colour of the the Garden and the material used by the garden and the usage of the colourful magical blissof thr environment.
