import React from "react";
import { VideoPlayer } from "../../components";

export default function Banner() {
  return (
    <div className="w-full h-[81vh] z-10">
      <VideoPlayer
        url={"src/assets/video/Jujutsu Kaisen Shibuya Incident Arc Trailer.mp4"}
      />
    </div>
  );
}
