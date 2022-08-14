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
import img14 from "../img/products/Locks(NoBG).png";
import img15 from "../img/products/cross spanner.png";
import img16 from "../img/products/scissors(NoBG).png";
import img17 from "../img/products/Sets(NoBG).png";
import img18 from "../img/products/TinCutter(NoBG).png";
import img19 from "../img/products/My project.png";
import img20 from "../img/products/tester.png";
import img21 from "../img/products/wire cutter.png";
import img26 from "../img/products/chisel.png";
import img23 from "../img/products/L spanner.png";
import img24 from "../img/products/ring spanner.png";
import img25 from "../img/products/plug spanner.png";
import img22 from "../img/products/water pump plier.png";
import { useNavigate } from "react-router-dom";
export let cat;
export default function Products() {
  const navigate = useNavigate();
  const navigateScreen = (screen, e) => {
    navigate(screen);
    cat = e;
  };
  return (
    <div>
      <Navbar />
      <div className="slideanim1">
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Our Products</h1>
            <p className="lead fw-normal">
              We offer you best quality items with competitve prices because we
              value in building trust and satisfaction.
            </p>
            <a className="btn btn-outline-secondary" href="#products">
              Know More
            </a>
          </div>
          <span className="fas fa-screwdriver screwdriver "></span>
          <span className="fas fa-wrench wrench"></span>
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
        <div className="row row-cols-1 mx-3 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
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
                  className="btn btn-light-blue btn-md btn0 btnnn"
                  onClick={() =>
                    navigateScreen("/showallproducts", "Tools Sets")
                  }
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
                  className="btnnn btn btn-light-blue btn-md btn0 "
                  onClick={() => navigateScreen("/showallproducts", "Pliers")}
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
                <img className="card-img-top" src={img22} alt="" />
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
                <h4 className="card-title">Water Pump Pliers</h4>
                {/* <!--Text--> */}
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btnnn btn btn-light-blue btn-md btn0 "
                  onClick={() =>
                    navigateScreen("/showallproducts", "Water pump pliers")
                  }
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
                  onClick={() =>
                    navigateScreen("/showallproducts", "Screw Drivers")
                  }
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
                <img className="card-img-top" src={img20} alt="" />
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
                <h4 className="card-title">Testers</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                  onClick={() => navigateScreen("/showallproducts", "Testers")}
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
                  onClick={() =>
                    navigateScreen("/showallproducts", "Measuring Tapes")
                  }
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
                <h4 className="card-title">Doe Spanners</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                  onClick={() =>
                    navigateScreen("/showallproducts", "Doe Spanners")
                  }
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
                <img className="card-img-top" src={img24} alt="" />
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
                <h4 className="card-title">Ring Spanners</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                  onClick={() =>
                    navigateScreen("/showallproducts", "Ring Spanner")
                  }
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
                <img className="card-img-top" src={img23} alt="" />
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
                <h4 className="card-title">L Spanners</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                  onClick={() =>
                    navigateScreen("/showallproducts", "L Spanners")
                  }
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
                  onClick={() =>
                    navigateScreen("/showallproducts", "Cutter Wheel")
                  }
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
                  onClick={() =>
                    navigateScreen("/showallproducts", "Gotti handle")
                  }
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
                <h4 className="card-title">Hexa Blades and Saws</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                  onClick={() =>
                    navigateScreen("/showallproducts", "Hexa Blades and Saws")
                  }
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
                  onClick={() => navigateScreen("/showallproducts", "Hammers")}
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
                  onClick={() =>
                    navigateScreen("/showallproducts", "Kitchen Knives")
                  }
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
                  onClick={() =>
                    navigateScreen("/showallproducts", "combo Spanner")
                  }
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
                  onClick={() =>
                    navigateScreen("/showallproducts", "T Spanner")
                  }
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
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                  onClick={() =>
                    navigateScreen("/showallproducts", "Allen Key")
                  }
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
                <img className="card-img-top" src={img26} alt="" />
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
                <h4 className="card-title">File Handle and Chisels</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn- btn0 "
                  onClick={() =>
                    navigateScreen(
                      "/showallproducts",
                      "File Handle and Chisels"
                    )
                  }
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
                <img className="card-img-top" src={img25} alt="" />
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
                <h4 className="card-title">Plug Spanner</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                  onClick={() =>
                    navigateScreen("/showallproducts", "Plug Spanner")
                  }
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
                  onClick={() => navigateScreen("/showallproducts", "Locks")}
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
                <h4 className="card-title">Cross Spanner</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                  onClick={() =>
                    navigateScreen("/showallproducts", "Cross Spanner")
                  }
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
                  onClick={() => navigateScreen("/showallproducts", "Scissor")}
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
                <h4 className="card-title">Wrenches</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                  onClick={() => navigateScreen("/showallproducts", "Wrenches")}
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
                  onClick={() => navigateScreen("/showallproducts", "Cutter")}
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
                <img className="card-img-top" src={img21} alt="" />
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
                <h4 className="card-title">Wire Cutter</h4>
                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                <button
                  type="button"
                  className="btn btn-light-blue btn-md btn0"
                  onClick={() =>
                    navigateScreen("/showallproducts", "Wire Cutter")
                  }
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
