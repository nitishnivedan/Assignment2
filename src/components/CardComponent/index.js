import React from "react";

import userIcon from "../../logo/userIcon.png";

const CardComponent = ({
  temmatesDetails: { imageSource, name, location, company, followers },
  color,
}) => {
  return (
    <div
      className={`m-3 p-3 w-80 h-96 bg-purple-50 rounded-xl  
      ${color === "purple" ? " bg-purple-50" : "bg-black"}`}
    >
      <img
        key={imageSource}
        src={imageSource}
        className="w-52 h-48 mx-auto"
        alt={userIcon}
      />
      <div className="text-center text-xl m-2 font-bold  text-purple-600">
        Name : {name}
      </div>
      <div className="text-center text-xl m-2  text-purple-600">
        Place: {location}
      </div>
      <div className="text-center text-xl m-2  text-purple-600">
        Company: {company}
      </div>
      <div className="text-center text-xl m-2  text-purple-600">
        Followers: {followers}
      </div>
    </div>
  );
};

export default CardComponent;
