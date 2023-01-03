import { useState } from "react";
import { useDispatch } from "react-redux";

import { getUserInfo } from "../../apis/userapis";
import { addUser } from "../loginSlice";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log("getting clicked");
    let users = await getUserInfo([userName]);
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
      console.log(users, "Nitish");
      dispatch(
        addUser({
          photo: users[0].imageSource,
          name: users[0].name,
          company: users[0].company,
        })
      );
    }
  };

  return (
    <div className="m-5 p-5 bg-purple-50">
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          placeholder="github username"
          value={userName}
          onChange={handleUserName}
        />
        <button
          className={
            "h-12 w-44 font-bold m-5 rounded-xl border-black   border-spacing-5 bg-purple-50"
          }
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
