import React, { useEffect, useState } from 'react'
import style from './Categories.module.css'


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://ecommerce.routemisr.com/api/v1/categories');
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.error('Error fetching the categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className=' flex flex-wrap   '>
      {categories.map((category) => (
        <div key={category._id} className="category-cards  h-[350px] m-11 w-60  hover:shadow-2xl box-shadow card max-w-sm p-6 bg-white border border-gray-200 rounded-lg hover:shadow-2xl box-shadow  dark:bg-gray-800 dark:border-gray-700 m-5">
          <img src={category.image} className='mb-5 ' alt={category.name} />
          <h2>{category.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Categories;





































// export default function Categories() {



    
//   return <>
    
//     <h1 className="text-3xl">Categories</h1>
  
//   </>
// }
