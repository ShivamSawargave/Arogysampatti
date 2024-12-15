import React from 'react'
import NavContact from './NavContact';
import Navbar from './Navbar';
import Footer from './Footer';


function FindDoctor() {
    return (
        <>
            <NavContact/>
            <Navbar/>
            <section className='flex flex-2 justify-evenly items-center flex-col md:pt-36 pt-16'>
                <div className='flex flex-3 justify-around items-center flex-col md:flex-row  '>
                    <a href="CardiacScience">
                        <div className='flex flex-rox bg-blue-300 md:p-16 rounded-lg w-64 md:h-48 h-24 md:w-96 mt-2 md:mr-6 hover:scale-105 hover:bg-blue-300 hover:text-white'>
                            <div>
                                <img src="https://www.concilio.com/wp-content/uploads/cardiologie-concilio-votre-conciergerie-medicale_718x452.jpg" className='md:h-24 md:w-24 rounded-lg h-16 w-16 pt-4 pl-4' alt="" />
                            </div>
                            <div className='pt- pl-2 md:text-2xl text-sm font-bold'>CARDIAC SCIENCE</div>
                        </div>
                    </a>
                    <a href="Neurology2">
                        <div className='flex flex-rox bg-blue-300 md:p-16 rounded-lg  w-64 md:h-48 h-24 md:w-96 mt-2 md:mr-6 hover:scale-105 hover:bg-blue-300 hover:text-white'>
                            <div><img src="https://regionalneurological.com/wp-content/uploads/2019/12/AdobeStock_172813720.jpeg" className='md:h-24 md:w-24 rounded-lg h-16 w-16 pt-4 pl-4' alt="" /></div>
                            <div className='pt-8 pl-2 md:text-2xl text-sm font-bold'>NEUROLOGY</div>
                        </div>
                    </a>
                    <a href="Oncology">
                        <div className='flex flex-rox bg-blue-300 md:p-16 rounded-lg md:h-48 h-24 w-64 md:w-96 mt-2 md:mr-6 hover:scale-105 hover:bg-blue-300 hover:text-white'>
                            <div>
                                <img src="https://images.onlymyhealth.com/imported/images/2023/July/04_Jul_2023/Main-oncologyadvancements.jpg" className='md:h-24 md:w-24 rounded-lg h-16 w-16 pt-4 pl-4' alt="" />
                            </div>
                            <div className='pt-8 pl-2 md:text-2xl text-sm font-bold'>ONCOLOGY</div>
                        </div>
                    </a>
                </div>


                <div className='flex flex-3 justify-around items-center flex-col md:flex-row md:mt-8 mb-6'>
                    <a href="Thoracic">
                    <div className='flex flex-rox bg-blue-300 md:p-16 rounded-lg w-64 md:h-48 h-24 md:w-96 mt-2 md:mr-6 hover:scale-105 hover:bg-blue-300 hover:text-white'>
                        <div>
                            <img src="https://viratmedicity.com/wp-content/uploads/2022/12/thoracic_surgery.jpg" className='md:h-24 md:w-24 rounded-lg h-16 w-16 pt-4 pl-4' alt="" />
                        </div>
                        <div className='pt-8 pl-2 md:text-2xl text-sm font-bold'>THORACIC SURGERY</div>
                    </div>
                    </a>
                   <a href="Pulmonology2">
                   <div className='flex flex-row bg-blue-300 md:p-16 rounded-lg  w-64 md:h-48 h-24 mt-2 md:w-96 md:mr-6 hover:scale-105 hover:bg-blue-300 hover:text-white'>
                        <div><img src="https://vivekanandahospital.in/wp-content/uploads/2021/04/Pulmonology_Banner1.png" className='md:h-24 md:w-24 rounded-lg h-16 w-16 pt-4 pl-4' alt="" /></div>
                        <div className='pt-8 pl-2 md:text-2xl text-sm font-bold'>PULMONOLOGY</div>
                    </div>
                   </a>
                   <a href="Ent2">
                   <div className='flex flex-rox bg-blue-300 md:p-16 rounded-lg md:h-48 h-24 w-64 mt-2 md:w-96 md:mr-6 hover:scale-105 hover:bg-blue-300 hover:text-white'>
                        <div>
                            <img src="https://bizimages.withfloats.com/actual/64c8c60cef63a70001164c13.jpg" className='md:h-24 md:w-24 rounded-lg h-16 w-16 pt-4 pl-4' alt="" />
                        </div>
                        <div className='pt-8 pl-2 md:text-2xl text-sm font-bold'>ENT</div>
                    </div>
                   </a>
                </div>

                <div className='flex flex-3 justify-around items-center flex-col md:flex-row md:mt-8 mb-6'>
                    <a href="Infectious2">
                    <div className='flex flex-rox bg-blue-300 md:p-16 rounded-lg w-64 md:h-48 h-24 md:w-96 mt-2 md:mr-6 hover:scale-105 hover:bg-blue-300 hover:text-white'>
                        <div>
                            <img src="https://www.sysmex-europe.com/fileadmin/_processed_/f/c/csm_Infection_disease_8f4b6cfecd.jpg" className='md:h-24 md:w-24 rounded-lg h-16 w-16 pt-4 pl-4' alt="" />
                        </div>
                        <div className='pt-8 pl-2 md:text-2xl text-sm font-bold'>INFECTIOUS DISEASES</div>
                    </div>
                    </a>
                    <a href="Nephrology2">
                    <div className='flex flex-row bg-blue-300 md:p-16 rounded-lg  w-64 md:h-48 h-24 mt-2 md:w-96 md:mr-6 hover:scale-105 hover:bg-blue-300 hover:text-white'>
                        <div><img src="https://eremedium.in/wp-content/uploads/2022/04/9-Neprh.jpg" className='md:h-24 md:w-24 rounded-lg h-16 w-16 pt-4 pl-4' alt="" /></div>
                        <div className='pt-8 pl-2 md:text-2xl text-sm font-bold'>NEPHROLOGY</div>
                    </div>
                    </a>

                </div>
            </section>
            <Footer/>
        </>
    )
}

export default FindDoctor
