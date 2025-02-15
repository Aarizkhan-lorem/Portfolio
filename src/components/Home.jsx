import React from "react";
import { TbBrandRedux } from "react-icons/tb";
import { SiFramer } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const Home = () => {
  return (
    <div className="font-[Inter] opacity-0 animate-fade-in">
      {/* Hero Section */}
      <div className="mt-28 w-full flex flex-col items-center justify-center min-h-screen px-6">
        <div className="w-full max-w-xl lg:max-w-2xl text-center flex flex-col gap-8">
          {/* Title */}
          <div className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-b from-blue-600 to-black bg-clip-text text-transparent leading-tight">
            <h1>Exceptional</h1>
            <h1 className="text-[2.8rem] sm:text-6xl md:text-7xl">
              Web experiences
            </h1>
          </div>

          {/* Subtitle */}
          <p className="px-4 sm:px-8 text-gray-500 text-lg md:text-xl leading-relaxed">
            Premium web development for design-driven companies that value
            precision, creativity, and meticulous attention to detail. We craft
            seamless digital experiences with passion and expertise.
          </p>

          {/* Call-to-Action */}
          <div className="flex gap-2 items-center justify-center text-lg text-blue-700 cursor-pointer hover:text-blue-800 transition">
            <div className="">Start a project request</div>
            <FaChevronRight className="font-light text-blue-600" />
          </div>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center items-center gap-6 py-8">
            <FaLaptopCode className="text-5xl sm:text-6xl opacity-0 animate-fade-in delay-100" />
            <FaJsSquare className="text-5xl sm:text-6xl opacity-0 animate-fade-in delay-200" />
            <TbBrandRedux className="text-5xl sm:text-6xl opacity-0 animate-fade-in delay-300" />
            <SiFramer className="text-4xl sm:text-5xl opacity-0 animate-fade-in delay-400" />
            <IoLogoFigma className="hidden sm:block text-4xl sm:text-5xl opacity-0 animate-fade-in delay-500" />
          </div>
        </div>
      </div>

      {/* Extra Section */}
      <div className="w-full h-screen"></div>
    </div>
  );
};

export default Home;
