// import React from 'react'
import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token,setToken]=useState('')
  const navigate = useNavigate();

  const addToCart = async (ItemId, size) => {
    if (!size) {
      toast.error("Select Product size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[ItemId]) {
      if (cartData[ItemId][size]) {
        cartData[ItemId][size] += 1;
      } else {
        cartData[ItemId][size] = 1;
      }
    } else {
      cartData[ItemId] = {};
      cartData[ItemId][size] = 1;
    }
    setCartItems(cartData);
    if(token){

      try {
        await axios.post(backendUrl +'/api/cart/add',{ItemId,size},{headers:{token}})
      } catch (error) {
        console.log(error);
        toast.error(error.message)
        
      }
    }
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async (ItemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[ItemId][size] = quantity;
    setCartItems(cartData);
    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/update',{ItemId, size, quantity},{headers:{token}})
      } catch (error) {
         console.log(error);
        toast.error(error.message)
      }
    }
  };
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((products) => products._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
              toast.error(error.message)
        }
      }
    }
    return totalAmount;
  };
  const getProductData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if(response.data.success){
        setProducts(response.data.products)
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };
  const getUserCart =async(token)=>{
try {
  const response =await axios.post(backendUrl + '/api/cart/get',{},{headers:{token}})
  if (response.data.success) {
    setCartItems(response.data.cartData)
    
  }
} catch (error) {
   console.log(error);
        toast.error(error.message)
  
}
  }
  useEffect(() => {
    getProductData();
  }, []);
  useEffect(()=>{
if(!token &&localStorage.getItem('token')){
setToken(localStorage.getItem('token'))
getUserCart(localStorage.getItem('token'))
}
  },[])
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,setCartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,token,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ShopContextProvider;
