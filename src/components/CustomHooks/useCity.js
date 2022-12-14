import { useEffect, useState } from "react";

import stateCity from "../../common/utils/state-city.json";

const getCity = (state) => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    //getCity(state);  //commented the api since it was getting blocked
    setCities(stateCity[state]);
  }, [state]);

  const getCity = async (state) => {
    let headers = new Headers();
    headers.append("X-CSCAPI-KEY", "API_KEY");

    let requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };
    const response = await fetch(
      "https://api.countrystatecity.in/v1/countries/IN/states/MH/cities",
      requestOptions
    );
    const json = await response.json();
    setCities(json);
  };
  return cities;
};

export default getCity;
