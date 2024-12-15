import React from 'react'
import NavContact from './NavContact'
import Navbar from './Navbar'
import Footer from './Footer';
import { useRef } from "react";
import Slider from "react-slick";

function ThoracicOncology() {
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
                            src="https://images.everydayhealth.com/images/cancer/lung-cancer/lung-cancer-treatments-1440x810.jpg"
                            className="w-full h-72" />
                    </div>
                </div>
                <div className='md:text-5xl text-3xl font-semibold flex justify-center items-center p-8'>About Thoracic Oncology</div>
                <div className='md:pl-8 pl-4 md:text-4xl text-2xl font-bold'>Introduction</div>
                <div>
                    <div className='md:p-8 p-4'>Thoracic cancer encompasses malignancies located within the thoracic cavity or chest. A predominantly recognized type of thoracic cancer is lung cancer, which poses a significant health challenge globally. Understanding lung cancer is crucial for early detection, timely intervention, and improved outcomes, underscoring the importance of awareness and comprehensive management strategies in addressing thoracic/lung cancers.
                        <div className="collapse ">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium text-red-600">Read More</div>
                            <div className="collapse-content">
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold'>Understanding Lung Cancer and Its Types</div>
                                    <div className=''>

                                        <div>
                                            Lung cancer originates from the uncontrolled growth of abnormal cells within the lung tissue, presenting a grave health concern associated with severe harm and mortality. Lung cancers are of various types, the most prevalent being non-small cell carcinoma (NSCLC) and small cell carcinoma (SCLC).

                                            NSCLC, the predominant lung cancer type, typically progresses slowly, while SCLC, which is less frequent but aggressive, tends to advance rapidly. Understanding these distinct pathologies is pivotal for effectively diagnosing, treating, and managing lung cancer.
                                        </div>
                                        <div className='mt-4 md:text-4xl text-2xl font-bold'>
                                            Symptoms of Lung Cancer
                                        </div>
                                        <div className='mt-4'>
                                            Symptoms of lung cancer vary among individuals, ranging from lung-related manifestations to those specific to the affected organs in cases of metastasis. General symptoms, such as persistent fatigue and unexplained weight loss, may also occur. Most individuals remain asymptomatic until the disease progresses. Symptoms may include:
                                        </div>
                                        <div className='mt-4'>
                                            >Persistent or worsening cough
                                        </div>
                                        <div className='mt-4'>
                                            >Chest pain
                                        </div>
                                        <div className='mt-4'>
                                            >Shortness of breath
                                        </div>
                                        <div className='mt-4'>
                                            >Shortness of breath
                                        </div>
                                        <div className='mt-4'>
                                            >Coughing up blood
                                        </div>
                                        <div className='mt-4'>
                                            >Chronic fatigue
                                        </div>
                                        <div className='mt-4'>
                                            >Unexplained weight loss
                                        </div>
                                        <div className='mt-4'>
                                            >Recurrent pneumonia and swollen lymph nodes between the lungs
                                        </div>
                                        <div className='mt-4'>
                                            These signs might indicate other conditions, too. Thus, consulting a doctor is crucial if one is experiencing any of these symptoms, especially if the symptoms persist or worsen over time. Early detection and prompt medical attention significantly impact prognosis and treatment outcomes.
                                        </div>
                                        <div className='mt-4 md:text-4xl text-2xl font-bold'>
                                            Causes
                                        </div>
                                        <div className='mt-4'>
                                            The primary cause of thoracic/lung cancer is smoking, with most lung cancers occurring in current or former smokers. SCLC is sporadic among non-smokers. The duration and intensity of tobacco exposure directly correlate with increased risk. Exposure to second-hand smoke also contributes significantly to thoracic cancer cases annually.
                                        </div>
                                        <div className='mt-4'>
                                            Other notable causes include:
                                        </div>
                                        <div className='mt-4'>
                                            >Radiation exposure
                                        </div>
                                        <div className='mt-4'>
                                            >Occupational hazards
                                        </div>
                                        <div className='mt-4'>
                                            >Carcinogen exposure
                                        </div>
                                        <div className='mt-4'>
                                            >Family history
                                        </div>
                                        <div className='mt-4 md:text-4xl text-2xl font-bold'>
                                            Diagnosis
                                        </div>
                                        <div className='mt-4'>
                                            Advancements in screening and therapeutic options have markedly enhanced the significance of lung cancer diagnosis and treatment. Improved imaging technologies and refined staging methods now facilitate the diagnosis of smaller, early-stage lung cancers, contributing to improved survival rates.

                                            If your physician suspects lung cancer or other chest cavity issues, they may request additional tests for further diagnosis.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>>Bronchoscopy:</h5> Utilizes a thin tube built with a camera to examine the lungs and airways, aiding in cancer detection and biopsy
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>>Chest X-Ray:</h5> Detects large tumors, fluid buildup, and lung tissue
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>>Computed Tomography (CT) Scan: </h5>Provides multidimensional views for lung and thymic cancer screening and diagnosis
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>>Lung Biopsy: </h5>Confirms thoracic cancer diagnosis through tissue sample examination
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>>Magnetic Resonance Imaging (MRI): </h5>Assesses cancer spread to lymph nodes or the brain
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>>Positron Emission Tomography (PET) Scan: </h5> Identifies fast-growing tumors by injecting a radioactive substance, often combined with CT for comprehensive evaluation
                                        </div>
                                        <div className='mt-4 md:text-4xl text-2xl font-bold'>
                                            Treatment
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>Surgery:</h5>Early-stage lung cancer treatment often begins with surgical intervention, especially when diagnosed at an early stage. Surgical removal of the tumor and surrounding tissues offers the potential for complete eradication of cancer cells. The choice of surgical approach depends on various factors, including tumor size, location, and the patient’s overall health, with the goal of achieving optimal oncological outcomes.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>>Lobectomy:</h5> Removes the entire lung lobe containing the tumor, preserving healthy tissue. It is recommended for early-stage NSCLC confined to a single lobe
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>>Segmentectomy: </h5> Removes specific lung segments with a tumor, preserving lung function. Suitable for smaller tumors or compromised lung capacity
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>>Wedge Resection: </h5>Removes the tumor and a small margin of healthy tissue, minimizing lung tissue loss. It is ideal for small, peripheral lung cancers
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>>Minimally Invasive Techniques:</h5> Advances in surgical techniques have led to the widespread adoption of minimally invasive techniques such as video-assisted thoracic surgery (VATS) and robot-assisted surgery for lung cancer treatment. These techniques utilize small incisions and specialized instruments equipped with cameras and robotic arms controlled by surgeons. By providing enhanced visualization and precision, VATS and robot-assisted surgery enable surgeons to perform complex lung resections with greater accuracy and reduced trauma to the surrounding tissues. Consequently, patients undergoing minimally invasive surgery experience less postoperative pain, shorter hospital stays, and quicker recovery than those undergoing traditional open surgery.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>Radiation Therapy:</h5>Radiation therapy employs high-energy beams to pinpoint and eradicate cancerous cells. It may be employed as the primary treatment for early-stage lung cancer in cases where surgery is not feasible or as an adjuvant therapy following surgery to eliminate residual cancer cells
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>Chemotherapy:</h5>Chemotherapy involves administering drugs to kill cancer cells or inhibit their growth. This treatment may be combined with other treatment modalities for a multimodal approach to enhance treatment efficacy and improve outcomes.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>Targeted Therapy:</h5>Targeted therapy is particularly beneficial for patients with certain genetic mutations, such as EGFR, ALK, or ROS1 mutations, commonly found in non-smokers or light smokers with adenocarcinoma histology.
                                        </div>
                                        <div className=' md:text-4xl text-2xl font-bold mt-4'>
                                            Prevention and Lifestyle Modification
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>>Smoking Cessation:</h5> Quitting smoking efficiently reduces the risk of thoracic/lung cancer.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>>Avoiding Second-Hand Smoke: </h5>Cancer risk can be reduced by minimizing exposure to second-hand smoke.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>>Radon Testing: </h5>Test homes for radon, a radioactive gas linked to lung cancer, and mitigate if levels are high.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>>Occupational Safety: </h5>Follow safety protocols to reduce exposure to carcinogens in the workplace, such as asbestos.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mt-4 font-bold'>>Healthy Lifestyle:</h5>>Maintain a balanced diet.
                                        </div>
                                        <div className=' mt-4'>
                                        >Exercise regularly.
                                        </div>
                                        <div className=' mt-4'>
                                        >Limit alcohol consumption to promote overall health and reduce cancer risk.
                                        </div>
                                        <div className='mt-4'>
                                            Understanding thoracic cancer, in particular lung cancer, is paramount for early detection and timely intervention. With advancements in diagnostics, treatment options, and preventive measures, there’s hope for improved outcomes and a reduced burden of this devastating disease.
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
                                    <p>CHAIRMAN CARDIAC SCIENCE</p>
                                    <div className="card-actions justify-between">
                                    <a href='ApekshaPatilThoracic'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>SENIOR COSULTANT CARDIO THORACIC SURGERY</p>
                                    <div className="card-actions justify-between">
                                    <a href='ManmathShelkeThoracic'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>CONSULTANT THORACIC SURGERY</p>
                                    <div className="card-actions justify-between">
                                    <a href='TirupattiShelkeThoracic'><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
                                        <div className="border-2 border-slate-300 bg-green-300 hover:bg-white p-2">Book An Appointment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </Slider>
                </div>
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

export default ThoracicOncology
