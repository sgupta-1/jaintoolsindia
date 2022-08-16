import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
export default function Cart() {
  const [cartData, setcartsData] = useState([]);
  const selectedId = [];
  useEffect(() => {
    const getData = async () => {
      await axios.get("https://jtiapi.herokuapp.com/cart").then((res) => {
        setcartsData(res.data);
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
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">CART</h5>
                </div>
                <div className="card-body">
                  {cartData.map((item, index) => {
                    return (
                      <CartView item={item} key={item._id} setId={setId} />
                    );
                  })}

                  {/* <h5 className="mb-0">Summary</h5> */}
                </div>
                {/* <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span></span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including GST)</p>
                        </strong>
                      </div>
                      <span>
                        <strong></strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const CartView = (props) => {
  let [num, setNum] = useState(props.item.value);
  const handleSubmit = () => {
    if (Number(num) > 1) {
      const response = axios.put(
        `https://jtiapi.herokuapp.com/cart/${props.item._id}`,
        {
          value: Number(num) - 1,
          price: (Number(num) - 1) * props.item.price,
        }
      );
      response
        .then((res) => {
          console.log("updated");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      deleteHandler();
    }
  };
  const handleSubmit2 = () => {
    const response = axios.put(
      `https://jtiapi.herokuapp.com/cart/${props.item._id}`,
      {
        value: Number(num) + 1,
        price: (Number(num) + 1) * props.item.price,
      }
    );
    response
      .then((res) => {
        console.log("updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let incNum = () => {
    setNum(Number(num) + 1);
  };
  let decNum = () => {
    if (num > 1) {
      setNum(Number(num) - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  const deleteHandler = () => {
    const response = axios.delete(
      `https://jtiapi.herokuapp.com/cart/${props.item._id}`
    );
    response
      .then((res) => {
        // console.log(props.item._id);
        console.log("deleted");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        // console.log(props.item._id);
      });
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <div
            className="bg-image hover-overlay hover-zoom ripple rounded "
            data-mdb-ripple-color="light"
          >
            <img src={props.item.pic} className=" cart-img" alt="" />
            <a href="#!">
              <div className="mask carts-color"></div>
            </a>
          </div>
        </div>

        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          {/* <p>prodID :{props.item._id}</p> */}
          <p>
            <strong className="text-uppercase">{props.item.name}</strong>
          </p>
          <h5 className="text-secondary text-uppercase">
            {props.item.category}
          </h5>
          <button
            type="button"
            className="btn btn-primary btn-sm me-1 mb-2"
            data-mdb-toggle="tooltip"
            title="Remove item"
            onClick={deleteHandler}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 ">
          <div className="d-flex mb-4 carts-size">
            <button
              className="btn btn-primary px-3 me-2"
              onClick={() => {
                handleSubmit();
                decNum();
              }}
            >
              <i className="fas fa-minus"></i>
            </button>

            <div className="form-outline">
              <input
                id="form1"
                min="0"
                name="quantity"
                type="number"
                value={num}
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <button
              className="btn btn-primary px-3 ms-2"
              onClick={() => {
                handleSubmit2();
                incNum();
              }}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>

          <p className="text-start text-md-center">
            <strong>₹{props.item.price * num}</strong>
          </p>
        </div>
      </div>
      <hr className="my-4" />
    </>
  );
};
