import { useState, useEffect } from "react";

import Header from "../Header";
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
      users.map((modifyUserKeys) => ({
        imageSource: modifyUserKeys.avatar_url,
        name: modifyUserKeys.name,
        location: modifyUserKeys.location,
        company: modifyUserKeys.company,
        designaton: modifyUserKeys.followers,
        id: modifyUserKeys.login,
      }));
    if (users.length > 0) {
      setIsDataFetched(true);
    }

    setCurrentCards(users);
    setFullInfoOfUsers(users);
  };

  return (
    <>
      <Header />
      <SearchComponent
        setCurrentCards={setCurrentCards}
        teamInformation={isDataFetched ? fullInfoOfUsers : teamInformation}
      />

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
    </>
  );
};

export default RootElement;
