import React from "react";

import userIcon from "../../logo/userIcon.png";
import "./styles-card.css";

const CardComponent = ({
  temmatesDetails: { imageSource, name, location, company, followers },
  color,
}) => {
  return (
    <div className="cardWrapper" style={{ backgroundColor: color }}>
      <img
        key={imageSource}
        src={imageSource}
        className="imageClass"
        alt={userIcon}
      />
      <div className="information-class">Name : {name}</div>
      <div className="information-class">Place: {location}</div>
      <div className="information-class">Company: {company}</div>
      <div className="information-class">Followers: {followers}</div>
    </div>
  );
};

export default CardComponent;
