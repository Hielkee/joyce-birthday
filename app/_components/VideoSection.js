import React from "react";
import dynamic from "next/dynamic";
import Arrow from "/public/svg/arrow.svg";

import ArrowBlack from "/public/svg/arrow_black.svg";
import CloudBlack from "/public/svg/cloud_black.svg";
import LightningBlack from "/public/svg/lightning_black.svg";
import Smiley from "/public/svg/smiley.svg";
import Stars from "/public/svg/stars.svg";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoSection = () => {
  return (
    <section
      id="video-section"
      className="min-h-screen relative pt-20 flex flex-col items-center justify-center"
    >
      <div className="max-w-5xl p-5 md:p-10">
      <Arrow className="rotate-[0deg] absolute z-0 -top-12 -left-35" />
      <h1 className="text-[40px] font-dynapuff font-bold text-center w-full mb-10">
        Video
      </h1>
      <p className="text-white text-[20px] mb-10 md:px-24">
        Specially for this occasion, I reached out to my friends from Africa and
        orchestrated a heartwarming birthday surprise: a video where they all
        wish you a happy birthday. Here's to you!
      </p>

      <div className="player-wrapper relative pt-[56.25%]">
        <ReactPlayer
          className="absolute top-0 left-0"
          width="100%"
          height="100%"
          url="/video/joyce.mp4"
          controls
          loop
        />
      </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-1 place-items-center scale-90 md:scale-100">
        <CloudBlack className="rotate-[20deg] z-0 scale-75" />
        <LightningBlack className="rotate-[-10deg] z-0 scale-75" />
        <ArrowBlack className="rotate-[-10deg] z-0 scale-75" />
        <CloudBlack className="rotate-[-5deg] z-0 scale-75" />
        <Smiley className="rotate-[-10deg] z-0 scale-75" />
        <Stars className="rotate-[20deg] z-0 scale-75" />
      </div>
    </section>
  );
};

export default VideoSection;
