import React from 'react'
import Footer from './Footer';
import NavContact from './NavContact';
import Navbar from './Navbar';

function InternationalPatients() {
    return (
        <>
            <NavContact />
            <Navbar />
            <div className='md:mx-12 mx-4 flex flex-col'>
                <div>
                    <div className='md:pt-48 mt-20 md:text-4xl text-2xl font-bold text-blue-700 flex justify-center items-center'>International Patients</div>
                    <div className='mt-4'>Arogyasampatti which is a top searched name in the Indian healthcare industry, has NABH accreditation and Green OT certification. Since the last decade, Arogysampatti has gained the reputation of the most trusted and reliable healthcare service provider in India by providing excellent clinical outcomes. Arogyasampatti has been serving the community and now it is extending its healthcare facilities beyond boundaries at an affordable cost. With a team of world-class doctors and surgeons persistently offering their skills and experience in a wide range of specialties such as Robotic Assisted joint replacement surgery, Brain and Spine Surgery, Cardiac and Critical Care, IVF, Nephrology, Diabetes and obesity, Mother and Child Care, Oncology and Advanced Dental Care.

                        To provide quality and customized services, we at Arogysampatti have a dedicated overseas wellness centre, which takes care of international patients. The department provides a one-stop solution to all overseas patients’ needs. Facilitates such as providing assistance for medical visas, assisting patients to get accommodation and food as per their pallets, free WI-FI 24×7 and nearby site seeing are promptly organized by the department. Ambulance picks up and drop is also provided.</div>
                </div>
                <div className='flex md:flex-row flex-col mb-12'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col'>
                            <h5 className='font-bold mt-4 text-blue-700'>Protocols for International Patients and Patient process flow</h5>
                            <h5 className='mt-4'>>Agency Patients comes in contact with Noble Hospital</h5>
                            <h5 className='mt-4'>>Patient Shares Reports to Noble Hospital</h5>
                            <h5 className='mt-4'>>Share the reports with the consultant and get the line of treatment</h5>
                            <h5 className='mt-4'>>Get the estimate and share the same with the patient</h5>
                            <h5 className='mt-4'>>If the patients agree for the treatment then we send the invitation letter</h5>
                            <h5 className='mt-4'>>We are in touch with the patient and Wait for the patient’s arrival</h5>
                            <h5 className='mt-4'>>We arrange for the pick and drop facility of the patient</h5>
                        </div>
                        <div className='flex flex-col'>
                            <h5 className='font-bold mt-4 text-blue-700'>Services which we are oering</h5>
                            <h5 className='mt-4'>>Complete case management for the patient</h5>
                            <h5 className='mt-4'>>Pick up and drop from airport</h5>
                            <h5 className='mt-4'>>Service apartment near the hospital</h5>
                            <h5 className='mt-4'>>Translator available</h5>
                            <h5 className='mt-4'>>On line consultation available</h5>
                            <h5 className='mt-4'>>Follow up of the patient online.</h5>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/d/1/3-hospitalist_patient-story.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg?itok=HL_cR-BT" className='h-96 w-96 cover md:m-24 m-2' alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default InternationalPatients
