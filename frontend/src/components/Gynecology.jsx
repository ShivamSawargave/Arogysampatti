import React from 'react'
import Slider from "react-slick";
import { useRef } from "react";
import NavContact from './NavContact';
import Navbar from './Navbar';
import Footer from './Footer';


function Gynecology() {
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
                            src="https://www.drtusharjadhav.com/assets/images/gynecologic-oncology.jpg"
                            className="w-full h-72" />
                    </div>
                </div>
                <div className='md:text-5xl text-3xl font-semibold flex justify-center items-center p-8'>About Gynaecologic Oncology</div>

                <div>
                    <div className='md:p-8 p-4'>Fortis Hospital stands as one of the best gynecology oncology hospitals in India and specializes in all types of gynecology oncology treatments in India. Book your appointment online.
                        <div>
                            <h5 className='font-bold mt-4'>Introduction</h5>Gynecologic oncology is the field of medicine that aims at the early screening, diagnosis, and effective treatment of cancers of the female reproductive organs. Gynecologic oncologists are healthcare professionals trained to treat such ailments.
                        </div>
                        <div className="collapse ">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium text-red-600">Read More</div>
                            <div className="collapse-content">
                                <div>

                                    <div className=''>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>Risk Factors</h5>The causes of several types of gynecologic cancer are unknown but might comprise:
                                        </div>
                                        <div className='mt-4'>
                                            >Environmental factors, such as smoking or excessive weight gain
                                        </div>
                                        <div className='mt-4'>
                                            >Family history of gynecologic cancer
                                        </div>
                                        <div className='mt-4'>
                                            >Excessive hormone exposure and estrogen replacement therapy
                                        </div>
                                        <div className='mt-4'>
                                            >Genetic modifications acquired over time
                                        </div>
                                        <div className='mt-4'>
                                            >Sexually transmitted infections, which may play a role in raising the chances of developing cancer
                                        </div>
                                        <div className='mt-4'>
                                            >Human papillomavirus infection (HPV), which is responsible for nearly all cervical cancers and certain vulvar and vaginal cancers
                                        </div>
                                        <div >
                                            <h5 className='font-bold mt-4'>How can You Reduce the Risk of Gynecologic Cancers?</h5>Awareness of risk factors, maintaining a healthy lifestyle, genetic counseling, undergoing regular testing, getting vaccinated against HPV, and early identification of potential signs and symptoms can aid in detecting and preventing gynecologic cancers.
                                        </div>
                                        <div >
                                            <h5 className='font-bold mt-4'>What are the Symptoms of Gynecologic Cancers?</h5>Symptoms might differ depending on the type of gynecologic cancer and may be vague and not necessarily due to cancer. The symptoms may comprise the following:
                                        </div>
                                        <div className='mt-4'>
                                           >Unusual vaginal bleeding or discharge is usual for all forms of gynecologic cancers except vulvar cancer.
                                        </div>
                                        <div className='mt-4'>
                                           >Feeling full promptly or difficulty eating, bloating, and abdominal or back pain are predominant for ovarian cancer.
                                        </div>
                                        <div className='mt-4'>
                                           >Pelvic pain or pressure is expected in the case of ovarian and uterine cancers
                                        </div>
                                        <div className='mt-4'>
                                           >More frequent urges to urinate and constipation are usually observed in the case of ovarian and vaginal cancers.
                                        </div>
                                        <div className='mt-4'>
                                           >Burning, itching, pain, or tenderness of the vulva, and modifications in vulva color or skin, such as a rash, sores, or warts, are present only in vulvar cancer.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>Diagnosis of Gynecologic Cancer</h5>Healthcare professionals begin by asking about family and personal medical history and symptoms. They then do a complete physical exam, including a pelvic examination, to look for signs of problems in reproductive organs. To confirm a diagnosis, healthcare professionals order one or more tests, including:
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>Biopsy:</h5>The healthcare professionals take small samples of the suspicious tissue, which are then examined for signs of cancer.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>Colposcopy:</h5>Healthcare professionals use a colposcope (illuminating, magnifying instrument) to examine the vulva, vagina, and cervix for abnormal tissue or signs of cancer.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>>Diagnostic Imaging:</h5>
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>1. Computed Tomography (CT):</h5> These scans utilize special X-ray equipment to produce cross-sectional pictures inside the pelvic area. CT scans can display the tumor size and whether the cancer has metastasized.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>2. Magnetic Resonance Imaging (MRI): </h5> This method uses radio waves and strong magnets to produce cross-sectional pictures of an individual’s body. It is also used to assess tumors more closely and look for signs that the cancer has spread.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>3. Positron Emission Tomography (PET):</h5> An individual will be injected with a small quantity of a radioactive substance. A special scanner produces images that display the highlighted portions to offer details about the cancer, especially the location where it has metastasized.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>4. Serum Tumor Markers: </h5> They help screen, diagnose, and monitor certain gynecological cancers. Females with suspected ovarian malignancies undergo a CA125 serum test along with the scans to assess the risk of malignancy. Other helpful markers of ovarian cancer are beta-HCG and AFP produced by germ cell tumors.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>5. Pap Smear Test: </h5>It is a crucial test for checking unusual cells on the cervix that can lead to cervical cancer.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>Types of Gynecologic Cancers</h5>
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>1. Cervical Cancer:</h5> It is the fourth most prevalent cancer among women across the globe, which develops in the cervix of the female (the entrance to the womb from the vagina). 
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>2. Ovarian Cancer:</h5>It is a cancerous tumor that forms in an ovary’s tissues.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>3. Uterine Cancer:</h5> It occurs when healthy cells in the womb change and grow out of control, forming a mass known as a tumor. There are two main types of uterine cancer: Endometrial cancer, which is predominant, and uterine sarcoma, which is rare.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>4. Gestational Trophoblastic Disease (GTD):</h5>  It refers to a spectrum of rare ailments wherein abnormal trophoblast cells grow inside the womb after conception.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>5. Vaginal Cancer:</h5> It occurs when abnormal cells in the vagina start to proliferate in an uncontrolled manner.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>6. Vulvar Cancer:</h5> It is a rare condition primarily occurring in postmenopausal women.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>Treatment of Gynecologic Cancers </h5>Gynecologic cancers are treated in a multitude of ways. It depends on the type of cancer and how far it has advanced. Women with gynecologic cancer frequently undertake more than one type of treatment. Treatment options include:
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>1. Surgery:</h5> Healthcare professionals excise cancer tissue through surgery. Surgical intervention procedures include staging, debulking/cytoreduction, radical hysterectomy, omentectomy (standard component care of gynecological cancers, particularly for surgical staging and treatment for malignant ovarian neoplasm), and lymph node removal.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>2. Cytoreductive Surgery for Ovarian Cancer:</h5>This procedure is the benchmark of therapy for advanced epithelial ovarian cancer.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>3. Robot-Assisted Hysterectomy:</h5>Here, the surgeons remove the uterus with the help of robotic arms
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>4. Chemotherapy:</h5>In this approach, special medications are used to shrink or kill the cancer. The drugs can be taken orally, intravenously, or both.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>5. Hyperthermic (or Heated) Intraperitoneal Chemotherapy [HIPEC]:</h5>It is a surgical procedure providing new hope to patients with abdominal cancer.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>6. Radiation:</h5>It involves using high-energy rays (like X-rays) to destroy the cancer.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>7. Video Endoscopic Inguinal Lymphadenectomy (VEIL):</h5>It is a minimally invasive technique employed for the treatment of vulvar cancer.
                                        </div>
                                        <div>
                                        By offering advanced diagnostic techniques and innovative treatment, Fortis Healthcare stands as one of the topmost hospitals for dealing with gynecologic cancers. Early and accurate screening and treatment of gynecological cancers helps patients live longer and with better quality of life.
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
                                        <p>PRINCIPAL DIRECTOR & HOD GI, GI ONCO, BARIATRIC & MIS SURGERY</p>
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
                                        <p>PRINCIPAL DIRECTOR HEMATOLOGY</p>
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
                                        <p>PRINCIPAL DIRECTOR GYNAE ONCOLOGY</p>
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
                                        <p>PRINCIPAL DIRECTOR & PAEDIATRIC HEMATOLOGY</p>
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
                                        <p>SENIOR DIRECTOR- GI, GI ONCOLOGY, MINIMAL ACCESS & BATRIATIC SURGERY</p>
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
                                        <button className="btn opacity-55">BRCA gene test for breast cancer</button>
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
            </div>
        </>
    )
}

export default Gynecology
