import React, { useContext, useState } from 'react'
import style from './Login.module.css'

import * as Yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'




export default function login() {

  let {setUserData} = useContext(UserContext)
  const [apiError, setApiError] = useState(null);
  const [loading, setloading] = useState(false);

  let navigate = useNavigate()


  async function handlelogin(values){
    try{
      setloading(true)
    let {data}= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
    localStorage.setItem('userToken', data.token);
    navigate('/')
    setloading(false);
    setUserData(data.token);
    
}catch(err){
  console.log(err.response.data.message);
  setApiError(err.response.data.message);
  setloading(false);
}
}



let validationSchema = Yup.object().shape({

  email:Yup.string().email("invaild email").required("Email is Required"),
  password:Yup.string().matches(/^[A-Z]\w{5,10}$/ , 'invalid password ex(ahmed123)').required('password is Required'),
  

})





let formik = useFormik({
    initialValues:{

  email:'',
  password:'',
  
},
validationSchema : validationSchema
,onSubmit:handlelogin
  })




    
  return <>
    
    <div className="pt-8 w-1/2 mx-auto">   
    
      <h2 className="text-3xl py-6 font-semibold text-emerald-700">login now</h2>
      <form onSubmit={formik.handleSubmit} className="">
    
  {apiError&& <div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {apiError}
</div> }



  <div className="relative z-0 w-full mb-5 group">
      <input type="email" email="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-700 focus:outline-none focus:ring-0 focus:border-emerald-700 peer" placeholder=" "  />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-700 peer-focus:dark:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email</label>
  </div>
  {formik.errors.email && formik.touched.email && <div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.email}
</div> }


  <div className="relative z-0 w-full mb-5 group">
      <input type="password" password="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-700 focus:outline-none focus:ring-0 focus:border-emerald-700 peer" placeholder=" "  />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-700 peer-focus:dark:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your password</label>
  </div>
  {formik.errors.password && formik.touched.password && <div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.password}
</div> }





{loading ? <button type="button" className="text-white bg-emerald-700 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:bg-emerald-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-700 dark:hover:bg-emerald-700 dark:focus:ring-emerald-700"><i className='fas fa-spinner fa-spin-pulse'></i></button> :  <button type="submit" className="text-white bg-emerald-700 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:bg-emerald-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-700 dark:hover:bg-emerald-700 dark:focus:ring-emerald-700">Submit</button> }

  
  </form>
  </div>




  
  </>
}

