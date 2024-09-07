// import React from 'react'
import BestSeller from "../components/BestSeller"
import Hero from "../components/hero"
import LatestCollection from "../components/LatestCollection"
import NewsLetterBox from "../components/NewsLetterBox"
import OurPolicy from "../components/OurPolicy"
const Home = () => {
  return (
    <div>
    <Hero/>
    <LatestCollection></LatestCollection>
    <BestSeller/>
    <OurPolicy/>
    <NewsLetterBox/>
    </div>
  )
}

export default Home
