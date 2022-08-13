import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../img/carousel/5.jpg";
import img2 from "../img/carousel/2.jpg";
import img3 from "../img/carousel/7.jpg";
import img4 from "../img/carousel/9.jpg";
import img5 from "../img/carousel/8.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="slideanim1">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="2000">
              <div class="overlay-image">
                <img src={img1} class="carousel-image" alt="" />
              </div>
              <div class="container cont">
                <h1>Jain Tools India</h1>
                <p class="w-50">
                  JAIN TOOLS INDIA AND MAHAVEER TRADERS is one of the leading
                  firm in the sector of hand tools since 1975 , Our motto is to
                  serve the best products to the customers at resonable
                  prices...
                </p>
                <Link
                  to={"/about-us"}
                  class="btn btn-lg btn-primary text-uppercase"
                >
                  Know More About Us
                </Link>
              </div>
            </div>
            <div class="carousel-item" data-interval="1000">
              <div class="overlay-image">
                <img src={img2} alt="" class="carousel-image" />
              </div>
              <div class="container cont">
                <h1>Example headline</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque corporis molestiae distinctio nemo similique neque
                  magni facilis ab fuga magnam!
                </p>
                <a href="/" class="btn btn-lg btn-primary">
                  Sign upp today
                </a>
              </div>
            </div>
            <div class="carousel-item" data-interval="1000">
              <div class="overlay-image">
                <img class="carousel-image" src={img3} alt="" />
              </div>
              <div class="container cont">
                <h1>Example headline</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque corporis molestiae distinctio nemo similique neque
                  magni facilis ab fuga magnam!
                </p>
                <a href="/" class="btn btn-lg btn-primary">
                  Sign upp today
                </a>
              </div>
            </div>
            <div class="carousel-item" data-interval="1000">
              <div class="overlay-image">
                <img src={img4} alt="" class="carousel-image" />
              </div>
              <div class="container cont">
                <h1>Example headline</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque corporis molestiae distinctio nemo similique neque
                  magni facilis ab fuga magnam!
                </p>
                <a href="/" class="btn btn-lg btn-primary">
                  Sign upp today
                </a>
              </div>
            </div>
            <div class="carousel-item" data-interval="1000">
              <div class="overlay-image">
                <img src={img5} alt="" class="carousel-image" />
              </div>
              <div class="container cont">
                <h1>Example headline</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque corporis molestiae distinctio nemo similique neque
                  magni facilis ab fuga magnam!
                </p>
                <a href="/" class="btn btn-lg btn-primary">
                  Sign upp today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4"></div>
      {/* <!-- Jumbotron --> */}
      {/* <div className="card card-image aboutusjumbo m-auto">
        <div className=" text-center rgba-stylish-strong py-5 px-4">
          <div className="py-5">
            <h1 className="card-title h2 my-4 py-2">Jain Tools India</h1>
            <h3 className="mb-4 pb-2 px-md-5 mx-md-5">
              JAIN TOOLS INDIA AND MAHAVEER TRADERS is one of the leading firm
              in the sector of hand tools since 1975 , Our motto is to serve the
              best products to the customers at resonable prices...
            </h3>
            <Link className="homeaboutbtn" to={"/about-us"}>
              Know More About Us
            </Link>
          </div>
        </div>
      </div> */}
      {/* <!-- Jumbotron --> */}
      <div>
        <div className="slideanim1 aboutuswid">
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
      <div class="container">
        <div class="row">
          <div class="col-lg-4 d-flex justify-content-center">
            <div class="card">
              <div class="card-body text-center">
                <div class="card-img pt-2 pb-3">
                  {" "}
                  <img
                    src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />{" "}
                </div>
                <div class="name h5">Sparsh Gupta</div>
                <div class="testimonial">
                  {" "}
                  I made bacck the purchase price in just 48 hours ! Thank you
                  for making pain less, pleasant. The service was execellent. I
                  will refer everyone I know{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-flex justify-content-center">
            <div class="card">
              <div class="card-body text-center">
                <div class="card-img pt-2 pb-3">
                  {" "}
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />{" "}
                </div>
                <div class="name h5">Shobha Jain</div>
                <div class="testimonial">
                  {" "}
                  I made bacck the purchase price in just 48 hours ! Thank you
                  for making pain less, pleasant. The service was execellent. I
                  will refer everyone I know{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-flex justify-content-center">
            <div class="card">
              <div class="card-body text-center">
                <div class="card-img pt-2 pb-3">
                  {" "}
                  <img
                    src="https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />{" "}
                </div>
                <div class="name h5">OMG</div>
                <div class="testimonial">
                  {" "}
                  I made bacck the purchase price in just 48 hours ! Thank you
                  for making pain less, pleasant. The service was execellent. I
                  will refer everyone I know{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
