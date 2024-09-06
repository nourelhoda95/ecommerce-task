import React, { useEffect, useState } from 'react'
import style from './CategoriesSlider.module.css'
import Slider from "react-slick";
import axios from 'axios';

export default function CategoriesSlider() {



  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows:false,
    autoplay: true,
    autoplaySpeed:1000,
  };
  

  const [categories, setCategories] = useState([])

  async function getRecentCategories() {
    let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  
    setCategories(data.data);
    
  }
  
  useEffect(()=>{
    getRecentCategories();
  },[])
  


    
  return <>


<Slider {...settings}>
{categories?.map((category , index)=> 
<div key={index} className='my-6' >
<img  src={category.image}  className='w-full h-[200px] ' alt=''/>
<h2 className='text-lg font-bold'>{category.name}</h2>
</div> )}
    </Slider>
    
  
  </>
}
