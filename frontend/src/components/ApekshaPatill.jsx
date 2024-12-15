import React from "react";
import NavContact from "./NavContact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ApekshaPatill() {
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
              PRINCIPAL DIRECTOR CARDIOLOGY
            </div>
            <div className="font-normal">
              Cardiac Sciences | Interventional Cardiology | Non-Invasive
              Cardiology
            </div>
          </div>
        </div>
        <div className="p-12 m-6 shadow-lg">
          <div className="font-bold">About :</div>
          <div className="font-light">
            Dr. Apeksha Patil is a renowned interventional cardiologist with
            more than 35 years' experience. She had an illustrious career in the
            Indian Army Medical Corps, before joining civil practise. She
            specializes in complex angioplasty and structural heart procedures.
            She is a fellow of many international societies and has over two
            decades of experience in teaching young cardiologists. She has
            authored many academic papers and presented at several national and
            international conferences. She is a recipient of many national
            awards
          </div>
        </div>
        <div className="p-12 m-6 shadow-lg">
          <div className="font-bold">Education :</div>
          <div className="font-light">
            MBBS, MD-Medicine, DM-Cardiology,DNB-Medicine, Fellow- American
            College of Cardiology, Fellow-Society for Cardiology Angiography and
            Interventions.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ApekshaPatill;
