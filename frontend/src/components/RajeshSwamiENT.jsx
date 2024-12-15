import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function RajeshSwamiENT() {
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
                        ADDITIONAL DIRECTOR 
                        </div>
                        <div className="font-normal">
                        ENT | ENT (Ear, Nose and Throat)
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Rajesh Swami is the Additional Director - ENT at Arogyasampatti, Nagpur. He has 22 years of experience not in just ENT but also in head and neck such as neck tumors, salivary gland surgeries, thyroidectomy, parathyroid gland surgeries, and other related cancer treatments. He is also an expert on routine and complicated endoscopic nose and sinus surgeries including polyps, nasal septum deviation, sinusitis, sphenoid, skull base surgeries, and endoscopic angiofibroma excision.

                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS, MS (ENT)
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default RajeshSwamiENT