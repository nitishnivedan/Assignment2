import { createPath, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ThemeContext from "../ThemeContext";
import { useState } from "react";

import "./styles.css";
import logo from "../../logo/React.webp";
import FooterComponent from "../FooterComponent";

const Header = () => {
  const [color, setColor] = useState("white");
  return (
    <>
      <ThemeContext.Provider value={{ color, setColor }}>
        <div className="header" style={{ backgroundColor: color }}>
          <div className="headerComponents">
            <img src={logo} width="50" height="50" />
          </div>
          <div className="title">Team Gladiators</div>
        </div>
        <span className="linkClass">
          <Link to="/">Home</Link>
        </span>
        <span className="linkClass">
          <Link to="/search">SearchComponent</Link>
        </span>
        <span className="linkClass">
          <Link to="/about-me">AboutMe</Link>
        </span>
        <Outlet />
      </ThemeContext.Provider>
      <FooterComponent />
    </>
  );
};

export default Header;
