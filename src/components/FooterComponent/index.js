//import "./styles.css";

import ThemeContext from "../ThemeContext";
import { useContext } from "react";

const FooterComponent = () => {
  const { color, setColor } = useContext(ThemeContext);
  return (
    <>
      <div className={`p-6 h-fit bg-${color}-400`}>
        Footer Component Color:{color}
      </div>
    </>
  );
};

export default FooterComponent;
