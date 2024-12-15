import React from 'react'
import NavContact from './NavContact'
import Navbar from './Navbar'
function MdMessage() {
    return (
        <>
            <NavContact />
            <Navbar />
            <div className="carousel w-full pt-40 max-h-screen  flex flex-wrap flex-row  justify-evenly items-center">
                <div><img src="md.jpg" alt="" className='border rounded-full h-96 w-96' />
                    <div>
                        <b className='text-2xl font-bold pl-12'>Dr. Shubham Gathode</b>
                        <p>FOUNDER, CHAREMAN & MANAGER DIRECTOR</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col pt-16 pl-6 md:pl-16'>
                        <b className='text-xl pb-4'>Message from chairman & maging director</b>
                        <b className='text-3xl font-bold text-blue-400'>setting exceptional standards
                            in research & clinical care
                        </b>
                    </div>
                    <div className='flex flex-col pt-6 pl-6 md:pl-16 pb-12 pr-6'>
                        <p>As a practising physician of Internal Medicine and Diabetes, patient care is what drove me to embark on this transformational journey of establishing Arogysampatti Hospitals, along with a team of like-minded clinicians, 16 years ago! And this commitment to our patients, families and the community still continues to drive me even today.

                            As a firm believer of ethical and evidence-based practices, I personally believe that clinical best practices are only a portion of providing good healthcare. There is a need to optimize the best patient-centric practices to build on a patient's trust (as well as their caretaker's trust) in order to restore the importance of an empathetic approach in Medicine.</p><br />
                        <p>At Arogyasampatti Hospitals Nagpur, we endeavour to offer personalized care and establish a compassion-forward care provider-patient relationship with warmth at every touch point in the patient journey. This ensures a world-class healthcare experience with the added benefit of affordable care, accessible to everyone in the community.

                            The technologies available here are backed by the skills of vastly experienced and reputed medical professionals who include doctors, nurses, technicians, paramedics, as well as administrative and support staff. Our infrastructure has been designed to give patients a positive and relaxed experience, so as to put them - mentally, physically and emotionally - at ease when caring for their health.

                        </p><br />
                        <p>Take a step forward and begin your journey of improved health and a better future with Arogyasampatti Hospitals Nagpur. We hope our website offers you an insight into our services and many offerings, and provides you with well-researched medical information.</p>
                    </div>
                </div>
            </div>
            <div>
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
            </div>
        </>
    )
}

export default MdMessage