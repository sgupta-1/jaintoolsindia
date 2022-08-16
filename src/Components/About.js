import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import $ from 'jquery'
import logo from '../img/logo.png'
import { useNavigate  } from 'react-router-dom'


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
  const navigate = useNavigate()
  return (
    <div>
      <Navbar/>
<div className='aboutus slideanim1'>      
<div id="about" className="container-fluid">
  <div className="row">
    <div className="col-sm-8">
      <h2>About Our Company</h2><br/>
      <h4>JAIN TOOLS started in 1975</h4><br/>
      <p>We are an Asia-based leading Firm intensively inclined toward B2B procurement of industrial supplies, in particular Hand Tools such as Pliers, Screwdrivers, Spanners, Toolkit, Blade, Allen key, Sockets, Measuring Tapes, Wire cutter, Wrench Set. 
We take pride in delivering world-class services and our clients are well aware of the fact that we do not just deliver products; we deliver a satisfying experience, which has enables us to forge relationship with our customers.</p>
      <br/><button className="btn btn-info btn-lg" onClick={()=>navigate("/contact-us")}>Get in Touch</button>
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
      <h4><strong>MISSION:</strong> Our mission is to serve the best products to the customers at a very competitive price.</h4><br/>
      <p><strong>VISION:</strong><br/><br/>
      You are safe, sure, efficient and economical with `Jain India Tools`.<br/>
      Jain India Tools is a one stop source for all kinds and varieties of Hand tools.<br/>
      Jain India Hand tools give its customers the best value for money.<br/>
      Jain India Tools are tool makers to the Nation.<br/>
      Switch to Jain Tools and experience the difference.</p>
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
