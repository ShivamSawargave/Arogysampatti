import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ApekshaPatilENT() {
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
                        PRINCIPAL DIRECTOR ENT
                        </div>
                        <div className="font-normal">
                        ENT | ENT (Ear, Nose and Throat)
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Apeksha Patil is an eminent E.N.T. Specialist, with a sound experience of 30+ years of practice and surgical proficiency.
                    She has successfully managed his practice and staff in providing patients with quality care. An MBBS, MS from Delhi University Dr. Apeksha's surgical skills span the entire continuum of Otorhinolaryngology, performing more than 800 surgeries yearly. His areas of interest and expertise are - Minimal Access Endoscopic Sinus and Skull Base surgery, Balloon Sinuplasty. Endoscopic Adenoidectomy and Sleep Surgery. She has extended his foray in surgery and also performs Thyroid and Laryngeal surgeries. Cochlear Implantation Program and immunotherapy in allergic respiratory diseases.
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        M.S. (E.N.T.). Safdarjung Hospital, New Delhi. (1991-94 M.B.B.S.University College of Medical Sciences. Delhi, (1985 - 90)
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default ApekshaPatilENT