import React, { useContext, useEffect, useState } from 'react';
import style from './RecentProducts.module.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import WishList from '../WishList/WishList';

export default function RecentProducts() {
  let { addProductToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  async function getRecentProducts() {
    try {
      let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
      setProducts(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getRecentProducts();
  }, []);

  return (
    <>
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="product px-2 py-4">
            <Link to={`/productsdetails/${product.id}`}>
              <img src={product.imageCover} className="w-full" alt={product.title} />
              <h2 className="text-main text-sm">{product.category?.name}</h2>
              <h2 className="font-medium">{product.title?.split(' ').slice(0, 2).join(' ')}</h2>
              <div className="flex justify-between my-2">
                <h3>{product.price} EGP</h3>
                <h3>
                  <i className="fas fa-star rating-color"></i>
                  {product.ratingsAverage}
                </h3>
              </div>
          
            </Link>
            {/* <button
                className={`wishlist-button ${WishList.includes(product.id) ? 'red' : ''}`}
                onClick={() => addToWishlist(product.id)}
              >
                <i className="fa-solid fa-heart"></i>
              </button> */}
            <button
              onClick={() => addProductToCart(product.id)}
              className="btn w-full bg-main text-white rounded py-1"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}



























