import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

export default function VideoPlaye({ url }) {
  //   const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="relative">
      <ReactPlayer
        light={
          <figure className="w-full h-full relative">
            <img
              className="w-full h-full object-cover"
              src="https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfoRUehMm6_mnm2v9Sti8or6LIfK-0rhJIZ13hQaw3xfqhAKE7qojuqmU4v8Rpwm_7TIzlrrE0VdFwUGVtux0L5VytXJ3PXKpFH4.jpg?r=933"
              alt="Thumbnail"
            />
            <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-black to-transparent bg-opacity-50"></div>
          </figure>
        }
        playing={true}
        controls={true}
        volume={0.5}
        loop={true}
        width="100%"
        height="100%"
        style={{
          scale: "1",
        }}
        url={url}
        onError={(err) => {
          console.log("error: ", err);
        }}
        playIcon={
          <figure className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[90%] w-48 h-48  m-0 transition-all hover:scale-105  opacity-40 hover:opacity-80">
            <img
              className="w-full h-full object-cover "
              src="src\assets\img\playIcon.svg"
              alt=""
            />
          </figure>
        }
      />
    </div>
  );
}
