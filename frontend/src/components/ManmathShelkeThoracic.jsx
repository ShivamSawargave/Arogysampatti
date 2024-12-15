import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ManmathShelkeThoracic() {
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
                        SENIOR COSULTANT CARDIO THORACIC SURGERY
                        </div>
                        <div className="font-normal">
                        Thoracic Surgery | Thoracic Surgery
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Manmath Shelke presently attached as senior consultant cardiothoracic surgeon attached with Arogyasampatti Hospital, Nagpur.
                    He is among few thoracic surgeons who are developing minimally invasive (Micro) thoracic surgery (Thoracoscopic Surgery) in India. 
                     Dr. Shelke is actively involved in academic & research activities with several publications in national & indexed journals. He has also delivered lectures as a faculty in national & International Conference of professional organizations.  
                    AREA OF EXPERTISE: • Pioneer VATS Surgery in Eastern India • Pioneer Robotic Thoracic Surgery in Easter India • Thoracic Oncology • Complex tracheal Surgery • Surgery for Myasthenia gravis
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    DNB, MCh, MNAMS
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default ManmathShelkeThoracic
