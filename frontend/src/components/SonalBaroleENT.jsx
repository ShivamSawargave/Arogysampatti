import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SonalBaroleENT() {
  return (
    <>
        <NavContact />
            <Navbar />
            <div className="flex flex-wrap md:pt-40 md:pl-12 pt-16 pl-4 items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly shadow-lg">
                    <img
                        className="h-48 w-48 rounded-full mr-12"
                        src="https://plus.unsplash.com/premium_photo-1682089872205-dbbae3e4ba32?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZG9jdG9yfGVufDB8fDB8fHww"
                        alt=""
                    />
                    <div>
                        <div className="text-3xl font-bold">Dr. Sonal Barole</div>
                        <div className="text-2xl font-normal">
                        SENIOR CONSULTANT ENT
                        </div>
                        <div className="font-normal">
                        ENT | ENT (Ear, Nose and Throat)
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Sonal Barole is a Young and dedicated ENT and Head-Neck surgeon. Delhi. She has 15 years experience in this field. 
                    She completed her MBBS from Indira Gandhi Medical College, Nagpur in 2000.
                    During the course of her residency and subsequent registrarship she gained extensive experience in all routine and major surgical procedures related to the ear, voice box, sinonasal region and neck. She also worked as a Senior research associate for 1 year and 11 months at MAMC, Delhi. She is a reviewer with international medical journals and has several national and international publications to her credit. She is a life member of Association of Otolaryngologists of India, Association of Phonosurgeons of India and Rhinology Society of India, Association of Otolaryngologists of India( Delhi Branch) and Delhi Medical Council.
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS, DLO, DNB
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default SonalBaroleENT