import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({ url }) {
  return (
    <div className="relative">
      <ReactPlayer
        playing={true}
        volume={0.5}
        loop={true}
        mute="true"
        width="100%"
        height="100%"
        style={{
          scale: "1",
        }}
        url={url}
        onError={(err) => {
          console.log("error: ", err);
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}
