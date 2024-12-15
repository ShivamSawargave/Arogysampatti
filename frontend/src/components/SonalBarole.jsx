import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SonalBarole() {
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
                        EXECUTIVE DIRECTOR CARDIOLOGY
                        </div>
                        <div className="font-normal">
                        Cardiac Sciences | Interventional Cardiology
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Sonal Barole is the Executive Director of Interventional Cardiology at Nagpur.
                    Established centre of excellence In addition to performing thousands of such procedures, she has created a centre for excellence from which year after year courses for training Indian physicians in the field of Carotid interventions are organized.
                    Several hundred research publications are also included in his contributions that have been acknowledged by experts nationally as well as internationally. Several procedures performed for the first time in the country by her are now followed elsewhere.
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MBBS, MD, DM
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default SonalBarole
