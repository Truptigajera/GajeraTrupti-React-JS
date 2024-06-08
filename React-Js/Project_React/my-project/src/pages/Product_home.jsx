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


const Product_home = () => {
  return (
    <div>
        <div className=" bg-white pt-10 px-16 ">
        <div className="flex justify-between mt-14">
          <div className='ms-12 '>
            <ul className="product_list flex  space-x-2 text-[12px] text-[#928d8d]  font-medium ">
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
        <Card_Home/>
      </div>
    </div>
  )
}

export const Card_Home = ( ) => {
    return (
      <div className='px-16'>
  
        <div className="mx-auto grid grid-cols-4  gap-16 pt-10 ">
  
          <div className="box reletive ">
            <img src={img_1} alt="" />
            <div className="pop absolute bottom-[201px] mx-24 ">
              <span className="bg-black text-white ps-2 " > Quick Look <span className="bg-gray-400  text-white">❤️</span> </span>
            </div>
            <h5 className="text-center mt-4 font-semibold">BASKET WITH HANDLES</h5>
            <p className="text-gray-400 text-lg text-center mt-1 pri ">$160</p>
            <p className=" text-gray-400 text-lg text-center mt-1 Add">Add To Card</p>  
          </div>
  
          <div className="">
            <img src={img_2} alt="" />
            <h5 className="text-center mt-4 font-semibold">FLOWER VASE</h5>
            <p className="text-gray-400 text-lg text-center mt-1"><del className="me-2">$210</del>$170</p>
          </div>
  
          <div className="">
            <img src={img_3} alt="" />
            <h5 className="text-center mt-4 font-semibold">DECO ACCESSORY</h5>
            <p className="text-gray-400 text-lg text-center mt-1 pri">$15</p>
            <p className=" text-gray-400 text-lg text-center mt-1 Add">Add To Card</p>   
          </div>
  
          <div className="">
            <img src={img_4} alt="" />
            <h5 className="text-center mt-4 font-semibold">WALL CLOCK</h5>
            <p className="text-gray-400 text-lg text-center mt-1">$110</p>
          </div>
  
          <div className="">
            <img src={img_5} alt="" />
            <h5 className="text-center mt-4 font-semibold">NEWSPAPER STORAGE</h5>
            <p className="text-gray-400 text-lg text-center mt-1">$90</p>
          </div>
  
          <div className="">
            <img src={img_6} alt="" />
            <h5 className="text-center mt-4 font-semibold">POTTERY VASE</h5>
            <p className="text-gray-400 text-lg text-center mt-1">$60</p>
          </div>
  
          <div className="">
            <img src={img_7} alt="" />
            <h5 className="text-center mt-4 font-semibold">ROSE HOLDBACK</h5>
            <p className="text-gray-400 text-lg text-center mt-1"><del className="me-2">$30</del>$24</p>
          </div>
  
          <div className="">
            <img src={img_8} alt="" />
            <h5 className="text-center mt-4 font-semibold">TABLE LAMP</h5>
            <p className="text-gray-400 text-lg text-center mt-1">$240</p>  
          </div>
  
        </div>
        {/* <hr className='border-2' /> */}
  
      </div>
    );
  };
  

export default Product_home