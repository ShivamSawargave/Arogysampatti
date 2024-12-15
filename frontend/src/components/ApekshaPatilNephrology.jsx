import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ApekshaPatilNephrology() {
  return (
    <>
         <NavContact />
            <Navbar />
            <div className="flex flex-wrap md:pt-40 md:pl-12 pt-16 pl-4 items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly shadow-lg">
                    <img
                        className="h-48 w-48 rounded-full mr-12"
                        src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
                        alt=""
                    />
                    <div>
                        <div className="text-3xl font-bold">Dr. Apeksha Patil</div>
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
                    Dr. Apeksha Patil is the Director of Nephrology at Arogyasampatti Nagpur.
                    She actively participates in national and international conferences as a speaker and has various publications in key journals of Nephrology. She has 15 years of rich experience and has a special interest in Kidney Transplants and has done many complicated transplants like ABO incompatible, HLA incompatible & highly sensitized second transplants apart from live related & cadaveric transplants.
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS, DNB (Medicine), DNB (Nephrology)
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default ApekshaPatilNephrology