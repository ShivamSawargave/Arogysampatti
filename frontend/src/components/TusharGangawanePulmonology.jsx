import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function TusharGangawanePulmonology() {
  return (
    <>
        <NavContact />
            <Navbar />
            <div className="flex flex-wrap md:pt-40 md:pl-12 pt-16 pl-4 items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly shadow-lg">
                    <img
                        className="h-48 w-48 rounded-full mr-12"
                        src="https://residentsmedical.com/wp-content/uploads/2022/12/picture-of-indian-doctor-behind-indian-and-american-flag-standing-proud.jpg"
                        alt=""
                    />
                    <div>
                        <div className="text-3xl font-bold">Dr. Tushar Gangawane</div>
                        <div className="text-2xl font-normal">
                        SENIOR DIRECTOR & HEAD- PULMONOLOGY, PULMONOLOGY CRITICAL CARE & SLEEP MEDICINE
                        </div>
                        <div className="font-normal">
                        Pulmonology | Pulmonology and Critical care | Sleep Medicine
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Tushar Gangawane is the Senior Director and Head of Pulmonology, Critical Care & Sleep Medicine at Arogyasampatti Hospital, Nagpur. Dr. Tushar's key areas of expertise include Interventional Pulmonology, Intensive Care & Sleep Medicine.
                    Due to his keen interest in infection control, he has developed simple but effective infection prevention bundle protocols which have significantly reduced hospital-acquired infection rates. He has developed and implemented Antibiotics Stewardship programs in order to prevent the emergence of Antibiotic resistance & decrease preventable hospital-associated infections and the cost of treatment. He introduced the concept of a Rapid Response Team for patients in order to decrease the number of unexpected events in the hospital.  
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS, MD, FRCP (Edin), EDIC (Europe), FCCP (USA), EDARM (Europe) Interventional Pulmonology (Greece), ICU Fellow (Australia), Thoracoscopy (France), Paediatric Bronchoscopy (Italy), FICCM, EMPH (Virginia University, USA)
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default TusharGangawanePulmonology