import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SharadSonawaneNephrology() {
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
                        DIRECTOR NEPHROLOGY
                        </div>
                        <div className="font-normal">
                        Nephrology | Nephrology | Organ Transplant | Kidney Transplant
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    With over 2500 renal transplants under his belt, Dr. Sharad Sonawane holds certifications and vast experience in interventions, including AVF and AV shunts. 
                    Dr. Sonawane is recognized with the AITSE award by the President of India for his academic contributions as a DNB co-guide and teacher over eight years.
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS, DNB
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default SharadSonawaneNephrology