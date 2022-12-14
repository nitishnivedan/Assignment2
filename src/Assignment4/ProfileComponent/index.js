import React from "react";
import { Outlet } from "react-router-dom";

import { getUserInfo } from "../../apis/userapis";

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: "Gladiators",
      componentType: "Class Component",
      userName: "Dummy",
    };
    console.log("constructor called of Child");
  }

  async componentDidMount() {
    console.log("Component Did Mount called of Child");
    const response = await getUserInfo(["nitishnivedan"]);
    this.setState({ userName: response[0].login });
  }

  componentDidUpdate() {
    console.log("Component Did Update of Child");
  }

  render() {
    const { parentName } = this.props;
    const { userName } = this.state;
    console.log("Render  called of Child");
    return (
      <>
        <h3>Parent Component : {parentName} </h3>
        <h3>UserName : {userName}</h3>
      </>
    );
  }
}
export default ProfileComponent;

/* constructor called of Parent
render called of Parent
 constructor called of Child
 Render  called of Child
 Component Did Mount called of Child
Component Did Mount called of Parent
 Render  called of Child
Component Did Update of Child */
