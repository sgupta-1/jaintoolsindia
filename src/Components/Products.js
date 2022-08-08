import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../img/products/plier.png";
import img2 from "../img/products/screw driver.png";
import img3 from "../img/products/inch tape.png";
import img4 from "../img/products/wrench.png";
import img5 from "../img/products/cutter wheel.png";
import img6 from "../img/products/goti handle.png";
import img7 from "../img/products/hacksaw.png";
import img8 from "../img/products/hammer.png";
import img9 from "../img/products/kitchen knife.png";
import img10 from "../img/products/spanner.png";
import img11 from "../img/products/t sapanner.png";
import img12 from "../img/products/Allenkey.png";
import img13 from "../img/products/FileHandle(BGrem).png";
import img14 from "../img/products/Locks(NoBG).png";
import img15 from "../img/products/PVC Cross(NoBG).png";
import img16 from "../img/products/scissors(NoBG).png";
import img17 from "../img/products/Sets(NoBG).png";
import img18 from "../img/products/TinCutter(NoBG).png";
import img19 from "../img/products/My project.png";

export default function Products() {
  return (
    <div>
      <Navbar />
      <div className="slideanim1">


      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 fw-normal">Our Products</h1>
      <p class="lead fw-normal">We offer you best quality items with competitve prices because we value in building trust and satisfaction.</p>
      <a class="btn btn-outline-secondary" href="#products">Know More</a>
    </div>
    <span class='fas fa-screwdriver screwdriver '></span>
    <span class='fas fa-wrench wrench'></span>
  </div>
        <form className="d-flex py-4 m-auto w-75" role="search">
          <section id="products"></section>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success bg-primary text-white px-4 py-3"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="row row-cols-1 mx-3 row-cols-sm-2 row-cols-md-4">
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img17} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">Tools Sets</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img1} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">Pliers</h4>
                {/* <!--Text--> */}
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img2} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">Screw Drivers</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img3} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">Measuring Tapes</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img4} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">Spanners</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img5} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">Cutter Wheel</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img6} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">Gotti handle</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img7} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">Saw</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img8} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">Hammers</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img9} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">Kitchen Knives</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img10} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">Combo Spanners</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img11} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">T Spanner</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img12} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">Allen Key</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button type="button" className="btn btn-light-blue btn-md">
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img13} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">File Handle</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button type="button" className="btn btn-light-blue btn- btn0">
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img14} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">Locks</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img15} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">PVC Cross</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img16} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">Scissor</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img18} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">Tin Cutter</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div className="col mb-4">
            {/* <!-- Card --> */}
            <div className="card">
              {/* <!--Card image--> */}
              <div className="view overlay">
                <img className="card-img-top" src={img19} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body">
                {/* <!--Title--> */}
                <h6 className="text-uppercase text-secondary font-weight-bold">
                  Category
                </h6>
                <h4 className="card-title">Cutter</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                >
                  View More
                </button>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
