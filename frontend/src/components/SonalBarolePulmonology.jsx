import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SonalBarolePulmonology() {
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
                        DIRECTOR PULMONOLOGY
                        </div>
                        <div className="font-normal">
                            Pulmonology | Pulmonology
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Sonal Barole is an expert pulmonologist with an experience of nearly a quarter-century as a physician. After completing her MBBS in 1997, she pursued MD in Tuberculosis & Respiratory Diseases in 2001. She was awarded European Diploma in adult respiratory medicine (HERMES Diplomate) in 2011 at Amsterdam. She became fellow of Royal Collage of Physician (Edin) FRCP in July, 2022. AREA OF EXPERTISE: Asthma, COPD, ILD, Interstitial lung disease, Respiratory failure and Interventional Pulmonology.
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS, MD, FRCP (Edin), HERMES Diplomate
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default SonalBarolePulmonology