// import React from 'react'

import { assets } from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/title"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"}/>
       
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Forever was born out of a passion for innovation and desire to revolution.we're passionate about bringing you the best products from around the world. Our mission is to provide a seamless online shopping experience, offering a wide range of high-quality items at competitive prices</p>
      
        <p>Forever was born out of a passion for innovation and desire to revolution.we're passionate about bringing you the best products from around the world. Our mission is to provide a seamless online shopping experience, offering a wide range of high-quality items at competitive prices</p>
          <b className="text-gray-800">Our mission </b>
          <p>"Our mission is to revolutionize online shopping by delivering exceptional products with unmatched convenience. We strive to provide a seamless and enjoyable experience for our customers, offering top-quality items, fast and reliable service, and a commitment to customer satisfaction every step of the way."</p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={"CHOOSE US"}/>
      </div>
      <div className="flex flex-col md:flex-row text=sm mb-20">
        <div className="border px-10 md:px py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">At Forever platform, quality assurance is our top priority. We are dedicated to offering products that meet the highest standards of quality, safety, and reliability. Every item undergoes thorough checks and evaluations, ensuring that it aligns with our commitment to excellence. We continually improve our processes to provide you with products that deliver long-lasting satisfaction, giving you confidence in every purchase.</p>
        </div>
        <div className="border px-10 md:px py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience </b>
          <p className="text-gray-600">At Forever platform, quality assurance is our top priority. We are dedicated to offering products that meet the highest standards of quality, safety, and reliability. Every item undergoes thorough checks and evaluations, ensuring that it aligns with our commitment to excellence. We continually improve our processes to provide you with products that deliver long-lasting satisfaction, giving you confidence in every purchase.</p>
        </div>
        <div className="border px-10 md:px py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">At Forever platform, quality assurance is our top priority. We are dedicated to offering products that meet the highest standards of quality, safety, and reliability. Every item undergoes thorough checks and evaluations, ensuring that it aligns with our commitment to excellence. We continually improve our processes to provide you with products that deliver long-lasting satisfaction, giving you confidence in every purchase.</p>
        </div>

      </div>
     <NewsLetterBox/>
    </div>
  )
}

export default About