import React from 'react'
import NavContact from './NavContact';
import Navbar from './Navbar';
import Footer from './Footer';


function SonalBaroleOncology() {
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
                        SENIOR DIRECTOR- GI, GI ONCOLOGY,MINIMAL ACCESS & BARIATRIC SURGERY
                        </div>
                        <div className="font-normal">
                        General Surgery | General Surgery | General and Laparoscopic Surgery | General and Minimal Access Surgery | Robotic Surgery |
Gastroenterology and Hepatobiliary Sciences | Gastrointestinal Surgery |
Oncology | Oncology | Robotic Surgery
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Sonal Barole is an expert Gastrointestinal, Gastrointestinal Cancer, and Bariatric/Weight loss surgeon with over 25 years of experience.
                    Dr. Barole is an avid researcher and has contributed more than 50 articles in various international and national journals and textbooks.
                    She has also described various innovative surgical techniques which have been published. She has been an invited faculty at various international and national meetings. She has vast experience in performing surgeries for complex gastrointestinal and hepatobiliary diseases, cancers, and bariatric/weight loss surgeries, performing more than 1,000+ surgeries each year. She is especially skilled in minimally invasive/laparoscopic surgeries and has been a mentor to many budding surgeons. Despite his several accomplishments she is unassuming, humble, modest, and goes the distance to take care of each and every one of his patients.
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MBBS, MS (PGI, Chandigarh), MCh (AIIMS, New Delhi), FACS (USA)
                    </div>
                </div>
            </div>
            <Footer />
   </>
  )
}

export default SonalBaroleOncology
