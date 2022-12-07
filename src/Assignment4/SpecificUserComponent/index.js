import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getUserInfo } from "../../apis/userapis";
import NotFoundComponent from "../NothingFoundComponent";
import CardComponent from "../CardComponent";
import "../CardComponent/styles-card.css";

const SearchComponent = () => {
  const { id } = useParams();
  const [currentCards, setCurrentCards] = useState([]);
  useEffect(() => {
    callUserInfo();
  }, []);

  const callUserInfo = async () => {
    const response = await getUserInfo([id]);
    user =
      response &&
      response.map((userInfo) => ({
        imageSource: userInfo.avatar_url,
        name: userInfo.name,
        location: userInfo.location,
        company: userInfo.company,
        followers: userInfo.followers,
        id: userInfo.login,
      }));

    if (response.length > 0) {
      setCurrentCards(user);
    }
  };

  return (
    <div>
      <div>id : {id}</div>{" "}
      {currentCards && currentCards.length > 0 ? (
        <div className="bottomDiv">
          {currentCards.map((temmatesDetails) => (
            <CardComponent
              key={temmatesDetails.id}
              temmatesDetails={temmatesDetails}
            />
          ))}
        </div>
      ) : (
        <NotFoundComponent />
      )}
    </div>
  );
};

export default SearchComponent;
