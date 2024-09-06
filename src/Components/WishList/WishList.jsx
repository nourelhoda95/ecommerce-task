import React, { useEffect, useState } from 'react'
import style from './WishList.module.css'
import axios from 'axios';
import Loading from '../loading/loading';

export default function WishList() {



  const [wishlist, setWishlist] = useState([]);
  const WishlistItem = ({ item, onRemove }) => {
  return <>
  
    {wishlist?  <div className="flex flex-wrap w-full justify-center  ">
      <div className="wishlist-item   w-60  hover:shadow-2xl box-shadow card  p-6 bg-white border border-gray-200 rounded-lg hover:shadow-2xl box-shadow  dark:bg-gray-800 dark:border-gray-700 m-5">
        <img src={item.imageCover} alt={item.title} className="item-image" />
        <div className="item-details">
          <h3>{item.title}</h3>
          <p className="price">{item.price} EGP</p>
          <button className="remove-btn text-red-600" onClick={() => onRemove(item._id)}>Remove</button>
        </div>
        <button className='btn w-full bg-main text-white rounded py-1'>Add To Cart</button>
      </div>
      </div> :  <div className="flex justify-center py-16">
      <Loading/>
    </div> }
  
    </>
};

useEffect(() => {
  let fetchWishlist = async () => {
    let token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      let response = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
        headers: {
          token: token
        }
      });

      if (response.data && response.data.status === 'success' && Array.isArray(response.data.data)) {
        setWishlist(response.data.data);
      } else {
        console.error('Unexpected response format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  };

  fetchWishlist();
}, []);

let handleRemove = async (itemId) => {
  let token = localStorage.getItem('token');

  if (!token) {
    console.error('No token found');
    return;
  }

  try {
    let response = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${itemId}`, {
      headers: {
        token: token
      }
    });

    if (response.data && response.data.status === 'success') {
      setWishlist(wishlist.filter(item => item._id !== itemId));
    } else {
      console.error('Failed to remove item:', response.data);
    }
  } catch (error) {
    console.error('Error removing item from wishlist:', error);
  }
};

return (
  <div className="wishlist">
    {wishlist.length > 0 ? (
      wishlist.map((item) => (
        <WishlistItem key={item._id} item={item} onRemove={handleRemove} />
      ))
    ) : (
      <p className='font-bold text-3xl'>Your wishlist is empty.</p>
    )}
  </div>
);
}
