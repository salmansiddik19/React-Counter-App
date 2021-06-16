import React from "react";

const NavBar = ({ totalCounters }) => {
  console.log("NavBar-Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Navbar
          <span className="badge rounded-pill bg-success">{totalCounters}</span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
