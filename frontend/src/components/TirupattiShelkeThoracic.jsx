import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function TirupattiShelkeThoracic() {
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
                            CONSULTANT THORACIC SURGERY
                        </div>
                        <div className="font-normal">
                            Thoracic Surgery | Thoracic Surgery
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                        Dr Tirupatti Shelke is minimally Invasive Thoracic Surgeon with specialised interest in Robotic & Video assisted thoracoscopic surgery (VATS).
                        He completed MBBS from MGM Medical college Navi Mumbai in 2004. He has an enriched 15 years of cumulative experience as a surgeon including 5 years experience in thoracic surgery. Area of Expertise: VATS, RATS, Key hole chest surgery, lung surgeries, Empyema, Post tuberculosis sequele, chest malignancy, lung cancer, myasthenia Gravis thymectomy, mediastinal tumour.
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                        MBBS, DNB (General Surgery), DNB (Thoracic Surgery)
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TirupattiShelkeThoracic
