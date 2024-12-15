import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function TusharGangawaneNeurology() {
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
                        DIRECTOR NEUROLOGY
                        </div>
                        <div className="font-normal">
                        Neurology | Neurology
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Tushar Gangawane is the Director- Neurology at Arogyasampatti, Nagpur. He is a Gold Medallist in MBBS, MD (Medicine), and he has done DM from the very prestigious institute AIIMS, New Delhi. Dr. Tushar is a very eminent neurologist and widely acknowledged in Delhi /NCR area. He has 15 years of rich experience in treating various neurological disorders such as Stroke, Epilepsy, Cerebrovascular Disorder, Headache, Migraine, Dementia, Memory Loss, Neuropathies, Parkinson's Disease, Nerve, and Muscle Disorder, Myasthenia Gravis, and many more. He has been invited as a speaker for various national and international conferences. His accolades include being a part of a team for Deep Brain Stimulation in patients with Parkinson's Disease.
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MBBS, MD, (Internal Medicine) Gold Medalist, DM (AIIMS)
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default TusharGangawaneNeurology