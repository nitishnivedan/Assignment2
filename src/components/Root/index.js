import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import SearchComponent from "../SearchComponent";
import CardComponent from "../CardComponent";
import NotFoundComponent from "../NothingFoundComponent";
import teamInformation from "../../common/data.json";
import { getUserInfo } from "../../apis/userapis";
import "./styles.css";
import ThemeContext from "../ThemeContext";

const RootElement = () => {
  const [currentCards, setCurrentCards] = useState(teamInformation);
  const [fullInfoOfUsers, setFullInfoOfUsers] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const { color, setColor } = useContext(ThemeContext);

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
      <button
        style={{
          height: "53px",
          width: "20%",
          marginTop: "1%",
        }}
        onClick={() => setColor(color === "white" ? "black" : "white")}
      >
        Change {color} color
      </button>
      {currentCards && currentCards.length > 0 ? (
        <div className="flex flex-wrap">
          {currentCards.map((temmatesDetails) => (
            <Link to={`/user/${temmatesDetails.id}`} key={temmatesDetails.id}>
              <CardComponent
                key={temmatesDetails.id}
                temmatesDetails={temmatesDetails}
                color={color}
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
