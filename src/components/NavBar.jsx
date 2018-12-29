import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <h2>
          Shopping cart
          <span
            style={{ marginLeft: 10 }}
            className="badge badge-pill badge-secondary"
          >
            {totalCounters}
          </span>
        </h2>
      </div>
    </nav>
  );
};

export default NavBar;
