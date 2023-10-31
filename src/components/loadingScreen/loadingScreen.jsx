import React, { forwardRef } from "react";

const LoadingScreen = () => {
  return (
    <div className={`absolute top-0 left-0 w-full h-full bg-black z-[60]`}>
      <img
        className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 scale-[2.4]"
        src="src\assets\img\spinner.svg"
        alt=""
      />
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 scale-[.15]"
        src="src\assets\img\lux_final-logo.png"
        alt=""
      />
    </div>
  );
};

export default LoadingScreen;