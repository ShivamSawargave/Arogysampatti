import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ManmathShelkeInfectious() {
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
                        ASSOCIATIVE CONSULTANT INFECTIOUS DISEASES
                        </div>
                        <div className="font-normal">
                        Infectious Diseases | Infectious Diseases
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Manmath Shelke have graduated from Smt. N.H.L Municipal Medical College and post graduation from Vadilal Sarabhai /Sardar Vallabhbhai Patel hospital Ahmedabad. He has a very good exposure in treating various infectious diseases like Community and Hospital-acquired pneumonia, Infective endocarditis, Osteomyelitis, Meningitis, Diabetic foot infections, SSTIs, Surgical and post-operative infections. He has also specialised in treating illnesses like Tuberculosis, MDR/XDR Tuberculosis, Melioidosis, Histoplasmosis, Leishmaniosis, Leprosy and HIV.
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        FNB (Infectious Diseases), M.D ( General Medicine)
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default ManmathShelkeInfectious