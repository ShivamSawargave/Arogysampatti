import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function TirupattiShelkeNeurology() {
  return (
    <>
        <NavContact />
            <Navbar />
            <div className="flex flex-wrap md:pt-40 md:pl-12 pt-16 pl-4 items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly shadow-lg">
                    <img
                        className="h-48 w-48 rounded-full mr-12"
                        src="https://static.vecteezy.com/system/resources/thumbnails/030/928/115/small_2x/handsome-indian-doctor-generate-ai-photo.jpg"
                        alt=""
                    />
                    <div>
                        <div className="text-3xl font-bold">Dr. Tirupatti Shelke</div>
                        <div className="text-2xl font-normal">
                        PRINCIPAL DIRECTOR & HOD NEUROLOGY
                        </div>
                        <div className="font-normal">
                        Neurology | Neurology
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Tirupatti Shelke has over 30 years of clinical experience in neurology. He has done his MBBS & MD from S.M.S. Medical College Jaipur.
                    Dr. Shelke is working as Director & HOD - Neurology at Arogyasampatti Nagpur.
                    He has attended more than 70 national and international conferences and has been a part of number of seminars, CMEs and symposiums as chairperson/ speaker. He regularly conducts public lectures and organizes public awareness programmes. He is honoured by various medical organisation time to time. He is regularly involved in the DNB teaching programmes also. SPECIALITY INTEREST Stroke Epilepsy Headache Movement disorder, Migrane, dementia or alzheimer, Parkinson.
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    M.B.B.S. - S.M.S. Medical College, Jaipur M.D. (Medicine) - S.M.S. Medical College, Jaipur D.M. (Neurology) - G.B. Pant Hospital, University of Delhi
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default TirupattiShelkeNeurology
