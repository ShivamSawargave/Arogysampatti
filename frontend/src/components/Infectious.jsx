import React from 'react'
import NavContact from './NavContact'
import Navbar from './Navbar'
import Footer from './Footer';
import { useRef } from "react";
import Slider from "react-slick";


function Infectious() {
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
                            src="https://www.dssimage.com/blog/wp-content/uploads/2022/09/Blog-Banner-2.png"
                            className="w-full h-72" />
                    </div>
                </div>
                <div className='md:text-5xl text-3xl font-semibold flex justify-center items-center p-8'>About Infectious Diseases</div>
                <div className='md:pl-8 pl-4 md:text-4xl text-2xl font-bold'>What is Infectious Diseases</div>
                <div>
                    <div className='md:p-8 p-4'>Infectious diseases are caused by pathogenic microorganisms, such as bacteria, viruses, parasites, or fungi, and pose significant challenges to public health worldwide, affecting individuals, communities, and entire populations. They can manifest in various forms, ranging from mild infections to severe, fatal health conditions. The exciting part is that many organisms exist in our bodies and are harmless. However, under certain conditions, some of them cause diseases.
                        <div className="collapse ">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium text-red-600">Read More</div>
                            <div className="collapse-content">
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold'>How are Infectious Diseases Transmitted?</div>
                                    <div className=''>
                                        <div>
                                        Infectious diseases are transmitted through multiple channels.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>>Direct Contact:</h5> An infected person can pass on the infection through touch, saliva, cough droplets, or sexual intercourse.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>>Indirect Contact:</h5>  Contaminated objects or surfaces, such as doorknobs, utensils, or shared needles, can spread the infection on contact.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>>Through Air: </h5> Some pathogens remain suspended in the air for a long time and are inhaled by people in the vicinity. Examples include tuberculosis and influenza.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>>Vector Transmission: </h5> The bite of infected vectors, such as mosquitoes, ticks, or fleas, spreads certain diseases.
                                        </div>
                                        <div>
                                            <h5 className='font-bold mt-4'>>Through Food and Water:</h5> Consuming contaminated food or water can lead to the ingestion of pathogens, resulting in gastrointestinal infections.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold mt-4'>Who is at a High Risk of Getting Infectious Diseases?</div>
                                    <div className=''>
                                        <div className='mt-4'>
                                            >People with suppressed or compromised immune systems, e.g., who are undergoing cancer treatment, are HIV-positive, or who take immunosuppressants (medicines that lower immunity)
                                        </div>
                                        <div className='mt-4'>
                                           >Young children, pregnant women, and people above 60 years
                                        </div>
                                        <div className='mt-4'>
                                           >People who have not been vaccinated
                                        </div>
                                        <div className='mt-4'>
                                           >Healthcare workers who are constantly exposed to pathogens
                                        </div>
                                        <div className='mt-4'>
                                           >People traveling to areas where pathogen-carrying mosquitoes exist
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold mt-4'>What are the Symptoms of Infectious Diseases?</div>
                                    <div className=''>
                                        <div className='mt-4 font-bold'>
                                        Common symptoms of an infectious disease include:
                                        </div>
                                        <div className='mt-4'>
                                            >Chills
                                        </div>
                                        <div className='mt-4'>
                                            >Congestion
                                        </div>
                                        <div className='mt-4'>
                                            >Cough
                                        </div>
                                        <div className='mt-4'>
                                            >Fatigue
                                        </div>
                                        <div className='mt-4'>
                                            >Muscle pain and headaches
                                        </div>
                                        <div className='mt-4'>
                                            >Diarrhea, nausea, and vomiting
                                        </div>
                                        <div className='mt-4'>
                                        One must consult a doctor if their symptoms worsen or don’t subside over time.
                                        </div>
                                        <div className='mt-4 font-bold'>
                                        The various complications associated with infectious diseases include:
                                        </div>
                                        <div className='mt-4'>
                                            >Dehydration
                                        </div>
                                        <div className='mt-4'>
                                            >Severe respiratory illnesses
                                        </div>
                                        <div className='mt-4'>
                                            >Sepsis (inflammation all over the body)
                                        </div>
                                        <div className='mt-4'>
                                            >Meningitis (swelling of the brain)
                                        </div>
                                        <div className='mt-4'>
                                            >AIDS
                                        </div>
                                        <div className='mt-4'>
                                            >Liver cancer
                                        </div>
                                        <div className='mt-4'>
                                            >Cervical cancer
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold mt-4'>Diagnosis of Infectious Diseases</div>
                                    <div className=''>
                                        <div className='mt-4'>
                                        One or more lab tests are required to diagnose infectious diseases.
                                        </div>
                                        <div className='mt-4 font-bold'>
                                        The procedure includes:
                                        </div>
                                        <div className='mt-4'>
                                            >Swabbing the nose or throat
                                        </div>
                                        <div className='mt-4'>
                                            >Collection of blood, urine, stool, and saliva samples
                                        </div>
                                        <div className='mt-4'>
                                            >Biopsy of skin or other tissue
                                        </div>
                                        <div className='mt-4'>
                                            >X-rays, CT scans, or MRIs of the affected parts of your body
                                        </div>
                                        <div className='mt-4'>
                                        Some test results, like from a nose swab, give quick results, whereas other tests take longer. For example, sometimes, bacteria must be grown in a lab from a patient sample before any assessment, and it takes time.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold'>Types of Infectious Diseases</div>
                                    <div className=''>
                                        
                                        <div className='mt-4'>
                                        Infectious diseases can be classified into several types based on various factors. Each type has its clinical features, transmitted methods, and treatments. Understanding the specific nature of infectious diseases helps in effective prevention, diagnosis, and management.
                                        </div>
                                        <div className='mt-4'>
                                            >Bacterial infections are caused by bacteria such as Streptococcus, Staphylococcus, Escherichia coli, and Mycobacterium tuberculosis. Examples include tuberculosis, skin infections, food poisoning, strep throat, pneumonia, salmonellosis, and Lyme disease.
                                        </div>
                                        <div className='mt-4'>
                                            >Viral infections are caused by viruses such as influenza virus, human immunodeficiency virus (HIV), hepatitis viruses, and herpesviruses. Examples include influenza (flu), human immunodeficiency virus/acquired immunodeficiency syndrome (HIV/AIDS), hepatitis (A, B, and C), herpes simplex (cold sores and genital herpes), human papillomavirus (HPV) infections (associated with genital warts and cervical cancer)
                                        </div>
                                        <div className='mt-4'>
                                            >Parasitic infections are caused by parasites such as Plasmodium, Trypanosoma, and Giardia lamblia. Examples include malaria, Chagas disease, and giardiasis.
                                        </div>
                                        <div className='mt-4'>
                                            >Fungal infections are caused by fungi such as candida (yeast), aspergillus, and dermatophytes. Examples include candidiasis (yeast infection), aspergillosis (lung infection), and ringworm.
                                        </div>
                                        <div className='mt-4'>
                                           >Protozoal infections are caused by single-celled parasites, such as Plasmodium, Toxoplasma gondii, and Entamoeba histolytica. Examples include amebiasis (intestinal infection), etc.
                                        </div>
                                        <div className='mt-4'>
                                           >Vector-borne diseases are caused by the bites of mosquitoes, ticks, fleas, or flies. Examples include malaria, Lyme disease, dengue fever, Zika virus infection, and yellow fever.
                                        </div>
                                        <div className='mt-4'>
                                           >Respiratory infections develop sue to several types of viruses, fungi, and bacteria. Examples include influenza, pneumonia, tuberculosis, whooping cough, and respiratory syncytial virus (RSV) infection.
                                        </div>
                                    </div>
                                <div>
                                    <div className=' md:text-4xl text-2xl font-bold  mt-4'>Prevention of Infectious Diseases</div>
                                    <div className=''>
                                        <div className='mt-4'>
                                            >Vaccination: Immunization programs play a pivotal role in preventing many infectious diseases by activating the body’s immune response to specific pathogens.
                                        </div>
                                        <div className='mt-4'>
                                            >Hygiene: Frequent handwashing with soap and water decreases the spreading of infectious agents. Other practices like covering the mouth while coughing and sneezing, wearing a mask, and using insect repellents can also help prevent respiratory infections. Ensuring proper sanitation of water and food, like peeling and washing fruits and vegetables, freezing meat before consumption, not eating uncooked food, and avoiding untreated water or unpasteurized milk, can help control food and waterborne diseases. 
                                        </div>
                                        <div className='mt-4'>
                                            >Vector Control: Spraying pesticides and maintaining clean surroundings can reduce the population of mosquitoes or ticks and lessen the occurrence of vector-borne infections.
                                        </div>
                                        <div className='mt-4'>
                                            >Quarantine: Isolating infected individuals and implementing quarantine measures for those exposed to infectious agents can help prevent the spread of disease during outbreaks.
                                        </div>
                                        <div className='mt-4'>
                                            >Health Awareness: Educating people about the transmission of infectious diseases and prevention of them can empower individuals and communities to create a healthy ecosystem.
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
                                    <p>CONSULTANT INFECTIOUS DISEASES</p>
                                    <div className="card-actions justify-between">
                                    <a href="ApekshaPatilInfectious"><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>ASSOCIATIVE CONSULTANT INFECTIOUS DISEASES</p>
                                    <div className="card-actions justify-between">
                                    <a href="ManmathShelkeInfectious"><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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
                                    <p>CONSULTANT ASSOCIATIVE INTERNAL MEDICINE</p>
                                    <div className="card-actions justify-between">
                                    <a href="TirupattiShelkeInfectious"><div className="border-2 border-slate-300 hover:bg-green-300 p-2">View Full Profile</div></a>
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

export default Infectious