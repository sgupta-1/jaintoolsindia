import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Products from "./Components/Products";
import $ from 'jquery';


$(function(){
  var counter = 0;
  var a = 0;
  var b = setInterval(function(){
    $(".loader-container .loader .counted").html(a);
    $(".loader-container").css("width",a+"%");

    counter++;
    a++;
    if(counter ===101){
      clearInterval(b);
      $(".loader-container").css("display","none");
    }
  },40);
})


function App() {
  return (
    <div>
      <div class="loader-container" id="load">
        <div class="loader">
          <h1><span class="counted">0</span>%</h1>
        </div>
      </div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
