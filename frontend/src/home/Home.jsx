import React from 'react'
import Navbar from '../components/Navbar'
import Heropage from '../components/Heropage'
import NavContact from '../components/NavContact'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <NavContact/>
    <Navbar/>
    <Heropage/>
    <Footer/>
    </>
  )
}

export default Home