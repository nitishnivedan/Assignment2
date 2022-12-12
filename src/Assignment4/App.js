import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootElement from "./Root";
import ErrorComponent from "./ErrorComponent";
import HeaderComponent from "./Header";
import SpecificUserComponent from "./SpecificUserComponent";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeaderComponent />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/search",
        element: <RootElement />,
      },
      {
        path: "/user/:id",
        element: <SpecificUserComponent />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RootElement />);
root.render(<RouterProvider router={appRouter} />);
