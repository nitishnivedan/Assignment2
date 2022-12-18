import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SearchComponent from "../SearchComponent";
import CardComponent from "../CardComponent";
import NotFoundComponent from "../NothingFoundComponent";
import teamInformation from "../../common/data.json";
import { getUserInfo } from "../../apis/userapis";
import "./styles.css";

const RootElement = () => {
  const [currentCards, setCurrentCards] = useState(teamInformation);
  const [fullInfoOfUsers, setFullInfoOfUsers] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    getListOfGitUsers();
  }, []);

  const getListOfGitUsers = async () => {
    const userNames = [
      "nitishnivedan",
      "iswarya15",
      "smriti-porwal",
      "shaksham08",
      "ap221882",
      "akshaymarch7",
    ];

    let users = await getUserInfo(userNames);
    users =
      users &&
      users.map((userInfo) => ({
        imageSource: userInfo.avatar_url,
        name: userInfo.name,
        location: userInfo.location,
        company: userInfo.company,
        followers: userInfo.followers,
        id: userInfo.login,
      }));
    if (users.length > 0) {
      setIsDataFetched(true);
    }

    setCurrentCards(users);
    setFullInfoOfUsers(users);
  };

  return (
    <>
      <SearchComponent
        setCurrentCards={setCurrentCards}
        teamInformation={isDataFetched ? fullInfoOfUsers : teamInformation}
      />

      {currentCards && currentCards.length > 0 ? (
        <div className="bottomDiv">
          {currentCards.map((temmatesDetails) => (
            <Link to={`/user/${temmatesDetails.id}`} key={temmatesDetails.id}>
              <CardComponent
                key={temmatesDetails.id}
                temmatesDetails={temmatesDetails}
              />
            </Link>
          ))}
        </div>
      ) : (
        <NotFoundComponent />
      )}
    </>
  );
};

export default RootElement;
