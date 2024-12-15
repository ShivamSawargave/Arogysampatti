import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";


function TirupattiShelkeInfectious() {
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
                            CONSULTANT ASSOCIATIVE INTERNAL MEDICINE
                        </div>
                        <div className="font-normal">
                            Diabetology/Endocrinology |
                            Infectious Diseases |
                            Internal Medicine | General Physician |
                            Geriatric Medicine
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                        Dr. Tirupatti Shelke completed his MBBS from KIMS, Hubli in 2011, Certificate Course in Diabetes from Royal College of Physicians, London in 2014, and MD in Internal Medicine from ESI, Rajajinagar in 2016.
                        As a specialist in internal medicine, he evinces a keen interest in treating diabetes, especially those who get diagnosed with this at a younger age. Dr. Tirupatti advocates the need for disciplined lifestyle changes, consuming a healthy diet, and keeping a tab on the blood sugar levels with regular HbA1C tests for diabetes under control Area of Expertise: Experience in treating Infectious Disease, Diabetes, and Thyroid Disorders. Rheumatological Problem
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                            M.B.B.S,M.D(Internal Medicine),CDRCP(London)
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TirupattiShelkeInfectious