import React from "react";
import ReactPlayer from "react-player";
import { Carousel, MovieList } from "../../components";
export default function HomePage() {
  return (
    <div className="w-full aspect-video">
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
        url="src\assets\Jujutsu Kaisen Shibuya Incident Arc Trailer.mp4"
        onError={(err) => {
          console.log("error: ", err);
        }}
      />
    </div>
  );
}
