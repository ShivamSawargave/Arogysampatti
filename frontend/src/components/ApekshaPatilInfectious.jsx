import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ApekshaPatilInfectious() {
  return (
    <>
         <NavContact />
            <Navbar />
            <div className="flex flex-wrap md:pt-40 md:pl-12 pt-16 pl-4 items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly shadow-lg">
                    <img
                        className="h-48 w-48 rounded-full mr-12"
                        src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
                        alt=""
                    />
                    <div>
                        <div className="text-3xl font-bold">Dr. Apeksha Patil</div>
                        <div className="text-2xl font-normal">
                        CONSULTANT INFECTIOUS DISEASES
                        </div>
                        <div className="font-normal">
                        Infectious Diseases | Infectious Diseases
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Apeksha Patil is from the first batch of qualified Infectious Diseases (ID) specialists in India. She has a global experience in diagnosis and management of fever and infections across various specialities (eg. Transplant ID, Cardiology, Bone & Joint, Neurology & Neurosurgery, Oncology, Nephrology, critically-ill patients, infections related to Obstetrics & Gynaecology, TB [& Drug resistant TB ], HIV & culture-negative infections) and is an expert in antibiotics & antifungal drugs. Expertise 1) Fever , COVID-19 & complications , Dengue, malaria, typhoid , rickettsioses 2) TB & Drug-resistant TB 3) HIV & sexually transmitted diseases 4) Fungal Infections 5) Urinary infections 6) Bone & Joint infections 7) Vaccination for prevention of infections 8) Travel advisory 9) Infections of resistant bacteria 10) Viral infections & worms related problems
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MD in General Medicine; Trained in Infectious Diseases from P. D. Hinduja National Hospital & Research Centre, Mumbai, CMC Vellore and Wayne State University, Detroit
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default ApekshaPatilInfectious