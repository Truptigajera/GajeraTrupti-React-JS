
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";


const AboutUs = () => {
  const [text, Settext] = useState("Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel, suscipit ultrices nunc. Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh.");

  const text_P = () => {
    Settext(
      "Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel, suscipit ultrices nunc. Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh."
    );
  };

  const text_Q = () => {
    Settext(
      "Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh. In hac habitasse platea dictumst. Proin nec blandit ligula. Donec volutpat leo turpis, vel accumsan nunc convallis id. Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum."
    );
  };

  const text_R = () => {
    Settext(
      "Donec volutpat leo turpis, vel accumsan nunc convallis id. Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh. In hac habitasse platea dictumst. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis. Proin nec."
    );
  };

  return (
    <>
      <div>

        <div className="">
          <div className="flex justify-center items-center bg-image">
            <h1 className="text-6xl text-center text-white font-bold">
              ABOUT US
            </h1>
          </div>
        </div>

        <div className="p-28 ">
          <div className=" grid-col-2 flex">
            <div>
            <img className="h-[303px] w-[520px]" src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/about-img-1.jpg" alt="" />
            </div>
            <div className="ms-10 h-[303px] w-[600px]">
              <div className=" space-x-20">
                <button onClick={text_P}
                  className="border py-5 px-8 font-semibold  hover:bg-black hover:text-white focus:bg-black focus:text-white">ABOUT US</button>
                <button onClick={text_Q}
                  className="border py-5 px-8 font-semibold hover:bg-black hover:text-white focus:bg-black focus:text-white">SERVICE</button>
                <button onClick={text_R}
                  className="border py-5 px-8 font-semibold hover:bg-black hover:text-white focus:bg-black focus:text-white">HISTORY </button>
              </div>
              <div className="w-[660px] mt-10"><p className="text-gray-400 tracking-wide pe-20 ">{text}</p></div>
              <div className="flex mt-7">
                <a href="" className="tracking-wider text-gray-500 font-semibold">Learn More </a> <GoArrowRight className="mt-1 ms-1 text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default AboutUs;