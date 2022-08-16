import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
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
                className="nav-link "
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
                className="nav-link "
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
                className="nav-link "
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
                className="nav-link "
                to={"/contact-us"}
                style={({ isActive }) => ({
                  color: isActive ? "#14927b" : "#000",
                })}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <form className="d-flex navlogsign" role="search">
            <button
              className="login btn btn-outline-primary me-2"
              onClick={() => navigate("/cart")}
            >
              <i className="fas fa-shopping-cart"></i>
            </button>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <input
              type="button"
              className="login btn btn-outline-primary me-2"
              value="Login"
              onClick={() => navigate("/login")}
            />
            <input
              type="button"
              className="btn signup btn-primary"
              value="Sign-up"
              onClick={() => navigate("/signup")}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
