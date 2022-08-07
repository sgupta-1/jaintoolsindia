import React,{useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";

export default function Contact() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [number,setNumber] = useState(null);
  const [message,setMessage] = useState(null);

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "name"){
        setName(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "number"){
        setNumber(value);
    }
    if(id === "message"){
        setMessage(value);
    }

}

const handleSubmit = (e) =>{
  e.preventDefault()
  let obj = {
          name:name,
          email:email,
          number:number,
          message:message,
      }       
  const newPostKey = push(child(ref(database), 'posts')).key;
  const updates = {};
  updates['/' + newPostKey] = obj
  setName('')
  setEmail('')
  setNumber('')
  setMessage('')
  alert('Form Submitted...')
  return update(ref(database), updates);
}


  return (
    <div>
      <Navbar/>
      <form onSubmit={handleSubmit}>
        <section className="text-gray-700 body-font relative py-10">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Want to get in touch? We'd love to hear from you. Fill in the details and get started...
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    pattern="[a-zA-Z][a-zA-Z ]{3,}"
                    required
                    autocomplete='on'
                    placeholder='John Doe'
                    lang='en'
                    id="name"
                    value={name}
                    onChange = {handleInputChange}
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    autocapitalize="off" spellcheck="false" autocorrect="off"
                    required
                    autocomplete='on'
                    lang='en'
                    placeholder='example@domain.com'
                    id="email"
                    value={email}
                    onChange = {handleInputChange}
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="number"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    maxlength='10'
                    placeholder='9876XXXXXX'
                    pattern='[0-9]{10}'
                    id="number"
                    lang='en'
                    value={number}
                    onChange = {handleInputChange}
                    name="number"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    lang='en'
                    placeholder='Enter your message...'
                    required
                    maxlength='512'
                    value={message}
                    onChange = {handleInputChange}
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a href='mailto:jaintools@gmail.com' className="text-indigo-500">jaintools@gmail.com</a>
                <p className="leading-normal my-3">
                  49 Rithala.
                  <br />
                  New Delhi, IN 110092
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </form>
      <Footer/>
    </div>
      
  )
}
