import React from 'react'
import NavContact from './NavContact'
import Navbar from './Navbar'
import Footer from './Footer';
import { useRef } from "react";
import Slider from "react-slick";

function HeartTransplant() {
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
                            src="https://www.kewalkrishan.com/assets/images/blog-9.jpg"
                            className="w-full h-72" />
                    </div>
                </div>
                <div className='md:text-5xl text-3xl font-semibold flex justify-center items-center p-8'>About Heart Transplant</div>
                <div className='md:pl-8 pl-4 md:text-4xl text-2xl font-bold'>Introduction</div>
                <div>
                    <div className='md:p-8 p-4'>Heart transplant stands as an elevation of modern medicine, providing renewed life and hope to those with end-stage heart failure. In recent decades, this procedure has evolved into a life-saving option, transforming the prognosis for many patients. Let’s delve into the intricate world of heart transplantation, exploring the indications, types, future challenges, and post-transplantation management.
                        <div className="collapse ">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium text-red-600">Read More</div>
                            <div className="collapse-content">
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold'>Common Condition</div>
                                    <div className=''>
                                        <div>
                                            A heart transplant is recommended for individuals suffering from unmanageable cases of acute and chronic heart failure. Some of the primary indications in such cases include:
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-2'>>Idiopathic Cardiomyopathy:</h5> Idiopathic cardiomyopathy is heart muscle disease without a known cause. It leads to heart enlargement and weakens its function, necessitating the need for a heart transplant in severe cases

                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-2'>>Ischemic Heart Disease With Left Ventricular Failure:  </h5> These are the group of syndromes often encountered for the cause of heart failure that arises from left ventricular dysfunction (LVD) stemming from myocardial ischemia or infarction, with prevalent risk factors such as hypertension and diabetes.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-2'>Congenital Heart Disease: </h5> Anatomical cardiac defects that exist from birth are referred to as congenital heart disease. These flaws, impairing heart function, can impact the heart’s walls, valves, or blood vessels.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold'>Types of Heart Transplant</div>
                                    <div className=''>
                                        <div>
                                            <h5 className='font-bold mt-2'>>Orthotopic Heart Transplant:</h5>  It involves removing the failed heart and replacing it with a healthy donor heart. The recipient’s heart is excised, leaving behind the atria, and the donor’s heart is connected to the major blood vessels. This procedure is commonly performed for end-stage heart failure.

                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-2'>>Heterotopic Heart Transplant:</h5> It is a less common procedure where the donor’s heart is implanted alongside the recipient’s failing heart. The donor heart is typically placed in the right chest cavity, and connections are made between the donor heart and the recipient’s circulatory system. This technique is used in cases where removing the recipient’s heart entirely might pose higher risks.
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold mt-4'>Criteria for Heart Transplant</div>
                                    <div className=''>
                                        <div className='mt-4'>
                                            According to American Heart Association guidelines for chronic heart failure in outpatient settings, patients may be referred for a heart transplant if they:
                                        </div>
                                        <div className='mt-4'>
                                            >Have ongoing symptoms and complications, such as renal damage, that are linked to heart issues despite using recommended medications.

                                        </div>
                                        <div className='mt-4'>
                                            >Experience frequent hospital visits for heart failure, even with medication.
                                        </div>
                                        <div className='mt-4'>
                                            >Face side effects or cannot use recommended medications.
                                        </div>
                                        <div className='mt-4'>
                                            >Show worsening right heart function or high lung artery pressure.
                                        </div>
                                        <div className='mt-4'>
                                            >Have frequent severe heart rhythm issues that don’t respond to treatment.
                                        </div>
                                        <div className='mt-4'>
                                            >Show other signs like anemia, weight loss, or liver issues due to heart failure.
                                            In case of acute heart failure, patients needing urgent referral for heart transplant may have:
                                        </div>
                                        <div className='mt-4'>
                                            >Severe heart shock despite strong medications and mechanical heart support
                                        </div>
                                        <div className='mt-4'>
                                            >Severe lung swelling is not improving with medications and requires ventilation.
                                        </div>
                                        <div className='mt-4'>
                                            >Severe heart rhythm issues are not getting better with medicines or other procedures.
                                        </div>
                                        <div className='mt-4'>
                                            A successful heart transplant relies on a specialized team comprising cardiothoracic surgeons, cardiac anesthesiologists, cardiologists, perfusionists, and nursing staff. This comprehensive team ensures expertise and diligent care throughout the entire procedure. Among the most critical aspects is preserving the donor organ from the moment it is removed from the donor’s body until it is transplanted into the recipient.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold mt-4'>Organ Preservation Techniques</div>
                                    <div className=''>
                                        <div className='mt-4'>
                                            The process of organ preservation has seen significant advancements over the years, and ongoing research aims to improve outcomes further and expand the availability of donor organs. The standard techniques used for organ preservation include:


                                        </div>
                                        <div className='mt-4'>
                                            >Cold storage (Static cold storage)

                                        </div>
                                        <div className='mt-4'>
                                            >Machine perfusion
                                        </div>
                                        <div className='mt-4'>
                                            >Normothermic perfusion

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold'>Challenges and Future Directions of Organ Preservation</div>
                                    <div className=''>

                                        <div>
                                            <h5 className='font-bold mt-2'>>Prolonged Preservation: </h5> Preserving hearts for extended periods is crucial for expanding the donor pool and improving logistics. Research is focused on developing better preservation solutions and refining machine perfusion techniques to extend preservation times further.

                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-2'>>Enhanced Preservation Solutions: </h5> Scientists are developing new preservation solutions that better protect the heart from ischemic injury and optimize its function post-transplantation. These solutions reduce inflammation, prevent cell damage, and improve overall outcomes.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-2'>Gene Editing and Modulation:</h5> Genetic manipulation techniques might improve organ preservation. For example, modifying genes involved in ischemia-reperfusion injury could make organs more resilient to damage during preservation and transplantation.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-2'>>Organ Assessment Tools: </h5> Advances in imaging and diagnostic technologies allow for better assessment of organ quality before transplantation. Machine learning algorithms are being developed to interpret imaging data and predict outcomes based on the condition of the donor’s heart.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-2'>>Immunomodulation:</h5>Strategies to modulate the recipient’s immune response to reduce the risk of rejection are being investigated. This approach includes personalized immunosuppressive regimens tailored to individual patients.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-2'>>Remote Transplantation: </h5> The “remote” or “virtual” transplantation concept involves transporting donor organs over longer distances. This could expand the donor pool by allowing organs to be transported from more distant locations.
                                        </div>
                                    </div>
                                    <div>
                                        <div className=' md:text-4xl text-2xl font-bold  mt-4'>Follow-up and Care After Heart Transplantation</div>
                                        <div className=''>
                                            <div className='mt-4'>
                                                After a heart transplant, immediate care is crucial to allow the body to accept the new heart. Follow-up procedures include the following:
                                            </div>
                                            <div className='mt-4'>
                                            >Monitoring involves intraoperative transesophageal echocardiography, continuous monitoring with devices such as an intra-arterial line, pulmonary artery catheter, and cardiac telemetry. Additionally, ionotropic medications are used to support heart function.

                                            </div>
                                            <div className='mt-4'>
                                            >Management includes prompt detection of complications, such as primary graft dysfunction (LV/RV/biventricular), cardiac tamponade, and RV dysfunction in high pulmonary resistance.
                                            </div>
                                            <div className='mt-4'>
                                            >Long-term care focuses on checking heart function, spotting rejection, artery problems, and side effects of medication.

                                            </div>
                                            <div className='mt-4'>
                                            >For early transplant, regular endomyocardial biopsies, coronary angiograms, intravascular ultrasound, and periodic laboratory evaluations are essential for the immediate detection of complications post-heart transplant.
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className=' md:text-4xl text-2xl font-bold mt-4'>Conclusion</div>
                                        <div className=''>
                                            <div className='mt-4'>
                                                Heart transplant is referred to as the gold standard treatment of modern medicine, providing renewed life to those with end-stage heart failure. Evolving into a life-saving option, it transforms prognoses. The journey from indications to types, challenges, and post-transplant care illuminates a field of hope.
                                            </div>
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

export default HeartTransplant