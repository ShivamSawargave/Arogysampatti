import React from 'react'
import NavContact from './NavContact'
import Navbar from './Navbar'
import Footer from './Footer';
import { useRef } from "react";
import Slider from "react-slick";

function RadiationOncology() {
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
                            src="https://www.muthoothealthcare.com/Kozhenchery/assets/image/department_icon/brosh_353659789.jpg"
                            className="w-full h-72" />
                    </div>
                </div>
                <div className='md:text-5xl text-3xl font-semibold flex justify-center items-center p-8'>About Radiation Oncology</div>
                <div className='md:pl-8 pl-4 md:text-4xl text-2xl font-bold'></div>
                <div>
                    <div className='md:p-8 p-4'>Radiation oncology is a branch of medicine that uses high-energy rays to fight cancer. It is one of the main ways to treat cancer, and radiation oncologists are in charge of designing and delivering the radiation therapy. Radiation oncologists collaborate with other health experts, such as radiation therapists and medical physicists, to figure out the best type and amount of radiation therapy for each patient.

                        The aim of radiation therapy is to kill cancer cells while sparing healthy tissue as much as possible. Radiation therapy does this by harming the DNA inside cancer cells, stopping them from multiplying and growing. Eventually, the harmed cancer cells die and the body gets rid of them.

                        Radiation therapy can be used by itself or with other treatments, such as chemotherapy or surgery. The exact treatment plan depends on the kind and stage of cancer, as well as other things like the patient’s overall health.

                        Get to know about the advanced radiation oncology treatments offered at Fortis Healthcare, that offers the best radiation oncology treatment in India. Book appointments today for expert care and treatment plans tailored to your needs.
                        <div className="collapse ">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium text-red-600">Read More</div>
                            <div className="collapse-content">
                                <div>

                                    <div className=''>
                                        <div className=' md:text-3xl text-2xl font-bold mt-2'>
                                            One of the Best Radiation Oncology Hospital in India
                                        </div>

                                        <div className='mt-4'>
                                            Fortis Healthcare is one of the best radiation oncology hospitals in India, offering comprehensive and personalised care to patients with various types of cancer. With a team of highly qualified and experienced radiation oncologists, we stand out as a beacon of excellence in this field, offering cutting-edge technology, world-class facilities, and a multidisciplinary approach to cancer care. Our commitment to innovation and patient-centric care has earned us the reputation of being one of the best Radiation Oncology Hospitals in India.
                                        </div>
                                        <div className='mt-4'>
                                            Some of the advanced procedures available at Fortis Healthcare are:
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>>Brachytherapy:</h5> This is a form of internal radiation therapy that involves placing radioactive seeds or sources inside or near the tumour. Brachytherapy can deliver a high dose of radiation to the tumour while sparing the surrounding normal tissues. Brachytherapy can be used to treat cancers of the prostate, cervix, uterus, breast, head and neck, and skin.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>>External beam radiation therapy:</h5>  This is a form of external radiation therapy that uses a machine to direct beams of radiation at the tumour from different angles. External beam radiation therapy is used for the treatment of various cancers affecting the lung, breast, prostate, head and neck, brain, bone, and soft tissue. Fortis Healthcare has the following types of external beam radiation therapy machines:
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>>Elekta Versa HD: </h5>This linear accelerator has the capability to administer a range of radiation therapy techniques, including intensity-modulated radiation therapy (IMRT), image-guided radiation therapy (IGRT), volumetric modulated arc therapy (VMAT), stereotactic radiosurgery (SRS), and stereotactic body radiotherapy (SBRT). These techniques can precisely target the tumour and spare the normal tissues, reducing the side effects and improving the quality of life of the patients.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>>Proton therapy: </h5>This is a type of external beam radiation therapy that uses protons instead of x-rays to treat cancer. Protons are positively charged particles that can deposit their energy at a specific depth in the tissue, creating a peak of radiation dose at the tumour site and minimising the dose to the surrounding normal tissues. Proton therapy can be used to treat cancers of the brain, spine, lung, liver, prostate, and eye.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>>Radiation therapy for breast cancer: </h5>This is a type of external beam radiation therapy that uses x-rays to treat breast cancer. Radiation therapy for breast cancer can be given after surgery to remove the tumour (adjuvant therapy) or before surgery to shrink the tumour (neoadjuvant therapy). Radiation therapy for breast cancer can be given to the whole breast, the chest wall, the lymph nodes, or a part of the breast (partial breast irradiation). Fortis Healthcare uses the ABC technique for treating left-sided breast cancers, which reduces the radiation exposure to the heart.
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='font-bold mt-4'>>SPECT scan:</h5> This is a type of nuclear medicine imaging that uses a radioactive tracer to show the function and metabolism of the organs and tissues. SPECT scan can be used to diagnose and monitor the response of cancer to radiation therapy. SPECT scan can also be used to plan and deliver radiation therapy more accurately and effectively.
                                        </div>
                                        <div className=' md:text-3xl text-2xl font-bold mt-4'>
                                        Get to Know our Team of Experts for Radiation Oncology Treatments
                                        </div>
                                        <div className='mt-4'>
                                        At Fortis Healthcare, our radiation oncology team comprises highly skilled oncologists, radiation therapists, medical physicists, and support staff dedicated to providing personalised care and support to each patient. With years of experience and expertise in the field of radiation oncology, our team works collaboratively to develop customised treatment plans that prioritise patient comfort, safety, and successful outcomes.
                                        </div>
                                        <div className='md:text-3xl text-2xl font-bold mt-4'>
                                        Cost of Treatment
                                        </div>
                                        <div className='mt-4'>
                                        Fortis Healthcare offers transparent and competitive pricing for radiation oncology treatments, ensuring accessibility to quality care for all patients. Our dedicated counsellors work with patients to explore the best insurance coverage, payment options, and financial assistance programs to ensure the access to affordable, quality care. You can book an appointment today. 
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

export default RadiationOncology
