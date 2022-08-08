import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-white shadow-sm ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="JTI Logo" height="40" />
        </a>
        <NavLink className="navbar-brand" to={"/"}>
          Jain Tools India
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to={"/"}
                style={({ isActive }) => ({
                  color: isActive ? "#14927b" : "#000",
                })}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={"/about-us"}
                style={({ isActive }) => ({
                  color: isActive ? "#14927b" : "#000",
                })}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={"/products"}
                style={({ isActive }) => ({
                  color: isActive ? "#14927b" : "#000",
                })}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={"/contact-us"}
                style={({ isActive }) => ({
                  color: isActive ? "#14927b" : "#000",
                })}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success btn0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
