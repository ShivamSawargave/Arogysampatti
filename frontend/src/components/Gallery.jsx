import React from 'react'
import NavContact from './NavContact'
import Navbar from './Navbar'

function Gallery() {
  return (
   <>
   <NavContact/>
   <Navbar/>
   <div className=' border-4 border-blue-500 ml-4 p-6 mr-4 flex flex-3 justify-around items-center flex-wrap text-xl font-bold mt-48'>
    TECHNOLOGY
    <div className='w-64'>
      <img src="4decho.jpg" alt=""  className='h-64 w-64 pt-12'/>
      <b className='text-blue-600 p-12 '>4D ECHO VIVID E-95</b>
    </div>
    <div className='w-64'>
      <img src="EEG.jpg" alt="" className='h-64 w-64'/>
      <b className='text-blue-600 p-12'>EEG & EMG</b>
      </div>
    <div className='w-64'>
      <img src="geoptima.jpg" alt="" className='h-64 w-64'/>
      <b className='text-blue-600 p-12 '>GE OPTIMA 660, CT SCANNER WITH 128 PROTECTION</b>
      </div>
    <div className='w-64'>
      <img src="holmium.jpg" alt="" className='h-64 w-64'/>
      <b className='text-blue-600 p-12'>HOLMIUM FOR STONE</b>
      </div>
    <div className='w-64'>
      <img src="lumber.jpg" alt="" className='h-64 w-64'/>
      <b className='text-blue-600 p-12'>LUMBER </b>
      </div>
    <div className='w-64'>
      <img src="mammography.jpg" alt="" className='h-64 w-64'/>
      <b className='text-blue-600 p-12'>MAMMAGRAPHY</b>
      </div>
    <div className='w-64'>
      <img src="maquet.jpg" alt="" className='h-64 w-64'/>
      <b className='text-blue-600 p-12'>MOQUET SERVO-I</b>
      </div>
    <div className='w-64'>
      <img src="neurosergery.jpg" alt="" className='h-64 w-64'/>
      <b className='text-blue-600 p-12'>BRAIN LAB NAVIGATION FOR NEUROSERGERY</b>
      </div>
    <div className='w-64'>
      <img src="philips.jpg" alt="" className='h-64 w-64'/>
      <b className='text-blue-600 p-12'>PHILIPS EPIQ 5</b>
      </div>
    <div className='w-64'>
      <img src="tesla.jpg" alt="" className='h-64 w-64'/>
      <b className='text-blue-600 p-12'>3 TESLA MRI</b>
      </div>
    
   </div>
   <div>
   <footer className="footer bg-neutral text-neutral-content grid-rows-2 p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <a className="link link-hover">Twitter</a>
    <a className="link link-hover">Instagram</a>
    <a className="link link-hover">Facebook</a>
    <a className="link link-hover">Github</a>
  </nav>
  <nav>
    <h6 className="footer-title">Explore</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Enterprise</a>
    <a className="link link-hover">Security</a>
    <a className="link link-hover">Pricing</a>
  </nav>
  <nav>
    <h6 className="footer-title">Apps</h6>
    <a className="link link-hover">Mac</a>
    <a className="link link-hover">Windows</a>
    <a className="link link-hover">iPhone</a>
    <a className="link link-hover">Android</a>
  </nav>
</footer>
   </div>
   </>
  )
}

export default Gallery