import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGGING_OUT, LOG_IN, PAGE, PROCESSING } from "../../constant";
import { Dropdown } from "antd";
import "./style.css";
import {
  cinemaSlice,
  loadingScreenSlice,
  navMenuSlice,
  userSlice,
} from "../../lib/redux";

export default function DesktopHeader() {
  const userStatus = useSelector((state) => state.user.userStatus);
  const [isScrolled, setIsScrolled] = useState(false);
  const { loadingOn } = loadingScreenSlice.actions;
  const { setPage } = navMenuSlice.actions;
  const { setUserStatus } = userSlice.actions;
  const headerRef = useRef(0);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    dispatch(loadingOn());
    setTimeout(() => {
      dispatch(setUserStatus(LOGGING_OUT));
      localStorage.clear();
      sessionStorage.clear();
      navigateTo("/");
    }, 1000);
  };

  //Dropdown Items
  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="!#">
          Account
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="!#">
          Setting
        </a>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "3",
      label: (
        <button
          onClick={() => {
            handleLogoutUser();
          }}>
          Log out
        </button>
      ),
    },
  ];

  const changeColorOnScroll = () => {
    const component = headerRef.current.getBoundingClientRect();
    if (window.scrollY > component.height) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const renderUserNav = () => {
    return (
      <Dropdown menu={{ items }} placement="bottomRight" arrow>
        <figure className="w-12 h-12 rounded-lg cursor-pointer">
          <img
            className="object-cover object-center w-full h-full"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
          />
        </figure>
      </Dropdown>
    );
  };

  const renderLoginNav = () => {
    return (
      <div>
        <div
          className="mr-8 text-white hover:text-[#ae1f22] text-lg lg:text-xl 2xl:text-2xl transition-all duration-300 inline-block max-[939.98px]:hidden cursor-pointer"
          href=""
          onClick={() => {
            navigateTo("/login");
          }}>
          Log in
        </div>
        <div
          className="border-2 border-white hover:border-[#ae1f22] hover:bg-[#ae1f22] p-3 px-4 rounded-md text-white  text-lg lg:text-xl 2xl:text-2xl transition-all duration-300 inline-block max-[939.98px]:hidden cursor-pointer"
          href=""
          onClick={() => {
            navigateTo("/register");
          }}>
          Register
        </div>
      </div>
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColorOnScroll);
    return () => {
      window.removeEventListener("scroll", changeColorOnScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className={`fixed top-0 left-0 z-[100] h-24 2xl:h-28 w-full py-5 px-2 transition-all duration-300
      ${isScrolled ? "solid-background " : "gradient-background"}`}>
        <div className="w-[90%] flex flex-row items-center justify-between h-full mx-auto  z-[95] relative">
          <div
            className=" text-[#ad3639] cursor-pointer"
            onClick={() => {
              dispatch(setPage(PAGE.HOME));
              navigateTo("/");
            }}>
            <figure className="w-16 min-[1279.98px]:w-[3.2vw] transition-all">
              <img
                className="w-full h-full"
                src="/assets/img/lux_final-logo.png"
                alt=""
              />
            </figure>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 space-x-4 2xl:space-x-8 text-white text-lg lg:text-xl 2xl:text-2xl transition-all duration-300 inline-block max-[939.98px]:hidden">
            <div
              className="p-2 hover:text-[#ae1f22] inline-block cursor-pointer"
              onClick={() => {
                dispatch(setPage(PAGE.HOME));
                navigateTo("/");
              }}>
              Home
            </div>
            <div
              className="p-2 hover:text-[#ae1f22] inline-block cursor-pointer"
              onClick={() => {
                dispatch(setPage(PAGE.SHOW_TIMES));
                navigateTo("/showtimes");
              }}>
              Showtimes
            </div>
            <div
              className="p-2 hover:text-[#ae1f22] inline-block cursor-pointer"
              onClick={() => {
                dispatch(setPage(PAGE.PROMOTION));
                navigateTo("/promotion");
              }}>
              Promotion
            </div>
          </div>
          {userStatus === LOG_IN ? renderUserNav() : renderLoginNav()}
        </div>
      </div>
    </>
  );
}
