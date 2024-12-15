import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AnupKulkarniNephrology() {
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
                        <div className="text-3xl font-bold">Dr. Rajesh Swami</div>
                        <div className="text-2xl font-normal">
                        DIRECTOR NEPHROLOGY
                        </div>
                        <div className="font-normal">
                        Nephrology | Nephrology 
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Anup Kulkarni is a renowned physician in the field of Nephrology, Dialysis and Transplantation.
                    Dr. Kulkarni has been instrumental in bringing and practicing new technology like Chronic Peritoneal Dialysis, CRRT and Plasmapheresis in the region. Quality of dialysis has been his focus and he is credited to be having many patients from a long term (10 to 12 years) dialysis.
                    He was the recipient of Young Asia Investigator award at the International Society for Peritoneal Dialysis Conference at Seoul, Korea in 1998. He also did a visiting fellowship in Toronto Hospitals, Canada. Dr Dutta received the Dronacharya Award 2019 by Indian Society of Interventional Nephrology. 
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS,MD, DM (Nephrology)
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default AnupKulkarniNephrology