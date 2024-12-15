import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ApekshaPatilThoracic() {
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
                        CHAIRMAN CARDIAC SCIENCE
                        </div>
                        <div className="font-normal">
                        Cardiac Sciences | Adult CTVS (Cardiothoracic and Vascular Surgery) | Heart Transplant |
Thoracic Surgery | Thoracic Surgery
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Apeksha Patil is Chief Cardiothoracic and Vascular Surgeon and as a Chairman, she heads the Department of Cardio Vascular Sciences at Arogyasampatti Hospitals.
                    She has presented more than 200 scientific papers and conducted demonstrations of new techniques in heart surgery at various hospitals in India and abroad. 
                    Area of Expertise: â€¢ Minimally Invasive Bypass Surgery â€¢ Cardiothoracic and Vascular Surgeries . Complex Coronary, Aorta & Valve Repair Surgeries . Heart Failure and Heart Transplant Surgery
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MS, M.Ch, DNB, FIACS
                    </div>
                </div>
            </div>
            <Footer />
        </>
  )
}

export default ApekshaPatilThoracic
