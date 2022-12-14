import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import "./styles.css";
import logo from "../../logo/React.webp";

const Header = () => (
  <>
    <div className="header">
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
  </>
);

export default Header;
