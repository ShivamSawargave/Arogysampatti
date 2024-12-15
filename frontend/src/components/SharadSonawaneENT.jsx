import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SharadSonawaneENT() {
  return (
   <>
         <NavContact />
            <Navbar />
            <div className="flex flex-wrap md:pt-40 md:pl-12 pt-16 pl-4 items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly shadow-lg">
                    <img
                        className="h-48 w-48 rounded-full mr-12"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0GYdZCpsJdTPZsArtvoSigDZd31q8zF7I-9ASkvB4Gga0fpnE-BtE9lTzeptdGjZhz8&usqp=CAU"
                        alt=""
                    />
                    <div>
                        <div className="text-3xl font-bold">Dr. Sharad Sonawane</div>
                        <div className="text-2xl font-normal">
                        SENIOR CONSULTANT ENT
                        </div>
                        <div className="font-normal">
                        ENT | ENT (Ear, Nose and Throat)
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    MBBS, MS - ENT
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
   </>
  )
}

export default SharadSonawaneENT