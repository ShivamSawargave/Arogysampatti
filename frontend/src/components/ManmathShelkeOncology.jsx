import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ManmathShelkeOncology() {
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
                        PRINCIPAL DIRECTOR $ HOD LAP GI, GI ONCO ,BARIATRIC & MIS SURGERY
                        </div>
                        <div className="font-normal">
                        Oncology | Surgical Oncology | Robotic Surgery 
Gastroenterology and Hepatobiliary Sciences | GI, Minimal Access and Bariatric Surgery | Metabolic & Bariatric Surgery | Robotic Surgery
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Manmath Shelke has wide experience of Gastroenterology Surgery. He has done his M.S (Surgery) and M.Ch in Gastrointestinal and Hepatobiliary Surgery. Presently leading (Principal Director) the Department of Laparoscopic & Robotic GI, GI Onco, HPB & Minimal Access Surgery in Arogyasampatti Hospital, Nagpur.
                    He is a certified robotic surgeon by intuitive surgical. He has operated more than 30000 successful GI surgeries in Open, Laparoscopic & Robotic techniques.
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    M.S , M.Ch. ( Gastroloenterology Surgery )
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default ManmathShelkeOncology
