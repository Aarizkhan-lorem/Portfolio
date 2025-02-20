import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Blog1 from "./components/Blog1";
import CustomCursor from "./components/CustomCursor";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <div className="cursor-none">
      <CustomCursor />
      <div className="w-full  absolute text-xl sm:top-32 top-0 sm:bg-transparent bg-white text-center z-40 text-red-800">
        🚧 Portfolio Under Construction – Something amazing is coming soon! 🚧
      </div>
      <Navbar />
      <Outlet />
    </div>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blogs-beginner-to-developer", element: <Blog1 /> },
    ],
  },
]);

const ScrollingCards = () => {
  return <RouterProvider router={router} />;
};

export default ScrollingCards;
