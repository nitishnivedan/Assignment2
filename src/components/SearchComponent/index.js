import { useState, useContext } from "react";
//import { useSelector } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import getCity from "../CustomHooks/useCity";
import StateCityInformation from "../../common/utils/state-city.json";
import ThemeContext from "../ThemeContext";
import { addUser } from "../loginSlice";

const SearchComponent = ({ setCurrentCards, teamInformation }) => {
  const [nameOrDesignation, setNameOrDesignation] = useState("");
  const [state, setState] = useState("");
  const [cityName, setCityName] = useState("");
  const { color, setColor } = useContext(ThemeContext);

  const usersInfo = useSelector((store) => store.loginInfo.value);
  console.log(usersInfo, "usersInfo");
  const dispatch = useDispatch();

  const city = getCity(state);
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

  const handleColorChange = () => {
    setColor(color === "purple" ? "black" : "purple");
  };

  const handleAddUser = () => {
    dispatch(
      addUser({
        name: "nivedan",
      })
    );
  };
  return (
    <div className="m-5 p-5 bg-purple-50">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="github user"
          value={nameOrDesignation}
          onChange={(event) => {
            setNameOrDesignation(event.target.value);
            setCityName("");
          }}
        />
        <select value={state} onChange={handleStateChange}>
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
        <button className="bg-blue-700 h-12 w-28 font-bold m-5 rounded-xl text-white">
          Search
        </button>
        <button
          className={`h-12 w-44 font-bold m-5 rounded-xl border-black border-spacing-0  text-pink-500 ${
            color === "purple" ? "bg-purple-50" : "bg-black"
          }`}
          onClick={handleColorChange}
        >
          Change {color} color
        </button>
        <button
          className={`h-12 w-44 font-bold m-5 rounded-xl border-black border-spacing-0  text-pink-500 ${
            color === "purple" ? "bg-purple-50" : "bg-black"
          }`}
          onClick={handleAddUser}
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
