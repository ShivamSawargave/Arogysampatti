import React from 'react'
import NavContact from './NavContact'
import Navbar from './Navbar'
import Footer from './Footer'

function Overview() {
  const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  return (
    <>
      <NavContact />
      <Navbar />
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 pt-24">
        <img
          alt=""
          src=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
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
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
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
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">HEALTHCARE AT ITS VERY BEST</h2>
            <p className="mt-6 text-lg leading-8 font-bold text-gray-300">
              Arogyasampatti Hospital is a 350-bedded, quaternary care hospital in Khapri, Nagpur — including a chain of polyclinics — that was started with an aim to provide high-quality integrated healthcare to patients at an affordable cost. Currently, the hospital has over 66 ICU beds, 130+ doctors, 30+ clinical departments, 8 certified cGreen operation theatre complexes, 24x7 Emergency care (backed by the latest radio-diagnostic technology), and 32 outpatient consultation rooms. In the next three years, we will be rapidly expanding the bed capacity to 1,000 patient beds with 3 new greenfield hospitals. Today — 16 years since inception — our key clinical drivers include the entire gamut of services in Cardiac Sciences, Neuro Sciences, Robotic Joint Replacement Surgery, Orthopedics, Gastro Sciences and HPB Surgery, Minimal Access Surgery, Renal Sciences, Oncology, Obstetrics and Gynecology, Pediatrics and Neonatology, Emergency and Trauma Care, and Interventional Radiology.


              Governed by our motto "Life is precious, we care for it", we at Arogyasampatti Hospital intend to revolutionise the patient experience by pairing exceptional medical services with intelligence and compassion. Our combined expertise of a team of surgeons, physicians, nurses, technicians, paramedics, and administrative and maintenance staff — led by our visionary Managing Director and Clinician Dr Dileep Mane — ensures highly personalised care that our patients deserve. Arogyasampatti Hospital offers many technological advancements, including cutting-edge technology such as a 3 Tesla MRI scanner (first-of-its-kind in Pune). The hospital is focused on setting the benchmark in healthcare practices by achieving unmatched standards of excellence through innovation, technology and compassionate patient care. Arogyasampatti Hospital strives to leverage technology and innovation to deliver advanced diagnostic solutions, while maintaining complete transparency pertaining to the treatment. The cornerstones of Arogyasampatti’s legacy are its unstinting focus on clinical excellence, affordable costs, modern technology and evidence-based practices. As a responsible corporate citizen, Arogyasampatti Hospitals takes the spirit of leadership well beyond business and embraces the responsibility of keeping India healthy every day. To further our mission, we also undertake several CSR activities and contribute towards society in a meaningful manner. Arogyasampatti Hospitals is not limited merely to treating illnesses but aims to foster an environment conducive to wellness too.
            </p>
          </div>
         </div>
      </div>
      <Footer/>
    </>
  )
}

export default Overview