import React from 'react'
import Banner from '../components/Banner' 
import Bestsellerbooks from './Favoritebook'
import Favbook from './Favbook'
import PromoBnner from './PromoBnner'
import Otherbooks from './Otherbooks'
import Reveiw from './Reveiw'

const Home = () => {
  return (
    <div>
     <Banner/>
     <Bestsellerbooks/>
     <Favbook/>
     <PromoBnner/>
     <Otherbooks/>
     <Reveiw/>
    </div>
  )
}

export default Home
