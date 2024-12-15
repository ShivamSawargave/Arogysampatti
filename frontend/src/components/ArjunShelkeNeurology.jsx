import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ArjunShelkeNeurology() {
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
                        PRINCIPAL DIRECTOR & HOD NEUROLOGY
                        </div>
                        <div className="font-normal">
                        Neurology | Neurology
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Arjun Shelke has established two departments in his 18 years of career in Neurology in two large corporate hospitals in Paras and Artemis seeing largest no. of OPD (100 Patient per day) and IPD (50 patient per day)
                    He is frequently invited speaker at National and International Conferences, Treatments and Services Complete neuroscience centre providing most advanced intervention in all form including all kind of stroke intervention/stroke rehabilitation / botox / cerebral palsy/advanced second line management for multiple scelerosis / epileptic surgery / DBS surgery for PD patients.
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MBBS, MD (Pediatrics), DM (Neurology), Fellowship In Epilepsy
                    </div>
                </div>
            </div>
            <Footer />
   </>
  )
}

export default ArjunShelkeNeurology