import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigateTo = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full h-24 p-4 transition-opacity duration-300 bg-red-400
          ${isScrolled ? "bg-opacity-50" : "bg-opacity-0"}`}>
      <div className="container flex flex-row items-center justify-between h-full mx-auto">
        <a
          className="text-5xl text-[#ad3639] cursor-pointer"
          style={{
            fontFamily: "Archivo Black , sans-serif",
          }}
          onClick={() => {
            navigateTo("/");
          }}>
          <figure className="aspect-auto w-[75px]">
            <img src="src\assets\lux_final-logo.png" alt="" />
          </figure>
        </a>
        <nav className="space-x-8 text-2xl text-white">
          <a href="" className="p-2 hover:text-gray-500">
            Showtimes
          </a>
          <a href="" className="p-2 hover:text-gray-500">
            Theater
          </a>
          <a href="" className="p-2 hover:text-gray-500">
            Food & Drink
          </a>
        </nav>

        <a
          className="text-2xl text-white hover:text-gray-500"
          href=""
          onClick={() => {
            navigateTo("/login");
          }}>
          Login
        </a>
      </div>
    </div>
  );
}
