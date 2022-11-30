import React from "react";

import userIcon from "../../logo/userIcon.png";
import "./styles-card.css";

const CardComponent = ({ temmatesDetails }) => (
  <div className="CardWrapper">
    <img
      src={temmatesDetails.imageSource}
      className="imageClass"
      alt={userIcon}
    />{" "}
    <div className="information-class">Name : {temmatesDetails.name}</div>
    <div className="information-class">Place: {temmatesDetails.location}</div>
    <div className="information-class">Company: {temmatesDetails.company}</div>
    <div className="information-class">
      Designation: {temmatesDetails.designaton}
    </div>
  </div>
);

export default CardComponent;