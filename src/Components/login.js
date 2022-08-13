import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import {auth} from "../firebase"
import {RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth"

export default function Login() {
  const countryCode = "+91"
  const [number, setNumber] = useState(countryCode)
  const [OTP, setOTP] = useState('')
  const [expandForm, setExpandForm] = useState(false)

  const generateRecaptcha = ()=>{
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, auth);
  }

  const requestOTP = (e)=>{
    e.preventDefault()
    if(number.length >=12){
      setExpandForm(true)
     generateRecaptcha()
     let appVerifier = window.recaptchaVerifier
     signInWithPhoneNumber(auth, number, appVerifier)
     .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      console.log(error)
    });
    }
  }

  const verifyOTP = (e)=> { 
    let otp = e.target.value
    setOTP(otp)

    if(otp.length===6){
      let confirmationResult = window.confirmationResult
      confirmationResult.confirm(otp).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user)
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error)
      });
    }
  }


  return (
    <>
    <Navbar/>
    <section className="mt slideanim1">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt=""/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={requestOTP}>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center simpletext fw-bold mx-3 mb-10">Login</p>
          </div>

          <div className="form-outline mb-4">
          <input
                  type="tel"
                  name="number"
                  id="number"
                  placeholder="Example: +919876XXXXXX"
                  pattern="^\+[9,1]{2}[0-9]{10}"
                  title="Must contain a 10 Digit Number"
                  maxLength="13"
                  className="form-control form-control-lg"
                  value={number}
                  onChange={(e)=>setNumber(e.target.value)}
                  required
                />
          </div>
          {expandForm === true?
          <>
            <div className="form-outline mu-4 mb-4">
            <input
                    type="tel"
                    name="otp"
                    value={OTP}
                    id="otpInput"
                    placeholder="OTP: XXXXXX"
                    title="Must enter 6 digit OTP pin"
                    maxLength="6"
                    className="form-control form-control-lg"
                    onChange={verifyOTP}
                    required
                  />
            </div>
            </>:null  
        }

          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="remember" />
              <label className="form-check-label" htmlFor="remember">
                Remember me
              </label>
            </div>
          </div>

          {expandForm === false?
          <>
          <div className="text-center text-lg-start mt-4 pt-2">
            <input type="submit" value="Get OTP" className="btn btnlog btn-primary btn-lg"
              />
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink className="link-danger" to={"/signup"}>Register</NavLink></p>
          </div>
          </>:null  
        }
        {expandForm === true?
          <>
          <div className="text-center text-lg-start mt-4 pt-2">
            <input type="submit" value="Login" className="btn btnlog btn-primary btn-lg"
              />
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink className="link-danger" to={"/signup"}>Register</NavLink></p>
          </div>
          </>:null  
        }

          <div id="recaptcha-container"></div>
        </form>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </>
  );
}
