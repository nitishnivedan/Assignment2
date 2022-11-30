import { useState } from "react";

import "./styles.css";

const SearchComponent = ({ setCurrentCards, teamInformation }) => {
  const [nameOrDesignation, setNameOrDesignation] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setCurrentCards(
          teamInformation.filter(
            (item) =>
              item.name
                .toUpperCase()
                .includes(nameOrDesignation.toUpperCase()) ||
              item.designaton
                .toUpperCase()
                .includes(nameOrDesignation.toUpperCase())
          )
        );
      }}
    >
      <div className="searchClass">
        <input
          type="text"
          value={nameOrDesignation}
          onChange={(event) => setNameOrDesignation(event.target.value)}
        />
        <button className="buttonClass">Search</button>
      </div>
    </form>
  );
};

export default SearchComponent;
