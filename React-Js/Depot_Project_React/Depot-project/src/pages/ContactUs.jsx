import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";



const Contact_Us = () => {
  return (
    <div>
      <div className='mt-6 container mx-auto'>
        <iframe className='w-full h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496114.0486423448!2d100.30342894327343!3d13.725048160959293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sin!4v1718101942885!5m2!1sen!2sin"></iframe>
      </div>
      <div>
        <div className="flex justify-around mt-28 ">
          <div className="flex space-x-7 w-3/12">
            <div>
              <IoIosCheckmarkCircleOutline className='size-12 text-gray-500' />
            </div>
            <div className="space-y-4">
              <h1 className="text-md font-semibold tracking-wider">PARIS STORE</h1>
              <p className="text-gray-400 text-[16px] font-light">
                86 rue de Raymond Poincaré, ParisMonday to Friday: 9am to 8pm
                depot@qodeinteractive.com
              </p>
            </div>
          </div>
          <div className="flex space-x-7 w-3/12">
            <div>
              <IoIosCheckmarkCircleOutline className='size-12 text-gray-500' />
            </div>
            <div className="space-y-4">
              <h1 className="text-md font-semibold tracking-wider">MADRID STORE</h1>
              <p className="text-gray-400 text-[16px] font-light">
                Plaza de la Fuensanta 13, Móstoles, Madrid Monday to Friday: 9am to 8pm depot@qodeinteractive.com
              </p>
            </div>
          </div>
          <div className="flex space-x-7 w-3/12">
            <div>
              <IoIosCheckmarkCircleOutline className='size-12 text-gray-500' />
            </div>
            <div className="space-y-4">
              <h1 className="text-md font-semibold tracking-wider">BERLIN STORE</h1>
              <p className="text-gray-400 text-[16px] font-light">
                Friedrichstrasse 18, Innenstadt, Berlin, Monday to Friday: 9am to 8pm depot@qodeinteractive.com
              </p>
            </div>
          </div>
        </div>

        <hr className="border-0.5 mx-16 mt-20 border-gray-200" />
        <div className="text-center px-[20%] h-auto mt-20">
          <h1 className="text-[16px] font-semibold tracking-wider">
            SUBSCRIBE TO NEWSLETTER
          </h1>
          <p className="text-[27px] mt-8 text-gray-400 font-light">
            Your brand’s power lies in dominance. It is better to have 50% of
            one market, instead of 10% of five markets.
          </p>
          <div className="mt-10 flex -space-x-2 justify-center items-center">
            <input
              type="search"
              className="border-2 w-7/12 py-4 text-sm ps-5 "
              placeholder="Email Address"
              value=""
              name=""
              title=""
            />
            <button className=" py-4 px-12 font-semibold hover:text-white bg-black text-white">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact_Us