import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AnupKulkarniPulmonology() {
  return (
    <>
        <NavContact />
            <Navbar />
            <div className="flex flex-wrap md:pt-40 md:pl-12 pt-16 pl-4 items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly shadow-lg">
                    <img
                        className="h-48 w-48 rounded-full mr-12"
                        src="https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
                        alt=""
                    />
                    <div>
                        <div className="text-3xl font-bold">Dr. Anup Kulkarni</div>
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
                    Dr. Anup Kulkarni is a renowned specialist in Respiratory Medicine awarded with the prestigious Padma Shri award. He has a clinical experience of over 40 years. He has been associated with the institute of PGIMER since 1978 when he first joined there as a Junior Resident in the Department of Medicine and retired from there as the Professor and HOD of the Department of Pulmonary Medicine. He has also been in other active roles as: Joint Medical Superintendent, Nehru Hospital, Postgraduate Institute of Medical education and Research, Chandigarh Director, LRS Institute (Now NITRD) of Tuberculosis and Respiratory Diseases, New Delhi Dean (Research) - Postgraduate Institute of Medical Education and Research, Chandigarh Officer on Special Duty for Establishment of AIIMS, Raebareli.
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS - SCB Medical College - Utkal University, MD - Medicine,DNB - Medicine and Respiratory Medicine
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default AnupKulkarniPulmonology