import React, { useContext, useEffect, useState } from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar.jsx'
// import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../../context/UserContext.jsx'
import { useNavigate } from "react-router-dom";

export default function Layout() {

// let {setUserData}= useContext(UserContext)
// let navigate = useNavigate();





  return <>
    <Navbar />
    <div className="container py-14">

      <Outlet></Outlet>
    </div>
    {/* <Footer /> */}
  </>
}
