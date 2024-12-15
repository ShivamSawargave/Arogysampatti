import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ApekshaPatilOncology() {
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
                        CHAIRMAN ONCOSCIENCES
                        </div>
                        <div className="font-normal">
                        Oncology | Medical Oncology
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Apeksha Patil is one of the India’s foremost Medical Oncologists with more than 40+ years of experience in the field of Medical Oncology. A renowned powerhouse of knowledge and experience, Dr. Patil was at All India Institute of Medical Sciences, New Delhi (AIIMS) as Professor and Head of Medical Oncology. SHe has special expertise in Breast, Lung, Gastrointestinal, Urological, Gynaecological cancers, Lymphomas & Myelomas. She has also performed approximately 400 bone marrow/stem cell transplants for various cancers personally. She also brings tremendous research experience and was Principal Investigator of approximately 50 projects while at AIIMS for 24 years.
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MD, DM, MMSc, FAMS
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default ApekshaPatilOncology