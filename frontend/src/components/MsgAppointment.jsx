import React from 'react'
import NavContact from './NavContact'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function MsgAppointment() {
  return (
    <>
    <NavContact/>
    <Navbar/>
        <div className='flex flex-col md:pt-40 pt-16 justify-center items-center pb-12'>
            <div className='md:text-4xl text-3xl justify-center items-center'>Thank you for showing interest, our relationship executive will get in touch with you shortly.</div>
            <Link to="/"><button className='p-2 bg-blue-300 text-white hover:bg-slate-600 rounded-md'>Back to Homepage</button></Link>
        </div>
        <Footer/>
    </>
  )
}

export default MsgAppointment