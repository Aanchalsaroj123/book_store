import React from 'react'
import Bannercard from '../home/Bannercard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-20 '>
        <div className='md:w-1/2 space-y-8 h-full'>
         <h2 className='text-4xl font-bold leading-snug text-black'>Buy And Sell Your Books <span className='text-blue-600'>
            for the best prices</span></h2>
         <p className='md:w-5/4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio hic error odit nihil mollitia vero deserunt quam velit rem optio qui quae dolore nobis, ab, numquam nesciunt sunt? Dolor, ex.</p>
         <div>
            <input type="search" name="search" id="" placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none ' />
            <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>search</button>
         </div>
        </div>
        <div>
    <Bannercard/>
        </div>
      </div>
    </div>
  )
}

export default Banner
