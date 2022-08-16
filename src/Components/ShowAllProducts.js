import axios from "axios";
import React, { useEffect, useState } from "react";
import { cat } from "./Products";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
export default function ShowAllProducts() {
  const navigate = useNavigate();
  const [prodData, setProdsData] = useState([]);
  const navigateScreen = () => {
    navigate("/products");
  };
  const selectedId = [];
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`https://jtiapi.herokuapp.com/products?categories=${cat}`)
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
  useEffect(() => {
    if (cat === undefined) {
      navigateScreen();
    }
  });
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
      <div className="row row-cols-1 mx-3 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {prodData.map((item, index) => {
          return <HeroView item={item} key={item._id} setId={setId} />;
        })}
      </div>
    </>
  );
}
const HeroView = (props) => {
  const addToCart = (e) => {
    e.preventDefault();
    let data = {
      _id: props.item._id,
      name: props.item.name,
      price: props.item.price,
      category: props.item.category,
      pic: props.item.pic,
      value: 1,
    };
    const response = axios.post("https://jtiapi.herokuapp.com/cart", data);
    response
      .then((res) => {
        alert("added to cart");
      })
      .catch((error) => {
        error.send(alert("item already exist"));
      });
  };
  return (
    <div className="col mb-4">
      {/* <!-- Card --> */}
      <div className="card">
        {/* <!--Card image--> */}
        <div className="view overlay m-auto">
          <img src={props.item.pic} className="prodimg rounded-top" alt="" />
          <a href="#!">
            <div className="mask rgba-white-slight"></div>
          </a>
        </div>

        {/* <!--Card content--> */}
        <div className="card-body">
          {/* <!--Title--> */}
          <h6 className="text-uppercase">{props.item.name}</h6>
          {/* <div className="mb-2 text-muted small">
            <p className=" mb-4 mb-md-0">{props.item.desc}</p>
          </div> */}
          <div className="d-flex flex-row align-items-center mb-1">
            <h4 className="mb-1 me-1">&#x20b9; {props.item.price}</h4>
            {/* <h4 className="d-none">{props.item.category}</h4> */}
          </div>
          <div className="d-flex flex-column mt-4">
            <button
              className="btn btn-outline-primary btn-sm mt-2 btn0"
              type="button"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
