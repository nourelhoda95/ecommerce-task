import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import RecentProducts from '../RecentProducts/RecentProducts'
import Loading from '../loading/loading'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import MainSlider from '../mainSlider/mainSlider'
import Products from '../Products/Products'

export default function Home() {
  const [products, setProducts] = useState([])

async function getRecentProducts() {
  try {
  let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products',{
  });

setProducts(data.data);
console.log(data.data);

}catch(err){
  console.log(err);
}
}

useEffect(()=>{
  getRecentProducts();
},[])

    
  return <>
    <MainSlider/>
  <CategoriesSlider/>
  {/* <Products/> */}
  
  
{products.length?    <div className="flex  flex-wrap justify-center">
    {products.map((product , index )=> <RecentProducts key={index} product={product} />)}

    </div>:    <div className="flex justify-center py-16">
      <Loading/>
    </div> }

  
  </>
}
