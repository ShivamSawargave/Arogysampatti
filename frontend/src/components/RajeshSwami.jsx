import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function RajeshSwami() {
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
                            CHAIRMAN & HEAD-ADULT CARDIAC SCIENCE
                        </div>
                        <div className="font-normal">
                            Cardiac Sciences | Adult CTVS (Cardiothoracic and Vascular Surgery)
                            Organ Transplant | Heart Transplant
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Rajesh Shelke is an Executive Director and Head - Cardiac Surgery, Heart Transplantation and VAD program and is part of the founding team of Doctor at arogyasampatti. He has more than 30 years of experience in cardiac surgery with over 30000 surgeries, including complex heart operations and Left Ventricular Assist Device (LVAD). He is a pioneer in many new cardiac operations in the country. He has been actively involved with teaching and training. He has trained many cardiac surgeons in India and abroad who are now independent cardiac surgeons at different centers. 
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MBBS, MS, M.Ch, MNAMS
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default RajeshSwami
