import { createContext } from "react";

const ThemeContext = createContext({ color: "red", setColor: () => {} });

export default ThemeContext;
