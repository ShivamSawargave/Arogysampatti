import React from 'react'
import Footer from './Footer'
import NavContact from './NavContact';
import Navbar from './Navbar';

function Symptom() {
  return (
    <>
         <NavContact />
         <Navbar />
            <div className='md:mx-12 mx-4 md:pt-24 mt-20 flex flex-col mb-12'>
                <div className='mt-4 md:text-5xl text-3xl font-bold flex justify-center items-center text-blue-700'>Patient Symptom Screening</div>
                <div>
                    <h5 className='mt-4'>During these COVID times, your safety is our greatest priority. To ensure overall patient safety, we have developed this symptom screening tool to help our patients while checking in for appointments or for admission.</h5>
                    <h5 className='mt-4'>You will be asked a series of questions to help us prepare for your visit.</h5>
                    <h5 className='mt-4'>Wondering if this is for you?</h5>
                    <h5 className='mt-4'>If you are coming to our hospital for a clinic appointment, to get admitted, to have a procedure or undergo surgery, then you will need to answer these questions.</h5>
                    <h5 className='mt-4'>Please ensure that you do this on the day of your visit to the hospital.</h5>
                </div>
                <a href='SymptomScreening' ><button className='bg-blue-400 hover:bg-blue-700 p-4 rounded-md text-white mt-4'>SYMPTOM SCREENING</button></a>
            </div>
         <Footer/>
    </>
  )
}

export default Symptom
