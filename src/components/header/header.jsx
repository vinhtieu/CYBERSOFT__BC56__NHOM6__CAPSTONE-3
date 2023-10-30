import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigateTo = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 80) {
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
      className={`fixed top-0 left-0 z-50 w-full h-24 p-4  bg-gradient-to-b from-black to-transparent
          ${isScrolled ? "solid-background" : "gradient-background"}`}>
      <div className="container flex flex-row items-center justify-between h-full mx-auto text-xl">
        <a
          className=" text-[#ad3639] cursor-pointer"
          style={{
            fontFamily: "Archivo Black , sans-serif",
          }}
          onClick={() => {
            navigateTo("/");
          }}>
          <figure className="aspect-auto w-[75px]">
            <img src="src\assets\img\lux_final-logo.png" alt="" />
          </figure>
        </a>
        <nav className="space-x-8  text-white">
          <a href="" className="p-2 hover:text-[#ae1f22]">
            Showtimes
          </a>
          <a href="" className="p-2 hover:text-[#ae1f22]">
            Theater
          </a>
          <a href="" className="p-2 hover:text-[#ae1f22]">
            Food & Drink
          </a>
        </nav>

        <a
          className=" text-white hover:text-[#ae1f22]"
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
