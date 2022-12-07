import { useState } from "react";

import "./styles.css";

const SearchComponent = ({ setCurrentCards, teamInformation }) => {
  const [nameOrDesignation, setNameOrDesignation] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setCurrentCards(
      teamInformation.filter(
        (item) =>
          (item.name &&
            item.name
              .toUpperCase()
              .includes(nameOrDesignation.toUpperCase())) ||
          (item.followers && String(item.followers).includes(nameOrDesignation))
      )
    );
  };

  return (
    <form onSubmit={handleOnSubmit}>
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
