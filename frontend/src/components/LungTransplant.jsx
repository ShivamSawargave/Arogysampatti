import React from 'react'
import Slider from "react-slick";
import { useRef } from "react";
import NavContact from './NavContact';
import Navbar from './Navbar';
import Footer from './Footer';

function LungTransplant() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <NavContact />
            <Navbar />
            <div className='md:pt-28 pt-16'>
                <div className="carousel w-full">

                    <div id="item4" className="carousel-item w-full ">
                        <img
                            src="https://www.apollohospitals.com/hyderabad/wp-content/uploads/2021/06/Electrophysiology.jpg"
                            className="w-full h-72" />
                    </div>
                </div>
                <div className='md:text-5xl text-3xl font-semibold flex justify-center items-center p-8'>About Heart & Lung Transplant</div>
                <div className='md:pl-8 pl-4 md:text-4xl text-2xl font-bold'>Introduction</div>
                <div>
                    <div className='md:p-8 p-4'>Heart-lung transplantation (HLTx) is a surgical procedure for replacing failed heart and lungs. This type of dual transplantation is often coupled with technical complexity, leading to early post-operative complications and emphasizing the need for meticulous surgical planning and efficient teamwork. Also, according to the based-on-risk-benefit ratio, this type of surgery is only performed once the patient meets specific criteria.
                        <div className="collapse ">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium text-red-600">Read More</div>
                            <div className="collapse-content">
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold'>Common Condition</div>
                                    <div className=''>
                                        <div>
                                            <h5 className='font-bold mt-4'>>Congenital Cardiac Diseases With Eisenmenger Syndrome:</h5>This type of syndrome is caused by disruptions in the normal physiology of the heart. Congenital anatomic defects like holes create a shunt, directing blood from the left to the right side due to pressure differences, making the condition life-threatening.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-2'>>Pulmonary Hypertension Disorders:</h5>Pulmonary hypertension is characterized by high blood pressure in the arteries that supply the lungs, resulting in an increased resistance to blood flow in the pulmonary circulation. This condition often coexists with various conditions, like lung and heart diseases, frequently leading to heart failure.

                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-2'>>Systemic Diseases: </h5> Conditions such as cystic fibrosis, along with lifestyle factors like smoking, can lead to both cardiac and pulmonary failure. Examples of these diseases include emphysema and ischemic heart disease.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-2'>>Idiopathic Pulmonary Fibrosis:</h5>Idiopathic pulmonary fibrosis (IPF) represents a progressive and typically fatal pulmonary ailment, with a median survival post-diagnosis ranging from 2 to 5 years. Patients suffering from IPF often bear a substantial load of comorbidities, notably cardiovascular disease (CVD), and exhibit overlapping risk factors that are also associated with CVD.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold mt-4'>Symptoms of Heart and Lung Failure Requiring Transplant</div>
                                    <div className=''>
                                        <div className='mt-4'>
                                            The symptoms of heart and lung failure might vary depending on the type of underlying disease. Some of them are listed below:
                                        </div>
                                        <div className='mt-4'>
                                            >Shortness of breath

                                        </div>
                                        <div className='mt-4'>
                                            >Vigorous exertion or exercise at the initial phase
                                        </div>
                                        <div className='mt-4'>
                                            >Difficulty breathing when lying flat and needing extra pillows at night because of orthopnea

                                        </div>
                                        <div className='mt-4'>
                                            >Waking up in the middle of the night with paroxysmal nocturnal dyspnea
                                        </div>
                                        <div className='mt-4'>
                                            >Swelling of arms and legs (edema)
                                        </div>
                                        <div className='mt-4'>
                                           >Persistent coughing or wheezing
                                        </div>
                                        <div className='mt-4'>
                                            >Severe shortness of breath, restricting exercise and daily activities

                                        </div>
                                        <div className='mt-4'>
                                            >Recurrent pneumonia and excessive sputum production
                                        </div>
                                        <div className='mt-4'>
                                            >Cyanosis or bluish discoloration of the skin and lips
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold mt-4'>Criteria for Heart-Lung Transplant</div>
                                    <div className=''>
                                        <div className='mt-4'>
                                            Individuals eligible for a heart-lung transplant must meet the following criteria:
                                        </div>
                                        <div className='mt-4'>
                                            >Candidates for a heart-lung transplant should be under 55 years old and free of additional medical conditions, such as AIDS, diabetes, or hepatitis.

                                        </div>
                                        <div className='mt-4'>
                                            >They should also be mentally sound and able to adhere to post-operative requirements, including exercise and immunosuppressant medication regimen.
                                            Dual organ failure necessitating heart-lung transplants can result from:
                                        </div>
                                        <div className='mt-4'>
                                            >Primary cardiac disorder, precipitating pulmonary failure.

                                        </div>
                                        <div className='mt-4'>
                                            >Primary pulmonary disorder, precipitating cardiac failure.
                                        </div>
                                        <div className='mt-4'>
                                            >A systemic condition or congenital disabilities contributing to both cardiac and pulmonary failure
                                        </div>
                                        <div className='mt-4'>
                                            Patients with heart-lung failure might be candidates for multiorgan transplantation, mainly if they present with associated organ failures, such as advanced heart and lung disease, leading to pulmonary hypertension. However, these candidates must meet all heart-lung transplant criteria. Due to limited experience and insufficient outcome data, only established transplant centers proficient in each involved organ system will consider such complex procedures.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold mt-4'>Contraindications</div>
                                    <div className=''>
                                        <div className='mt-4'>
                                            Listed below are the specific reasons why HLTx is not recommended:
                                        </div>
                                        <div className='mt-4'>
                                            >Active malignancy or a history of it within the last two to five years

                                        </div>
                                        <div className='mt-4'>
                                            >Active substance abuse, uncontrolled psychiatric disorders, non-compliance, poor functional status, or inadequate social support
                                        </div>
                                        <div className='mt-4'>
                                            >ABO incompatibility and positive crossmatch between donor and recipient

                                        </div>
                                        <div className='mt-4'>
                                            >A significant mismatch in donor-recipient lung size beyond 10% of the recipient’s height or weight
                                        </div>
                                        <div className='mt-4'>
                                            >Advanced age
                                        </div>
                                        <div className='mt-4'>
                                           >Previous thoracic surgery history
                                        </div>
                                        <div className='mt-4'>
                                            >Bilirubin levels of 2.1 mg/dL or higher, indicating advanced pulmonary hypertension and a potential need for a combined heart-lung-liver transplant

                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold  mt-4'>Complications</div>
                                    <div className=''>
                                        <div className='mt-4'>
                                            Complications following HLTx, as per the latest research, include:
                                        </div>
                                        <div className='mt-4'>
                                            >Primary graft dysfunction of the lung, which leads to severe hypercapnia and hypoxia

                                        </div>
                                        <div className='mt-4'>
                                            >Primary cardiac graft failure, defined by sustained severe hemodynamic status without a clear explanation
                                        </div>
                                        <div className='mt-4'>
                                            >Acute airway emergencies

                                        </div>
                                        <div className='mt-4'>
                                            >Chronic rejection of the lung graft, resulting in bronchiolitis obliterans syndrome
                                        </div>
                                        <div className='mt-4'>
                                            >Heart graft rejection, leading to coronary artery vasculopathy
                                        </div>
                                        <div className='mt-4'>
                                           >Infections, especially fungal infections, accounting for up to 14% of cases of infectious complications
                                        </div>
                                        <div className='mt-4'>
                                            >Medication-induced side effects, including hypertension, hyperlipidemia, diabetes, and renal dysfunction

                                        </div>
                                        <div className='mt-4'>
                                            >Post-transplant malignancies, such as post-transplant lymphoproliferative disorder (PTLD), have a higher incidence in heart-lung transplant recipients

                                        </div>
                                        <div className='mt-4'>
                                            >Surgical complications, including injury to the vagal nerves (resulting in gastroparesis, reflux disease, and aspiration), phrenic nerve (manifesting as dyspnea), and thoracic duct

                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold mt-4'>Advancements and Survival Rates in Heart-Lung Transplant</div>
                                    <div className=''>
                                        <div className='mt-4'>
                                            HLTx survival rates have significantly improved over time, showing marked gains in early post-transplant and long-term outcomes. These improvements stem from enhanced patient selection, surgical advancements, improved immunosuppressive therapies, and a deeper understanding of the associated risks. Listed below are the key points regarding survival rates post-procedure:
                                        </div>
                                        <div className='mt-4'>
                                            >Since the initial successful HLTx in 1981, close to 4000 patients have been subjected to this surgical intervention due to advancements in surgical techniques.

                                        </div>
                                        <div className='mt-4'>
                                            >The median survival for heart-lung transplant has increased over the years from 2.1 years (1982–1993) to 3.7 years (1994–2003) and 5.8 years (2004–2016).
                                        </div>
                                        <div className='mt-4'>
                                            >Patients who survive the first year post-transplant can expect a median survival of 10.3 years.

                                        </div>
                                        <div className='mt-4'>
                                            >Long-term survival rates were documented among early transplant recipients who survived beyond 1-year post-transplant.
                                        </div>
                                        <div className='mt-4'>
                                            HLTx is recommended as a surgical option for meticulously chosen patients. It presents optimal survival benefits for severe heart failure or complex coronary heart disease with pulmonary hypertension. Managing such complicated patients necessitates a multidisciplinary approach. It is crucial to closely monitor their declining function to ensure timely consideration for improving their survival rates.
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className='pl-8 pb-8 text-3xl font-medium'>Our Team of Experts</div>
            <div>
                <div className="slider-container mb-16">
                    <Slider {...settings}>
                        <div>
                            <div className="card bg-base-100 w-96 shadow-xl h-96">
                                <figure>
                                    <img
                                        src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Dr. Apeksha Patil

                                    </h2>
                                    <p>PRINCIPAL DIRECTOR CARDIOLOGY</p>
                                    <div className="card-actions justify-between">
                                        <a href="ApekshaPatill"><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
                                        <div className="border-2 border-slate-300 bg-green-300 hover:bg-white p-2">Book An Appointment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-base-100 w-96 shadow-xl h-96 cover">
                                <figure>
                                    <img
                                        src="https://t3.ftcdn.net/jpg/01/67/15/98/360_F_167159846_MCrwVzB7ysdZKr2vIiJkiCacEoNWagdn.jpg"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Dr. Manmath Shelke

                                    </h2>
                                    <p>CHAIRMAN CARDIAC SCIENCE</p>
                                    <div className="card-actions justify-between">
                                        <a href='ManmathShelke'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
                                        <div className="border-2 border-slate-300 bg-green-300 hover:bg-white p-2">Book An Appointment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-base-100 w-96 shadow-xl cover h-96">
                                <figure>
                                    <img
                                        src="https://static.vecteezy.com/system/resources/thumbnails/030/928/115/small_2x/handsome-indian-doctor-generate-ai-photo.jpg"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Dr. Tirupatti Shelke

                                    </h2>
                                    <p>CHAIRMAN CARDIAC SCIENCE</p>
                                    <div className="card-actions justify-between">
                                        <a href='TirupattiShelke'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
                                        <div className="border-2 border-slate-300 bg-green-300 hover:bg-white p-2">Book An Appointment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-base-100 w-96 shadow-xl h-96 bg-cover">
                                <figure>
                                    <img
                                        src="https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Dr. Rajesh Swami

                                    </h2>
                                    <p>CHAIRMAN & HEAD-ADULT-CARDIAC SCIENCE</p>
                                    <div className="card-actions justify-between">
                                        <a href='RajeshSwami'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
                                        <div className="border-2 border-slate-300 bg-green-300 hover:bg-white p-2">Book An Appointment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-base-100 w-96 shadow-xl h-96 cover">
                                <figure>
                                    <img
                                        src="https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Dr. Anup Kulkarni

                                    </h2>
                                    <p>CHAIRMAN & HEAD-ADULT-CARDIAC SCIENCE</p>
                                    <div className="card-actions justify-between">
                                    <a href='AnupKulkarni'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
                                        <div className="border-2 border-slate-300 bg-green-300 hover:bg-white p-2">Book An Appointment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-base-100 w-96 shadow-xl h-96 cover">
                                <figure>
                                    <img
                                        src="https://cdn.euroinnova.edu.es/img/subidasEditor/doctor-5871743_640-1610073541.webp"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Dr. Arjun Shelke

                                    </h2>
                                    <p>EXECUTIVE DIRECTOR CARDIOLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href='ArjunShelke'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
                                        <div className="border-2 border-slate-300 bg-green-300 hover:bg-white p-2">Book An Appointment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-base-100 w-96 shadow-xl h-96 cover">
                                <figure>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0GYdZCpsJdTPZsArtvoSigDZd31q8zF7I-9ASkvB4Gga0fpnE-BtE9lTzeptdGjZhz8&usqp=CAU"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Dr. Sharad Sonawane

                                    </h2>
                                    <p>EXECUTIVE DIRECTOR CARDIOLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href='SharadSonawane'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
                                        <div className="border-2 border-slate-300 bg-green-300 hover:bg-white p-2">Book An Appointment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-base-100 w-96 shadow-xl h-96 cover">
                                <figure>
                                    <img
                                        src="https://plus.unsplash.com/premium_photo-1682089872205-dbbae3e4ba32?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZG9jdG9yfGVufDB8fDB8fHww"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Dr. Sonal Barole

                                    </h2>
                                    <p>EXECUTIVE DIRECTOR CARDIOLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href='SonalBarole'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
                                        <div className="border-2 border-slate-300 bg-green-300 hover:bg-white p-2">Book An Appointment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-base-100 w-96 shadow-xl h-96 cover">
                                <figure>
                                    <img
                                        src="https://residentsmedical.com/wp-content/uploads/2022/12/picture-of-indian-doctor-behind-indian-and-american-flag-standing-proud.jpg"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Dr. Tushar Gangawane

                                    </h2>
                                    <p>EXECUTIVE DIRECTOR CARDIO THORACIC VASCULAR CARDIOLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href='TusharGangawane'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
                                        <div className="border-2 border-slate-300 bg-green-300 hover:bg-white p-2">Book An Appointment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='pl-8 pb-8 text-3xl font-medium'>Medical Procedure for</div>
            <div className='mb-16'>
                <Slider {...settings}>
                    <div>
                        <div className="card bg-base-100 image-full w-96 shadow-xl h-72">
                            <figure>
                                <img
                                    src="https://t3.ftcdn.net/jpg/08/04/52/58/360_F_804525860_jebjhx4GQbLm6gug8R0T9EIZ09g9wcE9.jpg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">

                                <div className="card-actions justify-start mt-40">
                                    <button className="btn opacity-55">CT Coronary Angiogram</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 image-full w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://t3.ftcdn.net/jpg/08/04/52/58/360_F_804525860_jebjhx4GQbLm6gug8R0T9EIZ09g9wcE9.jpg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">

                                <div className="card-actions justify-start mt-40">
                                    <button className="btn opacity-55">Cardiac Ablation</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 image-full w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://t3.ftcdn.net/jpg/08/04/52/58/360_F_804525860_jebjhx4GQbLm6gug8R0T9EIZ09g9wcE9.jpg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">

                                <div className="card-actions  justify-start mt-40">
                                    <button className="btn opacity-55">Cardiac Catheterization</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 image-full w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://t3.ftcdn.net/jpg/08/04/52/58/360_F_804525860_jebjhx4GQbLm6gug8R0T9EIZ09g9wcE9.jpg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">

                                <div className="card-actions  justify-start mt-40">
                                    <button className="btn opacity-55">Cardioversion</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 image-full w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://t3.ftcdn.net/jpg/08/04/52/58/360_F_804525860_jebjhx4GQbLm6gug8R0T9EIZ09g9wcE9.jpg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">

                                <div className="card-actions  justify-start mt-40">
                                    <button className="btn opacity-55">Chelation Therapy for Heart Disease</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 image-full w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://t3.ftcdn.net/jpg/08/04/52/58/360_F_804525860_jebjhx4GQbLm6gug8R0T9EIZ09g9wcE9.jpg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">

                                <div className="card-actions  justify-start mt-40">
                                    <button className="btn opacity-55">Cholesterol Test</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 image-full w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://t3.ftcdn.net/jpg/08/04/52/58/360_F_804525860_jebjhx4GQbLm6gug8R0T9EIZ09g9wcE9.jpg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">

                                <div className="card-actions  justify-start mt-40">
                                    <button className="btn opacity-55">Coronary Angiogram</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 image-full w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://t3.ftcdn.net/jpg/08/04/52/58/360_F_804525860_jebjhx4GQbLm6gug8R0T9EIZ09g9wcE9.jpg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">

                                <div className="card-actions  justify-start mt-40">
                                    <button className="btn opacity-55">Coronary Angioplasty and Stents</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 image-full w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://t3.ftcdn.net/jpg/08/04/52/58/360_F_804525860_jebjhx4GQbLm6gug8R0T9EIZ09g9wcE9.jpg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">

                                <div className="card-actions  justify-start mt-40">
                                    <button className="btn opacity-55">Echocardiogram</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>

            <div>
                <section>
                    <div className='mt-12 md:text-4xl text-3xl pl-6'>Our Patients Stories</div>
                    <div className="slider-container pt-16">
                        <Slider
                            ref={slider => {
                                sliderRef = slider;
                            }}
                            {...settings1}
                        >
                            <div key={1}>
                                <section className="relative isolate overflow-hidden bg-white px-6 sm:py-32 lg:px-8">

                                    <div className="mx-auto max-w-2xl lg:max-w-4xl">

                                        <figure className="">
                                            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                                                <p>
                                                    “I want to thank Dr. Tushar Gangawane, the best cardiothoracic vascular surgeon, along with their team, Dr. Sharad Sonawane and Dr. Arjun Shelke. Special thanks to Sonal ma’am and all the nursing staff for their support during my dad’s recovery at Arogyasampatti, Khapri, Nagpur.”
                                                </p>
                                            </blockquote>
                                            <figcaption className="mt-10">
                                                <svg className="mx-auto h-10 w-10 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{ /*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#e19b84" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>
                                                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                                    <div className="font-semibold text-gray-900">Karan Gone</div>
                                                    <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                                                        <circle r={1} cx={1} cy={1} />
                                                    </svg>

                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </section>
                            </div>
                            <div key={2}>
                                <h3>2</h3>
                            </div>
                            <div key={3}>
                                <h3>3</h3>
                            </div>
                            <div key={4}>
                                <h3>4</h3>
                            </div>
                            <div key={5}>
                                <h3>5</h3>
                            </div>
                            <div key={6}>
                                <h3>6</h3>
                            </div>
                        </Slider>
                        <div style={{ textAlign: "center" }} className='mt-8 mb-12'>
                            <button className="button mr-6 p-2 w-24 rounded-md bg-red-300" onClick={previous}>
                                Previous
                            </button>
                            <button className="button ml-6 p-2 w-24 rounded-md bg-red-300" onClick={next}>
                                Next
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default LungTransplant