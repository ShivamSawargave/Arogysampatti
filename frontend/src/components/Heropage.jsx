import React from 'react'
import Slider from "react-slick"


const stats = [
    { name: 'Doctors', value: '250+' },
    { name: 'Beds', value: '2000+' },
    { name: 'Pharmacies', value: '40' },
    { name: 'Patient per Week', value: '10000+' },
]

function Heropage() {
    var settings1 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
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

    return (
        <>

            <div className="carousel w-full pt-20 max-h-screen">
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero min-h-screen">
                        <video className='' src="mp4.mp4" autoPlay loop muted />
                        <div className="hero-overlay bg-opacity-10"></div>
                        <div className="hero-content text-neutral-content text-center">

                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide1" className="carousel-item relative w-full apect-w-96 ">
                    <div
                        className="hero max-h-screen"
                        style={{
                            backgroundImage: "url(https://d3vgt007wgdf6q.cloudfront.net/wp-content/uploads/2020/07/stay.png)",
                        }}>
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">

                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative md:w-full aspect-w-96">
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://as2.ftcdn.net/v2/jpg/07/37/64/51/1000_F_737645141_7C8540YaFTUSMeShHRdWMsr0dm8SQ6vI.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-10"></div>
                        <div className="hero-content text-neutral-content text-center">

                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://srmglobalhospitals.com/wp-content/uploads/2023/09/Patient-Care-Banner.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-10"></div>
                        <div className="hero-content text-neutral-content text-center">

                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>



            <div className='md:ml-20 md:mr-44 mb-12 '>
                <img src="https://images.apollo247.in/images/category/consult_doctor_symtom_checker_web_new..jpeg?tr=w-1276,q-100,f-webp,c-at_max" className='m-10 md:w-full w-80'></img>
            </div>
            


            <div className='md:mx-32 mb-12'>
                <div className='text-5xl font-bold m-10 flex justify-center items-center'>Explore our Centres of Clinical Excellence</div>
                <div>
                    <div className="slider-container mx-10">
                        <Slider {...settings1}>

                            <div>
                                <h3><div className="card bg-base-100  w-88 h-72 md:w-64 md:h-72 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://wellnesshospitals.in/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-31-at-1.18.36-PM-1080x675.jpeg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>

                                        <div className="card-actions">
                                            <a href='Electrophysiology'><button className="btn hover:bg-blue-500">Electrophysiology</button></a>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-72 md:w-64 md:h-72 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/23460/lungs-4.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <a href='LungTransplant'><button className="btn hover:bg-blue-500">Lung Transplant</button></a>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-72 md:w-64 md:h-72 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://www.cardiacsurgeryonline.com/wp-content/uploads/2022/07/Heart-Transplant-India.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <a href='HeartTransplant'><button className="btn hover:bg-blue-500">Heart Transplant</button></a>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-72 md:w-64 md:h-72 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://www.safehospitalguntur.com/assets/img/services/cardiology.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <a href='InternationalCardiology'><button className="btn hover:bg-blue-500">International Cardiology</button></a>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-72 md:w-64 md:h-72 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://lh4.googleusercontent.com/tCyxPKm1UuigS4JnN3FIGLUx_7Oz-k-ONEoFPycE1n_bbfaUf3Dp7smfd3Kh3VXFnK8G5SntLiwVHn0Iu6TTB29S9VkG9Iph3wMggEZnDHjDyyRZOCmwLIrMyIyeijNrOx3pNa5NKM_-NplcWU9t3RXrqUfZMdq7j5x61v4X-_XIajYsKUs3Cml72O8"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <a href='Neurology'><button className="btn hover:bg-blue-500">Neurology</button></a>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container mx-10 mt-12">
                        <Slider {...settings1}>

                            <div>
                                <h3><div className="card bg-base-100  w-88 h-72 md:w-64 md:h-72 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://regionalneurological.com/wp-content/uploads/2019/12/AdobeStock_172813720.jpeg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <a href='InternationalNeurology'><button className="btn hover:bg-blue-500">International Neurology</button></a>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-72 md:w-64 md:h-72 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://cloudfront.jove.com/files/eoe/Collection_thumbnail_Gynecologic_Cancer.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <a href="Gynecology"><button className="btn hover:bg-blue-500">Gynecologic Oncology</button></a>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-72 md:w-64 md:h-72 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://cdn.agilitycms.com/applied-radiation-oncology/Images/HPV-associated%20head%20and%20neck%20cancers.png"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <a href="Oncosurgery"><button className="btn hover:bg-blue-500">Head & Neck Oncosurgery</button></a>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-72 md:w-64 md:h-72 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://i.ytimg.com/vi/dAKuwdU-mpw/maxresdefault.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <a href="HematoOncolgy"><button className="btn hover:bg-blue-500">Hemato-Oncology</button></a>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-72 md:w-64 md:h-72 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://www.remedyhospitals.in/images/services/medicaloncology.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <a href="MedicalOncology"><button className="btn hover:bg-blue-500">Medical Oncology</button></a>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>

                        </Slider>
                    </div>
                    <div className="slider-container mx-10 mt-12">
                        <Slider {...settings1}>

                            <div>
                                <h3><div className="card bg-base-100  w-88 h-72 md:w-64 md:h-72 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://winshipcancer.emory.edu/cancer-types-and-treatments/_images/headers/radiation-therapy.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <a href="RadiationOncology"><button className="btn hover:bg-blue-500">Radiation Oncology</button></a>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-72 md:w-64 md:h-72 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://www.oncologistindia.com/imageuploads/pages/2019/01/12/thoracic-cancer-treatment-in-bangalore.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <a href="ThoracicOncology"> <button className="btn hover:bg-blue-500">Thoracic Oncology</button></a>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-72 md:w-64 md:h-72 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://poojahospital24.com/wp-content/uploads/2022/12/6215e8d4d640b44d2e786520pulmonary-angiography-708x556-2x.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <a href="Pulmonology"><button className="btn hover:bg-blue-500">Pulmonology</button></a>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100  w-88 h-72 md:w-64 md:h-72 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://zydushospitals.com/images/ent-surgery-about.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <a href="Ent"><button className="btn hover:bg-blue-500">ENT(Ear,Nose,Throat)</button></a>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>
                            <div>
                                <h3><div className="card bg-base-100 w-88 h-72 md:w-64 md:h-72 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://facesurgeon.in/wp-content/uploads/2020/01/Oral-and-maxillofacial-surgery-in-Nagercoil.jpg"
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p></p>
                                        <h3 className='font-bold'></h3>
                                        <div className="card-actions">
                                            <a href="Oral"> <button className="btn hover:bg-blue-500">Oral & Maxilloacial surgery</button></a>
                                        </div>
                                    </div>
                                </div></h3>
                            </div>

                        </Slider>
                    </div>

                </div>
            </div>





            <div className="relative isolate overflow-hidden md:mx-32 bg-gray-900 py-24 sm:py-32">
                <img
                    alt=""
                    src="https://thumbs.dreamstime.com/b/doctors-hospital-corridor-nurse-pushing-gurney-stretcher-bed-male-senior-female-patient-32154012.jpg"
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10 object-right md:object-center"
                />
                <div
                    aria-hidden="true"
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr opacity-10"
                    />
                </div>
                <div
                    aria-hidden="true"
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr opacity-20"
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Why Choose Arogyasampatti Hospital?</h2>
                        <p className="mt-6 text-lg leading-8 text-white">
                        Established by Dr Santosh S Sawargave in 2010, Arogyasampatti Hospital has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, Arogyasampatti Hospital has touched more than 200 million lives from over 75 countries.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse">
                                    <dt className="text-base leading-7 text-white">{stat.name}</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>






            <div className=''>
                <div className="hero min-h-screen rounded">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png"
                            className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">DR. SANTOSH SAWARGAVE</h1>
                            <p className="py-6">
                                FOUNDER AND OWNER OF HOSPITAL
                            </p>

                        </div>
                    </div>
                </div>
            </div>


            <div className='md:mx-32 mb-12'>
                <img src="https://images.apollo247.in/pd-cms/cms/2023-09/Diag_Web_Desktop.jpg?tr=w-1276,q-100,f-webp,c-at_max" className='m-10 md:w-full w-80'></img>
            </div>




            <section className='flex flex-2 justify-evenly items-center flex-col mb-20'>
                <div className='flex flex-3 justify-around items-center flex-col md:flex-row '>

                    <a href='BuyMedicine'>
                        <div className='flex flex-rox bg-blue-100 md:p-16 rounded-lg  w-64 md:h-48 h-24 md:w-96 mt-2 md:mr-6 hover:scale-105 hover:bg-blue-300 hover:text-white'>
                            <div><svg xmlns="http://www.w3.org/2000/svg" className='md:h-24 md:w-24 h-16 w-16 pt-4 pl-4' viewBox="0 0 576 512">{ /*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#733411" d="M112 96c-26.5 0-48 21.5-48 48l0 112 96 0 0-112c0-26.5-21.5-48-48-48zM0 144C0 82.1 50.1 32 112 32s112 50.1 112 112l0 224c0 61.9-50.1 112-112 112S0 429.9 0 368L0 144zM554.9 399.4c-7.1 12.3-23.7 13.1-33.8 3.1L333.5 214.9c-10-10-9.3-26.7 3.1-33.8C360 167.7 387.1 160 416 160c88.4 0 160 71.6 160 160c0 28.9-7.7 56-21.1 79.4zm-59.5 59.5C472 472.3 444.9 480 416 480c-88.4 0-160-71.6-160-160c0-28.9 7.7-56 21.1-79.4c7.1-12.3 23.7-13.1 33.8-3.1L498.5 425.1c10 10 9.3 26.7-3.1 33.8z" /></svg></div>
                            <div className='pt-8 pl-2 md:text-2xl text-sm font-bold'>Buy Medicine</div>
                        </div>
                    </a>
                    <a href='ViewHealhRecord'>
                        <div className='flex flex-rox bg-blue-100 md:p-16 rounded-lg md:h-48 h-24 w-64 md:w-96 mt-2 md:mr-6 hover:scale-105 hover:bg-blue-300 hover:text-white'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className='md:h-24 md:w-24 h-16 w-16 pt-4 pl-4' viewBox="0 0 448 512">{ /*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#642307" d="M0 96C0 43 43 0 96 0L384 0l32 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L96 512c-53 0-96-43-96-96L0 96zM64 416c0 17.7 14.3 32 32 32l256 0 0-64L96 384c-17.7 0-32 14.3-32 32zM208 112l0 48-48 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" /></svg>
                            </div>
                            <div className='pt-8 pl-2 md:text-2xl text-sm font-bold'>View Health Record</div>
                        </div>
                    </a>
                </div>


                <div className='flex flex-3 justify-around items-center flex-col md:flex-row md:mt-8 mb-6'>
                    <a href="Ambulence">
                    <div className='flex flex-rox bg-blue-100 md:p-16 rounded-lg w-64 md:h-48 h-24 md:w-96 mt-2 md:mr-6 hover:scale-105 hover:bg-blue-300 hover:text-white'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className='md:h-24 md:w-24 h-16 w-16 pt-4 pl-4' viewBox="0 0 640 512">{ /*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#7e3607" d="M0 48C0 21.5 21.5 0 48 0L368 0c26.5 0 48 21.5 48 48l0 48 50.7 0c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3l0 18.7 0 32 0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c0 53-43 96-96 96s-96-43-96-96l-128 0c0 53-43 96-96 96s-96-43-96-96l-16 0c-26.5 0-48-21.5-48-48L0 48zM416 256l128 0 0-18.7L466.7 160 416 160l0 96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM176 80l0 48-48 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" /></svg>
                        </div>
                        <div className='pt-8 pl-2 md:text-2xl text-sm font-bold'>Ambulance</div>
                    </div>
                    </a>
                    <a href="FindDoctor">
                        <div className='flex flex-row bg-blue-100 md:p-16 rounded-lg  w-64 md:h-48 h-24 mt-2 md:w-96 md:mr-6 hover:scale-105 hover:bg-blue-300 hover:text-white'>
                            <div><svg xmlns="http://www.w3.org/2000/svg" className='md:h-24 md:w-24 h-16 w-16 pt-4 pl-4' viewBox="0 0 448 512">{ /*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#643602" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1l0 50.8c27.6 7.1 48 32.2 48 62l0 40c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l0-24c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 24c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-40c0-29.8 20.4-54.9 48-62l0-57.1c-6-.6-12.1-.9-18.3-.9l-91.4 0c-6.2 0-12.3 .3-18.3 .9l0 65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7l0-59.1zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" /></svg></div>
                            <div className='pt-8 pl-2 md:text-2xl text-sm font-bold'>Doctor</div>
                        </div>
                    </a>
                    <a href='Appointment'>
                        <div className='flex flex-rox bg-blue-100 md:p-16 rounded-lg md:h-48 h-24 w-64 mt-2 md:w-96 md:mr-6 hover:scale-105 hover:bg-blue-300 hover:text-white'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className='md:h-24 md:w-24 h-16 w-16 pt-4 pl-4' viewBox="0 0 448 512">{ /*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#773d0e" d="M128 0c13.3 0 24 10.7 24 24l0 40 144 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 40 0c35.3 0 64 28.7 64 64l0 16 0 48 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-48 0-16C0 92.7 28.7 64 64 64l40 0 0-40c0-13.3 10.7-24 24-24zM400 192L48 192l0 256c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-256zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                            </div>
                            <div className='pt-8 pl-2 md:text-2xl text-sm font-bold'>Book Appointment</div>
                        </div>
                    </a>
                </div>
            </section>



        </>
    )
}

export default Heropage