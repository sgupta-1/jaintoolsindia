import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

export default function login() {
  return (
    <>
    <Navbar/>
    <section class="mt slideanim1">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt=""/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center simpletext fw-bold mx-3 mb-10">Login</p>
          </div>

          <div class="form-outline mb-4">
          <input
                  type="tel"
                  name="number"
                  id="number"
                  placeholder="919876XXXXXX"
                  pattern="[0-9]{10}"
                  title="Must contain a 10 Digit Number"
                  maxLength="10"
                  class="form-control form-control-lg"
                  required
                /></div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="remember" />
              <label class="form-check-label" for="remember">
                Remember me
              </label>
            </div>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <input type="submit" value="Login" class="btn btnlog btn-primary btn-lg"
              />
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink className="link-danger" to={"/signup"}>Register</NavLink></p>
          </div>

        </form>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </>
  );
}
