// import React from 'react'
import { createContext, useState } from "react";
import { products } from "../assets/assets";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search,setSearch] = useState('')
  const[showSearch,setShowSearch]=useState(false)
  const [cartItems,setCartItems] = useState({})
const navigate =  useNavigate()

  const addToCart =async(ItemId,size)=>{
    if(!size){
        toast.error('Select Product size')
        return

    }
let cartData = structuredClone(cartItems)
if(cartData[ItemId]){
    if(cartData[ItemId][size]){
        cartData[ItemId][size]+=1

    }
    else{
        cartData[ItemId][size]=1

    }
}
else{
    cartData[ItemId]={}
    cartData[ItemId][size]=1

}
setCartItems(cartData)
  }
const getCartCount =()=>{
    let totalCount = 0
    for(const items in cartItems){
        for(const item in cartItems[items] ){
            try {
                if(cartItems[items][item]>0){
                    totalCount += cartItems[items][item]
                }
            } catch (error) {}
        }
    }
    return totalCount
}
 const updateQuantity= async(ItemId,size,quantity)=>{
let cartData = structuredClone(cartItems)
cartData[ItemId][size]=quantity
setCartItems(cartData)
 }
 const getCartAmount =  () =>{
    let totalAmount = 0
    for(const items in cartItems){
        let itemInfo =products.find((products)=> products._id === items)
       for(const item in cartItems[items]){
        try {
           if(cartItems[items][item]>0){
            totalAmount+=itemInfo.price * cartItems[items][item]
           } 
        } catch (error){}
        
       }
    }
    return totalAmount
 }

  const value = {
    products,
    currency,
    delivery_fee,
    search,setSearch,showSearch,setShowSearch,
    cartItems ,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
  };


  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ShopContextProvider;
