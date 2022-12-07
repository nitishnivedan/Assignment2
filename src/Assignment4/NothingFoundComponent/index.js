import React from "react";

import userIcon from "../../logo/userIcon.png";
import "./stylesnotfound.css";

const CardComponent = () => (
  <div className="cardWrapperForNotFound">
    <img src={userIcon} className="imageClass" alt={userIcon} />{" "}
    <div className="information-class">Name : Not found</div>
    <div className="information-class">Place: NA</div>
    <div className="information-class">Company: NA</div>
    <div className="information-class">Followers: NA</div>
  </div>
);

export default CardComponent;
