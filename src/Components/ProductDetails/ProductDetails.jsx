import React, { useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from "react-slick";
import Loading from '../loading/loading';

export default function ProductDetails() {
  let {id} = useParams();
  const [ProductDetails, setProductDetails] = useState({});

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  async function getProductDetails(id) {
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    console.log(data.data);
    setProductDetails(data.data);
  }

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <>
    {ProductDetails?<div>
        <h1 className="text-3xl">ProductDetails</h1>
        <div className="flex items-center py-10">
          <Slider {...settings}>
            {ProductDetails.images?.map((image, index) => (
              <img key={index} src={image} className='w-full' alt='' />
            ))}
          </Slider>
        </div>
        <div className="w-3/4">
          <div>
            <h2 className="text-2xl">{ProductDetails.title}</h2>
            <p className='my-6 text-gray-500'>{ProductDetails.description}</p>
            <h3>{ProductDetails.category?.name}</h3>
            <div className="flex justify-between my-2">
              <h3>{ProductDetails.price} EGP</h3>
              <h3><i className='fas fa-star rating-color'></i>{ProductDetails.ratingsAverage}</h3>
            </div>
            <button className='btn w-full bg-main text-white rounded py-1'>Add To Cart</button>
          </div>
        </div>
      </div>: <div className="flex justify-center py-16">
      <Loading/>
    </div> }
      
    </>
  );
}
