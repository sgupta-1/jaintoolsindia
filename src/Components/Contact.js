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
  // setName('')
  // setEmail('')
  // setNumber('')
  // setMessage('')
  // alert('Form Submitted...')
  return update(ref(database), updates);
}


  return (
    
    <div>
      
      <Navbar/>

      <form onSubmit={handleSubmit}>
        
      </form>
      <Footer/>
    </div>
      
  )
}
