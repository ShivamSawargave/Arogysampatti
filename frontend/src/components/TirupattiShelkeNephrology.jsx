import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";


function TirupattiShelkeNephrology() {
  return (
   <>
     <NavContact />
            <Navbar />
            <div className="flex flex-wrap md:pt-40 md:pl-12 pt-16 pl-4 items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly shadow-lg">
                    <img
                        className="h-48 w-48 rounded-full mr-12"
                        src="https://static.vecteezy.com/system/resources/thumbnails/030/928/115/small_2x/handsome-indian-doctor-generate-ai-photo.jpg"
                        alt=""
                    />
                    <div>
                        <div className="text-3xl font-bold">Dr. Tirupatti Shelke</div>
                        <div className="text-2xl font-normal">
                        SENIOR DIRECTOR & HOD NEPHROLOGY
                        </div>
                        <div className="font-normal">
                        Nephrology | Nephrology 
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Tirupatti Shelke has more than 16 years of expericence, and has worked in nephrology with government and private hospitals of Delhi. After his MBBS, he did his DM from SGPGI, Lucknow. Dr. Shelke has clinical interests in Hematology, Kidney Transplant Physician, Clinical Nephrology, Diabetic Hypertension.
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS, MD, DM
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
   </>
  )
}

export default TirupattiShelkeNephrology