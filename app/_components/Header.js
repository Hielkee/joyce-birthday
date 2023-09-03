import React from "react";
import { Link } from "react-scroll";
import ScrollDown from "/public/svg/scroll-down.svg";


const Header = () => {
  return (
    <div className="min-h-screen h-screen-ios flex flex-col items-center justify-center relative">
      <h1 className="mt-1 text-black font-dynapuff font-bold text-8xl text-center md:text-9xl animate__animated animate__zoomInDown">
        Joyce Turns 26!
      </h1>
      <ul className="text-align items-center animate__animated animate__fadeIn animate__delay-2s mt-5">
        <li className="inline m-2 text-lg hover:text-white cursor-pointer">
          <Link to="video-section" smooth={true} duration={500}>
            Video
          </Link>
        </li>
        <li className="inline m-2 text-lg hover:text-white cursor-pointer">
          <Link to="gallery-section" smooth={true} duration={500}>
            Gallery
          </Link>
        </li>
      </ul>

      <Link className="flex items-center justify-center animate__animated animate__fadeIn animate__delay-3s" to="intro" smooth={true} duration={500}>
      <div className="animate-bounce p-3 absolute bottom-5 w-16 h-16 ring-4 ring-slate-900/5 rounded-full">
        <ScrollDown/>
        </div>
        </Link>
    </div>
  );
};

export default Header;
