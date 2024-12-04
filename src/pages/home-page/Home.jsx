import React from 'react'
import Banner from './Banner'
import UniqueHome from './UniqueHome'
import EstateService from './EstateService';
import LogoList from './LogoList LogoList'
import RealEstateSection from './RealEstateSection'
import NewsLetter from './NewsLetter'
import Blogs from './Blogs'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <Banner/>
      <RealEstateSection/>
      <LogoList/>
      <EstateService/>
      <UniqueHome/>
      <Testimonials/>
      <Blogs/>
      <NewsLetter/>
    </div>
  )
}

export default Home
