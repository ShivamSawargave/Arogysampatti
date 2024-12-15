import React from 'react'
import NavContact from './NavContact'
import Navbar from './Navbar'
import Footer from './Footer'

function Thoracic() {
    return (
        <>
        <NavContact/>
        <Navbar/>
            <div className='flex flex-wrap md:pt-40 md:pl-12 pt-16 '>
                <div>
                    <div className="card bg-base-100 w-96 shadow-xl  m-2 hover:scale-105 h-96">
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
                    <div className="card bg-base-100 w-96 shadow-xl  m-2 hover:scale-105 h-96 cover">
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
                    <div className="card bg-base-100 w-96 shadow-xl m-2 hover:scale-105 cover h-96">
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

            </div>
            <Footer/>
        </>
    )
}

export default Thoracic