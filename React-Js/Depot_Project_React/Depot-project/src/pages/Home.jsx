import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img_1 from '/src/assets/chair.png'
import img_2 from '/src/assets/chair-2.jpeg'
import img_3 from '/src/assets/lemp-1.png'
import img_4 from '/src/assets/lemp-2.png'
import Product_home from './Product_home';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './App.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          < div className='mx-auto flex  justify-center h-[520px] w-[1150px] ' >
                        <div className='container bg-[#f2f2f2] flex'>
              <div className='w-[400px] mt-72 ms-16'>
                <p className='text-[#080808] text-[30px] font-medium think p-6'>THINK DIFFERENT.</p>
                <h1 className='text-[16px] text-[#929292] ms-6'>Depot is a unique & captivating theme designed specifically for all types of shops and online stores.</h1>

              </div>
              <div>
                <div>
                  <img className='h-[444px] w-[414px] mt-4 ms-56' src={img_1} alt="" />
                </div>
              </div>
            </div>
          </div >
        </SwiperSlide>
        <SwiperSlide>
          < div className='mx-auto flex  justify-center h-[520px] w-[1150px] ' >
             
            <div className='container bg-[#f2f2f2] flex'>..
              <div className='w-[400px] mt-72 ms-16'>
                <p className='text-[#080808] text-[30px] font-medium think p-6'>THINK DIFFERENT.</p>
                <h1 className='text-[16px] text-[#929292] ms-6'>One-click import feature lets you import the complete Depot demo content with a single mouse click.</h1>
              </div>
              <div>
                <div>
                  <img className='h-[444px] w-[414px] mt-4 ms-56' src={img_2} alt="" />
                </div>
              </div>
            </div>
          </div >
        </SwiperSlide>
        <SwiperSlide>
          < div className='mx-auto flex  justify-center h-[520px] w-[1150px] ' >
             <div className='container bg-[#f2f2f2] flex'>
              <div className='w-[400px] mt-72 ms-16'>
                <p className='text-[#080808] text-[30px] font-medium think '>PREMIUM COMFORT.</p>
                <h1 className='text-[16px] text-[#929292] mt-6'>Depot is a unique & captivating theme designed specifically for all types of shops and online stores.</h1>
              </div>
              <div>
                <div className='flex'>
                  <img className='h-[500px] w-[266px] ms-32' src={img_3} alt="" />
                  <img className='h-[400px] w-[217px] ' src={img_4} alt="" />
                </div>
              </div>
            </div>
          </div >
        </SwiperSlide>
      </Swiper>
      <Product_home />
    </>
  );
}


