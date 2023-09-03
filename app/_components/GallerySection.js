import React from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import Arrow from "/public/svg/arrow.svg";

Fancybox.bind("[data-fancybox]", {});

const GallerySection = () => {
  return (
    <section
      id="gallery-section"
      className="h-screen table relative max-w-5xl p-5 md:p-10"
    >
         <Arrow className="absolute rotate-[80deg] z-0 scale-75 -left-60 top-60" />
      <h1 className="text-[40px] font-dynapuff font-bold text-center mb-10">
        Gallery
      </h1>
      <p className="text-white text-[20px] mb-5 md:px-24">
      Throughout the last year, Joyce's adventure has been a wild rollercoaster of awesomeness. 
      That's exactly why I put my web-wizard cape on and conjured up this gallery – 
      a virtual hug for every fabulous memory she's collected along the way.
      <br/><br/>
      And yes, a standing ovation for me, Hielke, who deserves a medal for surviving her antics with a smile!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <a href="/pics/11.jpg" data-fancybox="gallery" className="hover:scale-105 ease-out duration-300" data-caption="Another stunning image shot on the rocks of Gran Canaria. Those were the days...">
          <Image src="/pics/11.jpg" width={500} height={500} alt="" />
        </a>
        <a href="/pics/7.jpg" data-fancybox="gallery" className="hover:scale-105 ease-out duration-300" data-caption="There's always time to appreciate nature. Don't let Joyce's silly position distract you from the STUNNING red flower!">
          <Image src="/pics/7.jpg" width={500} height={500} alt="" />
        </a>
        <a href="/pics/1.jpg" data-fancybox="gallery" className="hover:scale-105 ease-out duration-300" data-caption="Behold, the picture that caught us all off guard, only to reveal its astonishing cuteness! This little gem has been showered with kisses—so much so that my 'friend' mustered about 20 smooches, setting a new record in the realm of adorable photo affection.">
          <Image src="/pics/1.jpg" width={500} height={500} alt="" />
        </a>
        <a href="/pics/2.jpg" data-fancybox="gallery" className="hover:scale-105 ease-out duration-300" data-caption="Enter the world of Joyce's food affection – a realm where she engages in impromptu staring contests with her culinary delights. Brace yourselves, for these showdowns can last up to an hour!">
          <Image src="/pics/2.jpg" width={500} height={500} alt="" />
        </a>
        <a href="/pics/3.jpg" data-fancybox="gallery" className="hover:scale-105 ease-out duration-300" data-caption="When it comes to capturing you at your absolute finest angle, we can always count on my impeccable photography skills.">
          <Image src="/pics/3.jpg" width={500} height={500} alt="" />
        </a>
        <a href="/pics/4.jpg" data-fancybox="gallery" className="hover:scale-105 ease-out duration-300" data-caption="Joyce doing her morning ritual">
          <Image src="/pics/4.jpg" width={500} height={500} alt="" />
        </a>
        <a href="/pics/5.jpg" data-fancybox="gallery" className="hover:scale-105 ease-out duration-300" data-caption="Joyce can be a real bad girl!">
          <Image src="/pics/5.jpg" width={500} height={500} alt="" />
        </a>
        <a href="/pics/6.jpg" data-fancybox="gallery" className="hover:scale-105 ease-out duration-300" data-caption="Joyce showing off her balancing skills. Quite impressive">
          <Image src="/pics/6.jpg" width={500} height={500} alt="" />
        </a>
        <a href="/pics/8.jpg" data-fancybox="gallery" className="hover:scale-105 ease-out duration-300" data-caption="Ahh all the Nice memories...">
          <Image src="/pics/8.jpg" width={500} height={500} alt="" />
        </a>
        <a href="/pics/9.jpg" data-fancybox="gallery" className="hover:scale-105 ease-out duration-300" data-caption="Joyce's motherly instincts are like surprise guests, showing up randomly and turning the most peculiar items into recipients of her caring attention. It's as if there's a hidden switch inside her that activates a shower of affection on everything from plants to bottles, keeping us all amused and wondering where her love will land next!">
          <Image src="/pics/9.jpg" width={500} height={500} alt="" />
        </a>
        <a href="/pics/10.jpg" data-fancybox="gallery" className="hover:scale-105 ease-out duration-300" data-caption="That's right everybody, Joyce is not afraid to get adventurous!">
          <Image src="/pics/10.jpg" width={500} height={500} alt="" />
        </a>
        <a href="/pics/12.jpg" data-fancybox="gallery" className="hover:scale-105 ease-out duration-300" data-caption="Finally, let's not forget the most amazing beer ever, right in the heart of Amsterdam!">
          <Image src="/pics/12.jpg" width={500} height={500} alt="" />
        </a>
      </div>
    </section>
  );
};

export default GallerySection;
