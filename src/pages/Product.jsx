// import React from 'react'

import { useParams } from "react-router-dom"
import { ShopContext } from "../context/shopContext"
import { useEffect,useContext,useState } from "react"
import { assets } from "../assets/assets"
import RelatedProduct from "../components/RelatedProduct"

const Product = () => {
        const {productId} = useParams()
        const {products,currency,addToCart} =useContext(ShopContext)
        const[productData ,setProductData] = useState(false)
        const [image ,setImage] = useState('')
        const [size,setSize] = useState('')
        const fetchProductData =async()=>{
           products.map((item)=>{
            if(item._id ===productId){
                setProductData(item)   
             setImage(item.image[0])
            
                return null
            }
           })
        }
        useEffect(()=>{
            fetchProductData()
        },[productId])
     
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in-duration-500 opacity-100">
        {/* --------------Product Data-------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* --------------Product Images-------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                {
                    productData.image.map((item,index)=>(
                        <img onClick={()=>setImage(item)} src={item} key={index} alt="" className="w-[24%] sm:mb-3 flex-shrink-0 cursor-pointer" />
                    ))
                }
            </div>  
            <div className="w-full sm:w-[80%]">
                <img src={image} alt="" className="w-full h-auto" />
            </div>
        </div>
    
      {/* ----------------Product Info--------------- */}
      <div className="flex-1">
        <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
        <div className="flex item-center gap-1 mt-2">
           <img src={assets.star_icon} alt="" className = "w-3.5" />
           <img src={assets.star_icon} alt="" className = "w-3.5" />
           <img src={assets.star_icon} alt="" className = "w-3.5" />
           <img src={assets.star_icon} alt="" className = "w-3.5" />
           <img src={assets.star_dull_icon} alt="" className = "w-3.5" />
        </div>
        <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
        <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
        <div className="flex flex-col gap-4 my-8">
            <p className="">Select size</p>
            <div className="flex gap-2">{productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)
                } className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500':''} `} key={index}> {item}</button>
            ))}</div>
        </div>
        <button onClick={()=>addToCart(productData._id,size )
        } className="bg-black text-white px-8 py-3  text-sm active:bg-gray-700">ADD TO CART</button>
      <hr className="mt-8 sm:w-4/5" />
    <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
        <p>100% Original product.</p>
          <p>Cash on delivery is available on this product</p>
          <p>Easy return and exchange policy within 7 days</p>
    </div>
      </div>
    </div>
    {/* ------------------------Description & review section-------------------------- */}
    <div className="mt-20">
        <div className="flex ">
            <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews(122)</p>
        </div>
        <div className="flex flex-col gap-4 border p-6  text-sm text-gray-500">
            <p>An E-commerce website is an online platform that allows businesses to sell products or services directly to consumers over the internet. <br />
                 It serves as a digital storefront where users can browse a catalog of items, add them to a virtual shopping cart, and complete purchases through secure payment gateways. <br /> E-commerce websites typically include features like product descriptions, customer reviews, search functionality, and order tracking to enhance the shopping experience. <br />These platforms can cater to a wide range of industries, from fashion and electronics to groceries and digital goods, enabling businesses to reach a global audience with ease.</p>
        </div>
    </div>
    {/* -------------------display related products---------------------- */}
    <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ): <div className="opacity-0"></div>
}

export default Product
