
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import PointTable from "./Components/PointTable.jsx";
import Matches from "./Components/Matches.jsx";
import OurTeam from "./Components/OurTeam.jsx";
import Gallery from "./Components/Gallery.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/matches",
        element: <Matches />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/detailed-points-table",
        element: <PointTable />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/our-team",
        element: <OurTeam />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
