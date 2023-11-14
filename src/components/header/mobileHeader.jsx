import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { navMenuSlice } from "../../lib/redux";
import { PAGE } from "../../constant";
import { Overlay } from "../../components";

export default function MobileHeader() {
  const isNavMenuOpen = useSelector((state) => state.navMenu.isOpen);
  const activePage = useSelector((state) => state.navMenu.onPage);
  const { toggleNavMenu, setPage } = navMenuSlice.actions;
  const [isScrolled, setIsScrolled] = useState(false);
  const navigateTo = useNavigate();
  const headerRef = useRef(0);
  const dispatch = useDispatch();

  const handleScroll = () => {
    const component = headerRef.current.getBoundingClientRect();
    if (window.scrollY > component.height) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 938.98) {
      dispatch(toggleNavMenu(false));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* //Header */}
      <div
        ref={headerRef}
        className={`fixed top-0 left-0 z-[100] h-24 2xl:h-32 w-full py-7 px-2transition-all duration-300
            ${isScrolled ? "solid-background" : "gradient-background"}`}>
        <div className="w-[90%] flex flex-row items-center justify-between h-full mx-auto text-xl z-[95] relative">
          <div
            className=" text-[#ad3639] cursor-pointer"
            style={{
              fontFamily: "Archivo Black , sans-serif",
            }}
            onClick={() => {
              dispatch(loadingOn());
              navigateTo("/");
            }}>
            <figure className="w-16 min-[1279.98px]:w-[3.2vw] transition-all">
              <img
                className="w-full h-full"
                src="src\assets\img\lux_final-logo.png"
                alt=""
              />
            </figure>
          </div>
          <button
            onClick={() => {
              dispatch(toggleNavMenu());
            }}
            className="hidden max-[939.98px]:inline-block w-10 aspect-square">
            <img
              className="w-full h-full"
              src={`${
                isNavMenuOpen
                  ? "src/assets/img/cross.png"
                  : "src/assets/img/hamburger-icon.svg"
              }`}
              alt=""
            />
          </button>
        </div>
        {/* Menu */}
        <div
          className={`${
            isNavMenuOpen ? "translate-x-0" : "translate-x-full"
          } fixed bottom-0 right-0 h-screen w-[50vw] bg-black p-2 z-[90] transition-all`}>
          <nav className="flex flex-col px-[calc(100vw-95vw-0.5rem)] mt-24 space-y-4 text-xl text-right text-gray-400 ">
            <div
              onClick={() => {
                dispatch(setPage(PAGE.HOME));
                navigateTo("/");
              }}
              className={`${
                activePage === PAGE.HOME
                  ? "after:content-[''] after:absolute after:-right-[calc(100vw-95vw)] after:w-2 after:h-full after:bg-[#ae1f22] "
                  : ""
              } hover:text-white relative leading-10 cursor-pointer`}
              href="">
              Home
            </div>
            <div
              onClick={() => {
                dispatch(setPage(PAGE.SHOW_TIMES));
                navigateTo("/showtimes");
              }}
              className={`${
                activePage === PAGE.SHOW_TIMES
                  ? "after:content-[''] after:absolute after:-right-[calc(100vw-95vw)] after:w-2 after:h-full after:bg-[#ae1f22] "
                  : ""
              } hover:text-white relative leading-10 cursor-pointer`}
              href="#!">
              Showtimes
            </div>
            <div
              onClick={() => {
                dispatch(setPage(PAGE.PROMOTION));
                navigateTo("/promotion");
              }}
              className={`${
                activePage === PAGE.PROMOTION
                  ? "after:content-[''] after:absolute after:-right-[calc(100vw-95vw)] after:w-2 after:h-full after:bg-[#ae1f22] "
                  : null
              } hover:text-white relative leading-10 cursor-pointer`}>
              Promotion
            </div>
            <div className="w-full h-px bg-gray-700"></div>
            <div
              onClick={() => {
                navigateTo("/login");
              }}
              className={` hover:text-white relative leading-10 cursor-pointer`}
              href="">
              Login
            </div>
          </nav>
        </div>
        {/* //Overlay */}
        <div
          onClick={() => {
            dispatch(toggleNavMenu(false));
          }}
          className={`${isNavMenuOpen ? "block" : "hidden"} `}>
          <Overlay position="fixed" />
        </div>
      </div>
    </>
  );
}
