import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ManmathShelkeNephrology() {
  return (
    <>
        <NavContact />
            <Navbar />
            <div className="flex flex-wrap md:pt-40 md:pl-12 pt-16 pl-4 items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly shadow-lg">
                    <img
                        className="h-48 w-48 rounded-full mr-12"
                        src="https://t3.ftcdn.net/jpg/01/67/15/98/360_F_167159846_MCrwVzB7ysdZKr2vIiJkiCacEoNWagdn.jpg"
                        alt=""
                    />
                    <div>
                        <div className="text-3xl font-bold">Dr. Manmath Shelke</div>
                        <div className="text-2xl font-normal">
                        PRINCIPAL DIRECTOR NEPHROLOGY
                        </div>
                        <div className="font-normal">
                        Nephrology | Nephrology | Organ Transplant | Kidney Transplant
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Manmath Shelke has over 40 years of Professional Experience in various tertiary care Armed Forces Hospital.
                    He is a post graduate teacher and examiner in various Medical Universities. He has been bestowed with Academic Awards in the field of Nephrology. He is former Honrary Surgeon to president of India and is a recipient of Presidential Awards for exceptionally service to the Nation.
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS, MD, DM,FACP
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default ManmathShelkeNephrology