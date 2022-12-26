import { useSelector } from "react-redux";
const LoggedInUser = () => {
  const loggedUser = useSelector((store) => store.loginInfo.value);
  console.log(loggedUser, "vishal");
  return (
    <>
      <div className="flex">
        <div>User: {loggedUser && loggedUser.name}</div>
        <div>
          <img
            src={loggedUser && loggedUser.photo}
            className="w-12 h-12 mx-auto"
            //alt={userIcon}
          />
        </div>
      </div>
    </>
  );
};

export default LoggedInUser;
