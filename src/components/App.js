import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootElement from "./Root";
import ErrorComponent from "./ErrorComponent";
import HeaderComponent from "./Header";
import SpecificUserComponent from "./SpecificUserComponent";
import ProfileComponent from "./ProfileComponent";

const AboutMe = lazy(() => import("./AboutMe"));

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
      {
        path: "/about-me",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <AboutMe />
          </Suspense>
        ),
        children: [
          {
            path: "/about-me/profile", // path here can be written as /about-me/profile or profile.
            element: <ProfileComponent parentName="AboutMe" />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RootElement />);
root.render(<RouterProvider router={appRouter} />);
