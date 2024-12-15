import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ArjunShelkeENT() {
  return (
    <>
         <NavContact />
            <Navbar />
            <div className="flex flex-wrap md:pt-40 md:pl-12 pt-16 pl-4 items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly shadow-lg">
                    <img
                        className="h-48 w-48 rounded-full mr-12"
                        src="https://cdn.euroinnova.edu.es/img/subidasEditor/doctor-5871743_640-1610073541.webp"
                        alt=""
                    />
                    <div>
                        <div className="text-3xl font-bold">Dr. Arjun Shelke</div>
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
                    Dr. Anup Kulkarni is an ENT/ Otolaryngologist in Pitampura, Delhi and has an experience of 30 years.
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS, MS - ENT
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default ArjunShelkeENT