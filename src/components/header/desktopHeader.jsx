import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGGING_OUT, LOG_IN } from "../../constant";
import { Dropdown } from "antd";
import "./style.css";
import { cinemaSlice, userSlice } from "../../lib/redux";

export default function DesktopHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const AccountStatus = useSelector((state) => state.user.accountStatus);
  const { setAccountStatus } = userSlice.actions;
  const headerRef = useRef(0);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const HandleLogoutUser = () => {
    console.log("Logout User");
    dispatch(setAccountStatus(LOGGING_OUT));
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
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
            HandleLogoutUser();
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
      <a
        className=" text-white hover:text-[#ae1f22] text-xs lg:text-[14px] 2xl:text-[18px] transition-all duration-300 inline-block max-[939.98px]:hidden"
        href=""
        onClick={() => {
          navigateTo("/login");
        }}>
        Log in
      </a>
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
        className={`fixed top-0 left-0 z-[100] h-20 2xl:h-24 w-full py-5 px-2 transition-all duration-300
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
          <div className="space-x-8 text-white text-sm lg:text-base 2xl:text-[18px] transition-all duration-300 inline-block max-[939.98px]:hidden">
            <a
              href=""
              className="p-2 hover:text-[#ae1f22]"
              onClick={() => {
                navigateTo("/");
              }}>
              Home
            </a>
            <a
              href=""
              className="p-2 hover:text-[#ae1f22]"
              onClick={() => {
                navigateTo("/showtimes");
              }}>
              Showtimes
            </a>
            <a
              href=""
              className="p-2 hover:text-[#ae1f22]"
              onClick={() => {
                navigateTo("/food&drink");
              }}>
              Food & Drink
            </a>
          </div>
          {AccountStatus === LOG_IN ? renderUserNav() : renderLoginNav()}
        </div>
      </div>
    </>
  );
}
