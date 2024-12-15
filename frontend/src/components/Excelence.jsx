import React from 'react'
import NavContact from './NavContact'
import Navbar from './Navbar'


function Excelence() {
    return (
        <>
            <NavContact />
            <Navbar />
            <div>
                <div>
                    <div className="hero bg-white min-h-screen">
                        <div className="hero-content flex-col lg:flex-row">
                            <img
                                src="beti.jpg"
                                className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">BETI BACHAO BETI PATHAO</h1>

                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <section className='flex flex-2 justify-evenly items-center flex-col'>
                    <div className='flex flex-3 justify-around items-center flex-col md:flex-row  '>
                       
                        <a href="BuyMedicine">
                        <div className='flex flex-rox bg-blue-100 md:p-16 rounded-lg  w-64 md:h-48 h-24 md:w-96 mt-2 md:mr-6 hover:scale-105 hover:bg-blue-300 hover:text-white'>
                            <div><svg xmlns="http://www.w3.org/2000/svg" className='md:h-24 md:w-24 h-16 w-16 pt-4 pl-4' viewBox="0 0 576 512">{ /*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#733411" d="M112 96c-26.5 0-48 21.5-48 48l0 112 96 0 0-112c0-26.5-21.5-48-48-48zM0 144C0 82.1 50.1 32 112 32s112 50.1 112 112l0 224c0 61.9-50.1 112-112 112S0 429.9 0 368L0 144zM554.9 399.4c-7.1 12.3-23.7 13.1-33.8 3.1L333.5 214.9c-10-10-9.3-26.7 3.1-33.8C360 167.7 387.1 160 416 160c88.4 0 160 71.6 160 160c0 28.9-7.7 56-21.1 79.4zm-59.5 59.5C472 472.3 444.9 480 416 480c-88.4 0-160-71.6-160-160c0-28.9 7.7-56 21.1-79.4c7.1-12.3 23.7-13.1 33.8-3.1L498.5 425.1c10 10 9.3 26.7-3.1 33.8z" /></svg></div>
                            <div className='pt-8 pl-2 md:text-2xl text-sm font-bold'>Buy Medicine</div>
                        </div>
                        </a>
                       <a href="ViewHealhRecord">
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
                        <a href="Appointment">
                        <div className='flex flex-rox bg-blue-100 md:p-16 rounded-lg md:h-48 h-24 w-64 mt-2 md:w-96 md:mr-6 hover:scale-105 hover:bg-blue-300 hover:text-white'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className='md:h-24 md:w-24 h-16 w-16 pt-4 pl-4' viewBox="0 0 448 512">{ /*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#773d0e" d="M128 0c13.3 0 24 10.7 24 24l0 40 144 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 40 0c35.3 0 64 28.7 64 64l0 16 0 48 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-48 0-16C0 92.7 28.7 64 64 64l40 0 0-40c0-13.3 10.7-24 24-24zM400 192L48 192l0 256c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-256zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                            </div>
                            <div className='pt-8 pl-2 md:text-2xl text-sm font-bold'>Book Appointment</div>
                        </div>
                        </a>
                    </div>
                </section>

            </div>
            <footer className="footer bg-neutral text-neutral-content grid-rows-2 p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Github</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Explore</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Enterprise</a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">Pricing</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Apps</h6>
                    <a className="link link-hover">Mac</a>
                    <a className="link link-hover">Windows</a>
                    <a className="link link-hover">iPhone</a>
                    <a className="link link-hover">Android</a>
                </nav>
            </footer>
        </>
    )
}

export default Excelence