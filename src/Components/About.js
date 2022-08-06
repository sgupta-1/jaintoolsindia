import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function About() {
  return (
    <div>
      <Navbar/>
      <div>
        <div className='bg-about h-80 top-0'>
          <div className='bg-white text-black mx-12 py-16 my-10'>
            <div className='font-bold flex justify-center text-5xl'>About Us</div>
           <div className='uppercase flex justify-center text-3xl font-semibold mt-3'>We offer quality that is remembered long after the price is forgotten.</div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
