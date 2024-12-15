import React from 'react'
import NavContact from './NavContact';
import Navbar from './Navbar';
import Footer from './Footer';

function ArjunShelkeOncology() {
  return (
   <>
         <NavContact />
            <Navbar />
            <div className="flex flex-wrap md:pt-40 md:pl-12 pt-16 pl-4 items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly shadow-lg">
                    <img
                        className="h-48 w-48 rounded-full mr-12"
                        src="https://cdn.euroinnova.edu.es/img/subidasEditor/doctor-5871743_640-1610073541.webp"
                        alt=""
                    />
                    <div>
                        <div className="text-3xl font-bold">Dr. Arjun Shelke</div>
                        <div className="text-2xl font-normal">
                        PRINCIPAL DIRECTOR SURGICAL ONCOLOGY
                        </div>
                        <div className="font-normal">
                        Oncology | Surgical Oncology
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr. Arjun Shelke is Principal Director of Surgical Oncology at Arogyasampatti, Nagpur.
                    Dr. Shelke has experience of over 12000 cancer surgeries and has successfully performed various complex oncosurgical procedures including Robotic Surgery for Cancer. He has been a faculty at various international and national conferences, has numerous papers and three book chapters to his credit apart from various awards for academic excellence.
                    Dr. Shelke is passionate about spreading cancer awareness through regular health talks, awareness drives and self examination camps. He is also spearheading the tobacco cessation movement - Voice of Tobacco Victims (VoTV)
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MBBS, MS. DNB MRCS(Edin), MNAMS, FIAGES
                    </div>
                </div>
            </div>
            <Footer />
   </>
  )
}

export default ArjunShelkeOncology
