import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function RajeshSwamiOncology() {
  return (
   <>
        <NavContact />
            <Navbar />
            <div className="flex flex-wrap md:pt-40 md:pl-12 pt-16 pl-4 items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly shadow-lg">
                    <img
                        className="h-48 w-48 rounded-full mr-12"
                        src="https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg"
                        alt=""
                    />
                    <div>
                        <div className="text-3xl font-bold">Dr. Rajesh Swami</div>
                        <div className="text-2xl font-normal">
                        PRINCIPAL DIRECTOR HEMATO-ONCOLOGY
                        </div>
                        <div className="font-normal">
                        Oncology | Hemato-Oncology |
Haematology | Haematology |
Organ Transplant | Haematology and BMT | Hemato-Oncology
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr Rajesh Swami started his journey of Stem Cell Transplant from Medanta in the year 2010. He has completed over 1500+ transplants till date. Dr Swami has been credited of establishing 10 low cost centres across India.
                    In 2016 Dr Jajesh Swami became the first Indian doctor to do and popularize stem cell transplant in multiple sclerosis.
                    Dr. Swami screened over 500 children in schools across Haryana and surrounding areas in 2018. Dr Swami has also completed over 1000 CME till date. Due to his active involvement with the community in building awareness around various blood disorders, he is considered as one of the best hematologist in Delhi  
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MBBS, MD (Medicine), DM (Clinical Haematology)
                    </div>
                </div>
            </div>
            <Footer />
   </>
  )
}

export default RajeshSwamiOncology
