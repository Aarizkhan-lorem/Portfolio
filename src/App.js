
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Blog1 from "./components/Blog1";
import CustomCursor from "./components/CustomCursor";
const ScrollingCards = () => {
  return (
    <div className="cursor-none">
      <CustomCursor/>
      <div className="w-full  absolute text-xl sm:top-32 top-0 sm:bg-transparent bg-white text-center z-40 text-red-800">
        🚧 Portfolio Under Construction – Something amazing is coming soon! 🚧
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs-beginner-to-developer" element={<Blog1 />} />
      </Routes>
    </div>
  );
};

export default ScrollingCards;
