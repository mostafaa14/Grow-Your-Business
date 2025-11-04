import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div className="App">
      <Navbar />
      <div className="content mt-20 md:mt-14 overflow-x-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
