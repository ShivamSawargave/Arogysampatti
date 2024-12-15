import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function RajeshSwamiPulmonology() {
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
                            DIRECTOR PULMONOLOGY
                        </div>
                        <div className="font-normal">
                            Pulmonology | Pulmonology
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                        Dr. Rajesh Swami MBBS : Maulana Azad Medical College, Delhi DTCD: Diploma in Tuberculosis Chest Diseases from Vallabh Bhai Patel Chest Institute, Delhi. DNB : Respiratory Diseases from National Institute of TB & Respiratory Diseases, New Delhi. Specialized Training • Interventional Bronchoscopy, Medical Thoracoscopy & Thoracic Ultrasound for Pulmonologists : Lahey Clinic, Burlington, Massachusetts, USA •
                        Organizing Secretary: September 2005: National Conference on Chest infections, India Habitat Centre, New Delhi • Organizing Secretary: 2004 September: Chest Update, Vikaspuri, New Delhi In association with IMA Westown, Janakpuri and Mata Chanan Devi Hospital • Organizing Secretary: 2003 October: Chest update, Janakpuri, New Delhi. In association with IMA Westown and Mata Chanan Devi Hospital • Cultural Secretary - Students union - Maulana Azad Medical College (MBBS): 1999 – 2000 Advisory board member for various pharmaceutical companies.
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                            MBBS, MD (TB & Resp Dis), FNB (CCM), EDARM (Netherlands), FCCP (USA) EDIC (UK), Fellow Westmead Hospital, Sydney, Australia
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default RajeshSwamiPulmonology