"use client";

import React from "react";

import ArrowBlack from "/public/svg/arrow_black.svg";
import CloudBlack from "/public/svg/cloud_black.svg";
import LightningBlack from "/public/svg/lightning_black.svg";
import Smiley from "/public/svg/smiley.svg";
import Star from "/public/svg/star.svg";
import Stars from "/public/svg/stars.svg";

import Header from "./_components/Header";
import Intro from "./_components/Intro";
import VideoSection from "./_components/VideoSection";
import GallerySection from "./_components/GallerySection";
import Outro from "./_components/Outro";

export default function App() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between mx-auto overflow-x-hidden">
      <Header/>

      <Intro/>

      <VideoSection />

      <div className="flex relative">
        <CloudBlack className="rotate-[20deg] z-0 scale-75" />
        <LightningBlack className="rotate-[-10deg] z-0 scale-75" />
        <ArrowBlack className="rotate-[-10deg] z-0 scale-75" />
        <CloudBlack className="rotate-[-5deg] z-0 scale-75" />
        <Smiley className="rotate-[-10deg] z-0 scale-75" />
        <Stars className="rotate-[20deg] z-0 scale-75" />
      </div>

      <div className="relative">
      <Star className="absolute rotate-[20deg] z-0 scale-75 left-60 top-0" />
      </div>

      <GallerySection/>
      
      <Outro/>



      <div class="p-10 text-white absolute bottom-0">Website created with ❤️ by Hielke © 2023</div>
    </main>
  );
}
