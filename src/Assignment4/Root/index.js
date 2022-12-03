import { useState } from "react";

import Header from "../Header";
import SearchComponent from "../SearchComponent";
import CardComponent from "../CardComponent";
import NitishPic from "../../logo/Nitish.jpg";
import teamInformation from "../../common/data.json";

const RootElement = () => {
  const [currentCards, setCurrentCards] = useState(teamInformation);
  return (
    <>
      <Header />
      <SearchComponent
        setCurrentCards={setCurrentCards}
        teamInformation={teamInformation}
      />
      {currentCards &&
        currentCards.length > 0 &&
        currentCards.map((temmatesDetails) => (
          <CardComponent
            key={temmatesDetails.id}
            temmatesDetails={temmatesDetails}
          />
        ))}
    </>
  );
};

export default RootElement;
