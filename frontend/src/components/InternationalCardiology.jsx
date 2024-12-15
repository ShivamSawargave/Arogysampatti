import React from 'react'
import NavContact from './NavContact'
import Navbar from './Navbar'
import Footer from './Footer';
import { useRef } from "react";
import Slider from "react-slick";


function InternationalCardiology() {
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
                            src="heart.jpeg"
                            className="w-full h-72" />
                    </div>
                </div>
                <div className='md:text-5xl text-3xl font-semibold flex justify-center items-center p-8'>About Heart Transplant</div>
                <div className='md:pl-8 pl-4 md:text-4xl text-2xl font-bold'>Introduction</div>
                <div>

                    <div className=''>
                        <div className='mt-4'>
                            Interventional Cardiology Hospital in India: Interventional Cardiology Treatments Hospital | Fortis Healthcare
                            Interventional cardiology is a minimally invasive way of diagnosing and treating various heart and blood vessel diseases using catheter-based techniques. These techniques are minimally invasive, meaning they do not require open surgery or large incisions. Instead, they use thin tubes called catheters that are inserted through a small puncture in the skin and guided to the affected area using X-ray or ultrasound imaging. Interventional cardiology can offer many benefits for patients, such as faster recovery, less pain, lower risk of infection, and shorter hospital stay.Some of the common conditions that interventional cardiology can treat include:
                            Coronary artery disease (CAD): In this condition the arteries carrying blood to the heart muscle become narrowed or blocked. This condition can lead to symptoms like chest pain, shortness of breath, or even a cardiac attack.

                            Valvular heart disease: This is the dysfunction of the heart valves that regulate the flow of blood between the chambers of the heart. This can cause symptoms such as fatigue, swelling, or heart failure.
                        </div>
                        <div className=''>
                            Structural heart disease: This is the abnormality of the shape or function of the heart or its components. This can be present at birth (congenital) or develop later in life (acquired). Some examples are atrial septal defect (ASD), ventricular septal defect (VSD), patent foramen ovale (PFO), or hypertrophic cardiomyopathy (HCM).

                            One of the Best Interventional Cardiology Hospital in India

                            Heart disease is one of the leading causes of death and disability in India and worldwide. According to the World Health Organization, more than 17 million people die from cardiovascular diseases every year, and this number is expected to rise to 23 million by 2030. Many of these deaths can be prevented or delayed by timely diagnosis and treatment of heart conditions. Recognizing this importance, Fortis Healthcare emerges as one of the best interventional cardiology hospitals in India, with a team of highly qualified and experienced interventional cardiologists who have performed thousands of successful procedures. Our interventional cardiology department is equipped with the latest technology and infrastructure, such as cath labs, hybrid operating rooms, cardiac intensive care units, and cardiac rehabilitation units. We follow the highest standards of safety and quality and adhere to the international guidelines and protocols for interventional cardiology. We also provide treatment to patients who are at high risk and have multiple vessel involvement.

                        </div>
                        <div className='mt-4'>
                            Procedures for Interventional Cardiology at Fortis Healthcare:
                        </div>
                        <div className='mt-4'>
                                            >Coronary angiography: This is a test that uses a special dye and X-rays to visualise the arteries of the heart and detect any blockages or narrowing.
                        </div>
                        <div className='mt-4'>
                                            >Coronary angioplasty and stenting: This is a procedure that uses a balloon and a metal mesh tube called a stent to open up the blocked arteries and restore blood flow.
                        </div>
                        <div className='mt-4'>
                                            >Coronary atherectomy and rotablation: This is a procedure that uses a device to cut or drill away the plaque that is causing the blockage in the arteries.
                        </div>
                        <div className='mt-4'>
                                            >Balloon valvuloplasty: This is a procedure that uses a balloon to widen a narrowed or stiff heart valve and improve its function.
                        </div>
                        <div className='mt-4'>
                                            >Transcatheter aortic valve replacement (TAVR): This is a procedure that uses a catheter to implant a new artificial valve in the aortic position, without removing the old valve.
                        </div>
                        <div className='mt-4'>
                                            >Transcatheter mitral valve repair (TMVR): This is a procedure that uses a catheter to clip or stitch the mitral valve leaflets together, reducing the leakage of blood back into the left atrium.
                        </div>
                        <div className='mt-4'>
                                            >Device closure of ASD, VSD, PFO: This is a procedure that uses a catheter to place a device that seals the hole between the chambers of the heart, preventing the mixing of oxygen-rich and oxygen-poor blood.
                        </div>
                        <div className='mt-4'>
                                            >Alcohol septal ablation: This is a procedure that uses a catheter to inject alcohol into a branch of the coronary artery that supplies blood to the thickened part of the heart muscle, causing it to shrink and relieve the obstruction.
                        </div>
                        <div className='mt-4'>
                                            >Left atrial appendage closure (LAAC): This is a procedure that uses a catheter to place a device that blocks the left atrial appendage, a small pouch in the left atrium that can harbour blood clots and increase the risk of stroke.
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

export default InternationalCardiology