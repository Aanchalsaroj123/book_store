import React from 'react'
import fav from "../assets/book4.jpg"
import { Link } from 'react-router-dom'
const Favbook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        <img src= {fav} alt="" className='rounded md:w-8/12'/>
      </div>
      <div className='md:w-1/2 space-y-6'>
           <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite <span className='text-blue-700'>Book</span></h2>
           <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores obcaecati consequatur, sed veniam ipsa ratione aliquam, dolorem ipsam dolore eos fugiat doloremque? Saepe velit minus provident iusto accusantium fuga perspiciatis.</p>
            {/* state */}
             <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>550+</h3>
                    <p className='text-base'>Register Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1200+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>
             </div>
          
          <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 '>Explore More</button></Link>
   
      </div>
    </div>
  )
}

export default Favbook
