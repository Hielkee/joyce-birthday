"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Link } from "react-scroll";
import Image from "next/image";

import Lightning from "../public/lightning.svg";
import Cloud from "../public/cloud.svg";
import Arrow from "../public/arrow.svg";
import ArrowBlack from "../public/arrow_black.svg";
import CloudBlack from "../public/cloud_black.svg";
import Cloud2 from "../public/cloud2.svg";
import LightningBlack from "../public/lightning_black.svg";
import Smiley from "../public/smiley.svg";
import Star from "../public/star.svg";
import Stars from "../public/stars.svg";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

export default function App() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between mx-auto overflow-x-hidden">
      <div className="h-screen flex flex-col items-center justify-center">
        <h1
          className="mt-1 text-black animate-bounce font-dynapuff font-bold"
          style={{ fontSize: "calc(11vw)" }}
        >
          Joyce Turns 26!
        </h1>
        <ul>
          <li className="inline m-2 text-lg hover:text-white cursor-pointer">
            <Link
              to="video-section" // ID of the target section
              smooth={true} // Enable smooth scrolling
              duration={500} // Duration of the scroll animation in milliseconds
            >
              Video
            </Link>
          </li>
          <li className="inline m-2 text-lg hover:text-white cursor-pointer">
            <Link
              to="gallery-section" // ID of the target section
              smooth={true} // Enable smooth scrolling
              duration={500} // Duration of the scroll animation in milliseconds
            >
              Gallery
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex relative flex-col py-10 max-w-5xl p-10">
        <Lightning className="rotate-[17deg] absolute z-0 right-[-200px] -top-10" />
        <Cloud className="rotate-[-25deg] absolute z-0 -left-52" />
        <Arrow className="rotate-[7deg] absolute z-0 top-52 -left-35" />

        <h1 className="text-[40px] font-dynapuff font-bold float-left w-full mb-10 z-10">
          Joyce’s Fabulous 26th
        </h1>
        <div className="flex z-10">
          <p className="text-white text-[20px] mr-4">
            Get ready for an explosion of Purple, Fun, and Love! Our lovely
            Joyce is turning 26, and we’ve organized this sensational website to
            celebrate her special day.
          </p>
          <p className="text-white text-[20px]">
            Browse through heart-warming memories, enjoy Hielke’s touching video
            message, and be a part of this fantastic virtual birthday party.
            Let’s make Joyce’s 26th a day to remember!
          </p>
        </div>
      </div>
      <section id="video-section" className="h-screen py-20 max-w-5xl p-10">
        <h1 className="text-[40px] font-dynapuff font-bold text-center w-full mb-10">
          Video
        </h1>
        <p className="text-white text-[20px] mb-10">
          Just for this occassion, Hielke contacted his friends from Africa,
          and had them record a Happy Birthday video for Joyce!
        </p>

        <div className="player-wrapper relative pt-[56.25%]">
        <ReactPlayer
        className="absolute top-0 left-0"
          width='100%'
          height='100%'
          url="https://www.youtube.com/watch?v=wWgIAphfn2U"
          controls
          loop
        />
        </div>
      </section>
      <div className="flex relative">
        <CloudBlack className="rotate-[20deg] z-0 scale-75" />
        <LightningBlack className="rotate-[-10deg] z-0 scale-75" />
        <ArrowBlack className="rotate-[-10deg] z-0 scale-75" />
        <CloudBlack className="rotate-[-5deg] z-0 scale-75" />
        <Smiley className="rotate-[-10deg] z-0 scale-75" />
        <Stars className="rotate-[20deg] z-0 scale-75" />
      </div>
      <section id="gallery-section" className="h-screen flex flex-col relative items-center max-w-5xl p-10 mb-40">
          <h1 className="text-[40px] font-dynapuff font-bold text-center mb-10">
            Gallery
          </h1>
          <p className="text-white text-[20px] m-5">
            Over the years Joyce has been very busy! That&apos;s why we provide
            a gallery to fully appreciate her face!
          </p>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="/pics/1.jpg"
            data-fancybox="gallery"
            data-caption="Caption #1"
          >
            <Image
              src="/pics/1.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </a>
          <a
            href="/pics/2.jpg"
            data-fancybox="gallery"
            data-caption="Caption #2"
          >
            <Image
              src="/pics/2.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </a>
          <a
            href="/pics/3.jpg"
            data-fancybox="gallery"
            data-caption="Caption #3"
          >
            <Image
              src="/pics/3.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </a>
          <a
            href="/pics/1.jpg"
            data-fancybox="gallery"
            data-caption="Caption #4"
          >
            <Image
              src="/pics/1.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </a>
          <a
            href="/pics/2.jpg"
            data-fancybox="gallery"
            data-caption="Caption #5"
          >
            <Image
              src="/pics/2.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </a>
          <a
            href="/pics/3.jpg"
            data-fancybox="gallery"
            data-caption="Caption #6"
          >
            <Image
              src="/pics/3.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </a>
        </div>
      </section>
      <div class="p-10 text-lg text-white absolute bottom-0">Website created with ❤️ by Hielke © 2023</div>
    </main>
  );
}
