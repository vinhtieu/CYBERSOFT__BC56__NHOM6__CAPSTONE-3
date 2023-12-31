import React, { forwardRef } from "react";

const LoadingScreen = () => {
  return (
    <div className={`absolute top-0 left-0 bottom-0 right-0  bg-black z-[110]`}>
      <img
        className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 scale-[1.5] min-[665.98px]:scale-[2.5]"
        src="/assets/img/spinner.svg"
        alt=""
      />
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 scale-[.15] "
        src="/assets/img/lux_final-logo.png"
        alt=""
      />
    </div>
  );
};

export default LoadingScreen;
