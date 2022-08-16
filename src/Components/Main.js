import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { auth, signOut } from "firebase/auth";

export default function Main() {
const logout = () =>{
  
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
  return (
    <>
      <Navbar />
      <div>
        <input type="button" value="Login" onClick={logout} className="btn btnlog btn-primary btn-lg"/>
      </div>
              
      <Footer />
    </>
  );
}
