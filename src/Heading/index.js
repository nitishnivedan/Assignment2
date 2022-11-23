import React from "react";

import "./styles.css";
import logo from "../logo/React.webp";
import usericon from "../logo/usericon.png";
import searchicon from "../logo/searchicon.png";

const Heading = ({}) => (
  <div className="header">
    <div className="headerComponents">
      <img src={logo} width="50" height="50" />
    </div>
    <div className="searchComponentClass">
      {" "}
      <input className="inputClassName" type="text" onChange={() => {}} />{" "}
      <img
        className="searchIconClass"
        src={searchicon}
        width="50"
        height="15"
      />
    </div>
    <div className="headerComponents">
      {" "}
      <img src={usericon} width="50" height="50" />
    </div>
  </div>
);

export default Heading;
