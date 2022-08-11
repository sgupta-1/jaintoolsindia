import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber  } from "firebase/auth";
import $ from 'jquery'

const auth = getAuth();

export default function Signup() {
  $(document).ready(function () {
    $(window).on("load", function () {
  $('.digit-group').find('input').each(function() {
    $(this).attr('maxlength', 1);
    $(this).on('keyup', function(e) {
      var parent = $($(this).parent());
  
      if (e.keyCode === 8 || e.keyCode === 37) {
        var prev = parent.find('input#' + $(this).data('previous'));
  
        if (prev.length) {
          $(prev).select();
        }
      } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
        var next = parent.find('input#' + $(this).data('next'));
  
        if (next.length) {
          $(next).select();
        } else {
          if (parent.data('autosubmit')) {
            parent.submit();
          }
        }
      }
    });
  });
});});

    function myFunction() {
        if(document.getElementById("remember").checked){
        document.getElementById("signup").disabled = false;}else{
            document.getElementById("signup").disabled = true;
        }
      }
  return (
    <>
    <Navbar/>
    <section className="slideanim1 mt">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt=""/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center simpletext fw-bold mx-3 mb-10">Sign-up</p>
          </div>

          <div className="form-outline mb-4">
          <input
                  type="tel"
                  name="number"
                  id="number"
                  placeholder="+919876XXXXXX"
                  pattern="[0-9]{10}"
                  title="Must contain a 10 Digit Number"
                  maxLength="13"
                  className="form-control form-control-lg"
                  required
                />
            </div>
            <form method="get" class="digit-group" data-group-name="digits" data-autosubmit="false" autocomplete="off" >
                  <input type="text" id="digit-1" name="digit-1" data-next="digit-2" placeholder="-" />
                  <input type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" placeholder="-" />
                  <input type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" placeholder="-" />
                  <input type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" placeholder="-" />
                  <input type="text" id="digit-5" name="digit-5" data-next="digit-6" data-previous="digit-4" placeholder="-" />
                  <input type="text" id="digit-6" name="digit-6" data-previous="digit-5" placeholder="-" />
            </form>

          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="remember" onClick={myFunction}/>
              <label className="form-check-label" for="remember">
                Continue if you read our</label> <NavLink className="link-danger" to={"/terms-and-conditions"}>Terms and Conditions</NavLink>
              
            </div>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <div id="sign-in-button"></div>
            <input type="submit" value="Sign-up" className="btn btnlog btn-primary btn-lg" id="signup" disabled/>
            <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <NavLink className="link-danger" to={"/login"}>Login</NavLink></p>
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
