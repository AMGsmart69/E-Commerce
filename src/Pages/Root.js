import React from "react";
import { Outlet } from "react-router-dom";
import Header1 from "./Components/Headers/Header1.js";
import Header2 from "./Components/Headers/Header2.js";
import Header3 from "./Components/Headers/Header3.js";
import Footer from "./Components/Footer.js";
import "./Root.css"

function Root() {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Header3 />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
