import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  useEffect(() => {
    const naam = document.querySelector(".naam");
    const kaam =document.querySelector("#kaam");
    const menuS =document.querySelector(".menuS");
    function kaamKaro(){
      naam.style.color ="white";
      kaam.style.color ="white";
      menuS.style.color ='white';
    }
    function kaamMatKaro(){
      naam.style.color = "black";
      kaam.style.color = "#6b7280";
      menuS.style.color = "black";
    }
    const darkSection = document.querySelector("#darkSection");

    if (!naam || !darkSection) return;

    const colorChangeCallback = (entries) => {
      entries[0].isIntersecting
        ? (kaamKaro())
        : (kaamMatKaro());
    };

    const colorChangeOptions = {};

    const colorChangeObserver = new IntersectionObserver(
      colorChangeCallback,
      colorChangeOptions
    );
    colorChangeObserver.observe(darkSection);

    // Cleanup observer on unmount
    return () => colorChangeObserver.disconnect();
  }, []);



  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  useEffect(() => {
    if (hamburgerClicked) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup when component unmounts
    };
  }, [hamburgerClicked]);

  return (
    <div className="w-full flex justify-center fixed  z-10 backdrop-blur-md top-0">
      {/* Mobile Menu Button */}
      <div
        className="cursor-pointer md:hidden p-3 absolute right-0 duration-200 menuS"
        onClick={() => setHamburgerClicked((prev) => !prev)}
      >
        {!hamburgerClicked && <GiHamburgerMenu size={24} />}
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed right-0 top-0 h-screen w-full md:w-3/5 lg:w-2/5 bg-white/95 z-50 
              transform transition-all duration-700 ease-out origin-right shadow-xl
              ${
                hamburgerClicked
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0"
              }`}
      >
        {/* Close Button */}
        <div
          className="p-4 text-black cursor-pointer absolute right-0"
          onClick={() => setHamburgerClicked((prev) => !prev)}
        >
          <IoClose size={30} />
        </div>

        {/* Sidebar Content */}
        <div className="p-40 mt-10 text-black flex justify-center items-center   flex-col gap-6 text-xl">
          <NavLink to="/work" onClick={() => setHamburgerClicked(false)}>
            Work
          </NavLink>
          <NavLink to="/benefits" onClick={() => setHamburgerClicked(false)}>
            Benefits
          </NavLink>
          <NavLink to="/process" onClick={() => setHamburgerClicked(false)}>
            Process
          </NavLink>
          <NavLink to="/about" onClick={() => setHamburgerClicked(false)}>
            About
          </NavLink>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="flex w-[80%] py-3 font-[Inter] border-b justify-between items-center">
        {/* Logo */}
        <div className=" text-xl text-black duration-200 naam">Aariz Khan</div>

        {/* Desktop NavLinks */}
        <ul className="hidden md:flex text-gray-500 gap-6" id="kaam">
          <NavLink to="/work">
            <li className="hover:text-cyan-600 transition">Work</li>
          </NavLink>
          <NavLink to="/benefits">
            <li className="hover:text-cyan-600 transition">Benefits</li>
          </NavLink>
          <NavLink to="/process">
            <li className="hover:text-cyan-600 transition">Process</li>
          </NavLink>
          <NavLink to="/about">
            <li className="hover:text-cyan-600 transition">About</li>
          </NavLink>
        </ul>

        {/* Project Request */}
        <div className="hidden md:flex gap-1 items-center text-md text-blue-700 cursor-pointer hover:text-blue-800 transition">
          <div>Project request</div>
          <FaChevronRight className="text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
