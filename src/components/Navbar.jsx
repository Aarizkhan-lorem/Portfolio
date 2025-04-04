import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaChevronRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

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
          <Link
            to="section1"
            smooth={true} // Enables smooth scrolling
            duration={1000} // Scroll animation duration (in milliseconds)
            offset={100}
          >
            <p
              onClick={() => {
                setHamburgerClicked(false);
              }}
              className="hover:text-cyan-600 hover:cursor-pointer transition"
            >
              Work
            </p>
          </Link>
          <Link
            to="section2"
            smooth={true} // Enables smooth scrolling
            duration={1000} // Scroll animation duration (in milliseconds)
            offset={-50}
          >
            <p
              onClick={() => {
                setHamburgerClicked(false);
              }}
              className="hover:text-cyan-600 hover:cursor-pointer transition"
            >
              Benefits
            </p>
          </Link>
          <Link
            to="section3"
            smooth={true} // Enables smooth scrolling
            duration={1000} // Scroll animation duration (in milliseconds)
            offset={-50}
          >
            <p
              onClick={() => {
                setHamburgerClicked(false);
              }}
              className="hover:text-cyan-600 hover:cursor-pointer transition"
            >
              Process
            </p>
          </Link>
          <Link
            to="section4"
            smooth={true} // Enables smooth scrolling
            duration={1000} // Scroll animation duration (in milliseconds)
            offset={-50}
          >
            <p
              onClick={() => {
                setHamburgerClicked(false);
              }}
              className="hover:text-cyan-600 hover:cursor-pointer transition"
            >
              About
            </p>
          </Link>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="flex w-[80%] py-3 font-[Inter] border-b justify-between items-center">
        {/* Logo */}
        <NavLink to={"/"} className={`hover:cursor-none `}>
          <div className="font-cormorant italic text-4xl text-black duration-200 naam">
            Aariz Khan
          </div>
        </NavLink>

        {/* Desktop NavLinks */}
        <ul className="hidden md:flex text-gray-500 gap-6" id="kaam">
          <Link
            to="section1"
            smooth={true} // Enables smooth scrolling
            duration={1000} // Scroll animation duration (in milliseconds)
            offset={100}
            
          >
            <li className="hover:text-cyan-600 transition">
              Work
            </li>
          </Link>
          <Link
            to="section2"
            smooth={true} // Enables smooth scrolling
            duration={1000} // Scroll animation duration (in milliseconds)
            offset={-50}
          >
            <li className="hover:text-cyan-600 transition">
              Benefits
            </li>
          </Link>
          <Link
            to="section3"
            smooth={true} // Enables smooth scrolling
            duration={1000} // Scroll animation duration (in milliseconds)
            offset={-50}
          >
            <li className="hover:text-cyan-600 transition">
              Process
            </li>
          </Link>
          <Link
            to="section4"
            smooth={true} // Enables smooth scrolling
            duration={1000} // Scroll animation duration (in milliseconds)
            offset={-50}
          >
            <li className="hover:text-cyan-600 transition">
              About
            </li>
          </Link>
        </ul>

        {/* Project Request */}
        <Link
          to="form"
          smooth={true} // Enables smooth scrolling
          duration={1000} // Scroll animation duration (in milliseconds)
          offset={-50}
        >
          <div className="hidden md:flex hover:bg-gray-200 p-1 rounded-md gap-1 items-center text-md text-blue-700 hover:text-blue-800 transition">
            <div>Project request</div>
            <FaChevronRight className="text-blue-600" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
