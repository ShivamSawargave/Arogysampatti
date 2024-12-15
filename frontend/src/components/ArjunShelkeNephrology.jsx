import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";


function ArjunShelkeNephrology() {
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
                        DIRECTOR NEPHROLOGY
                        </div>
                        <div className="font-normal">
                        Nephrology | Nephrology 
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Arjun Kulkarni has over 33 years of rich experience in his field. He has CCST Equivalence in Renal Medicine from Royal Colleges of Physicians London. Formerly he was Professor of Nephrology in Christian Medical College and Hospital and DMCH ,Ludhiana (Punjab, India).He has also worked as a consultant in Nephrology in the renal unit at Manchester Royal Infirmary, Manchester UK. He has also contributed a chapter for Association of Physicians of India Text Book on Nephrology. He has published a number of papers in National International journals. He has also delivered lectures at various conferences. He has been the President of Indian Society of Nephrology (North Chapter).
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MD, DM (Nephrology)
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default ArjunShelkeNephrology