import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [position]);

  return (
    <div
      className="fixed w-5 h-5 bg-white bg-opacity-100 shadow-2xl border-4 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
      style={{
        left: `${position.x}px`, // Add "px" here
        top: `${position.y}px`, // Add "px" here
      }}
    ></div>
  );
};

export default CustomCursor; // Default export
