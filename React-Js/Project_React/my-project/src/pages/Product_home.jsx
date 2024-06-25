import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import img_1 from "/src/assets/black_kitali.jpeg";
import img_2 from "/src/assets/whitevase.jpeg";
import img_3 from "/src/assets/table.jpeg";
import img_4 from "/src/assets/clock.jpeg";
import img_5 from "/src/assets/white-table.jpeg";
import img_6 from "/src/assets/big-vase.jpeg";
import img_7 from "/src/assets/latkan.jpeg";
import img_8 from "/src/assets/whitelemp.jpeg";
import Product_Home from '../../jsondata.json'


const Product_home = () => {
  return (
    <div>
      <div className=" bg-white pt-10 px-16 ">
        <div className="flex justify-between mt-14">
          <div className='ms-12 '>
            <ul className="product_list flex  space-x-6 text-[12px] text-[#928d8d]  font-medium ">
              <li className="text-black ">ALL</li>
              <li className=" hover:text-black">HOME DECOR</li>
              <li className=" hover:text-black">LIGHTING</li>
              <li className=" hover:text-black">DECORATION</li>
              <li className=" hover:text-black">VASES</li>
              <li className=" hover:text-black">BASICS</li>
            </ul>
          </div>
          <div className="flex space-x-2 me-12">
            <p className="filter text-[12px] font-medium mt-2">FILTER</p>{" "}
            <IoMdArrowDropdown className="mt-1 text-xl" />
          </div>
        </div>
        <Card_Home />
      </div>
    </div>
  )
}

export const Card_Home = () => {
  return (
    <div className='grid grid-cols-4 gap-12 m-6'>

      {
        Product_Home.map((item) => {

          return (
            <div className='h-full'>
              <div className=' text-center'>
                <div className="">
                  <img className='w-full h-72 object-cover' src={item.image} alt="" />
                </div>
                <div className='mt-4'>
                  <p className="text-black text-sm font-semibold">{item.title}</p>
                  <p className="text-gray-400">{item.price}</p>
                </div>
                <div>
                  <button className='text-sm text-gray-400 font-bold'>A D D T O C A R T</button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};


export default Product_home