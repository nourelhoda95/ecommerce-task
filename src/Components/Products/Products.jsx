import React, { useEffect, useState } from 'react'
import style from './Products.module.css'
import { Link } from 'react-router-dom';


export default function Products(){
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    let fetchCategories = async () => {
      let token = localStorage.getItem('token');
      
      if (!token) {
        console.error('No token found');
        return;
      }
      try {
        let response = await fetch('https://ecommerce.routemisr.com/api/v1/products', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        let data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.error('Error fetching the categories:', error);
      }
    };

    let fetchWishlist = async () => {
      let token = localStorage.getItem('token');
      
      if (!token) {
        console.error('No token found');
        return;
      }
      try {
        let response = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist', {
          headers: {
            'token': token,
          },
        });
        let data = await response.json();
        setWishlist(data.data.map(item => item._id));
      } catch (error) {
        console.error('Error fetching the wishlist:', error);
      }
    };

    fetchCategories();
    fetchWishlist();
  }, []);

  let addToWishlist = async (productId) => {
    let token = localStorage.getItem('token');
  
    if (!token) {
      console.error('No token found');
      return;
    }
  
    try {
      let method = wishlist.includes(productId) ? 'DELETE' : 'POST';
      let url = `https://ecommerce.routemisr.com/api/v1/wishlist${method === 'DELETE' ? `/${productId}` : ''}`;
      
      let response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'token': token,
        },
        body: method === 'POST' ? JSON.stringify({ productId }) : undefined,
      });
  
      if (response.ok) {
        let result = await response.json();
        setWishlist(prevWishlist => 
          method === 'POST' 
            ? [...prevWishlist, productId]
            : prevWishlist.filter(id => id !== productId)
        );
        console.log('Wishlist updated:', result);
      } else {
        let errorData = await response.json();
        console.error('Failed to update wishlist:', response.status, errorData);
      }
    } catch (error) {
      console.error('Error updating wishlist:', error);
    }
  };
  
  let addToCart = async (productId) => {
    let token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      let response = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token,
        },
        body: JSON.stringify({ productId }),
      });

      if (response.ok) {
        let result = await response.json();
        console.log('Product added to cart:', result);
      } else {
        let errorData = await response.json();
        console.error('Failed to add product to cart:', response.status, errorData);
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  let filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  let renderStars = (ratingsAverage) => {
    let roundedRating = Math.round(ratingsAverage);
    return (
      <>
        {[...Array(5)].map((_, index) => (
          <span key={index} className={`star ${index < roundedRating ? 'filled' : ''}`}>
            &#9733;
          </span>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div  className='  flex flex-wrap   justify-center ' >
      <div className='   w-1/6 product px-2 py-4  '>
        {filteredCategories.map((category) => (
          <div className='w-full   '>
          <div key={category._id} className="  hover:shadow-2xl box-shadow card  pb-4  bg-white border border-gray-200 rounded-lg hover:shadow-2xl box-shadow  dark:bg-gray-800 dark:border-gray-700  m-5 ">
            <Link to={`/products/${category._id}`} className="">
            <div>
            <div className="category-image">
              <img src={category.imageCover} className='w-30' alt={category.title} />
              </div>
              <div className="">
                <h2>{category.title}</h2>
                <p>Price: {category.price} EGp</p>
                <div className="rating">
                  {renderStars(category.ratingsAverage)}
                </div> 
              </div>
              </div>
            </Link>
            <div className="button-group">
              <button
                className={`wishlist-button ${wishlist.includes(category._id) ? 'red' : ''}`}
                onClick={() => addToWishlist(category._id)}
              >
                <i className="fa-solid fa-heart"></i>
              </button>
            
              <button className='btn w-full bg-main text-white rounded py-1'   onClick={() => addToCart(category._id)}>Add To Cart</button>
            </div>
          </div>
          </div>
        ))}
      
      </div>
      </div>
    </>
  );
};































// export default function Products() {



    
//   return <>
    
//     <h1 className="text-3xl">Products</h1>
  
//   </>
// }
