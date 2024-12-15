import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AnupKulkarniNeurology() {
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
                        DIRECTOR NEUROLOGY
                        </div>
                        <div className="font-normal">
                        Neurology | Neurology
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Anup Kulkarni is a well known senior neurologist working with Arogyasampatti as Director - Neurology Department, He has a rich experience of 10+ years in the field and he is an expert in comprehensive treatment of epilepsy and has many research & publications in his name. He developed the department of neurology to next level in terms of Epilepsy Surgery Programme including long term Epilepsy monitoring and acute stroke care including IV Thrombolysis & Stroke ICU.

                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MBBS, MD (Pediatrics), DM (Neurology), Fellowship In Epilepsy
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default AnupKulkarniNeurology