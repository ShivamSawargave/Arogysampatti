import React from 'react'
import NavContact from './NavContact';
import Navbar from './Navbar';
import Footer from './Footer';

function SharadSonawaneOncology() {
  return (
    <>
        <NavContact />
            <Navbar />
            <div className="flex flex-wrap md:pt-40 md:pl-12 pt-16 pl-4 items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly shadow-lg">
                    <img
                        className="h-48 w-48 rounded-full mr-12"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0GYdZCpsJdTPZsArtvoSigDZd31q8zF7I-9ASkvB4Gga0fpnE-BtE9lTzeptdGjZhz8&usqp=CAU"
                        alt=""
                    />
                    <div>
                        <div className="text-3xl font-bold">Dr. Sharad Sonawane</div>
                        <div className="text-2xl font-normal">
                        PRINCIPAL DIRECTOR & PAEDIATRIC HEMATOLOGY
                        </div>
                        <div className="font-normal">
                        Haematology | Paediatric Haematology and BMT | Haematology |
Paediatrics | Paediatric Oncology | Paediatric Haematology and BMT |
Organ Transplant | Hemato-Oncology | Haematology and BMT |
Oncology | Paediatric Oncology
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Sharad Sonawane is a Paediatric Hemato Oncologist and Bone Marrow Transplant specialist of the generation. Dr. Sonawane's results in the field of Paediatric Hematology Oncology and BMT have been one of the best. He and his team have done 1000+ transplants. He is known for his excellent outcome in Stem Cell Transplant especially in Paediatric Unrelated & Haploidentical Transplant and he has done some of the very rare transplants which nobody else has done in India. Speciality Interest Benign Paediatric Hematology, Hemato-Oncology Matched sibling and unrelated and Paediatric Haploidentical Transplants
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MBBS, MD (Paediatrics ) , FNB (Paediatric Haematology Oncology)
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default SharadSonawaneOncology
