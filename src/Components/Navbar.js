import React from 'react'
import {NavLink} from "react-router-dom";


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
                              <NavLink></NavLink>
                            </li>
                            <li className=''>
                              <NavLink></NavLink>
                            </li>
                            <li className=''>
                              <NavLink></NavLink>
                            </li>
                          </ul>
                          <form className=''>
                            <input className=''/>
                            <button className=''></button>
                          </form>
                        </div>
                      </div>
                    </nav>
        )
    }
