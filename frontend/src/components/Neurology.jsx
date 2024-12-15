import React from 'react'
import Slider from "react-slick";
import { useRef } from "react";
import NavContact from './NavContact';
import Navbar from './Navbar';
import Footer from './Footer';


function Neurology() {
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
                            src="neurology.jpeg"
                            className="w-full h-72" />
                    </div>
                </div>
                <div className='md:text-5xl text-3xl font-semibold flex justify-center items-center p-8'>About Neurology</div>
                <div className='md:pl-8 pl-4 md:text-4xl text-2xl font-bold'>What is Neurology?</div>
                <div>
                    <div className='md:p-8 p-4'>Neurology is a branch of medicine that deals with studying and treating disorders of the nervous system. It is a complex, sophisticated system of cells and fibers that controls every function of the human body. With a deep-rooted foundation in both science and clinical practice, neurology plays a significant role in decoding the nervous system and addressing multiple conditions that afflict it.
                        <div className="collapse ">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium text-red-600">Read More</div>
                            <div className="collapse-content">
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold'>The nervous system is broadly divided into: </div>
                                    <div className=''>
                                        <div>
                                            <h5 className='font-bold mt-4'>>Central Nervous System (CNS):</h5>It comprises the brain and spinal cord.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-2'>>Peripheral Nervous System (PNS): </h5> It comprises the nerves that extend throughout the body. It also includes eyes, ears, skin, and other sensory receptors.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold mt-4'>Specialists in Neurology</div>
                                    <div className=''>
                                        <div className='mt-4'>
                                            Various specialists are trained to diagnose, treat, and manage nervous system disorders. The key specialists in the field of neurology include:
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Neurologists: </h5>Neurologists diagnose and treat disorders of the nervous system. They undergo specialized training in neurology, including residency programs focusing on evaluating and managing various neurological disorders.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Neurosurgeons:</h5>Neurosurgeons specialize in the surgical treatment of conditions of the nervous system. They perform surgeries for conditions such as brain tumors, traumatic brain injuries, spinal cord injuries, and movement disorders.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Neurointensivists:</h5>Neurointensivists are physicians who provide emergency care for patients admitted to the neurology ICU for life-threatening neurological conditions.

                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Neuropsychologists:</h5>Neuropsychologists assess and treat cognitive, emotional, and behavioral disorders associated with neurological conditions. They evaluate memory, language, and other elements of brain function and help develop individualized treatment modules.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Neuroscientists:</h5> Neuroscientists study the structure, function, and development of the nervous system and investigate the mechanisms of neurological disorders. They use research techniques like neuroimaging, electrophysiology, and genetic studies to develop new treatments for neurological conditions.

                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Neurology Technologists: </h5> Neurology technologists are trained professionals who perform diagnostic procedures to evaluate the function of the nervous system. They specialize in neurodiagnostic testing, such as electroencephalography (EEG), nerve conduction studies (NCS), electromyography (EMG), and evoked potentials (EP), to help diagnose and monitor neurological conditions.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold mt-4'>What Conditions Do Neurologists Treat?</div>
                                    <div className=''>
                                        <div className='mt-4'>
                                            Neurologists help treat a diverse array of neurological conditions, each presenting its unique challenges and manifestations.
                                            These conditions include:
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Stroke: </h5>Neurologists treat stroke, a condition when the blood flow to the brain is disrupted, through evaluation of symptoms and clot-bursting medication. 
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Epilepsy: </h5> Treatment of epilepsy (a neurological disorder characterized by seizures) includes antiepileptic medications, lifestyle changes, and surgical interventions.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Headaches: </h5> Neurologists specialize in headache disorders, such as migraines and cluster headaches. The treatment includes clinical evaluation and customized treatment.

                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Movement Disorders: </h5> Neurologists treat movement disorders such as Parkinson’s disease, essential tremor, dystonia, and Huntington’s disease. The treatment includes medications, physical therapy, or surgical interventions.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Multiple Sclerosis (MS): </h5>Neurologists treat multiple sclerosis, an autoimmune disorder, by prescribing therapies to reduce disease activity and progression and manage symptoms.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Alzheimer’s Disease and Dementia: </h5> Neurologists treat neurodegenerative disorders, such as Alzheimer’s disease, vascular dementia, and frontotemporal dementia, with medicines and collaboration with other healthcare providers.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Peripheral Neuropathy:</h5>Neurologists evaluate and treat peripheral neuropathy, a condition where peripheral nerves are damaged through nerve conduction studies and electromyography, medications, and lifestyle modifications.

                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Neuromuscular Disorders:</h5> Neurologists treat neuromuscular disorders, such as muscular dystrophy, myasthenia gravis, and amyotrophic lateral sclerosis (ALS), with medications, physical therapy, and coordination with specialists.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Neurological Infections and Inflammatory Disorders:</h5>Infections of the nervous system, such as meningitis and encephalitis, and inflammatory conditions, like multiple sclerosis and Guillain-Barré syndrome, are treated through medicines.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Neurogenetic Disorders: </h5> Neurologists treat genetic neurological disorders, such as Huntington’s disease, muscular dystrophy, and hereditary neuropathies, via genetic counseling, genetic testing, and personalized treatment.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold mt-4'>Diagnostic Modalities in Neurology</div>
                                    <div className=''>
                                        <div className='mt-4'>
                                        Neurologists begin the diagnostic process by recording a detailed medical and family history, evaluation of symptoms, and a physical examination, which includes:
                                        </div>
                                        <div className='mt-4'>
                                            >Coordination, balance, reflexes, and gait
                                        </div>
                                        <div className='mt-4'>
                                            >Vision, hearing, and speech
                                        </div>
                                        <div className='mt-4'>
                                            >Sense of touch

                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Common neurologic tests include:</h5>
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>>Neuroimaging: </h5> Neuroimaging techniques visualize the structures of the brain and spinal cord and help detect abnormalities. These techniques include:
                                        </div>
                                        <div className='mt-4'>
                                          <ol>
                                            <li>
                                                <h5 className='mt-4 font-bold'>1. Magnetic Resonance Imaging (MRI): </h5>MRI uses magnetic fields and radio waves to produce detailed images of the brain and spinal cord.
                                            </li>
                                            <li>
                                                <h5 className='font-bold mt-4'>2. Computed Tomography (CT) Scan:</h5> CT scans use X-rays to create cross-sectional images of the brain and spinal cord. 
                                            </li>
                                            <li>
                                                <h5 className='font-bold mt-4'>3. Positron Emission Tomography (PET) Scan:</h5> PET scans use radioactive tracers to measure brain activity and metabolism.
                                            </li>
                                            <li>
                                            <h5 className='font-bold mt-4'>4. Single Photon Emission Computed Tomography (SPECT) Scan:</h5>SPECT scans also use radioactive tracers to measure brain blood flow and activity.
                                            </li>
                                          </ol>
                                        </div>
                                        <div className='mt-4'>
                                           <h5 className='font-bold mt-4'>>Electroencephalography (EEG):</h5>EEG measures electrical activity in the brain via electrodes placed on the scalp.
                                        </div>
                                        <div className='mt-4'>
                                           <h5 className='font-bold mt-4'>>Nerve Conduction Studies (NCS) and Electromyography (EMG):</h5>NCS and EMG are tests used to evaluate the function of peripheral nerves and muscles.
                                        </div>
                                        <div className='mt-4'>
                                           <h5 className='font-bold mt-4'>>Cerebrospinal Fluid (CSF) Analysis: </h5> CSF analysis involves obtaining a sample of cerebrospinal fluid to analyze it for abnormalities.
                                        </div>
                                        <div className='mt-4'>
                                           <h5 className='font-bold mt-4'>>Neuropsychological Testing:</h5> Neuropsychological testing involves assessing cognitive function, memory, language, and other aspects of brain function. 
                                        </div>
                                        <div className='mt-4'>
                                           <h5 className='font-bold mt-4'>>Genetic Testing:</h5>Genetic testing is used in certain neurological disorders with a known genetic component to identify specific genetic mutations.
                                        </div>
                                        <div className='mt-4'>
                                           <h5 className='font-bold mt-4'>>Evoked Potentials:</h5> These tests measure how fast electrical signals in the brain respond to sensory stimuli.
                                        </div>
                                        <div className='mt-4'>
                                           <h5 className='font-bold mt-4'>>Angiography:</h5> Angiography detects if blood vessels in the brain, head, or neck are blocked or damaged. It is also used to detect blood clots.
                                        </div>
                                        <div className='mt-4'>
                                           <h5 className='font-bold mt-4'>>Myelography:</h5>This test helps diagnose spinal cord tumors, herniated disks, and fractures.
                                        </div>
                                        <div className='mt-4'>
                                           <h5 className='font-bold mt-4'>>Thermography:</h5>This test monitors changes in the temperature of your body or a particular organ. It helps examine peripheral nerve disorders, nerve root compression, and pain syndromes.
                                        </div>
                                        <div className='mt-4'>
                                           <h5 className='font-bold mt-4'>Polysomnogram: </h5> This test records the activities of the brain and the body during sleep. It diagnoses several sleep disorders.
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold  mt-4'>When Should One Consult a Neurologist?</div>
                                    <div className=''>
                                        <div className='mt-4'>
                                        The following symptoms should not be ignored:
                                        </div>
                                        <div className='mt-4'>
                                            >Headaches

                                        </div>
                                        <div className='mt-4'>
                                            >Seizures
                                        </div>
                                        <div className='mt-4'>
                                            >Weakness or numbness in limbs

                                        </div>
                                        <div className='mt-4'>
                                            >Balance and coordination issues
                                        </div>
                                        <div className='mt-4'>
                                            >Memory loss or cognitive decline 
                                        </div>
                                        <div className='mt-4'>
                                           >Changes in vision or hearing
                                        </div>
                                        <div className='mt-4'>
                                            >Speech problems 
                                        </div>
                                        <div className='mt-4'>
                                            >Tremors or movement disorders
                                        </div>
                                        <div className='mt-4'>
                                            >Chronic pain 
                                        </div>
                                        <div className='mt-4'>
                                            >Sleep issues
                                        </div>
                                        <div className='mt-4'>
                                            >Facial asymmetries
                                        </div>
                                        <div className='mt-4'>
                                        The field of neurology holds immense promise in the future of medicine and improving the lives of people all over the world. Through a multidisciplinary approach that includes clinical expertise, cutting-edge research, and technological innovation in neurohealth, Fortis continues to offer hope and healing to countless individuals affected by neurological conditions.
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
                                    <p>PRINCIPAL DIRECTOR NEUROLOGY</p>
                                    <div className="card-actions justify-between">
                                        <a href='ApekshaPatilNeurology'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>PRINCIPAL DIRECTOR & HEAD NEUROLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href='ManmathShelkeNeurology'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>PRINCIPAL DIRECTOR & HOD NEUROLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href='TirupattiShelkeNeurology'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>DIRECTOR NEUROLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href='RajeshSwamiNeurology'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>DIRECTOR NEUROLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href='AnupKulkarniNeurology'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>PRINCIPAL DIRECTOR & HOD NEUROLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href='ArjunShelkeNeurology'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>DIRECTOR NEUROLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href='SharadSonawaneNeurology'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>DIRECTOR NEUROLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href='SonalBaroleNeurology'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>DIRECTOR NEUROLOGY</p>
                                    <div className="card-actions justify-between">
                                    <a href='TusharGangawaneNeurology'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <button className="btn opacity-55">Canalith Repositioning Procedure</button>
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
                                    <button className="btn opacity-55">Deep Brain Stimulation</button>
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
                                    <button className="btn opacity-55">Electrocephalogram(EEG)</button>
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
                                    <button className="btn opacity-55">Electromyography(EMG)</button>
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
                                    <button className="btn opacity-55">Epilepsy Surgery</button>
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
                                    <button className="btn opacity-55">Lumbar Puncture(Spinal Tap)</button>
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
                                    <button className="btn opacity-55">Transcranial Magnetic Stimulation</button>
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
                                    <button className="btn opacity-55">Vagus Nerve Stimulation</button>
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
                                    <button className="btn opacity-55">Canath Repositioning Procedure</button>
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

export default Neurology
