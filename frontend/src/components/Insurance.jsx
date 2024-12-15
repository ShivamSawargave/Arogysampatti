import React from 'react'
import Footer from './Footer'
import NavContact from './NavContact';
import Navbar from './Navbar';

function Insurance() {
  return (
    <>
    <NavContact/>
    <Navbar/>
        <div className='md:mx-20 mx-4 md:pt-24 mt-20 flex flex-col mb-12'>
            <div>
                <div className='mt-4 md:text-5xl text-3xl font-bold flex justify-center items-center text-blue-700'>Insurance and TPA</div>
                <div className='mt-4'>Arogyasampatti Hospital is engaged in providing the latest medical care to patients with a variety of ailments and medical conditions. Arogyasampatti has succeeded in bringing together the best of infrastructure, technology, training, education, and medical intelligence under one roof to provide personalized healthcare services Noble brings together an exceptional team of doctors, clinical researchers, multidisciplinary investigation, and translating scientific advances more speedily into new ways of diagnosing and treating patients and preventing diseases. Arogyasampatti Hospital provides expert care to our patients and a level of confidence in receiving the latest medicine has to offer.</div>
            </div>
            <div>
                <div className='mt-4 text-blue-700 flex md:text-2xl text-xl font-bold justify-center items-center'>TPA Insurance List</div>
                <div className='flex md:flex-row flex-col justify-evenly'>
                    <div>
                        <h5 className='mt-4'>ADITYA BIRLA HEALTH INSURANCE CO. LTD</h5>
                        <h5 className='mt-4'>DEDICATED HEALTHCARE SERVICES TPA (INDIA) PRIVATE LIMITED</h5>
                        <h5 className='mt-4'>EAST WEST ASSIST TPA PVT. LTD.</h5>
                        <h5 className='mt-4'>GENINS INDIA TPA LTD</h5>
                        <h5 className='mt-4'>RAKSHA TPA PVT.LTD.</h5>
                        <h5 className='mt-4'>THE NEW INDIA ASSURANCE CO LTD</h5>
                    </div>
                    <div>
                        <h5 className='mt-4'>ALANKIT HEALTH CARE TPA LIMITED</h5>
                        <h5 className='mt-4'>E MEDITEK(TPA) SERVICES LTD</h5>
                        <h5 className='mt-4'>GOOD HEALTHPLAN LTD.</h5>
                        <h5 className='mt-4'>ICICI PRUDENTIAL LIFE INSURANCE COMPANY</h5>
                        <h5 className='mt-4'>UNITED HEALTH CARE SERVICES</h5>
                        <h5 className='mt-4'>STAR HEALTH & ALLIED INSURANCE COMPANY</h5>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Insurance
