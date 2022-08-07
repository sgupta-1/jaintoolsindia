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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img1}
                  alt="product"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Cutter
                  </h1>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img2}
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <div className="flex items-center flex-wrap">
                    <a
                      href="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img3}
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img4}
                  alt="product"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Cutter
                  </h1>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img5}
                  alt="product"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Cutter
                  </h1>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img6}
                  alt="product"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Cutter
                  </h1>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img1}
                  alt="product"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Cutter
                  </h1>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img1}
                  alt="product"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Cutter
                  </h1>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img1}
                  alt="product"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Cutter
                  </h1>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img1}
                  alt="product"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Cutter
                  </h1>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img1}
                  alt="product"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Cutter
                  </h1>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img1}
                  alt="product"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Cutter
                  </h1>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img1}
                  alt="product"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Cutter
                  </h1>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img1}
                  alt="product"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Cutter
                  </h1>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img1}
                  alt="product"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Cutter
                  </h1>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
