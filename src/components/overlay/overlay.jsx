import React from "react";

export default function Overlay({ position }) {
  return (
    <div
      className={`${
        position ? position : "absolute"
      } top-0 bottom-0 left-0 right-0 z-10 transition-all bg-black opacity-50`}></div>
  );
}
