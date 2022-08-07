import React from 'react'
import {NavLink} from "react-router-dom";

export default function Footer() {
  return (
    <div>
    <footer class="footer-area">        
        <div class="copywrite-content">
          <p class="copywrite-text">
            <NavLink to={'/'}>
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | CO-United</NavLink></p>
          </div>
    </footer>
    </div>
  );
}