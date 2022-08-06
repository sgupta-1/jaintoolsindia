import React from 'react'
import {NavLink} from "react-router-dom";
import logo from '../img/logo.png';

export default function Navbar() {
     
        return (
                    <nav className=''>
                      <div className=''>
                        <NavLink className=''>Jain Tools India</NavLink>
                        <button className=''>
                          <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className=''>
                          <ul className=''>
                            <li className=''>
                              <NavLink to={'/'} className="" aria-current="page">Home</NavLink>
                            </li>
                            <li className=''>
                              <NavLink to={'/about-us'} className="">About Us</NavLink>
                            </li>
                            <li className=''>
                              <NavLink to={'/products'} className="">Products</NavLink>
                            </li>
                            <li className=''>
                              <NavLink to={'/contact-us'} className="">Contact Us</NavLink>
                            </li>
                          </ul>
                          <form className=''>
                            <input className='' placeholder='Search...'/>
                            <button className=''>Search</button>
                          </form>
                        </div>
                      </div>
                    </nav>
        )
    }
