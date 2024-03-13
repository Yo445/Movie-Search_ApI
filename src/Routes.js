import { createBrowserRouter } from "react-router-dom";
import React from "react";
//import App from "./App";
import ShowDetails from "./ShowDetails";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/show/:id",
    element: <ShowDetails />,
  },
]);

export default router;
