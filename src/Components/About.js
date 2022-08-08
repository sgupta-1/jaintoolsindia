import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import $ from 'jquery'
import logo from '../img/logo.png'

$(window).scroll(function () {
  $(".slideanim").each(function () {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 500) {
      $(this).addClass("slide");
    }
  });
});

export default function About() {
  return (
    <div>
      <Navbar/>
<div className='aboutus slideanim1'>      
<div id="about" className="container-fluid">
  <div className="row">
    <div className="col-sm-8">
      <h2>About Our Company</h2><br/>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <br/><button className="btn btn-info btn-lg">Get in Touch</button>
    </div>
    <div className="col-sm-4">
      <img className='logo' src={logo} alt='JTI logo'/>
    </div>
  </div>
</div>

<div className="container-fluid bg-grey">
  <div className="row">
    <div className="col-sm-4">
      <span className="fas fa-globe slideanim fa-globe1"></span>
    </div>
    <div className="col-sm-8">
      <h2>Our Values</h2><br/>
      <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br/>
      <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>

<div id="services" className="container-fluid text-center">
  <h2>SERVICES</h2>
  <h4>What we offer</h4>
  <br/>
  <div className="row slideanim">
    <div className="col-sm-4">
      <span className="fas fa-power-off logo-small"></span>
      <h4>POWER</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="fas fa-heart logo-small"></span>
      <h4>LOVE</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="fas fa-lock logo-small"></span>
      <h4>JOB DONE</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
  <br/><br/>
  <div className="row slideanim">
    <div className="col-sm-4">
      <span className="fas fa-leaf logo-small"></span>
      <h4>GREEN</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="fas fa-certificate logo-small"></span>
      <h4>CERTIFIED</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="fas fa-wrench logo-small"></span>
      <h4>HARD WORK</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
</div>

<div id="portfolio" className="container-fluid text-center bg-grey">
  <h2>Portfolio</h2><br/>
  <h4>What we are providing</h4>
  <div className="row text-center slideanim">
    <div className="col-sm-4">
      <div className="thumbnail">
        <img src="paris.jpg" alt="Paris" width="400" height="300"/>
        <p><strong>Lorem ipsum</strong></p>
        <p>Lorem ipsum</p>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="thumbnail">
        <img src="newyork.jpg" alt="New York" width="400" height="300"/>
        <p><strong>Lorem ipsum</strong></p>
        <p>Lorem ipsumk</p>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="thumbnail">
        <img src="sanfran.jpg" alt="San Francisco" width="400" height="300"/>
        <p><strong>Lorem ipsum</strong></p>
        <p>Lorem ipsum</p>
      </div>
    </div>
  </div>
  </div>
</div>

      <Footer />
    </div>
  );
}
