import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ThemeContext from "../ThemeContext";
import { useState } from "react";
import { Provider } from "react-redux";

import logo from "../../logo/React.webp";
import FooterComponent from "../FooterComponent";
import store from "../store";

const Header = () => {
  const [color, setColor] = useState("purple");
  return (
    <>
      <Provider store={store}>
        <ThemeContext.Provider value={{ color, setColor: setColor }}>
          <div
            className={`flex px-10 py-4 justify-between ${
              color === "purple" ? "bg-purple-50" : "bg-black"
            }`}
          >
            <img src={logo} className="w-10" height="50" />
            <div className="font-bold text-3xl text-purple-600">
              Team Gladiators
            </div>
            <div className="flex space-x-4 text-2xl underline">
              <Link to="/">
                <span className=" text-purple-600">Home</span>
              </Link>
              <Link to="/search">
                <span className=" text-purple-600">SearchComponent </span>
              </Link>
              <Link to="/about-me">
                <span className=" text-purple-600">AboutMe</span>
              </Link>
            </div>
          </div>
          <Outlet />
        </ThemeContext.Provider>
        <FooterComponent />
      </Provider>
    </>
  );
};

export default Header;
