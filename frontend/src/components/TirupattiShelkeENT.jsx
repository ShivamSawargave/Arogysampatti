import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function TirupattiShelkeENT() {
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
                         DIRECTOR ENT
                        </div>
                        <div className="font-normal">
                        ENT | ENT (Ear, Nose and Throat)  | Oral and Maxillofacial Surgery
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Prof. (Dr.) Tirupatti Shelke has done pioneering work in the field of cochlear implant surgery.
                    More than 3000 successful cochlear implant surgeries under his name Dr Shelke is a visiting cochlear implant surgeon to the states of Chhattisgarh, Andhra-Pradesh, Madhya-Pradesh, PGI Chandigarh and many other centers in the country to perform rare & difficult CI surgeries for the hearing handicap. 
                    </div>
                    <div className="p-12 m-6 shadow-lg">
                        <div className="font-bold">Education :</div>
                        <div className="font-light">
                        MBBS, D.L.O., MS (Oto-Rhino-Lary)
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default TirupattiShelkeENT