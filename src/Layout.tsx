import React from "react";

import { Outlet, Link } from "react-router-dom";
import HamburgerIcon from "./components/HamburgerIcon";

const Layout = () => {
  return (
    <div className="App ">
      <div className="flex heading">
        <div className=" flex-1">
          <span>Web</span>Den Symptom Checker
        </div>
        <div className="menu-wrapper">
          <HamburgerIcon />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/symptoms">Symptoms</Link>
            </li>
            {/* <li>
              <Link to="/admin">Admin</Link>
            </li> */}
            <Link to="/Login">AdminLogin</Link>
            <li></li>
          </ul>
        </div>
      </div>
      <Outlet />
      {/* I can put a footer note inside the div here */}

      {/* <hr />
      <h5 className="footer">
        &copy;{new Date().getFullYear()} MILCAH | All right reserved | Terms Of
        Service | Privacy
      </h5> */}
    </div>
  );
};
// Layout Route - A parent route without a path, used exclusively for grouping child routes inside a specific layout.
// An <Outlet> should be used in parent route elements to render their child route elements.
export default Layout;
