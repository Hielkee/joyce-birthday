"use client";

import React from "react";

import Star from "/public/svg/star.svg";

import Header from "./_components/Header";
import Intro from "./_components/Intro";
import VideoSection from "./_components/VideoSection";
import GallerySection from "./_components/GallerySection";
import Outro from "./_components/Outro";

export default function App() {
  return (
    <main className="flex relative flex-col items-center justify-between mx-auto overflow-x-hidden">
      <Header/>

      <Intro/>

      <VideoSection />

      <div className="relative">
      <Star className="absolute rotate-[20deg] z-0 scale-75 left-60 top-0" />
      </div>

      <GallerySection/>
      
      <Outro/>



      <div className="p-10 text-white absolute bottom-0">Website created with ❤️ by Hielke © 2023</div>
    </main>
  );
}
