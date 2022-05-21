import React from "react";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        UseContext and Router V6
      </a>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/">
            <a className="nav-item nav-link active">Home</a>
          </Link>
          <Link to="/login">
            <a className="nav-item nav-link active">Login</a>
          </Link>
          <Link to="/about">
            <a className="nav-item nav-link active">About</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
