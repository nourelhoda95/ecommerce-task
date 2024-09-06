import React, { useContext, useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { CounterContext } from '../../context/CounterContext.jsx'
import { UserContext } from '../../context/UserContext.jsx'
import { CartContext } from '../../context/CartContext.jsx'

export default function Navbar() {

let {userData , setUserData}= useContext(UserContext);
let {cart} = useContext(CartContext);

let navigate = useNavigate()
 function logOut(){
  localStorage.removeItem('userToken');
  setUserData(null);
navigate('/login');

 }


    
  return <>
    
    <nav className='bg-gray-200  lg:fixed top-0 left-0 right-0 z-50 inset-x-0 py-2 text-center capitalize'>
      <div className="container flex flex-col lg:flex-row justify-between items-center text-gray-500">
        <div className='flex flex-col lg:flex-row space-x-3'>
          <img src={logo} width={120} alt="" />
          {userData && <ul className='flex flex-col lg:flex-row space-x-2'>
            <li className='mx-2 '><NavLink className ='text-gray-500' to=""> Home</NavLink></li>
            <li className='mx-2 '><NavLink className ='text-gray-500' to="cart">Cart</NavLink></li>
            <li className='mx-2 '><NavLink className ='text-gray-500' to="wishList">wish list</NavLink></li>
            <li className='mx-2 '><NavLink className ='text-gray-500' to="products">products</NavLink></li>
            <li className='mx-2 '><NavLink className ='text-gray-500' to="categories">categories</NavLink></li>
            <li className='mx-2 '><NavLink className ='text-gray-500' to="brands">brands</NavLink></li>
          </ul>}
        </div>
        <div className=''>
        
          <ul className='flex flex-col md:flex-row space-x-2'>
        
        
            {userData?  <>
              
              <li className='mx-2 relative '><NavLink className ='text-gray-500' to="cart"><i className="fa-solid fa-2xl text-main fa-cart-shopping"></i></NavLink><span className=' text-white absolute left-1/2 -top-[5px]'>  {cart? cart.numOfCartItems : 0}</span></li>
              <li onClick={()=> logOut()} className =' mx-2 cursor-pointer' ><NavLink className ='text-gray-500'  to="login">logout</NavLink></li>
            </>
             
            :
            <>
            <li className =' mx-2' ><NavLink className ='text-gray-500' to="login">Login</NavLink></li>
            <li className =' mx-2' ><NavLink className ='text-gray-500' to="register">Register</NavLink></li>
          
            </>
            }
                <li className='space-x-2 text-black'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-linkedin-in'></i>
              <i className='fab fa-youtube'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-instagram'></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
  </>
}





































// import React, { useContext, useState } from 'react'
// import style from './Navbar.module.css'
// import logo from '../../assets/images/freshcart-logo.svg'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { CounterContext } from '../../context/CounterContext.jsx'
// import { UserContext } from '../../context/UserContext.jsx'

// export default function Navbar() {


// let navigate = useNavigate()
// let {userData , setUserData}= useContext(UserContext);

//  function logOut(){
//   localStorage.removeItem('userToken');
//   setUserData(null);
// navigate('/login');

//  }


    
//   return <>
    
//     <nav className='bg-gray-200  lg:fixed top-0 left-0 right-0 z-50 inset-x-0 py-2 text-center capitalize'>
//       <div className="container flex flex-col lg:flex-row justify-between items-center text-gray-500">
//         <div className='flex flex-col lg:flex-row space-x-3'>
//           <img src={logo} width={120} alt="" />
//           {userData && <ul className='flex flex-col lg:flex-row space-x-2'>
//             <li className='mx-2 '><NavLink className ='text-gray-500' to=""> Home</NavLink></li>
//             <li className='mx-2 '><NavLink className ='text-gray-500' to="cart">cart</NavLink></li>
//             <li className='mx-2 '><NavLink className ='text-gray-500' to="wishList">wish list</NavLink></li>
//             <li className='mx-2 '><NavLink className ='text-gray-500' to="products">products</NavLink></li>
//             <li className='mx-2 '><NavLink className ='text-gray-500' to="categories">categories</NavLink></li>
//             <li className='mx-2 '><NavLink className ='text-gray-500' to="brands">brands</NavLink></li>
//           </ul>}
//         </div>
//         <div className=''>
//           <ul className='flex flex-col md:flex-row space-x-2'>
//             <li className='space-x-2 text-black'>
//               <i className='fab fa-facebook-f'></i>
//               <i className='fab fa-linkedin-in'></i>
//               <i className='fab fa-youtube'></i>
//               <i className='fab fa-twitter'></i>
//               <i className='fab fa-instagram'></i>
//             </li>
//             {userData?   <li onClick={()=> logOut()} className =' mx-2 cursor-pointer' ><NavLink className ='text-gray-500'  to="login">logout</NavLink></li> :
//             <>
//             <li className =' mx-2' ><NavLink className ='text-gray-500' to="login">Login</NavLink></li>
//             <li className =' mx-2' ><NavLink className ='text-gray-500' to="">Register</NavLink></li>
          
//             </>}
            
//           </ul>
//         </div>
//       </div>
//     </nav>
  
//   </>
// }
