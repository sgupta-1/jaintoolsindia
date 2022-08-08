import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../img/products/cutter wheel.png";
import img2 from "../img/products/goti handle.png";
import img3 from "../img/products/hacksaw.png";
import img4 from "../img/products/hammer.png";
import img5 from "../img/products/inch tape.png";
import img6 from "../img/products/kitchen knife.png";
// import img1 from "../img/My project.png";
// import img1 from "../img/My project.png";
// import img1 from "../img/My project.png";
// import img1 from "../img/My project.png";
export default function Products() {
  return (
    <div>
      <Navbar />
      <h1 className="uppercase text-center text-6xl">Our Products</h1>
      <div className="row row-cols-1 mx-3 row-cols-sm-2 row-cols-md-4">
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
              <h4 className="card-title">Card title</h4>
              {/* <!--Text--> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
              <button type="button" className="btn btn-light-blue btn-md">
                Read more
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
              <h4 className="card-title">Card title</h4>
              {/* <!--Text--> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
              <button type="button" className="btn btn-light-blue btn-md">
                Read more
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
              <h4 className="card-title">Card title</h4>
              {/* <!--Text--> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
              <button type="button" className="btn btn-light-blue btn-md">
                Read more
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
              <h4 className="card-title">Card title</h4>
              {/* <!--Text--> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
              <button type="button" className="btn btn-light-blue btn-md">
                Read more
              </button>
            </div>
          </div>
          {/* <!-- Card --> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
