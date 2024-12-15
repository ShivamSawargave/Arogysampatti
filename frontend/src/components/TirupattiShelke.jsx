import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function TirupattiShelke() {
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
                            CHAIRMAN CARDIAC SCIENCE
                        </div>
                        <div className="font-normal">
                        Cardiac Sciences | Adult CTVS (Cardiothoracic and Vascular Surgery) | Heart Transplant
                        Thoracic Surgery | Thoracic Surgery
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Tirupatti Shelke. MS, M.Ch., DNB, FAICS, FICC. Chairman - Cardiovascular & Thoracic Surgery.
                    Dr. Shelke has also been nominated as a council member to the newly constituted Medical Council of India (MCI), the premier statutory body that governs the standards of medical education and recognition of medical qualifications in the country.
                    Work Experience: Dr.Shelke has with him with an experience of over 39 years. Education: Dr. Shelke completed his MBBS from Ratnagiri Medical College. Ratnagiri, Maharashtra, in 1974. 
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MS, M.Ch, DNB, FIACS
                    </div>
                </div>
            </div>
            <Footer />
   </>
  )
}

export default TirupattiShelke
