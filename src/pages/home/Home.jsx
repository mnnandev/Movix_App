import React from 'react'
import "./Home.scss"
import HeroBaner from "./HeroBaner/HeroBaner"
import Trending from './Trending/Trending'
import Popular from './Popular/Popular'
import TopRated from './TopRated/TopRated'

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBaner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home