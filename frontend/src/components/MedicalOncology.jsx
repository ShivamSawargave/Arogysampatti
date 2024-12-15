import React from 'react'
import Slider from "react-slick";
import { useRef } from "react";
import NavContact from './NavContact';
import Navbar from './Navbar';
import Footer from './Footer';

function MedicalOncology() {
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
                            src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Ministry_of_Health_India.svg"
                            className="w-full h-72" />
                    </div>
                </div>
                <div className='md:text-5xl text-3xl font-semibold flex justify-center items-center p-8'>About Medical Oncology</div>

                <div>
                    <div className='md:p-8 p-4'><h5 className='font-bold mt-4'>One of the Best Medical Oncology Hospital in India </h5>
                        <div>
                            Cancer is a life-threatening disease that affects millions of people around the world. It can be caused by various factors, such as genetics, lifestyle, environment, and infections. Cancer can affect any part of the body, and can have different symptoms, diagnosis, and treatment options.

                            At Fortis Healthcare, we understand the challenges and difficulties that cancer patients and their families face. That is why we are committed to providing the best medical oncology treatment in India, with the highest standards of quality, safety, and compassion. As one of the best medical oncology hospitals in India, we offer comprehensive and personalised cancer care to patients across the country. Our team of highly qualified and experienced medical oncologists, who are experts in their respective fields and have extensive training and exposure to the latest advances and innovations in cancer care. They work in close collaboration with other cancer specialists, such as surgical oncologists, radiation oncologists, pathologists, radiologists, nuclear medicine specialists, and oncology nurses, to deliver multidisciplinary and holistic cancer care to our patients.
                            <div className="collapse ">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium text-red-600">Read More</div>
                                <div className="collapse-content">
                                    <div>

                                        <div className=''>
                                            <div className='mt-4'>
                                                <h5 className='font-bold mt-4'>Diseases we treat under Medical Oncology: </h5>
                                            </div>
                                            <div className='mt-4'>
                                                1. Breast Cancer
                                            </div>
                                            <div className='mt-4'>
                                                2. Prostate Cancer
                                            </div>
                                            <div className='mt-4'>
                                                3. Lung Cancer
                                            </div>
                                            <div className='mt-4'>
                                                4. Colorectal Cancer
                                            </div>
                                            <div className='mt-4'>
                                                5. Leukaemia
                                            </div>
                                            <div className='mt-4'>
                                                6. Lymphoma
                                            </div>
                                            <div className='mt-4'>
                                                7. Ovarian Cancer
                                            </div>
                                            <div className='mt-4'>
                                                8. Pancreatic Cancer
                                            </div>
                                            <div className='mt-4'>
                                                9. Brain Tumours
                                            </div>
                                            <div className='mt-4'>
                                                10. Sarcomas
                                            </div>
                                            <div >
                                                <h5 className='font-bold mt-8'>We also offer a wide range of specialised procedures and treatments for mentioned conditions such as: </h5>
                                            </div>
                                            <div >
                                                <h5 className='font-semibold mt-8'>1. Active surveillance for prostate cancer:</h5>This is a strategy of monitoring low-risk prostate cancer patients without immediate treatment, but with regular tests and biopsies to detect any changes in the tumour. This helps to avoid unnecessary side effects of treatment and preserve the quality of life of patients
                                            </div>
                                            <div>
                                                <h5 className='font-semibold mt-4'>2. Bone marrow biopsy and aspiration:</h5>This is a procedure of taking a small sample of bone marrow (the soft tissue inside the bones that produces blood cells) and examining it under a microscope to diagnose or monitor various blood disorders, including leukaemia, lymphoma, myeloma, and anaemia.
                                            </div>
                                            <div>
                                                <h5 className='font-semibold mt-4'>3. Chemotherapy:</h5>This is the use of anti-cancer drugs that kill or stop the growth of cancer cells. Chemotherapy can be given orally, intravenously, intramuscularly, subcutaneously, or directly into the affected organ or cavity. Chemotherapy can be given as a single agent or in combination with other drugs or treatments. Chemotherapy can be used to cure, control, or palliate cancer, depending on the type, stage, and goals of treatment.
                                            </div>
                                            <div>
                                                <h5 className='font-semibold mt-4'>4. Chemotherapy for breast cancer:</h5>This is a specific type of chemotherapy that is used to treat breast cancer, either before or after surgery, or as the main treatment for advanced or metastatic breast cancer. Chemotherapy for breast cancer can be given as adjuvant (to reduce the risk of recurrence), neoadjuvant (to shrink the tumour and make surgery easier), or palliative (to relieve symptoms and improve quality of life). Chemotherapy for breast cancer can be tailored to the individual characteristics of the tumour, such as hormone receptor status, HER2 status, and genomic profile.
                                            </div>
                                            <div>
                                                <h5 className='font-semibold mt-4'>5. Cryotherapy for prostate cancer:</h5>This is a minimally invasive procedure that uses extreme cold to freeze and destroy prostate cancer cells. Cryotherapy can be done as a primary treatment for early-stage prostate cancer, or as a salvage treatment for recurrent prostate cancer after radiation therapy. Cryotherapy is performed under general or spinal anaesthesia, and involves inserting thin needles into the prostate through the perineum (the skin between the anus and the scrotum). A gas (argon or helium) is then circulated through the needles to create ice balls that freeze the prostate tissue. The procedure is guided by ultrasound or MRI imaging to ensure accuracy and safety.
                                            </div>
                                            <div>
                                                <h5 className='font-semibold mt-4'>6. Hormone therapy for breast cancer:</h5>This is a type of treatment that blocks or lowers the levels of hormones (oestrogen and progesterone) that stimulate the growth of some breast cancers. Hormone therapy can be given as pills, injections, implants, or patches. Hormone therapy can be used as adjuvant, neoadjuvant, or palliative treatment for breast cancer, depending on the hormone receptor status of the tumour and the menopausal status of the patient. Hormone therapy can be combined with other treatments such as chemotherapy, targeted therapy, or immunotherapy to enhance the effectiveness and reduce the resistance of cancer cells.
                                                <div>
                                                    <h5 className='font-semibold mt-4'>7. Hormone therapy for prostate cancer: </h5> This is a type of treatment that lowers or blocks the levels of testosterone (the male hormone) that fuels the growth of most prostate cancers. Hormone therapy can be given as injections, implants, pills, or surgery (orchiectomy). Hormone therapy can be used as a primary treatment for advanced or metastatic prostate cancer, or as an adjuvant or neoadjuvant treatment for localised or locally advanced prostate cancer, in combination with surgery or radiation therapy. Hormone therapy can also be used as a palliative treatment to relieve symptoms and improve quality of life.
                                                </div>
                                                <div>
                                                    <h5 className='font-semibold mt-4'>8. Lung cancer screening:</h5>This is a test that uses low-dose computed tomography (LDCT) to scan the lungs and detect lung cancer at an early stage, before it causes any symptoms or signs. Lung cancer screening is recommended for people who are at high risk of developing lung cancer, such as current or former smokers, aged 55 to 80 years, with a smoking history of at least 30 pack-years (the number of packs of cigarettes smoked per day multiplied by the number of years of smoking). Lung cancer screening can reduce the mortality from lung cancer by finding and treating it early, when it is more likely to be curable.
                                                </div>
                                                <div>
                                                    <h5 className='font-semibold mt-4'>9. Stool DNA test:</h5>This is a non-invasive test that analyses the DNA from stool samples to detect colorectal cancer and precancerous polyps. The stool DNA test can identify abnormal changes in the DNA of the cells that are shed by the lining of the colon and rectum, which may indicate the presence of cancer or polyps. The stool DNA test can also detect blood in the stool, which may be another sign of colorectal cancer or polyps. The stool DNA test is recommended for people who are at average risk of developing colorectal cancer, aged 50 to 75 years, and who prefer a non-invasive screening option. The stool DNA test should be done every three years, and if positive, should be followed by a colonoscopy to confirm the diagnosis and remove any polyps or cancer.
                                                </div>
                                                <div>
                                                    <h5 className='font-bold mt-4'>Get to Know our Team of Experts for Medical Oncology Treatments</h5>
                                                </div>
                                                <div className='mt-4'>
                                                    Fortis Healthcare has the finest medical oncology specialists in India, known for their experience and skills in treating types of cancers. Our medical oncology specialists deliver personalised and compassionate care to every patient, and create customised treatment plans based on the medical condition, characteristics of the tumour and the patient’s preferences. Our team fosters collaboration and work in closely with other departments and cancer experts, such as surgical oncologists, radiation oncologists, pathologists, radiologists, nuclear medicine specialists, and oncology nurses, to deliver the best and the most comprehensive and multidisciplinary cancer care to our patients.
                                                </div>
                                                <div>
                                                    <h5 className='font-bold mt-4'>Cost of Treatment</h5>
                                                </div>
                                                <div className='mt-4'>
                                                    We believe that quality healthcare should be accessible and affordable to everyone. That is why we offer cost-effective and transparent medical oncology treatment in India, without compromising on the standards and outcomes of care. We provide clear and upfront information about the cost of medical oncology treatment in India, and offer various packages and schemes to help our patients avail the best medical oncology treatment in India at an affordable price. We also assist our patients with insurance claims, travel arrangements, accommodation, and follow-up care, to ensure a smooth and hassle-free experience.
                                                </div>
                                                <div>
                                                    <h5 className='font-bold mt-4'>Why is Fortis Healthcare one of the best hospital for Medical Oncology? </h5>
                                                </div>
                                                <div>
                                                    <h5 className='font-bold mt-4'>Cutting edge technology:</h5>With the latest and most advanced technology and equipment for medical oncology, such as the PET-CT scan, the MRI scan, the digital mammography, the bone densitometry, the flow cytometry, the molecular diagnostics, the liquid biopsy, the next-generation sequencing, the immunohistochemistry, the fluorescence in situ hybridization (FISH), the polymerase chain reaction (PCR), the gene expression profiling, the pharmacogenomics, the digital pathology, the robotic surgery, the cyberknife, the gamma knife, the tomotherapy, the brachytherapy, the stereotactic radiosurgery, the intensity-modulated radiation therapy (IMRT), the image-guided radiation therapy (IGRT), the volumetric modulated arc therapy (VMAT), the proton therapy, and the CAR-T cell therapy. These technologies enable the accurate diagnosis, precise treatment, and effective monitoring of cancer patients, with minimal side effects and complications.
                                                </div>
                                                <div>
                                                    <h5 className='font-bold mt-4'>Expertise and specialisation:</h5> The oncologists at Fortis Hospital have specialised experience in radiation therapy for cancer and benign conditions. Our expertise reflects in our recognitions;

                                                    We are accredited by the National Accreditation Board for Hospitals and Healthcare Providers (NABH), the Joint Commission International (JCI), and the International Organization for Standardization (ISO), which are the highest standards of quality and safety in healthcare. We also follow the guidelines and protocols of the National Comprehensive Cancer Network (NCCN), the European Society for Medical Oncology (ESMO), and the American Society of Clinical Oncology (ASCO), which are the leading authorities in cancer care.
                                                </div>
                                                <div>
                                                    <h5 className='font-bold mt-4'>Personalised and safe treatment:</h5> Every patient and every condition is different. At Fortis, our professionals customise the treatment plan according to the patient’s needs and preferences. The oncologists carefully identify the target areas and directs the procedures towards the cancerous tumours, while sparing the normal tissues as much as possible.
                                                </div>
                                                <div>
                                                    <h5 className='font-bold mt-4'>Holistic and multidisciplinary approach:</h5> The experts at Fortis Healthcare deliver the highest quality care available. We have a strong research program and a multidisciplinary team of medical oncologists, cancer surgeons, radiation oncologists, and other paramedical staff. The team works together to provide comprehensive and integrated cancer care, from prevention and diagnosis to treatment and follow-up.
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
                                                <p>PRINCIPAL DIRECTOR HEMATO-ONCOLOGY</p>
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
                                                <p>PRINCIPAL DIRECTOR & CHIEF GYNAE ONCOLOGY</p>
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
                                                <p>PRINCIPA DIRECTOR & SURGICAL ONCOLOGY</p>
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
                                                <p>PRINCIPAL DIRECTOR & PAEDIATRIC HEMATOLOGY</p>
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
                                                <p>SENIOR DIRECTOR- GI, GI ONCOLOGY,MINIMAL ACCESS & BARIATRIC SURGERY</p>
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
                                                <p>PRINCIPAL DIRECTOR & CHIEF HEMATO ONCOLOGY</p>
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
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MedicalOncology
