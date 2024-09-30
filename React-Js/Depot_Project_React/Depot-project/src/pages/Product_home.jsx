import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
 import Product_Home from '../../jsondata.json'
 import { FaHeart } from "react-icons/fa6";
import { addToWishlist } from '../Redux/wishlistRedux/wishlistAction'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ProductList } from '../Redux/productRedux/productAction';


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
    const dispatch = useDispatch();
    const shopData = useSelector((state) => state.product);

    const data = shopData.flat().slice(0 , 8)
  
    useEffect(() => {
      dispatch(ProductList());
    }, []);
  
  return (
    <div className='grid grid-cols-4 gap-12 m-6 pt-5'>

      {data.map((item) => (          
            <div className='h-full'>
              <div className=' text-center box '>
                <div className="relative group overflow-hidden  ">
                  <img className='w-full h-72 object-cover' src={item.image} alt=""  />
                  <div className='flex absolute bottom-5 w-full justify-center opacity-0 group-hover:opacity-100 translate-y-6 group-hover:-traslate-y-0 group-hover:duration-300'>
                    <h1 className='flex text-[12px] px-4 bg-black text-white justify-center py-1 font-semibold'>QUICK LOOK</h1>
                    <button className='bg-gray-500 p- 1' onClick={() => dispatch(addToWishlist(item))}>
                    <FaHeart className="text-white text-sm active:text-red-600"/> 
                    </button>
                  </div>
                </div>
                    <p className="text-black text-sm font-semibold mt-2">{item.title}</p>
                <div className='mt-4 pri'>
                  <p className="text-gray-400">${item.price}</p>
                </div>
                <div className='Add'>
                  <button className='text-sm text-gray-400 font-semibold tracking-widest'>ADDTOCART</button>
                </div>
                
              </div>
            </div>
      ))
      }
    </div>
  );
};


export default Product_home