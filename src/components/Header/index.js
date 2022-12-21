import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ThemeContext from "../ThemeContext";
import { useState } from "react";

import logo from "../../logo/React.webp";
import FooterComponent from "../FooterComponent";

const Header = () => {
  const [color, setColor] = useState("white");
  return (
    <>
      <ThemeContext.Provider value={{ color, setColor: setColor }}>
        <div
          className="flex px-10 py-4 justify-between bg-yellow-50"
          //style={{ backgroundColor: color }}
        >
          <img src={logo} className="w-10" height="50" />
          <div className="font-bold text-3xl">Team Gladiators</div>
          <div className="flex space-x-4 text-2xl underline">
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/search">
              <span>SearchComponent </span>
            </Link>
            <Link to="/about-me">
              <span>AboutMe</span>
            </Link>
          </div>
        </div>
        <Outlet />
      </ThemeContext.Provider>
      <FooterComponent />
    </>
  );
};

export default Header;
