import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SonalBaroleNeurology() {
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
                    Dr. Sonal Barole completed his MBBS from Christian Medical College, Ludhiana in 1998. 
                    She has worked in Stroke Care Unit and has been closely associated with Epilepsy Surgery Programme. She is specifically trained in Electrophysiological Study, Epilepsy Stroke and Neuromuscular Disorders. She is trained in the treatment of movement disorders including Botulinum Toxin Therapy. She brings with him a rich experience in the field of Neurology and has attended several National and International Conferences in his specialty.
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

export default SonalBaroleNeurology