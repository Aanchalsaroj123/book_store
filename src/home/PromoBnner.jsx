import React from 'react'
import { Link } from 'react-router-dom'
import bookmain from '../assets/book-main.png'
const PromoBnner = () => {
  return (
    <div className='mt-16 py-1 bg-teal-100 px-4 lg:px-24'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <h2 className='text-4xl font-bold mb-6 leading-snug '>2024 National Book Award for fiction shortlist</h2>
            <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 '>Get Promo Code</button></Link>
    
        </div>

        <div>
            <img src={bookmain} alt=" "className='w-96' />
        </div>
      </div>
    </div>
  )
}

export default PromoBnner
