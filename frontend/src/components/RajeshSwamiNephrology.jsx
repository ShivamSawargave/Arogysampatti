import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function RajeshSwamiNephrology() {
  return (
    <>
         <NavContact />
            <Navbar />
            <div className="flex flex-wrap md:pt-40 md:pl-12 pt-16 pl-4 items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly shadow-lg">
                    <img
                        className="h-48 w-48 rounded-full mr-12"
                        src="https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg"
                        alt=""
                    />
                    <div>
                        <div className="text-3xl font-bold">Dr. Rajesh Swami</div>
                        <div className="text-2xl font-normal">
                        SENIOR DIRECTOR & HOD NEPHROLOGY & RENAL TRANSPLANT
                        </div>
                        <div className="font-normal">
                        Nephrology | Nephrology | Organ Transplant | Kidney Transplant
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Rajesh Swami, MBBS, MD, DNB (Nephrology), is a renowned name in the field of Nephrology. 
                    He has more than 24+ years of experience. He has worked at some of the leading hospitals.
                    Dr. Rajesh Swami is an exceptional clinician having several national and international publications to his credit.
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS, MD, DNB (Nephrology)
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default RajeshSwamiNephrology