import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import img1 from '../img/carousel/1.jpg';
import img2 from '../img/carousel/2.jpg';
import img3 from '../img/carousel/3.jpg';
import img4 from '../img/carousel/6.jpg';
import img5 from '../img/carousel/5.jpg';

export default function Home() {
  return (
    <div>
        <Navbar/>
          
        <div id="carouselDark" className="carousel carousel-light carousel-fade slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="3" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="4" aria-label="Slide 3"></button>
  </div>
  
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000" data-touch='true'>
      <img src={img1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="1000" data-touch='true'>
      <img src={img2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-touch='true' data-bs-interval="1000">
      <img src={img3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-touch='true' data-bs-interval="1000">
      <img src={img4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-touch='true' data-bs-interval="1000">
      <img src={img5} className="d-block w-100" alt="..."/>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        <Footer/>
        <style>{`
        .active{
          color: #40a7d6;
        }
          .carousel-item{
            
          }
        `}</style>
    </div>
  )
}
