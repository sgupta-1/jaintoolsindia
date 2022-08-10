import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ShowAllProducts from "./Components/ShowAllProducts";
import OTP from "./Components/otp";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/contact-us" element={<Contact />} />
        <Route exact path="/login" element={<Login  />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/showallproducts" element={<ShowAllProducts />} />
        <Route exact path="/otp-verification" element={<OTP />} />
      </Routes>
    </Router>
  );
}

export default App;
