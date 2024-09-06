import React, { useContext, useState } from 'react'
import style from './Checkout.module.css'

import * as Yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { CartContext } from '../../context/CartContext'




export default function Checkout() {

let {checkout} = useContext(CartContext);

let formik = useFormik({
    initialValues:{

  details:'',
  city:'',
  phone:'',
  
}
,onSubmit: checkout
  })




    
  return <>
    
    <div className="pt-8 w-1/2 mx-auto">   
    
      <h2 className="text-3xl py-6 font-semibold text-emerald-700">Checkout now</h2>
      <form onSubmit={formik.handleSubmit} className="">
    


  <div className="relative z-0 w-full mb-5 group">
      <input type="text" details="details" value={formik.values.details} onBlur={formik.handleBlur} onChange={formik.handleChange} id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-700 focus:outline-none focus:ring-0 focus:border-emerald-700 peer" placeholder=" "  />
      <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-700 peer-focus:dark:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email</label>
  </div>



  <div className="relative z-0 w-full mb-5 group">
      <input type="text" city="city" value={formik.values.city} onBlur={formik.handleBlur} onChange={formik.handleChange} id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-700 focus:outline-none focus:ring-0 focus:border-emerald-700 peer" placeholder=" "  />
      <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-700 peer-focus:dark:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your city</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input type="tel" city="phone" value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-700 focus:outline-none focus:ring-0 focus:border-emerald-700 peer" placeholder=" "  />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-700 peer-focus:dark:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your phone</label>
  </div>






 <button type="submit" className="text-white bg-emerald-700 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:bg-emerald-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-700 dark:hover:bg-emerald-700 dark:focus:ring-emerald-700">Submit</button> 

  
  </form>
  </div>




  
  </>
}

