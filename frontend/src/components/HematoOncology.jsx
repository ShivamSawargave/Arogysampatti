import React from 'react'
import NavContact from './NavContact'
import Navbar from './Navbar'
import Footer from './Footer';
import { useRef } from "react";
import Slider from "react-slick";

function HematoOncology() {
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
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52GH0aIZwPygO2AWt2Berj77_ODkvdcmpfQ&s"
                            className="w-full h-72" />
                    </div>
                </div>
                <div className='md:text-5xl text-3xl font-semibold flex justify-center items-center p-8'>About Hemato Oncology</div>
                <div className='md:pl-8 pl-4 md:text-4xl text-2xl font-bold'>What is Hemato-Oncology</div>
                <div>
                    <div className='md:p-8 p-4'>Hemato-oncology is a medical specialty focused on cancers that affect the bone marrow, lymphatic systems, and blood. Hemato-oncologists help patients treat and manage symptoms related to various blood cancers such as leukemia, lymphoma, multiple myeloma, and so on. Read on to learn more about the types, symptoms, diagnosis, treatment, and post-treatment care of blood cancers.
                        <div className="collapse ">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium text-red-600">Read More</div>
                            <div className="collapse-content">
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold'>Types of Hematologic Cancer</div>
                                    <div className=''>
                                        <div className=' md:text-3xl text-2xl font-bold mt-2'>
                                            Leukemia
                                        </div>
                                        <div>
                                            <h5 className='font-semibold mt-4 md:text-3xl text-2xl'>This type of cancer is caused by the abnormally rapid proliferation of white blood cells. It can be categorized into:</h5>
                                        </div>
                                        <div className='mt-4'>
                                            >Acute lymphocytic leukemia (ALL)
                                        </div>
                                        <div className='mt-4'>
                                            >Acute myelogenous leukemia (AML)
                                        </div>
                                        <div className='mt-4'>
                                            >Chronic lymphocytic leukemia (CLL)
                                        </div>
                                        <div className='mt-4'>
                                            >Chronic myelogenous leukemia (CML)
                                        </div>
                                        <div className=' md:text-3xl text-2xl font-bold mt-2'>
                                            Lymphoma
                                        </div>
                                        <div className='mt-4'>
                                            Lymphomas begin from the lymph system. The two major types of lymphomas are:
                                        </div>
                                        <div className='mt-4'>
                                            >Hodgkin lymphoma
                                        </div>
                                        <div className='mt-4'>
                                            >Non-Hodgkin lymphoma
                                        </div>
                                        <div className=' md:text-3xl text-2xl font-bold mt-4'>
                                            Multiple Myeloma/Kahler’s disease
                                        </div>
                                        <div className='mt-4'>
                                            This type of blood cancer develops in the plasma cells present in the bone marrow.
                                        </div>
                                        <div className=' md:text-3xl text-2xl font-bold mt-4'>
                                            Common Symptoms
                                        </div>
                                        <div className='mt-4'>
                                            Symptoms vary based on the type of blood/hematologic cancer. They may include:
                                        </div>
                                        <div className='mt-4'>
                                            >Shedding of weight
                                        </div>
                                        <div className='mt-4'>
                                            >Bruising or bleeding
                                        </div>
                                        <div className='mt-4'>
                                            >Lumps
                                        </div>
                                        <div className='mt-4'>
                                            >Breathlessness
                                        </div>
                                        <div className='mt-4'>
                                            >Thoroughly wetting night sweats
                                        </div>
                                        <div className='mt-4'>
                                            >Severe, persistent, or recurrent infections
                                        </div>
                                        <div className='mt-4'>
                                            >Rash or itchy skin
                                        </div>
                                        <div className='mt-4'>
                                            >Pain in bones, joints, or abdomen
                                        </div>
                                        <div className='mt-4'>
                                            >Consistent fatigue
                                        </div>
                                        <div className='mt-4'>
                                            >Fever with a temperature of 37.5 °C or above
                                        </div>
                                        <div className=' md:text-3xl text-2xl font-bold mt-4'>
                                            Cause or Risk Factor of Hematologic Cancer
                                        </div>
                                        <div className='mt-4'>
                                            Blood cancers are primarily caused by mutations in the DNA of blood cells. Other risk factors include:
                                        </div>
                                        <div className='mt-4'>
                                            >Advancing age
                                        </div>
                                        <div className='mt-4'>
                                            >Gender
                                        </div>
                                        <div className='mt-4'>
                                            >Compromised immune system
                                        </div>
                                        <div className='mt-4'>
                                            >Exposure to higher doses of radiation
                                        </div>
                                        <div className='mt-4'>
                                            >Exposure to industrial chemicals
                                        </div>
                                        <div className='mt-4'>
                                            >History of autoimmune diseases
                                        </div>
                                        <div className='mt-4'>
                                            >History of infection with Epstein-Barr virus
                                        </div>
                                        <div className='mt-4'>
                                            >Smoking
                                        </div>
                                        <div className=' md:text-3xl text-2xl font-bold mt-4'>
                                            How are Hematologic Cancers Diagnosed?
                                        </div>
                                        <div className='mt-4'>
                                            A diagnosis often begins with a physical examination to assess the patient’s health. Healthcare professionals review the patient’s health history, examine lymph nodes, and check for signs of infection or bruising. Distinct types of tests and procedures used to diagnose blood cancer are described below.
                                        </div>
                                        <div className=' md:text-3xl text-2xl font-bold mt-4'>
                                            Blood Tests
                                        </div>
                                        <div className='mt-4'>
                                            A complete blood count (CBC) depicts the cell count of distinct blood components, such as red blood cells, white blood cells, and platelets. Blood chemistry tests estimate the levels of essential substances in the blood. For instance, abnormal levels of specific proteins might provide information about the patient’s condition. If multiple myeloma is suspected, healthcare professionals might want to analyze the calcium levels in the patient’s blood. If lymphoma is suspected, an enzyme known as lactate dehydrogenase (LDH) might be quantified.
                                        </div>
                                        <div className=' md:text-3xl text-2xl font-bold mt-4'>
                                        Imaging Scans 
                                        </div>
                                        <div className='mt-4'>
                                        A scan might locate an enlarged lymph node, which is a common manifestation of lymphoma, but it is not generally used to diagnose leukemia. Commonly used scanning techniques include:
                                        </div>
                                        <div className='mt-4'>
                                            >Magnetic resonance imaging (MRI)
                                        </div>
                                        <div className='mt-4'>
                                            >Positron emission tomography (PET) scan
                                        </div>
                                        <div className='mt-4'>
                                            >Computed tomography (CT) scan
                                        </div>
                                        <div className='mt-4'>
                                            >X-ray
                                        </div>
                                        <div className=' md:text-3xl text-2xl font-bold mt-4'>
                                        Biopsies  
                                        </div>
                                        <div className='mt-4'>
                                        A biopsy includes the collection of cell samples for examination by a pathologist in the laboratory. For certain types of hematologic cancers, such as lymphoma, the patient might require a lymph node biopsy, which involves obtaining a sample of the lymph tissue or a complete lymph node. 

Testing the bone marrow, where blood cells are produced, can aid in diagnosing certain forms of blood cancer. Healthcare professionals employ a procedure known as bone marrow aspiration to excise a small sample of bone marrow, blood, and bone from either a hip bone or breastbone. The sample is sent to a laboratory and analyzed to detect abnormal cells or modifications in the genetic material. 
                                        </div>
                                        <div className=' md:text-3xl text-2xl font-bold mt-4'>
                                        Hemato-Oncology Treatment Approaches  
                                        </div>
                                        <div className='mt-4'>
                                        The treatment plan is tailored by healthcare professionals based on symptoms, type of blood cancer, subtype and stage, overall health, type of cell, and genetic testing results. Commonly used approaches include:
                                        </div>
                                        <div className='mt-4 flex flex-row'>
                                            <h5 className='font-bold'>Chemotherapy: </h5><p> This approach uses drugs to kill cancer cells. The drug is often administered directly into a vein. </p>
                                        </div>
                                        <div className='mt-4 flex flex-row'>
                                            <h5 className='font-bold'>Immunotherapy: </h5><p>It is a way of treating cancer that makes use of person’s own immune system to attack the cancer. An example of innovative immunotherapy is CAR-T therapy, wherein an individual’s own T cells are genetically modified to enhance their ability to search and destroy cancer cells.</p>
                                        </div>
                                        <div className='mt-4 flex flex-row'>
                                            <h5 className='font-bold'>Radiotherapy: </h5><p>This method employs high-energy X-rays or other forms of radiation to destroy cancer cells.</p>
                                        </div>
                                        <div className='mt-4 flex flex-row'>
                                            <h5 className='font-bold'>Stem Cell Transplantation: </h5><p>Stem Cell Transplantation:</p>
                                        </div>
                                        <div className='mt-4'>
                                            >Autologous/Autograft: Here, a person’s own stem cells are collected and stored and given back to them later by transplant.
                                        </div>
                                        <div className='mt-4'>
                                            >Allogeneic/Allograft: Here, someone else’s or donor’s stem cells are used for the transplant.
                                        </div>
                                        <div className='mt-4 flex flex-row'>
                                            <h5 className=' font-bold'>Targeted Therapies:</h5><p> They are cancer treatments that work by targeting the genetic modifications that cancer cells have but normal cells do not. There are many types of targeted therapies, such as: </p>
                                        </div>
                                        <div className='mt-4'>
                                            >Monoclonal antibodies (MAB): These are artificial antibodies that work by identifying proteins on the surface of cancer cells. Few of these antibodies interfere with signals that a cancer requires to thrive or spread. 
                                        <div className='mt-4'>
                                            >Tyrosine kinase inhibitors (TKI): They work by blocking the signals sent from tyrosine kinases, which aid in spreading cancer.
                                        </div>
                                        <div className=' md:text-4xl text-2xl font-bold mt-4'>
                                        Life After Treatment: The Significance of Continuing Care
                                        </div>
                                        <div className='mt-4'>
                                            >Many individuals enjoy long and healthy lives after blood cancer treatment. Sometimes, the treatment can impact an individual’s health for months or even years after it has finished. Fear of cancer recurrence can make one feel anxious and is a critical concern for family members. Following simple steps as given below can prove beneficial: 
                                        </div>
                                        <div className='mt-4 flex flex-row'>
                                            <h5 className='font-bold'>Follow-up appointments:</h5><p>Regular check-ups post-treatment are critical for monitoring progress and addressing any issues immediately. </p>
                                        </div>
                                        <div className='mt-4 flex flex-row'>
                                            <h5 className='font-bold w-60'>Lifestyle modifications: </h5><p>In patients who consume plenty of fruits, vegetables, olive oil, and whole grains, their bodies replace blood cells and tissues broken down by treatment. Maintaining a healthy body weight through regular exercise can help combat treatment side effects and pave the way for faster recovery. </p>
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
                                    <p>CHAIRMAN ONCOSCIENCE</p>
                                    <div className="card-actions justify-between">
                                    <a href="ApekshaPatilOncology"><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>PRINCIPAL DIRECTOR & HOD LAP GI, GI ONCO, BARIATRIC & MIS SURGERY</p>
                                    <div className="card-actions justify-between">
                                    <a href="ManmathShelkeOncology"><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>PRINCIPAL DIRECTOR HEMATO- ONCOLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href="TirupattiShelkeOncology"><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>PRINCIPAL DIRECTOR & CHIEF HEMATOLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href="RajeshSwamiOncology"><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>PRINCIPAL DIRECTOR GYAE ONCOLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href="AnupKulkarniOncology"><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>PRINCIPAL DIRECTOR SURGICAL ONCOLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href="ArjunShelkeOncology"><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>PRINCIPAL DIRECTOR & PAEDIATRIC ONCOLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href="SharadSonawaneOncology"><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>SENIOR DIRECTOR - GI, GI ONCOLOGY, MINIMAL ACCESS & BARIATRIC SURGERY</p>
                                    <div className="card-actions justify-between">
                                    <a href="SonalBaroleOncology"><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>CHAIRMAN ONCOSCIENCE</p>
                                    <div className="card-actions justify-between">
                                    <a href="TusharGangawaneOncology"><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <button className="btn opacity-55">BRCA gen test for breast cancer</button>
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
                                    <button className="btn opacity-55">Breast self-exam for breast awareness</button>
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
                                    <button className="btn opacity-55">CA 125 test</button>
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
                                    <button className="btn opacity-55">HPV test</button>
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
                                    <button className="btn opacity-55">Urine cytology</button>
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

export default HematoOncology
