import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
 
import { Avatar } from 'flowbite-react';

import {FaStar} from "react-icons/fa6"
import propic from '../assets/profilepic.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
const Reveiw = () => {
  return (
    <div className='my-12 px-4 lg:px-24'> 
      <h2 className='text-5xl text-center font-bold text-black my-5'>Our Custmores</h2>
    <div>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
               <div className='mt-7'>
               <p className='mb-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, blanditiis nisi? Similique, corrupti quam iste ab amet doloremque iure atque impedit, explicabo recusandae repellendus beatae iusto fugiat eius laboriosam unde!
                </p>
                <Avatar img={propic} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                <h5 className='text-lg font-medium '>Meena ping</h5>
                <p className='text-base'>CEO, ABC</p>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
               <div className='mt-7'>
               <p className='mb-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, blanditiis nisi? Similique, corrupti quam iste ab amet doloremque iure atque impedit, explicabo recusandae repellendus beatae iusto fugiat eius laboriosam unde!
                </p>
                <Avatar img={propic} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                <h5 className='text-lg font-medium '>Meena ping</h5>
                <p className='text-base'>CEO, ABC</p>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
               <div className='mt-7'>
               <p className='mb-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, blanditiis nisi? Similique, corrupti quam iste ab amet doloremque iure atque impedit, explicabo recusandae repellendus beatae iusto fugiat eius laboriosam unde!
                </p>
                <Avatar img={propic} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                <h5 className='text-lg font-medium '>Meena ping</h5>
                <p className='text-base'>CEO, ABC</p>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
               <div className='mt-7'>
               <p className='mb-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, blanditiis nisi? Similique, corrupti quam iste ab amet doloremque iure atque impedit, explicabo recusandae repellendus beatae iusto fugiat eius laboriosam unde!
                </p>
                <Avatar img={propic} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                <h5 className='text-lg font-medium '>Meena ping</h5>
                <p className='text-base'>CEO, ABC</p>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
               <div className='mt-7'>
               <p className='mb-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, blanditiis nisi? Similique, corrupti quam iste ab amet doloremque iure atque impedit, explicabo recusandae repellendus beatae iusto fugiat eius laboriosam unde!
                </p>
                <Avatar img={propic} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                <h5 className='text-lg font-medium '>Meena ping</h5>
                <p className='text-base'>CEO, ABC</p>
               </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  )
}

export default Reveiw
