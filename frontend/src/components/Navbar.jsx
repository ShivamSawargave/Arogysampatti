import React from "react";
function Navbar() {
    return (
        <>
            <div className="navbar bg-slate-800 text-white fixed md:top-10 top-0  left-0 right-0 z-50">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>

                            <ul
                                tabIndex={0}
                                className="text-black dropdown dropdown-hover menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                <li>
                                    <details>
                                        <summary>ABOUT US</summary>
                                        <ul className="p-2 md:text-black">
                                            <li>
                                                <a href="/Overviews">+OVERVIEWS</a>
                                            </li>
                                            <li>
                                                <a href="MdMessage">+MESSAGE FROM CHAREMEN & MD</a>
                                            </li>
                                            <li>
                                                <a href="/Gallery">+GALLERY</a>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>SPECIALITIES & SERVICES</summary>
                                        <ul className="p-2 md:text-black">
                                            <li>
                                                <a href="/Excelence">+CENTER OF EXCELLENCE</a>
                                            </li>
                                            <li>
                                                <a>
                                                    <div className="collapse bg-base-200">
                                                        <input type="checkbox" />
                                                        <div className="collapse-title">+SPECIALITIES</div>
                                                        <div className="collapse-content">
                                                            <p>
                                                                <div className="collapse bg-base-200">
                                                                    <input type="checkbox" />
                                                                    <div className="collapse-title bg-slate-200">
                                                                    >Cardiac Science
                                                                    </div>
                                                                    <div className="collapse-content flex flex-col">
                                                                        <a href="Electrophysiology" className="pt-4">-Electophysiology</a><br />
                                                                        <a href="LungTransplant" className="pt-4">-Heart & Lung Transplant</a><br />
                                                                        <a href="HeartTransplant" className="pt-4">-Heart Transplant</a><br />
                                                                        <a href="InternationalCardiology" className="pt-4">-Interventional Cardiology</a>
                                                                    </div>
                                                                </div>
                                                            </p>
                                                            <p>
                                                                <div className="collapse bg-base-200">
                                                                    <input type="checkbox" />
                                                                    <div className="collapse-title bg-slate-200">
                                  >Neurology
                                                                    </div>
                                                                    <div className="collapse-content flex flex-col">
                                                                        <a href="Neurology" className="pt-2">-Neurology</a>
                                                                        <a href="InternationalNeurology" className="pt-2">-International Neurology</a>
                                                                    </div>
                                                                </div>
                                                            </p>
                                                            <p>
                                                                <div className="collapse bg-base-200">
                                                                    <input type="checkbox" />
                                                                    <div className="collapse-title bg-slate-200">
                                                                    >Oncology
                                                                    </div>
                                                                    <div className="collapse-content flex flex-col">
                                                                        <a href="Gynecology" className="pt-2">
                                                                            -Gynecologic Oncology
                                                                        </a>
                                                                        <a href="Oncosurgery" className="pt-2">
                                                                            -Head & Neck Oncosergery
                                                                        </a>
                                                                        <a href="HematoOncolgy" className="pt-2">
                                                                            -Hemato-Oncology
                                                                        </a>
                                                                        <a href="MedicalOncology" className="pt-2">
                                                                            -Medical Oncology
                                                                        </a>
                                                                        <a href="RadiationOncology" className="pt-2">
                                                                            -Radiation Oncology
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </p>

                                                            <p>
                                                                <div className="collapse bg-base-200">
                                                                    <input type="checkbox" />
                                                                    <div className="collapse-title bg-slate-200">
                                  >Thoracic Surgery
                                                                    </div>
                                                                    <div className="collapse-content">
                                                                        <a href="ThoracicOncology">Thoracic Oncology</a>
                                                                    </div>
                                                                </div>
                                                            </p>
                                                            <p>
                                                                <div className="collapse bg-base-200">
                                                                    <input type="checkbox" />
                                                                    <div className="collapse-title bg-slate-200">
                                                                                            >pulmonology
                                                                    </div>
                                                                    <div className="collapse-content">
                                                                        <a href="Pulmonology">-Pulmonology</a>
                                                                    </div>
                                                                </div>
                                                            </p>
                                                            <p>
                                                                <div className="collapse bg-base-200">
                                                                    <input type="checkbox" />
                                                                    <div className="collapse-title bg-slate-200">
                                                                                            >ENT
                                                                    </div>
                                                                    <div className="collapse-content flex flex-col">
                                                                        <a href="Ent" className="pt-4">-ENT(Ear,Nose & Throat)</a>
                                                                        <a href="Oral" className="pt-4">-Oral & Maxilloacial Surgery</a>

                                                                    </div>
                                                                </div>
                                                            </p>
                                                            <p>
                                                                <div className="collapse bg-base-200">
                                                                    <input type="checkbox" />
                                                                    <div className="collapse-title bg-slate-200">>Infectious Diseases</div>
                                                                    <div className="collapse-content">
                                                                        <a href="Infectious">-Infectious Diseases</a>
                                                                    </div>
                                                                </div>
                                                            </p>
                                                            <p>
                                                                <div className="collapse bg-base-200">
                                                                    <input type="checkbox" />
                                                                    <div className="collapse-title text-xl font-medium">>Nephorology</div>
                                                                    <div className="collapse-content">
                                                                        <a href="Nephrology">-Nephrology</a>
                                                                    </div>
                                                                </div>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>PATIENT & VISITORS</summary>
                                        <ul className="p-2 md:text-black">
                                            <li>
                                                <a href="FindDoctor">+FIND A DOCTOR</a>
                                            </li>
                                            <li>
                                                <a href="Appointment">+BOOK AN APPOINTMENT</a>
                                            </li>
                                            <li>
                                                <a href="Testimonials">+TESTIMONIAL</a>
                                            </li>
                                            <li>
                                                <a href="InternationalPatients">+INTERNATIONAL PATIENT</a>
                                            </li>
                                            <li>
                                                <a href="Symptom">+PATIENT SYMTOM SCREENING</a>
                                            </li>
                                            <li>
                                                <a href="Insurance">+INSURENCE & TPA</a>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <a href="Contact">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl" href="/">
                            <img src="logo.jpg" alt="" className="h-10 w-10 rounded" />
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <details>
                                    <summary>ABOUT US</summary>
                                    <ul className="p-2 md:text-black">
                                        <li>
                                            <a href="/Overviews">+OVERVIEWS</a>
                                        </li>
                                        <li>
                                            <a href="/MdMessage">+MESSAGE FROM CHAREMEN & MD</a>
                                        </li>
                                        <li>
                                            <a href="/Gallery">+GALLERY</a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>SPECIALITIES & SERVICES</summary>
                                    <ul className="p-2 md:text-black">
                                        <li>
                                            <a href="/Excelence" className="pl-10">
                                                +CENTER OF EXCELLENCE
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <div className="collapse bg-base-200">
                                                    <input type="checkbox" />
                                                    <div className="collapse-title">+SPECIALITIES</div>
                                                    <div className="collapse-content">
                                                        <p>
                                                            <div className="collapse bg-base-200">
                                                                <input type="checkbox" />
                                                                <div className="collapse-title bg-slate-200">
                                                                    >Cardiac Science
                                                                </div>
                                                                <div className="collapse-content flex flex-col">
                                                                    <a href="Electrophysiology" className="pt-4">-Electophysiology</a><br />
                                                                    <a href="LungTransplant" className="pt-4">-Heart & Lung Transplant</a><br />
                                                                    <a href="HeartTransplant" className="pt-4">-Heart Transplant</a><br />
                                                                    <a href="InternationalCardiology" className="pt-4">-Interventional Cardiology</a>
                                                                </div>
                                                            </div>
                                                        </p>
                                                        <p>
                                                            <div className="collapse bg-base-200">
                                                                <input type="checkbox" />
                                                                <div className="collapse-title bg-slate-200">
                                  >Neurology
                                                                </div>
                                                                <div className="collapse-content flex flex-col">
                                                                    <a href="Neurology" className="pt-2">-Neurology</a>
                                                                    <a href="InternationalNeurology" className="pt-2">-International Neurology</a>
                                                                </div>
                                                            </div>
                                                        </p>
                                                        <p>
                                                            <div className="collapse bg-base-200">
                                                                <input type="checkbox" />
                                                                <div className="collapse-title bg-slate-200">
                                                                    >Oncology
                                                                </div>
                                                                <div className="collapse-content flex flex-col">
                                                                    <a href="Gynecology" className="pt-2">
                                                                        -Gynecologic Oncology
                                                                    </a>
                                                                    <a href="Oncosurgery" className="pt-2">
                                                                        -Head & Neck Oncosergery
                                                                    </a>
                                                                    <a href="HematoOncology" className="pt-2">
                                                                        -Hemato-Oncology
                                                                    </a>
                                                                    <a href="MedicalOncology" className="pt-2">
                                                                        -Medical Oncology
                                                                    </a>
                                                                    <a href="RadiationOncology" className="pt-2">
                                                                        -Radiation Oncology
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </p>
                                                        <p>
                                                            <div className="collapse bg-base-200">
                                                                <input type="checkbox" />
                                                                <div className="collapse-title bg-slate-200">
                                  >Thoracic Surgery
                                                                </div>
                                                                <div className="collapse-content">
                                                                    <a href="ThoracicOncology">Thoracic Oncology</a>
                                                                </div>
                                                            </div>
                                                        </p>
                                                        <p>
                                                            <div className="collapse bg-base-200">
                                                                <input type="checkbox" />
                                                                <div className="collapse-title bg-slate-200">
                                  >Others
                                                                </div>
                                                                <div className="collapse-content">
                                                                    <div className="drawer drawer-end">
                                                                        <input
                                                                            id="my-drawer-4"
                                                                            type="checkbox"
                                                                            className="drawer-toggle"
                                                                        />
                                                                        <div className="drawer-content">
                                                                            {/* Page content here */}
                                                                            <label
                                                                                htmlFor="my-drawer-4"
                                                                                className="drawer-button btn"
                                                                            >
                                                                                Others
                                                                            </label>
                                                                        </div>
                                                                        <div className="drawer-side">
                                                                            <label
                                                                                htmlFor="my-drawer-4"
                                                                                aria-label="close sidebar"
                                                                                className="drawer-overlay"
                                                                            ></label>
                                                                            <ul className="menu bg-base-200 text-base-content flex flex-col min-h-full w-80 p-4 fixed top-28">
                                                                                {/* Sidebar content here */}
                                                                                <li>
                                                                                    <div className="collapse bg-base-200">
                                                                                        <input type="checkbox" />
                                                                                        <div className="collapse-title text-xl font-medium">
                                                                                            >pulmonology
                                                                                        </div>
                                                                                        <div className="collapse-content">
                                                                                            <a href="Pulmonology">-Pulmonology</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="collapse bg-base-200">
                                                                                        <input type="checkbox" />
                                                                                        <div className="collapse-title text-xl font-medium">
                                                                                            >ENT
                                                                                        </div>
                                                                                        <div className="collapse-content flex flex-col">
                                                                                            <a href="Ent" className="pt-4">-ENT(Ear,Nose & Throat)</a>
                                                                                            <a href="Oral" className="pt-4">-Oral & Maxilloacial Surgery</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="collapse bg-base-200">
                                                                                        <input type="checkbox" />
                                                                                        <div className="collapse-title text-xl font-medium">>Infectious Diseases</div>
                                                                                        <div className="collapse-content">
                                                                                            <a href="Infectious">-Infectious Diseases</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="collapse bg-base-200">
                                                                                        <input type="checkbox" />
                                                                                        <div className="collapse-title text-xl font-medium">>Nephorology</div>
                                                                                        <div className="collapse-content">
                                                                                            <a href="Nephrology">-Nephrology</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>PATIENT & VISITORS</summary>
                                    <ul className="p-2 md:text-black">
                                        <li>
                                            <a href="FindDoctor">+FIND A DOCTOR</a>
                                        </li>
                                        <li>
                                            <a href="Appointment">+BOOK AN APPOINTMENT</a>
                                        </li>
                                        <li>
                                            <a href="Testimonials">+TESTIMONIAL</a>
                                        </li>
                                        <li>
                                            <a href="InternationalPatients">+INTERNATIONAL PATIENT</a>
                                        </li>
                                        <li>
                                            <a href="Symptom">+PATIENT SYMTOM SCREENING</a>
                                        </li>
                                        <li>
                                            <a href="Insurance">+INSURENCE & TPA</a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <a href="Contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                        >
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 p-2 bg-white rounded-full" viewBox="0 0 640 512">{/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#a7aaae" d="M0 48C0 21.5 21.5 0 48 0L368 0c26.5 0 48 21.5 48 48l0 48 50.7 0c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3l0 18.7 0 32 0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c0 53-43 96-96 96s-96-43-96-96l-128 0c0 53-43 96-96 96s-96-43-96-96l-16 0c-26.5 0-48-21.5-48-48L0 48zM416 256l128 0 0-18.7L466.7 160 416 160l0 96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM176 80l0 48-48 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" /></svg>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                        >
                            <div className="card-body">
                                <span className="text-lg font-bold text-black">Ambulence</span>
                                <span className="text-info">Arogyasampatti Hospital Khapri, Nagpur</span>
                                <div className="card-actions">
                                    <a href="Ambulence"><button className="btn btn-primary btn-block">
                                        Contact
                                    </button></a>
                                </div>
                                <a href="tel:+919284924200">
                                    <div className='mt-2 text-blue-500  flex justify-center items-center font-bold'>
                                        Ph.No.: +919284924200
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Navbar;
