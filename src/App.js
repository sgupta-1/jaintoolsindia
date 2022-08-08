import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Products from "./Components/Products";
import $ from "jquery";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;
