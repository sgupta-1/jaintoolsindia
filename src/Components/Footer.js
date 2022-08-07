import React from 'react'
import {NavLink} from "react-router-dom";
import img from '../img/logo.png'

export default function Footer() {
  return (
    <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-muted">&copy; 2022 Jain Tools India</p>

    <NavLink to={"/"} class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <img src={img} className='img1' alt=''/>
    </NavLink>

    <ul class="nav col-md-4 justify-content-end footer">
      <li class="nav-item"><NavLink to={"/"} className='text-decoration-none px-2 text1'>Home</NavLink></li>
      <li class="nav-item"><NavLink to={"/about-us"} className='text-decoration-none px-2 text1'>About Us</NavLink></li>
      <li class="nav-item"><NavLink to={"/products"} className='text-decoration-none px-2 text1'>Products</NavLink></li>
      <li class="nav-item"><NavLink to={"/contact-us"} className='text-decoration-none px-2 text1'>Contact Us</NavLink></li>
    </ul>
    </footer>
    <style>{
    `
    .text1{
      color: #6c757d;
    }
    .img1{
      height: 32px
    }
    `
    }</style>
    </div>
  );
}