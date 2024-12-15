import React from 'react'
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function TirupattiShelkePulmonology() {
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
                        SENIOR DIRECTOR & HOD PULMONOLOGY
                        </div>
                        <div className="font-normal">
                        Pulmonology | Pulmonology 
                        </div>
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">About :</div>
                    <div className="font-light">
                    Dr Tirupatti Shelke is an eminent Pulmonologist and alumnus of the premier institute of India.
                    He has been trained in best centres in India and Abroad. He has won many National, International laurels, fellowships and awards. He is a sought-after faculty member at various regional and national conferences, CME and courses on respiratory diseases and interventional pulmonology. He has numerous research papers on respiratory diseases, book chapter, CME, & conferences lectures and international presentations to his credit. He also had numerous publications on coronavirus, COVID 19, air pollution, asthma, allergy, COPD, tuberculosis, snoring, Sleep Apnoea in various leading national newspapers. He has also been part of various discussions on respiratory diseases, air pollution and COVID 19 on various National News Media Channels. He has Conducted a lung function study and effects of air pollution on TRAFFIC POLICE COPS, which was published in various leading national newspapers. 
                    </div>
                </div>
                <div className="p-12 m-6 shadow-lg">
                    <div className="font-bold">Education :</div>
                    <div className="font-light">
                    MBBS, MD (TB & Resp Dis), FNB (CCM), EDARM (Netherlands), FCCP (USA) EDIC (UK), Fellow Westmead Hospital, Sydney, Australia
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default TirupattiShelkePulmonology