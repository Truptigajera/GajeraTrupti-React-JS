import React, { useState } from 'react'
// import Footer from './Footer'
const AboutUs = () => {

  const [text , settext] = useState("Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel, suscipit ultrices nunc. Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh.")

  function text1(){
    settext("Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel, suscipit ultrices nunc. Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh.")
  }

  
  function text2(){
    settext("Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh. In hac habitasse platea dictumst. Proin nec blandit ligula. Donec volutpat leo turpis, vel accumsan nunc convallis id. Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum.")
  }

  function text3(){
    settext("Donec volutpat leo turpis, vel accumsan nunc convallis id. Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh. In hac habitasse platea dictumst. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis. Proin nec.")
  }

  return (
    <div>
        <div className='bg-image '>
          <div className='flex justify-center items-center p-[150px] text-white font-semibold text-5xl'>About US</div>
        </div>
        <div className='grid grid-cols-2 '>
            <img className='h-[300px] m-14 ' src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/about-img-1.jpg" alt="" />
            <div className='space-x-6 mt-14 '>
              <button onClick={text1} className='border  border-black  py-4 px-6 bg-black text-white  '>About Us</button>
              <button onClick={text2}  className='border  border-black py-4 px-6  hover:bg-black hover:text-white'>Services</button>
              <button onClick={text3}  className='border  border-black py-4 px-6 hover:bg-black hover:text-white'>History</button>
              <p>{text}</p>
            </div>
        </div>
       <div className=''>

       </div>
    </div>
  )
}

export default AboutUs