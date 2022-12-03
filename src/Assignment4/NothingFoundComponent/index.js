import React from "react";

import userIcon from "../../logo/userIcon.png";
import "../CardComponent/styles-card.css";

const CardComponent = ({}) => (
  <div className="CardWrapper">
    <img src={userIcon} className="imageClass" alt={userIcon} />{" "}
    <div className="information-class">Name : Not found</div>
    <div className="information-class">Place: NA</div>
    <div className="information-class">Company: NA</div>
    <div className="information-class">Followers: NA</div>
  </div>
);

export default CardComponent;
