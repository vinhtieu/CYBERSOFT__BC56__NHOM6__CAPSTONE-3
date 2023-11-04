import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigateTo = useNavigate();
  const headerRef = useRef(0);

  const handleScroll = () => {
    const component = headerRef.current.getBoundingClientRect();
    if (window.scrollY > component.height) {
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
      ref={headerRef}
      className={`fixed top-0 left-0 z-[100] h-12 md:h-16 lg:h-24 2xl:h-32 w-full py-7 px-2  transition-all duration-300
          ${isScrolled ? "solid-background" : "gradient-background"}`}>
      <div className="w-[90%] flex flex-row items-center justify-between h-full mx-auto text-xl">
        <a
          className=" text-[#ad3639] cursor-pointer"
          style={{
            fontFamily: "Archivo Black , sans-serif",
          }}
          onClick={() => {
            navigateTo("/");
          }}>
          <figure className="w-[3.7vw]">
            <img src="src\assets\img\lux_final-logo.png" alt="" />
          </figure>
        </a>
        <nav className="space-x-8  text-white text-xs lg:text-[14px] 2xl:text-[18px] transition-all duration-300">
          <a href="" className="p-2 hover:text-[#ae1f22]">
            SHOWTIMES
          </a>
          <a href="" className="p-2 hover:text-[#ae1f22]">
            THEATER
          </a>
          <a href="" className="p-2 hover:text-[#ae1f22]">
            FOOD & DRINK
          </a>
        </nav>

        <a
          className=" text-white hover:text-[#ae1f22] text-xs lg:text-[14px] 2xl:text-[18px] transition-all duration-300"
          href=""
          onClick={() => {
            navigateTo("/login");
          }}>
          LOGIN
        </a>
      </div>
    </div>
  );
}
