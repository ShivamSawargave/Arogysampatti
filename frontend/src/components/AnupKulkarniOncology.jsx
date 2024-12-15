import React from 'react'
import NavContact from './NavContact';
import Navbar from './Navbar';
import Footer from './Footer';

function AnupKulkarniOncology() {
  return (
    <>
        <NavContact />
            <Navbar />
            <div className="flex flex-wrap md:pt-40 md:pl-12 pt-16 pl-4 items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly shadow-lg">
                    <img
                        className="h-48 w-48 rounded-full mr-12"
                        src="https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
                        alt=""
                    />
                    <div>
                        <div className="text-3xl font-bold">Dr. Anup Kulkarni</div>
                        <div className="text-2xl font-normal">
                        PRINCIPAL DIRECTOR GINAE ONCOLOGY
                        </div>
                        <div className="font-normal">
                        Oncology | Gynaecologic Oncology
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Anup Kulkarni is a one of the best Gynae Oncologist. He has a rich experience of over two decades of performing all radical surgeries for Gynaecological Cancers.
                    HIS vast experience in the field of Gynae cancer, places her amongst the best Gynae cancer Surgeon and one of the top ovarian cancer doctor in INDIA.
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MBBS (Gold Medalist); MS (Gynae & Obst.); Former Fellow Gynae Oncology-TMH Mumbai; UICC Fellow, B.G.H, Buffalo,NY,USA
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default AnupKulkarniOncology
