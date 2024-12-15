import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SharadSonawaneNeurology() {
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
                    Dr. Sharad Sonawane completed his MBBS from Christian Medical College, Ludhiana in 1998. 
                    He has worked in Stroke Care Unit and has been closely associated with Epilepsy Surgery Programme. He is specifically trained in Electrophysiological Study, Epilepsy Stroke and Neuromuscular Disorders. He is trained in the treatment of movement disorders including Botulinum Toxin Therapy. He brings with him a rich experience in the field of Neurology and has attended several National and International Conferences in his specialty.
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MD, DM
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default SharadSonawaneNeurology