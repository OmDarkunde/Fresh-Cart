import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa"; //icon
import hero1 from "../assests/hero__1.webp"
import hero2 from "../assests/hero__2.webp"
import hero3 from "../assests/hero__3.webp"


export default function Hero() {
  return (
    <div className="container pt-8">
      {/* first hero detail */}
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8 relative">
        {/* Image Section */}
        <div className="relative xl:col-span-2 xl:row-span-2">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={hero1}
            alt="hero image"
          />
        </div>
        {/* Text Section */}
        <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4 px-4 sm:px-0">
          <p className="text-lg sm:text-2xl hidden sm:block">
            100% original Dry fruits
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Dry Fruits Best Quality
          </h2>
          <p className="text-grey-500 text-lg sm:text-xl pt-4 sm:pt-8">
            Starting At{" "}
          </p>
          <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">
            ₹300
          </div>
          <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-sm sm:px-6 sm:py-3 cursor-pointer">
            Shop Now
            <FaLongArrowAltRight />
          </div>
        </div>
        {/* Second hero detail */}
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={hero2}
            alt="hero image"
          />
          <div className="absolute  max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-xl  text-black-800  sm:3xl md:text-3xl font-bold">
              Best Yummy Pizza
            </h2>
            <p className="text-grey-500 text-xl pt-4 ">Starting At </p>
            <div className="flex items-center space-x-4 font-medium text-red-600 text-2xl sm:text-4xl pb-8">
              <div>₹120</div>
              <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-1 text-[15px] sm:px-4 sm:py-2 cursor-pointer">
                Shop Now
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
        </div>

        {/* third hero detail */}
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={hero3}
            alt="hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl sm:3xl md:text-6xl font-bold">Chips</h2>
            <p className="text-grey-500 text-xl pt-4 ">Starting At </p>
            <div className="flex items-center space-x-4 font-medium text-red-600 text-2xl sm:text-4xl pb-8">
              <div>₹10</div>
              <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-1 text-[15px] sm:px-4 sm:py-2 cursor-pointer">
                Shop Now
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
