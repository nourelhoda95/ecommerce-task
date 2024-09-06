import React, { useEffect, useState } from 'react'
import style from './Brands.module.css'
import Loading from '../loading/loading';




export default function Brands(){
  const [brands, setBrands] = useState([]);


    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch('https://ecommerce.routemisr.com/api/v1/brands');
          const data = await response.json();
          setBrands(data.data);
        } catch (error) {
          console.error('Error fetching the categories:', error);
        }
      };
  
      fetchCategories();
    }, []);
  
  return<>
   
    {!brands?  <div  className="flex justify-center py-16  items-center"  > <Loading/>
      </div> :     <div>
      <div className="brands-header text-center mb-5 text-green-600 font-bold text-3xl"><h1>All Brands</h1></div>
      <div className="brand-grid flex flex-wrap container    ">
        {brands.map(brand => (
          <div key={brand._id} className="brand-item  card max-w-sm p-6 bg-white border border-gray-200 rounded-lg hover:shadow-2xl box-shadow  dark:bg-gray-800 dark:border-gray-700 m-5">
            <img src={brand.image} alt={brand.name} />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>
    </div> }

  
  </>
};






































// export default function Brands() {



    
//   return <>
    
//     <h1 className="text-3xl">Brands</h1>
  
//   </>
// }
