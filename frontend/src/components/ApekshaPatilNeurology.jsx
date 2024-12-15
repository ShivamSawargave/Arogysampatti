import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ApekshaPatilNeurology() {
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
                        PRINCIPAL DIRECTOR NEUROLOGY
                        </div>
                        <div className="font-normal">
                        Neurology | Neurology
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Apeksha Patil is one of the eminent Neurologist experts with 40yrs of working experience in Department of Neurology, All India Institute of Medical Sciences (AIIMS), New Delhi.
                    She is a pioneer of stem cell therapy of stroke and multiple sclerosis in India. Dr. Apeksha Patil has made several contributions towards Government of India national programs starting way back in 1997 and pioneered Evidence-Based Healthcare in India.
                    She has more than 400 publications to his credit including papers, book chapters and books.
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MD, DM, MMSc, FAMS
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default ApekshaPatilNeurology
