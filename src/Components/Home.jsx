import React from "react";
import herobg from "../Images/hero-img-1.webp";
import Advantages from "./Advantages";
import PartnerwithUs from "./PartnerwithUs";
import SolarSolutions from "./SolarSolutions";
import Objectives from "./Objectives";
import Testimonials from "./Testimonials";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div>
      {/*---join the green revolution section---*/}
      <div className="bg-[#7AD8E0] ">
        <div className="bg-pattern pt-[3%] ">
          <div className="flex max-[1100px]:flex-col mx-[5%] h-auto ">
            <div className="w-1/3 max-[1100px]:w-full bg-[#FFD36D] p-6 rounded-l-2xl h-auto flex flex-col">
              <h1 className="text-4xl font-semibold leading-[44px] text-[40px] text-[#4348BD] mb-6">
                Join The Green Revolution
              </h1>
              <p className="text-xl text-[#133819] pr-12 text-[24px] font-[500px] leading-[36px]">
                Empowering Communities with Sustainable Solar Solutions
              </p>
            </div>
            <div className="w-2/3 max-[1100px]:w-full h-auto ">
              <Slider {...settings} className="w-full">
                <div className="relative w-full mb-[-6px]">
                  <img src={herobg} className="w-full h-auto" alt="Slide 1" />

                  <div className="absolute bottom-0 left-0 right-0 bg-[rgba(13,13,13,0.5)]">
                    <h1 className="text-[16px] font-bold  text-center text-white rounded-br-3xl leading-[4rem] pb-3 max-[600px]:leading-[2rem]">
                      Transition to Green Future with us
                    </h1>
                  </div>
                </div>
                <div className="relative w-full  mb-[-6px]">
                  <img src={herobg} className="w-full h-auto" alt="Slide 2" />
                  <div className="absolute bottom-0 left-0 right-0 bg-[rgba(13,13,13,0.5)]">
                    <h1 className="text-[16px] font-bold  text-center text-white rounded-br-3xl leading-[4rem] pb-3  max-[600px]:leading-[2rem]">
                      Transition to Green Future with us
                    </h1>
                  </div>
                </div>
                <div className="relative w-full  mb-[-6px]">
                  <img src={herobg} className="w-full h-auto" alt="Slide 3" />
                  <div className="absolute bottom-0 left-0 right-0 bg-[rgba(13,13,13,0.5)]">
                    <h1 className="text-[16px] font-bold  text-center text-white   rounded-br-3xl leading-[4rem] pb-3  max-[600px]:leading-[2rem]">
                      Transition to Green Future with us
                    </h1>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/*---join the green revolution-section close--*/}
      {/*---Advantages of solar section---*/}
      <Advantages />

      {/*---Partner With Us section----*/}
      <PartnerwithUs />
      {/*---solar solutions section----*/}
      <SolarSolutions />
      {/*---Objectives section----*/}
      <Objectives />
      {/*---Testmonials----*/}
      <Testimonials />
    </div>
  );
};

export default Home;
