import { useState } from "react";

import "./styles.css";
import useCity from "../CustomHooks/useCity";
import StateCityInformation from "../../common/utils/state-city.json";

const SearchComponent = ({ setCurrentCards, teamInformation }) => {
  const [nameOrDesignation, setNameOrDesignation] = useState("");
  const [state, setState] = useState("");
  const [cityName, setCityName] = useState("");

  const city = useCity(state);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!cityName) {
      setCurrentCards(
        teamInformation.filter(
          (item) =>
            (item.name &&
              item.name
                .toUpperCase()
                .includes(nameOrDesignation.toUpperCase())) ||
            (item.followers &&
              String(item.followers).includes(nameOrDesignation))
        )
      );
    } else {
      if (cityName && cityName !== "Select") getSpecificCityUsers(cityName);
      else alert("City Not selected");
    }
  };

  const getSpecificCityUsers = async (cityName) => {
    const response = await fetch(
      `https://api.github.com/search/users?q=location%3A${cityName}`
    );
    const json = await response.json();
    let users =
      json &&
      json.items.map((userInfo) => ({
        imageSource: userInfo.avatar_url,
        name: userInfo.login,
        location: userInfo.location,
        company: userInfo.company,
        followers: userInfo.followers,
        id: userInfo.login,
      }));

    setCurrentCards(users);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    setCityName("");
  };

  const handleCityChange = (e) => {
    setCityName(e.target.value);
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="searchClass">
        <input
          type="text"
          value={nameOrDesignation}
          onChange={(event) => {
            setNameOrDesignation(event.target.value);
            setCityName("");
          }}
        />
        <button type="submit" className="buttonClass">
          Search
        </button>
      </div>

      <select className="stateClass" value={state} onChange={handleStateChange}>
        {Object.keys(StateCityInformation).map((StateName) => (
          <option key={StateName} value={StateName}>
            {StateName}
          </option>
        ))}
      </select>

      <select value={cityName} onChange={handleCityChange}>
        {city &&
          city.map((cities) => (
            <option key={cities} value={cities}>
              {cities}
            </option>
          ))}
      </select>
    </form>
  );
};

export default SearchComponent;
