import "./styles.css";
import logo from "../../logo/React.webp";
import usericon from "../../logo/usericon.png";
import searchicon from "../../logo/searchicon.png";

const Header = ({}) => (
  <div className="header">
    <div className="headerComponents">
      <img src={logo} width="50" height="50" />
    </div>
    <div className="title">Team Gladiators</div>
  </div>
);

export default Header;
