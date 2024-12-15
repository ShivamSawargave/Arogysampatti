import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function TusharGangawane() {
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
                        EXECUTIVE DIRECTOR CARDIO THORACIC VASCULAR CARDIOLOGY
                        </div>
                        <div className="font-normal">
                        Cardiac Sciences | Interventional Cardiology 
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    With over 32 years of experience, Dr. Tushar Gangawane specializes in Aortic dissection, Pulmonary thrombolysis, Heart Transplant, and LVAD procedures. He performs more than 500 major cardiac operations every year ranging from neonatal arterial switch operations to complex aneurysm repairs. He has a special interest in valve repairs and aortic procedures.
                    He has also developed innovative techniques for percutaneously adjustable pulmonary artery band, antegrade cerebral perfusion, modified ultrafiltration, valves patch for ASD/VSD closure, congenital tricuspid valve repair, and left atrial reduction and pulmonary vein isolation. He has been instrumental in creating advanced facilities for complex cardiac problems, training young surgeons, mentoring other cardiac surgeons, formulating national guidelines, and developing newer and inexpensive India-specific solutions. He has been a part of various professional organisations, editorial boards and expert committees.
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MBBS, MS (CTVS),MCh (CTVS-AIIMS, Delhi)
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default TusharGangawane
