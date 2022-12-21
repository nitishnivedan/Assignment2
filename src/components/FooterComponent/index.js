import "./styles.css";

import ThemeContext from "../ThemeContext";
import { useContext } from "react";

const FooterComponent = () => {
  const { color, setColor } = useContext(ThemeContext);
  return (
    <>
      <div className="footerClass" style={{ backgroundColor: color }}>
        Footer Component Color:{color}
      </div>
    </>
  );
};

export default FooterComponent;
