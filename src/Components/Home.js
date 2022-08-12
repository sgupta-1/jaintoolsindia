import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../img/carousel/5.jpg";
import img2 from "../img/carousel/2.jpg";
import img3 from "../img/carousel/7.jpg";
import img4 from "../img/carousel/8.jpg";
import img5 from "../img/carousel/9.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="slideanim1">
        <div
          id="carouselDark"
          className="carousel carousel-light carousel-fade slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDark"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDark"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>

          <div className="carousel-inner">
            <div
              className="carousel-item active"
              data-bs-interval="1000"
              data-touch="true"
            >
              <img
                src={img1}
                className="d-block w-100 carousel-image"
                alt="..."
              />
            </div>
            <div
              className="carousel-item"
              data-bs-interval="2000"
              data-touch="true"
            >
              <img
                src={img2}
                className="d-block w-100 carousel-image"
                alt="..."
              />
            </div>
            <div
              className="carousel-item"
              data-touch="true"
              data-bs-interval="2000"
            >
              <img
                src={img3}
                className="d-block w-100 carousel-image"
                alt="..."
              />
            </div>
            <div
              className="carousel-item"
              data-touch="true"
              data-bs-interval="2000"
            >
              <img
                src={img4}
                className="d-block w-100 carousel-image"
                alt="..."
              />
            </div>
            <div
              className="carousel-item"
              data-touch="true"
              data-bs-interval="2000"
            >
              <img
                src={img5}
                className="d-block w-100 carousel-image"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="slideanim1">
          <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
              <h1 className="display-4 fw-normal">Our Products</h1>
              <p className="lead fw-normal">
                We offer you best quality items with competitve prices because
                we value in building trust and satisfaction.
              </p>
              <Link to={"/Products"} className="btn btn-outline-secondary">
                View Products
              </Link>
            </div>
            <span className="fas fa-screwdriver screwdriver "></span>
            <span className="fas fa-wrench wrench"></span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
