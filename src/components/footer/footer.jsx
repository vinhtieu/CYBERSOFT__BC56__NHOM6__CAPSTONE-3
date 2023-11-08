import React from "react";

export default function Footer() {
  const tweeterIcon = "src/assets/img/icons8-twitter.svg";
  const facebookIcon = "src/assets/img/icons8-facebook-64.png";
  const instaIcon = "src/assets/img/icons8-insta-50.png";
  const linkedinIcon = "src/assets/img/icons8-linkedin.svg";

  return (
    <footer className="w-full h-auto mt-auto bg-transparent">
      <div className="w-[90%] py-8 lg:py-10 px-2 mr-auto ml-auto flex flex-col items-center justify-between text-sm sm:text-base md:text-lg 2xl:text-xl text-white cursor-pointer">
        <div className="flex flex-row gap-10 mb-8 lg:gap-16 lg:mb-14">
          <figure className="w-8 h-8 lg:w-10 lg:h-10">
            <img
              className="object-contain w-full h-full"
              src={tweeterIcon}
              alt="Tweeter Icon"
            />
          </figure>
          <figure className="w-8 h-8 lg:w-10 lg:h-10">
            <img
              className="object-contain w-full h-full"
              src={facebookIcon}
              alt="Facebook Icon"
            />
          </figure>
          <figure className="w-8 h-8 lg:w-10 lg:h-10">
            <img
              className="object-contain w-full h-full"
              src={instaIcon}
              alt="Instagram Icon"
            />
          </figure>
          <figure className="w-8 h-8 lg:w-10 lg:h-10">
            <img
              className="object-contain w-full h-full"
              src={linkedinIcon}
              alt="Linkedin Icon"
            />
          </figure>
        </div>
        <div className="mb-2 lg:mb-4">
          <span className="">Info</span>
          <span className="inline-block w-1 h-1 mx-1 mb-1 bg-gray-400 rounded-full"></span>
          <span className="">Support</span>
          <span className="inline-block w-1 h-1 mx-1 mb-1 bg-gray-400 rounded-full"></span>
          <span className="">Marketing</span>
        </div>
        <div className="mb-2 lg:mb-4">
          <span className="">Terms of Use</span>
          <span className="inline-block w-1 h-1 mx-1 mb-1 bg-gray-400 rounded-full"></span>
          <span className="">Privacy Policy</span>
        </div>
        <span className="text-sm text-gray-400 lg:text-base">
          @ 2023 All Rights Reserved
        </span>
      </div>
    </footer>
  );
}
