import React from "react";
import dynamic from "next/dynamic";
import Arrow from "/public/svg/arrow.svg";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoSection = () => {
  return (
    <section id="video-section" className="h-screen relative py-20 max-w-5xl p-5 md:p-10">
        <Arrow className="rotate-[0deg] absolute z-0 -top-12 -left-35" />
    <h1 className="text-[40px] font-dynapuff font-bold text-center w-full mb-10">
      Video
    </h1>
    <p className="text-white text-[20px] mb-10 md:px-24">
    Specially for this occasion, I reached out to my friends from Africa and orchestrated a heartwarming birthday surprise:
     a video where they all wish you a happy birthday.
     Here's to you!
    </p>

    <div className="player-wrapper relative pt-[56.25%]">
    <ReactPlayer
    className="absolute top-0 left-0"
      width='100%'
      height='100%'
      url="/video/joyce.mp4"
      controls
      loop
    />
    </div>
  </section>
  );
};

export default VideoSection;
