import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import Layout from "./Components/Layout/Layout";

// Pages
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import OurServices from "./Components/OurServices/OurServices";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [{ index: true, element: <Home /> },
        { path: "about", element: <About/> },
        { path: "our-services", element: <OurServices/> },
        { path: "contact-us", element: <ContactUs/> },
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}
