import axios from "axios";
import { createContext, useEffect, useState } from "react";



export let CartContext = createContext();

export default function CartContextProvider({ children }) {

  let headers = { token : localStorage.getItem('userToken')}


  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false); 

  async function addProductToCart(productId) {
try{
  setLoading(true);
  let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/cart',{
    productId
  } , {
    headers
  });
  toast.success(data.message , {
    duration:1000,
    primary: '#000',
  });
  setCart(data);
  setLoading(false);

}catch(err){
  setLoading(false);

}

  }

  async function checkout(shippingAddress) {
    try{
      setLoading(true);
      let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://http://localhost:5173`,{
        shippingAddress
      } , {
        headers
      });
    window.location.href = data.session.url
      setLoading(false);
    
    }catch(err){
      setLoading(false);
    
    }
    
      }

      async function clearCart() {
        try{
          setLoading(true);
          let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,  {
            headers
          });
        
          setCart(null);
          setLoading(false);
        
        }catch(err){
          setLoading(false);
        
        }
        
          }


  async function deleteProduct(productId) {
    try{
      setLoading(true);
      let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,  {
        headers
      });
    
      setCart(data);
      setLoading(false);
    
    }catch(err){
      setLoading(false);
    
    }
    
      }

  async function updateProductCount(productId, count) {
    if (count > 0) {
      try{
        setLoading(true);
        let {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
          count
        } , {
          headers
        });
        
        setCart(data);
        setLoading(false);
      
      }catch(err){
        setLoading(false);
      
      }
    }else{
      deleteProduct(productId);
    }

    
      }

  async function getCart(productId) {
    try{
      setLoading(true);
      let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/cart',{

        headers
      });
    
      setCart(data);
      setLoading(false);
    
    }catch(err){
      setLoading(false);
    
    }
    
      }
      useEffect(()=>{
        getCart();
      },[])


  return<CartContext.Provider value={{checkout , clearCart , deleteProduct ,loading, updateProductCount , addProductToCart ,getCart , cart , setCart }}>
    {children}
  </CartContext.Provider>
}














































// import axios from "axios";
// import { createContext, useState } from "react";



// export let CartContext = createContext();

// export default function CartContextProvider({ children }) {

//   let headers = { token : localStorage.getItem('userToken')}


//   const [cart, setCart] = useState(null);

//   async function addProductToCart(productId) {
// try{
//   let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/cart',{
//     productId
//   } , {
//     headers
//   });
//   toast.success(data.message , {
//     duration:1000,
//     primary: '#000',
//   });
//   setCart(data)

// }catch(err){

// }

//   }

//   async function getCart(productId) {
//     try{
//       let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/cart',{

//         headers
//       });
    
//       setCart(data)
    
//     }catch(err){
    
//     }
    
//       }


//   return<CartContext.Provider value={{addProductToCart ,getCart , cart , setCart}}>
//     {children}
//   </CartContext.Provider>
// }