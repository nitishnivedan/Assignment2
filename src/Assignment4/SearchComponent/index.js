import { useState } from "react";

import "./styles.css";

const SearchComponent = ({ setCurrentCards, teamInformation }) => {
  const [nameOrDesignation, setNameOrDesignation] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        debugger;
        setCurrentCards(
          teamInformation.filter(
            (item) =>
              (item.name &&
                item.name
                  .toUpperCase()
                  .includes(nameOrDesignation.toUpperCase())) ||
              (item.designaton &&
                String(item.designaton).includes(nameOrDesignation))
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
