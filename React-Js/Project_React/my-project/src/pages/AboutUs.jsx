
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



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


        <div className="bg-slate-100">
          <div className="p-28">
          <h1 className=" text-center text-2xl font-semibold text-[#494747] mb-8">WHAT THEY’RE SAYING</h1>

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
                <div className="text-center ">
                   <p className="px-64 mt-5 text-[#929292]">
                    Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus. Lorem ipsum dolor sit amet, consectetur elit. In ut ullamcorper leo, eget euismod orci. Cum sociis pena tibus et magnis dis parturient montes, nascetur ipsum dolor sit amet.
                  </p>
                  <h1 className="mt-5 text-[#494747] font-medium">KELLY PRESTON</h1>
                  <p className="mt-1  text-[#929292]">Developer</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center">
                   <p className="px-64 mt-5 text-[#929292]">
                    Cum sociis natoque penatibus magnis dis parturienmontes, nasceturridiculus musestibulum ultricies aliquam convallis. Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci aliquenenan penatibus dis parturienmontes ultricies.  </p>
                  <h1 className="mt-5 text-[#494747] font-medium">CHRISTINE PARKER</h1>
                  <p className="mt-1  text-[#929292]">UX Designer</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center">
                   <p className="px-64 mt-5 text-[#929292]">Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus magnis dis parturienmontes, nasceturridiculus musestibulum ultricies aliquam convallis nibhelit penatibus magnis dis parturie eget.
                  </p>
                  <h1 className="mt-5 text-[#494747] font-medium">MASON ROBINSON</h1>
                  <p className="mt-1  text-[#929292]">Analyst</p>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>

        </div>

      </div>
    </>
  );
};

export default AboutUs;