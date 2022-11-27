import React from "react";

import styles from "./styles-card.css";
import logo from "../../logo/usericon.png";

const CardComponent = ({ temmatesDetails }) => (
  <div className="CardWrapper">
    <img src={temmatesDetails.imageSource} className="imageClass" />{" "}
    <div className="information-class">Name : {temmatesDetails.name}</div>
    <div className="information-class">Place: {temmatesDetails.location}</div>
    <div className="information-class">Company: {temmatesDetails.company}</div>
    <div className="information-class">
      Designation: {temmatesDetails.designaton}
    </div>
  </div>
);

export default CardComponent;
