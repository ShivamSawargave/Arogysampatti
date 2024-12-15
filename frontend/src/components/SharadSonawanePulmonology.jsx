import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";


function SharadSonawanePulmonology() {
  return (
    <>
        <NavContact />
            <Navbar />
            <div className="flex flex-wrap md:pt-40 md:pl-12 pt-16 pl-4 items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly shadow-lg">
                    <img
                        className="h-48 w-48 rounded-full mr-12"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0GYdZCpsJdTPZsArtvoSigDZd31q8zF7I-9ASkvB4Gga0fpnE-BtE9lTzeptdGjZhz8&usqp=CAU"
                        alt=""
                    />
                    <div>
                        <div className="text-3xl font-bold">Dr. Sharad Sonawane</div>
                        <div className="text-2xl font-normal">
                        DIRECTOR & UNIT HEAD PULMONOLOGY
                        </div>
                        <div className="font-normal">
                            Pulmonology | Pulmonology
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr Sharad Sonawane is Sr. consultant in Department of Pulmonology & Sleep Medicine at Arogyasampatti Hospital Nagpur. Dr. Sonawane has more than 15 years of vast experience in the field of pulmonology and sleep medicine. 
                    Dr. Sonawane special interest is in Tuberculosis, Respiratory Diseases, Critical Care Medicine and Sleep Medicine, asthma, COPD, ILD, allergic disorders, pleural effusion, resistant and life threatening infectious diseases involving lung, cases with acute and chronic respiratory failure and multisystem disorders affecting the lungs.
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS, MD, DNB, EDRM
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default SharadSonawanePulmonology