import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function TusharGangawaneENT() {
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
                        SENIOR CONSULTANT ENT
                        </div>
                        <div className="font-normal">
                        ENT | ENT (Ear, Nose and Throat)
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    With an experience of 3 decades in ENT treatments, Dr Tushar Gangawane has been associated as a Senior Consultant with Arogyasampatti. 
                    He evaluates the hearing impairment of the health check patients for both corporates and walk-ins. His keen interest in treating hearing impaired patients, especially, children, earned him prestigious memberships from the Commonwealth Society for the Deaf (UK) and Member of International Association for Physicians in Audiology (Finland).
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS, DLO (CAL), MIPA
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default TusharGangawaneENT