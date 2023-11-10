import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { navMenuSlice } from "../../lib/redux";

export default function DesktopHeader() {
  const openNavMenu = useSelector((state) => state.navMenu.isOpen);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigateTo = useNavigate();
  const headerRef = useRef(0);
  const { toggleNavMenu } = navMenuSlice.actions;
  const dispatch = useDispatch();

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
    <>
      <div
        ref={headerRef}
        className={`fixed top-0 left-0 z-[100] h-24 2xl:h-32 w-full py-7 px-2 transition-all duration-300
      ${isScrolled ? "solid-background " : "gradient-background"}`}>
        <div className="w-[90%] flex flex-row items-center justify-between h-full mx-auto  z-[95]">
          <a
            className=" text-[#ad3639] cursor-pointer"
            onClick={() => {
              navigateTo("/");
            }}>
            <figure className="w-16 min-[1279.98px]:w-[3.2vw] transition-all">
              <img
                className="w-full h-full"
                src="src\assets\img\lux_final-logo.png"
                alt=""
              />
            </figure>
          </a>
          <nav className="space-x-8 text-white text-sm lg:text-base 2xl:text-[18px] transition-all duration-300 inline-block max-[939.98px]:hidden">
            <a
              href=""
              className="p-2 hover:text-[#ae1f22]"
              onClick={() => {
                navigateTo("/");
              }}>
              HOME
            </a>
            <a
              href=""
              className="p-2 hover:text-[#ae1f22]"
              onClick={() => {
                navigateTo("/showtimes");
              }}>
              SHOWTIMES
            </a>
            <a
              href=""
              className="p-2 hover:text-[#ae1f22]"
              onClick={() => {
                navigateTo("/food&drink");
              }}>
              FOOD & DRINK
            </a>
          </nav>
          <a
            className=" text-white hover:text-[#ae1f22] text-xs lg:text-[14px] 2xl:text-[18px] transition-all duration-300 inline-block max-[939.98px]:hidden"
            href=""
            onClick={() => {
              navigateTo("/login");
            }}>
            LOGIN
          </a>
          <button
            onClick={() => {
              dispatch(toggleNavMenu());
            }}
            className="hidden max-[939.98px]:inline-block w-10 aspect-square">
            <img
              className="w-full h-full"
              src={`${
                openNavMenu
                  ? "src/assets/img/cross.png"
                  : "src/assets/img/hamburger-icon.svg"
              }`}
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
}
