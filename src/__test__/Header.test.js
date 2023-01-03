import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../components/store";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";

// const sum = (a, b) => a + b;

// test("sum", () => {
//   expect(sum(1, 3)).toBe(4);
// }); // testing whether react testing library is configured or not

test("Header logo", () => {
  const header = render(
    <StaticRouter>
      <Header />
    </StaticRouter>
  );
  const logo = header.getByTestId("logo");
  expect(logo.className).toBe("w-16 h-20");
  console.log(Header, "header");
});
