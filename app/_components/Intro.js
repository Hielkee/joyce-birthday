import React from "react";

import Lightning from "/public/svg/lightning.svg";
import Cloud from "/public/svg/cloud.svg";

const Intro = () => {
  return (
    <div
      id="intro"
      className="flex relative flex-col py-10 max-w-5xl p-5 md:p-10"
    >
      <Lightning className="rotate-[17deg] absolute z-0 md:right-[-220px] right-[-150px] top-14" />
      <Cloud className="rotate-[-25deg] absolute z-0 -left-52" />

      <h1 className="text-[40px] font-dynapuff font-bold float-left w-full mb-10 z-10">
        Happy birthday Joyce!
      </h1>
      <div className="flex flex-col md:flex-row z-10">
        <p className="text-white text-[20px] mr-4 mb-10 md:p-1">
        Get ready for a burst of Purple, Fun, and Love, Joyce! You're about to step into the fantastic realm of 26, and to honor this incredible milestone, I've put together this website just for you.
        </p>
        <p className="text-white text-[20px] md:p-1">
          Here's to celebrating you – the incredible person you are, the
          happiness you bring, and the memories we've shared. Cheers to
          another year of making dreams come true!
        </p>
      </div>
    </div>
  );
};

export default Intro;
