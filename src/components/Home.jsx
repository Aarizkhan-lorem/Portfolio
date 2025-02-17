
import { TbBrandRedux } from "react-icons/tb";
import { SiFramer } from "react-icons/si";
import { useEffect } from "react";
import { IoLogoFigma } from "react-icons/io5";
import { useState } from "react";
import { FaJsSquare } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import home from "../assets/home.webp";
import MyPic from "../assets/MyPic-removebg-preview.png"; 
import work1 from "../assets/work-1.png";
import work2 from "../assets/work-2.png";
import work3 from "../assets/work-3.png";
import work4 from "../assets/work-4.png";
import { FiFigma } from "react-icons/fi";
const Home = () => {
  const [animateGradient, setAnimateGradient] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimateGradient(true);
    }, 500);
  }, []);
  
  return (
    <div className="font-[Inter] opacity-0 animate-fade-in">
      {/* Hero Section */}
      <div className="mt-28 w-full flex flex-col items-center justify-center min-h-screen px-6">
        <div className="w-full max-w-xl lg:max-w-2xl text-center flex flex-col gap-8">
          {/* Title */}
          <div
            className={`transition-all duration-1000 text-5xl sm:text-6xl md:text-7xl font-bold leading-tight ${
              animateGradient
                ? "bg-gradient-to-b from-blue-600 to-black bg-clip-text text-transparent"
                : "text-gray-800"
            }`}
          >
            <h1>Exceptional</h1>
            <h1
              className={`text-[2.8rem] duration-1000 sm:text-6xl md:text-7xl ${
                animateGradient
                  ? "bg-gradient-to-b from-blue-600 to-black bg-clip-text text-transparent"
                  : "text-gray-800"
              }`}
            >
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

      {/* video Section */}
      <div className="w-[80%] sm:w-[70%] mx-auto">
        <div className="w-full relative">
          <img src={home} alt="" />
          <video
            autoPlay
            playsInline
            muted
            loop
            className="absolute w-3/4 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
          >
            <source src="/showreel-hero-final.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* me section */}
      <div className="mt-28  w-[90%] sm:w-[80%] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-around">
        {/* Left Content */}
        <div className="w-full sm:w-6/12 text-center sm:text-left">
          <h1 className="text-3xl sm:text-6xl lg:text-7xl leading-tight">
            They call me a <br />
            <span className="bg-gradient-to-br from-blue-600 to-red-400 bg-clip-text text-transparent font-semibold">
              Full-Stack Web Developer.
            </span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            <span className="font-serif ">Aariz</span> builds pixel-perfect,
            high-performance, and scalable digital experiences using React,
            Next.js, Tailwind, Node.js, Express, and databases like MongoDB &
            MySQL.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full sm:w-5/12 flex relative justify-center mt-10 sm:mt-0">
          <div
            className="absolute w-full -z-10 blur-[100px] sm:blur-[10rem] h-full 
            bg-gradient-to-b from-blue-300 via-purple-300 to-pink-400 rounded-lg"
          ></div>
          <img
            src={MyPic}
            alt="Aariz Khan"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto filter grayscale-[100%] rounded-full"
          />
        </div>
      </div>

      {/* my work sectiom */}
      <div className="flex flex-col items-center mt-52 w-[90%] sm:w-[80%] mx-auto">
        <h2 className="text-center text-3xl sm:text-6xl font-semibold">
          A small selection <br /> of my work.
        </h2>
        <div className="w-full h-[700px] grid grid-cols-1 gap-7 mt-20 sm:grid-cols-2">
          <div className="relative bg-gradient-to-tr from-pink-200 via-pink-400 to-red-400 rounded-3xl flex justify-center items-end group overflow-hidden min-h-[150px] sm:min-h-[300px]">
            <img
              src={work1}
              alt=""
              className="absolute bottom-0 rounded-t-xl h-[80%] w-[80%] object-cover duration-200 group-hover:w-full group-hover:h-full"
            />
            <div className="absolute  inset-0 flex justify-end items-baseline p-4 text-gray-600  font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 relative  bg-gray-200 rounded-full">
                <span className="text-4xl absolute left-2 -top-[2px] font-extralight">
                  +
                </span>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-tr from-amber-200 via-orange-300 to-red-300 rounded-3xl flex justify-center items-end group overflow-hidden min-h-[150px] sm:min-h-[300px]">
            <img
              src={work2}
              alt=""
              className="absolute bottom-0 rounded-t-xl h-[80%] w-[80%] object-fit duration-200 group-hover:w-full group-hover:h-full"
            />
            <div className="absolute  inset-0 flex justify-end items-baseline p-4 text-gray-600  font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 relative  bg-gray-200 rounded-full">
                <span className="text-4xl absolute left-2 -top-[2px] font-extralight">
                  +
                </span>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-tr from-gray-200 via-slate-200 to-white rounded-3xl flex justify-center items-end group overflow-hidden min-h-[150px] sm:min-h-[300px]">
            <img
              src={work4}
              alt=""
              className="absolute bottom-0 rounded-t-xl h-[80%] w-[80%] object-fit duration-200 group-hover:w-full group-hover:h-full"
            />
            <div className="absolute  inset-0 flex justify-end items-baseline p-4 text-gray-600  font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 relative  bg-gray-200 rounded-full">
                <span className="text-4xl absolute left-2 -top-[2px] font-extralight">
                  +
                </span>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-tr from-gray-700 via-gray-500 to-gray-100 rounded-3xl flex justify-center items-end group overflow-hidden min-h-[150px] sm:min-h-[300px]">
            <img
              src={work3}
              alt=""
              className="absolute bottom-0 rounded-t-xl h-[80%] w-[80%] object-fit duration-200 group-hover:w-full group-hover:h-full"
            />
            <div className="absolute  inset-0 flex justify-end items-baseline p-4 text-gray-600  font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 relative  bg-gray-200 rounded-full">
                <span className="text-4xl absolute left-2 -top-[2px] font-extralight">
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2  mt-14 text-blue-700 text-xl  hover:bg-gray-200 cursor-none p-4 hover:rounded-lg duration-100">
          Load more projects
          <GoPlus className="text-2xl font-bold" />
        </div>
      </div>

      {/* about me section */}
      {/* dont touch this div */}
      {/* <div className="bg-[radial-gradient(circle_at_center,_black_0%,_hsl(270,100%,30%)_20%,_hsl(300,100%,50%)_40%,_hsl(330,100%,70%)_60%,_hsl(60,100%,80%)_80%,_hsl(0,0%,100%)_100%)] w-full h-screen "></div> */}
      <div className=" text-white inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.9)_0%,_rgba(0,0,0,0.7)_40%,_rgba(0,0,0,1)_70%,_rgba(0,0,0,1)_100%)] blur-5xl opacity-100">
        <div class="relative w-full h-[75vh]  mt-10">
          <div className="w-[80%] mx-auto pt-40 flex flex-col items-center ">
            <h1 className="text-center text-2xl sm:text-6xl">
              Your Vision, Built <br /> Online with a Trusted Partner.
            </h1>
            {/* this is start */}
            <div className="text-white w-full min-h-[800px] sm:min-h-[400px] mt-36 grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-2 gap-3">
              <div className="w-full bg-[#181818] rounded-lg border border-gray-600 flex flex-col gap-2 justify-center items-center">
                <h1 className="text-5xl">2+</h1>
                <p className="text-lg">Years of Experience</p>
              </div>
              <div className="w-full bg-[#181818] rounded-lg border border-gray-600 flex flex-col gap-2 justify-center items-center">
                <h1 className="text-5xl">5+</h1>
                <p className="text-lg">Completed Projects</p>
              </div>
              <div className="w-full bg-[#181818] rounded-lg px-5 gap-7 text-wrap text-md sm:text-xl border flex flex-col justify-center items-center  border-gray-600 sm:col-span-2 sm:row-span-2">
                <img src={MyPic} className="rounded-full w-48 " />
                <div className="text-center">
                  I'm Aariz.
                  <br /> I'm a full-stack developer who learned to code by
                  building projects and solving problems. I've explored various
                  related fields, including DevOps, Android, and open source.
                </div>
              </div>
              <div className="w-full bg-[#181818] rounded-lg border border-gray-600 flex flex-col gap-2 justify-center items-center">
                <h1 className="text-5xl">100%</h1>
                <p className="text-lg">Passion</p>
              </div>
              <div className="w-full bg-[#181818] rounded-lg border border-gray-600 flex flex-col gap-2 justify-center items-center">
                <p className="text-xl text-center">
                  Expert <br /> Web Developer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative w-full h-screen" id="darkSection"></div>
        <div className="absolute left-[10%] top-[75.5%] hidden sm:flex sm:w-[80%] sm:mx-auto sm:mt-28 sm:justify-between">
          <div className="w-[70%] h-[300px] bg-[#181818] border rounded-lg border-gray-600 flex justify-center items-center ">
            <div className="flex flex-wrap ml-20  gap-12 text-7xl">
              <SiExpress />
              <SiTypescript />
              <FaNodeJs />
              <SiMongodb />
              <SiRedux />
              <FaReact />
              <FaJsSquare />
              <RiTailwindCssFill />
              <FaCss3 />
              <FaHtml5 />
              <FiFigma/>
              <SiFramer/>
            </div>
          </div>
          <div className="w-[29%] h-[300px] bg-[#181818] border rounded-lg border-gray-600 flex flex-col items-center justify-center gap-3 ">
            <div className="flex font-thin items-center justify-center text-7xl">
              <IoChevronBackOutline />
              <IoChevronForward />
            </div>
            <h1 className="text-3xl">Core Skills</h1>
          </div>
        </div>
      </div>

      <div className="w-full h-screen ">HELLO</div>
    </div>
  );
};

export default Home;
