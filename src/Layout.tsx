import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <span className="heading">Dental Symptom Checker</span>
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
