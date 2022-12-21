import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import ThemeContext from "../ThemeContext";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: "Gladiators",
      componentType: "Class Component",
    };
    console.log("constructor called of Parent");
  }

  componentDidMount() {
    console.log("Component Did Mount called of Parent");
  }

  componentDidUpdate() {
    console.log("Component Did Update of Parent");
  }

  render() {
    const { teamName, componentType } = this.state;

    console.log("render called of Parent");
    return (
      <>
        <h1>This page is about {teamName}</h1>
        <h2>Page is made using {componentType}</h2>
        <ThemeContext.Consumer>
          {({ color, setColor }) => {
            return <div>{color}</div>;
          }}
        </ThemeContext.Consumer>
        <Outlet />
      </>
    );
  }
}
export default AboutMe;
