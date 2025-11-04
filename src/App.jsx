import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import Layout from "./Components/Layout/Layout";

// Pages
import Home from "./Components/Home/Home";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}
