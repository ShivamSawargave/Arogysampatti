import React from 'react'
import Footer from './Footer';
import NavContact from './NavContact';
import Navbar from './Navbar';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom'

const BACKEND_URL= import.meta.env.VITE_BACKEND_URL
function Appointment() {
  const location=useLocation();
  const from= location.state?.pathname || "/MsgAppointment"
  const navigate=useNavigate();
  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
      const userInfo = {
          fullname: data.fullname,
          SelectDepartment:data.SelectDepartment,
          SelectDoctor:data.SelectDoctor,
          calendar:data.calendar,
          mobilenumber: data.mobilenumber,
          email: data.email,
         
          
      }
      await axios.post(`${BACKEND_URL}/appointmentus/appointment`,userInfo).then((res)=>{
          console.log(res.data)
          if(res.data){
              toast.success('Our Team contact you soon');
              navigate(from,{replace:true});
          }
          localStorage.setItem("Users",JSON.stringify(res.data.appointmentus))
      }).catch((err)=>{
         if(err.response){
          console.log(err);
          toast.error("Error: " + err.response.data.message);
         }
      })
  };
  return (
    <>
      <NavContact />
      <Navbar />
      <div className='flex md:flex-row flex-col justify-evenly md:pt-40 md:pl-12 pt-16 mb-12' id="appointmentuser">
        <div>
          <img src="https://www.shutterstock.com/image-photo/couple-airport-check-desk-leaving-260nw-322320863.jpg" className='' alt="" />
        </div>
        <div className='bg-blue-400 ml-2 p-4'>
          <div className='flex md:flex-row flex-col m-2 justify-evenly'>
            <select className="select w-full m-2 max-w-xs" {...register("SelectDepartment", { required: true })}>
              <option disabled selected>Select Department</option>
              <option>Cardiac Science</option>
              <option>Neurology</option>
              <option>Oncology</option>
              <option>Thoracic Surgery</option>
              <option>Pulmonology</option>
              <option>ENT</option>
              <option>Infectious Diseases</option>
              <option>Nephrology</option>
              <br />
              {errors.SelectDepartment && <span className='text-sm text-red-500'>This field is required</span>}
            </select>
            <select className="select m-2 w-full max-w-xs" {...register("SelectDoctor", { required: true })}>
              <option disabled selected>Select Doctor</option>
              <option>Dr. Apeksha Patil</option>
              <option>Dr. Manmath Shelke</option>
              <option>Dr. Tirupatti Shelke</option>
              <option>Dr. Rajesh Swami</option>
              <option>Dr. Anup Kulkarni</option>
              <option>Dr. Arjun Shelke</option>
              <option>Dr. Sharad Sonawane</option>
              <option>Dr. Sonal Borole</option>
              <option>Dr. Tushar Gangawane</option>
              <br />
              {errors.SelectDoctor && <span className='text-sm text-red-500'>This field is required</span>}
            </select>
          </div>
          <div className='flex md:flex-row flex-col m-2 justify-evenly'>
            <label className="input input-bordered flex m-2 items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Your Name" {...register("fullname", { required: true })}/>
              <br />
              {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
            </label>
            <label className="input input-bordered flex m-2 items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg"
                className='h-4 w-4 opacity-70'
                viewBox="0 0 512 512">{ /*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path fill="#4e5665" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <input type="number" className="grow" placeholder="Mobile Number" {...register("mobilenumber", { required: true })}/>
              <br />
              {errors.mobilenumber && <span className='text-sm text-red-500'>This field is required</span>}
            </label>
          </div>
          <div className='flex md:flex-row flex-col m-2 justify-evenly'>
            <label className="input input-bordered flex m-2 items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" {...register("email", { required: true })}/>
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </label>
            <label className="input input-bordered flex m-2 items-center gap-2">
              <svg
                className='w-4 h-4 opacity-70'
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">{ /*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path fill="#495569" d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
              </svg>
              <input type="calendar" className="grow" placeholder="mm/dd/yyyy" {...register("calendar", { required: true })}/>
              <br />
              {errors.calendar && <span className='text-sm text-red-500'>This field is required</span>}
            </label>
          </div>
          <a href="MsgAppointment"><form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <div>
          <button className='bg-slate-700 m-4 md:px-44 px-32 py-2 rounded-md text-white hover:bg-slate-900 duration-200'>Request Appointment</button>
          </div>
          </form></a>
        </div>      
      </div>
      <Footer />
    </>
  )
}

export default Appointment
