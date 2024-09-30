import React from 'react'
import { LiaSearchSolid } from "react-icons/lia";
import faqtext from '../../faq-json.json';


const FAQ = () => {
  return (
    <div>
      <div>
        <div className='faq-bg flex justify-center items-center object-fit-cover text-[50px] font-bold text-white'>FAQ
        </div>
        <div className='flex mt-24'>
          <div >
            <div className='w-72 py-2 ms-36'>
              <h1 className='text-gray-900 text-2xl font-semibold '>FREQUENTLY ASKED QUESTIONS</h1>
              <p className='text-gray-400 py-4 text-md' >Successful brands get into the mind slowly. A blurb in a magazine. A mention in a newspaper. A comment from a friend. A display in a retail</p>
              <ul className='text-gray-400 py-8'>
                <li>Company Policies</li>
                <li>Payment option</li>
                <li>Terms & condition</li>
                <li>Positioning</li>
                <li>Efficient</li>
                <li>MarketPlace</li>
                <li>Condition</li>
                <li>Mind Procedure</li>
                <li>Delivery Job</li>
              </ul>
              <div className='flex items-center border-2 w-60 mt-10'>
                <input type="search"
                  className='flex h-12 ms-4' placeholder="Enter your keyword..." value="" name=""
                  title='search for:' />
                <LiaSearchSolid className='text-2xl text-gray-400' />
              </div>
            </div>            
          </div>
          <div className='w-6/12 ms-24'>
            {
              faqtext.map((item)=>{
                return(
                  <div className='mt-4'>
                    <h1 className='text-gray-800 font-semibold'>{item.title}</h1>
                    <p className='text-gray-400 my-4'>{item.answer}</p>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default FAQ