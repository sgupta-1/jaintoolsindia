import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { database } from "../firebase";
import { ref, push, child, update } from "firebase/database";
import img1 from "../img/contact/email.png";
import img2 from "../img/contact/location.png";

export default function Contact() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "number") {
      setNumber(value);
    }
    if (id === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name: name,
      email: email,
      number: number,
      message: message,
    };
    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
    alert("Form Submitted...");
    return update(ref(database), updates);
  };

  return (
    <>
      <Navbar />
      <div className="container1">
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Do you have any questions or you have to inquire ? Don't feel shy
              we are here only for you...why not get in touch?
            </p>

            <div className="info">
              <div className="information">
                <img src={img1} className="icon" alt="" />
                <p>Rithala, New Delhi, IN 110092</p>
              </div>
              <div className="information">
                <img src={img2} className="icon" alt="" />
                <p>jaintoolsindia@gmail.com</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="https://www.facebook.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form
              onSubmit={handleSubmit}
              autocomplete="off"
              classNameName="form1"
            >
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  placeholder="Name: John Doe"
                  pattern="[a-zA-Z][a-zA-Z ]{3,}"
                  lang="en"
                  id="name"
                  className="input"
                  value={name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-container">
                <input
                  type="email"
                  autocapitalize="off"
                  spellcheck="false"
                  autocorrect="off"
                  lang="en"
                  name="email"
                  placeholder="Email: example@domain.com"
                  id="email"
                  className="input"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  name="number"
                  id="number"
                  placeholder="Phone Number: 9876XXXXXX"
                  pattern="[0-9]{10}"
                  value={number}
                  onChange={handleInputChange}
                  title="Must contain a 10 Digit Number"
                  maxlength="10"
                  className="input"
                  required
                />
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  lang="en"
                  className="input"
                  placeholder="Message"
                  id="message"
                  value={message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <input type="submit" value="Send" className="btn1" />
            </form>
          </div>
        </div>
      </div>
      <Footer />

      <style>
        {`.container1 {
  position: relative;
  width: 100%;
  min-height: 80vh;
  padding: 2rem;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.contact-form {
  background-color: #1abc9c;
  position: relative;
}

.circle {
  border-radius: 50%;
  background: linear-gradient(135deg, transparent 20%, #149279);
  position: absolute;
}

.circle.one {
  width: 130px;
  height: 130px;
  top: 130px;
  right: -40px;
}

.circle.two {
  width: 80px;
  height: 80px;
  top: 10px;
  right: 30px;
}

.contact-form:before {
  content: "";
  position: absolute;
  width: 26px;
  height: 26px;
  background-color: #1abc9c;
  transform: rotate(45deg);
  top: 50px;
  left: -13px;
}

.form1 {
  padding: 2.3rem 2.2rem;
  z-index: 10;
  overflow: hidden;
  position: relative;
}

.title {
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 2.2rem;
}

.input-container {
  position: relative;
  margin: 1rem 0;
}

.input {
  width: 100%;
  outline: none;
  border: 2.5px solid #fafafa;
  background: none;
  padding: 0.6rem 1.2rem;
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-radius: 25px;
  transition: 0.3s;
}

textarea.input {
  padding: 0.8rem 1.2rem;
  min-height: 150px;
  border-radius: 22px;
  resize: none;
  overflow-y: auto;
}

.input-container label {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  padding: 0 0.4rem;
  color: #fafafa;
  font-size: 0.9rem;
  font-weight: 600;
  pointer-events: none;
  z-index: 1000;
  transition: 0.5s;
}

.input-container.textarea label {
  top: 1rem;
  transform: translateY(0);
}

.btn1 {
  padding: 0.8rem 1.3rem;
  background-color: #fff;
  border: 2px solid #fafafa;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1abc9c;
  line-height: 1;
  border-radius: 25px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 0;
}

.input-container span {
  position: absolute;
  top: 0;
  left: 155px;
  transform: translateY(-50%);
  font-size: 0.8rem;
  padding: 0 0.4rem;
  color: transparent;
  pointer-events: none;
  z-index: 500;
}

.input-container span:before,
.input-container span:after {
  content: "";
  position: absolute;
  width: 10%;
  opacity: 0;
  transition: 0.3s;
  height: 5px;
  background-color: #1abc9c;
  top: 50%;
  transform: translateY(-50%);
}

.input-container span:before {
  left: 50%;
}

.input-container span:after {
  right: 50%;
}


.contact-info {
  padding: 2.3rem 2.2rem;
  position: relative;
}

.contact-info .title {
  color: #1abc9c;
}

.text {
  font-weight: bold;
  color: #333;
  margin: 1.5rem 0 2rem 0;
}

.information {
  display: flex;
  color: #000;
  font-weight: 500;
  margin: 0.7rem 0;
  align-items: center;
  font-size: 1rem;
}

.icon {
  width: 28px;
  margin-right: 0.7rem;
  margin-top: -15px;
}

.social-media {
  padding: 2rem 0 0 0;
}

.social-media p {
  color: #333;
}

.social-icons {
  display: flex;
  margin-top: 0.5rem;
}

.social-icons a {
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background: linear-gradient(45deg, #1abc9c, #149279);
  color: #fff;
  text-align: center;
  line-height: 35px;
  margin-right: 0.5rem;
  transition: 0.3s;
}

.social-icons a:hover {
  transform: scale(1.05);
}

.contact-info:before {
  content: "";
  position: absolute;
  width: 110px;
  height: 100px;
  border: 22px solid #1abc9c;
  border-radius: 50%;
  bottom: -77px;
  right: 50px;
  opacity: 0.3;
}

.square {
  position: absolute;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(181%, 11%);
  opacity: 0.2;
}

@media (max-width: 850px) {
  .form {
    grid-template-columns: 1fr;
  }

  .contact-info:before {
    bottom: initial;
    top: -75px;
    right: 65px;
    transform: scale(0.95);
  }

  .contact-form:before {
    top: -13px;
    left: initial;
    right: 70px;
  }

  .square {
    transform: translate(140%, 43%);
    height: 350px;
  }


  .text {
    margin: 1rem 0 1.5rem 0;
  }

  .social-media {
    padding: 1.5rem 0 0 0;
  }
}

@media (max-width: 480px) {
  .container1 {
    padding: 1.5rem;
  }

  .contact-info:before {
    display: none;
  }

  .square{
    display: none;
  }

  .form1,
  .contact-info {
    padding: 1.7rem 1.6rem;
  }

  .text,
  .information,
  .social-media p {
    font-size: 0.8rem;
  }

  .title {
    font-size: 1.15rem;
  }

  .social-icons a {
    width: 30px;
    height: 30px;
    line-height: 30px;
  }

  .icon {
    width: 23px;
  }

  .input {
    padding: 0.45rem 1.2rem;
  }

  .btn1 {
    padding: 0.45rem 1.2rem;
  }`}
      </style>
    </>
  );
}
