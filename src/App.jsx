import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Products from './Components/Products/Products.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Brands from './Components/Brands/Brands.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
import UserContextProvider from './context/UserContext.jsx'
import CounterContextProvider from './context/CounterContext.jsx'
import ProtectRoute from './Components/ProtectRoute/ProtectRoute.jsx'
import CartContextProvider from './context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
// import Checkout from './Components/Chechout/Chechout.jsx'
import AllOrders from './Components/AllOrders/AllOrders.jsx'
import WishList from './Components/WishList/WishList.jsx'



let routers = createBrowserRouter([
  {path: '' , element: <Layout/>, children :[
    {index: true  , element:<ProtectRoute><Home/></ProtectRoute>},
    {path:'cart' , element:<ProtectRoute><Cart/></ProtectRoute>},
    {path:'wishList' , element:<ProtectRoute><WishList/></ProtectRoute>},
    {path:'products' , element:<ProtectRoute><Products/></ProtectRoute>},
    {path:'productsdetails/:id' , element:<ProtectRoute><ProductDetails/></ProtectRoute>},
    {path:'categories' , element:<ProtectRoute><Categories/></ProtectRoute>},
    {path:'brands' , element:<ProtectRoute><Brands/></ProtectRoute>},
    // {path:'checkout' , element:<ProtectRoute><Checkout/></ProtectRoute>},
    {path:'allorders' , element:<ProtectRoute><AllOrders/></ProtectRoute>},

    {path:'login' , element:<Login/>},
    {path:'register', element:<Register/>},
    {path:'*' , element:<Notfound/>},
  ]}
])

function App() {

  return <CartContextProvider>
  <UserContextProvider>

<RouterProvider router={routers}></RouterProvider>
<Toaster />

  </UserContextProvider>
  </CartContextProvider>
}

export default App
