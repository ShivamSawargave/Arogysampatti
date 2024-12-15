import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SonalBaroleNephrology() {
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
                    Dr Sonal Barole has over 33 years of rich experience in his field. She has CCST Equivalence in Renal Medicine from Royal Colleges of Physicians London. Formerly she was Professor of Nephrology in Christian Medical College and Hospital and DMCH ,Ludhiana (Punjab, India).She has also worked as a consultant in Nephrology in the renal unit at Manchester Royal Infirmary, Manchester UK. 
                    She has also contributed a chapter for Association of Physicians of India Text Book on Nephrology. She has published a number of papers in National International journals. She has also delivered lectures at various conferences. She has been the President of Indian Society of Nephrology (North Chapter).
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

export default SonalBaroleNephrology