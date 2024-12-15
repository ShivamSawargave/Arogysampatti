import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";


function ApekshaPatilPulmonlogy() {
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
                        PRINCIPAL DIRECTOR & UNIT HEAD- PULMONOLOGY & SLEEP MEDICINE
                        </div>
                        <div className="font-normal">
                        Pulmonology | Pulmonology | Sleep Medicine | Pulmonology and Critical care
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr Apeksha Patil is a fellow of National College of Chest Physicians, Fellow of Indian Sleep Disorders Association and Fellow of Indian Association of Bronchology. Certified Advanced Cardiac Life Support Provider by American Heart Association.
                    Guest speaker, Course Director Faculty and Chair Person in major National Conferences in India related to Pulmonology, Bronchology, Critical Care and Sleep Medicine. She has played important role as a Member of the organizing committee of the major conferences, workshops and symposium in Delhi related to Pulmonology, Bronchology, Critical Care and Sleep Medicine.
                    She has 25 publications in National and International Journals. She has received National Award from National college of Chest Physicians for research in Pulmonary Interventions. She is a past Executive Member of Indian Society of Critical Care Medicine (Delhi and NCR). Special Interest Areas Pulmonology, Interventional Pulmonology, Bronchoscopy, EBUS Bronchoscopy, Medical Thoracoscopy, Cryobiopsy, Airway Stenting, Systemic Pulmonology Diseases, Difficult to treat Asthma, Chronic and Acute Lung Diseases.
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MBBS, MD, FCCP DIP, FIAB, FISDA, FICM, FISM FICCM
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default ApekshaPatilPulmonlogy
