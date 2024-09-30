import React from 'react'
import Homepage from './Homepage'
import { FaStar } from "react-icons/fa";
import img from '../assets/Images/asset 10.png'
import { IoIosHeart } from "react-icons/io";
const Shop = () => {
  return (
    <div>
      <div className='h-[50px] mt-10 bg-pink-50'>
        <div className=''>
          <div className=' flex py-4 text-gray-400 ml-5 '>
            <a href={Homepage}>
              <span>Home</span>
            </a>
            <a href="">
              <span> / with Sidebar</span>
            </a>
          </div>
        </div>
      </div>
      <div className='flex'>

        <div className='p-12 h-[400px] w-[250px] text-center text-md text-gray-500 '>
          <h2 className='hover:underline text-md text-black font-fsans'>COLOR</h2>
          <div className='mt-4 space-y-1'>
            <h2 className='hover:text-black'>Beige (15)</h2>
            <h2 className='hover:text-black'>Black (14)</h2>
            <h2 className='hover:text-black'>Brown (5)</h2>
            <h2 className='hover:text-black'>Gold (7)</h2>
            <h2 className='hover:text-black'>Gery (8)</h2>
            <h2 className='hover:text-black'>Orange (3)</h2>
            <h2 className='hover:text-black'>Rose (5)</h2>
            <h2 className='hover:text-black'>White (17)</h2>
          </div >
          <div className='mt-28'>
          <h2 className='hover:underline text-md text-sans text-black'>MATERIAL</h2>
          <div className='mt-4 space-y-1'>
            <h2 className='hover:text-black'>Chrome (14)</h2>
            <h2 className='hover:text-black'>Concrete (11)</h2>
            <h2 className='hover:text-black'>Glass (1)</h2>
            <h2 className='hover:text-black'>Metal (9)</h2>
            <h2 className='hover:text-black'>Steel (2)</h2>
            <h2 className='hover:text-black'>Wood (30)</h2>
          </div>
          </div>
  
        </div>
        <div className='p-12 ml-48 text-gray-500 text-lg '>
          <div>
            <div className='flex space-x-96'>

              <h2>Showing 1-12 of 57 results</h2>
              <div className='border border-gray-400 py-2 px-2'>
                <select name="" id="">
                  <option value="">DeFult sorting</option>
                  <option value="">sort by popularity</option>
                  <option value="">sort by average rating</option>
                  <option value="">sort by latest</option>
                  <option value="">sort by price: low to high</option>
                  <option value="">sort by price: high to low</option>
                </select>
              </div>
            </div>
            
            <div className='grid grid-cols-4 gap-4 lg:max-xl:grid-cols-3 md:max-lg:grid-cols-2 sm:max-md:grid-cols-1'>
              <div>

                <img className='h-60 mt-10 ' src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/variable-product-img-505x505.jpg" alt="" />
                {/* <div className='flex absolute '>
                  <button className='bg-black text-center text-white font-bold text-sm py-1 px-1 '>Quick Look</button>
                  <IoIosHeart />
                </div> */}
                <div className=' text-black font-semibold py-1 px-5 mt-4 '>
                  <h2>VARIABLE PRODUCT</h2>
                </div>
                <div className='flex ml-14 mt-2 space-x-1'>

                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                </div>
                <h2 className='ml-24'>$390</h2>
              </div>
              <div className=''>
                <h3 className='absolute mt-10 ml-2'>New</h3>
                <img className='h-60 mt-10 ' src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-505x505.jpg" alt="" />
                <div className=' text-black font-semibold py-1 ml-14 mt-4 '>
                  <h2>TABLE LAMP</h2>

                </div>
                <div className='flex ml-14 mt-2 space-x-1'>

                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />

                </div>
                <h2 className='ml-24'>$240</h2>
              </div>
              <div>
                <img className='h-60 mt-10' src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-505x505.jpg" alt="" />
                <div className=' text-black font-semibold py-1 ml-12 mt-4 '>
                  <h2>POTTERY VASE</h2>
                </div>
                <div className='flex ml-14 mt-2 space-x-1'>

                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />

                </div>
                <h2 className='ml-24'>$60</h2>
              </div>
              <div>
                <img className='h-60 mt-10' src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-1-505x505.jpg" alt="" />
                <div className=' text-black font-semibold py-1 ml-10 mt-4 '>
                  <h2>ROSE HOLDBACK</h2>
                </div>
                <div className='flex ml-14 mt-2 space-x-1'>

                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />

                </div>
                <div className='ml-24 flex space-x-2'>
                  <del>$30</del>
                  <h2>$24</h2>
                </div>
              </div>
              {/* Secound Row */}
              <div>
                <img className='h-60 mt-10' src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4-505x505.jpg" alt="" />
                <div className=' text-black font-semibold py-1 ml-4 mt-4 '>
                  <h2>NEWSPAPER STORAGE</h2>
                </div>
                <div className='flex ml-14 mt-2 space-x-1'>

                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                </div>
                <h2 className='ml-24'>$90</h2>
              </div>
              <div>
                <img className='h-60 mt-10' src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-505x505.jpg" alt="" />
                <div className=' text-black font-semibold py-1 ml-14 mt-4 '>
                  <h2>WALL CLOCK</h2>
                </div>
                <div className='flex ml-14 mt-2 space-x-1'>

                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                </div>
                <h2 className='ml-24'>$110</h2>
              </div>
              <div>
                <img className='h-60 mt-10' src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-505x505.jpg" alt="" />
                <div className=' text-black font-semibold py-1 ml-8 mt-4 '>
                  <h2>DECO ACCESSORY</h2>
                </div>
                <div className='flex ml-14 mt-2 space-x-1'>

                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                </div>
                <h2 className='ml-24'>$15</h2>
              </div>
              <div>
                <img className='h-60 mt-10' src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-505x505.jpg" alt="" />
                <div className=' text-black font-semibold py-1 ml-12 mt-4 '>
                  <h2>FLOWER VASE</h2>
                </div>
                <div className='flex ml-14 mt-2 space-x-1'>

                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                </div>
                <div className='flex space-x-2 ml-16'>
                    <del>$210</del>
                    <h2>$170</h2>
                </div>
              </div>
              {/* Third Row */}
              <div>
                <img className='h-60 mt-10' src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-505x505.jpg" alt="" />
                <div className=' text-black font-semibold py-1  mt-4 '>
                  <h2 className='ml-3'>BASKET WITH HANDLES</h2>
                </div>
                <div className='flex ml-14 mt-2 space-x-1'>

                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                </div>
                <h2 className='ml-24'>$160</h2>
              </div>
              <div>
                <img className='h-60 mt-10' src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h3-product-2-505x505.jpg" alt="" />
                <div className=' text-black font-semibold py-1 ml-3 mt-4 '>
                  <h2 className='ml-3'>ELEGANT PENDANT</h2>
                </div>
                <div className='flex ml-14 mt-2 space-x-1'>

                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                </div>
                <h2 className='ml-24'>$290</h2>
              </div>
              <div>
                <img className='h-60 mt-10' src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h3-product-3-505x505.jpg" alt="" />
                <div className=' text-black font-semibold py-1 ml-3 mt-4 '>
                  <h2 className='ml-3'>FLOWERING CACTUS</h2>
                </div>
                <div className='flex ml-14 mt-2 space-x-1'>

                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                </div>
                <h2 className='ml-24'>$65</h2>
              </div>
              <div>
                <img className='h-60 mt-10' src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h3-product-4-505x505.jpg" alt="" />
                <div className=' text-black font-semibold py-1 px-5 mt-4 '>
                  <h2 className='ml-2'>SHELL COLLECTION</h2>
                </div>
                <div className='flex ml-14 mt-2 space-x-1'>

                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                </div>
                <h2 className='ml-24'>$25</h2>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop