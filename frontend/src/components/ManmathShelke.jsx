import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";


function ManmathShelke() {
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
                            CHAIRMAN CARDIAC SCIENCE
                        </div>
                        <div className="font-normal">
                            Cardiac Sciences | Interventional Cardiology
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                        Dr Manmath Shelke is  Chairman of Arogyasampatti Healthcare Medical Council, and Adjunct Professor of Cardiology at Indira Gandhi Medical College Nagpur. Dr. Manmath Shelke has led the field of Interventional Cardiology for last 40 years, he has contributed extensively to the development, scientific progress and education in this field and pioneered numerous angioplasty techniques for India and Asia Pacific including Impella supported complex angioplasties, Transcatheter Aortic Valve Implantation (TAVI) and Intravascular Lithotripsy (IVL). Over his career, he has performed more than 25000 angioplasties and 60000 angiographies and is also listed in LIMCA Book of Records. He is an acclaimed teacher and has trained more than 500 cardiologists of India and abroad in advanced techniques of angioplasty.
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                        FRCP (Lond, Edin, Irel), FACC, FESC, MSCAI, FAPSIC, FIMSA, FCSI, DSc (BHU, AMU, Amity U, TMU, Shiv Nadar U), D Litt (Jamia Millia U)
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ManmathShelke
