import axios from "axios";
import React, { useEffect, useState } from "react";
import { cat } from "./Products";
import Navbar from "./Navbar";
export default function ShowHeros() {
  const [prodData, setProdsData] = useState([]);
  const selectedId = [];
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`http://localhost:8080/products?categories=${cat}`)
        .then((res) => {
          setProdsData(res.data);
        });
    };
    getData();
  }, []);
  const setId = (e, id) => {
    if (e.target.checked) {
      selectedId.push(e.target.value);
    } else {
      const index = selectedId.indexOf(id);
      selectedId.splice(index, 1);
      console.log(selectedId);
    }
    // console.log(selectedId)
  };
  return (
    <>
      <Navbar />
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
      <h1 className="display-4 fw-normal text-uppercase text-center">{cat}</h1>
      <div className="row row-cols-1 mx-3 row-cols-sm-2 row-cols-md-4 ">
        {prodData.map((item, index) => {
          return <HeroView item={item} key={item._id} setId={setId} />;
        })}
      </div>
    </>
  );
}

const HeroView = (props) => {
  return (
    <div className="col mb-4">
      {/* <!-- Card --> */}
      <div className="card">
        {/* <!--Card image--> */}
        <div className="view overlay">
          <img src={props.item.pic} className="w-100 rounded-top" alt="" />
          <a href="#!">
            <div className="mask rgba-white-slight"></div>
          </a>
        </div>

        {/* <!--Card content--> */}
        <div className="card-body">
          {/* <!--Title--> */}
          <h5>{props.item.name}</h5>
          <div className="mb-2 text-muted small">
            <p className=" mb-4 mb-md-0"></p>
          </div>
          <div className="d-flex flex-row align-items-center mb-1">
            <h4 className="mb-1 me-1">&#x20b9; {props.item.price}</h4>
          </div>
          {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
          <div className="d-flex flex-column mt-4">
            <button className="btn btn-primary btn-sm" type="button">
              Details
            </button>
            <button
              className="btn btn-outline-primary btn-sm mt-2"
              type="button"
            >
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
//  style={`background-color: #eee;`}
