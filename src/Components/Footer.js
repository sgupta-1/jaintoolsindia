import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container">
        <footer className="py-3 my-4 text-uppercase">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <NavLink to={"/"} className="text-decoration-none px-2 text1">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/about-us"}
                className="text-decoration-none px-2 text1"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/products"}
                className="text-decoration-none px-2 text1"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/contact-us"}
                className="text-decoration-none px-2 text1"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <p className="text-center text-muted">&copy; 2022 Jain Tools India</p>
        </footer>
      </div>
      <style>{`
    .text1{
      color: #6c757d;
    }
    .img1{
      height: 32px
    }
    `}</style>
    </>
  );
}
