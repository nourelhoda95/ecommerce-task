import React, { useContext, useEffect, useState } from 'react'
import style from './AllOrders.module.css'
import { CartContext } from '../../context/CartContext'

export default function AllOrders() {

let{clearCart} = useContext(CartContext);

    useEffect(()=>{
      clearCart();
    } , [])
  return <>
    
    <h1 className="text-3xl">AllOrders</h1>
  
  </>
}
