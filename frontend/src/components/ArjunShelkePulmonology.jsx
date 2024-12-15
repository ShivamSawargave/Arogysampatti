import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ArjunShelkePulmonology() {
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
                            DIRECTOR PULMONOLOGY
                        </div>
                        <div className="font-normal">
                            Pulmonology | Pulmonology
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Arjun Shelke is the Director & Head of Pulmonology & Critical Care at Arogyasampatti Hospital Nagpur. He is leading the department since July 2008 & has more than 40 years of experience behind him. He is teacher for both DNB Respiratory Medicine and Critical Care and Indian Diploma in Critical Care and a critical care examiner for National Board Examinations and Indian Society of Critical Care Medicine. He is actively involved in research and has numerous scientific publications to his credit. He is an expert at advanced bronchoscopic procedures and management of respiratory failure.
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS, DTCD, MD (TB & Chest Diseases), DNB (Respiratory Diseases), EDIC, EDRM
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default ArjunShelkePulmonology