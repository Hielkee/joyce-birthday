import React from "react";
import Cloud2 from "/public/svg/cloud2.svg";

const Outro = () => {
  return (
    <div
      id="outro"
      className="flex relative flex-col py-10 max-w-5xl p-5 md:p-10 mb-20"
    >
    <h1 className="text-[40px] font-dynapuff font-bold text-center w-full mb-10 z-10">
      Final Words
    </h1>

      <Cloud2 className="absolute rotate-[-20deg] z-0 scale-75 left-64 -top-16" />

      <p className="text-white text-[20px] mr-4 mb-10 md:p-1 md:px-24">
      It's a bit sad I can't be there with you in person today. But let's not dwell on the distance – instead, let's focus on the great times we've shared and the even better times ahead. Here's to your birthday this year and to celebrating it together next year 🥂
        </p>
    </div>
  );
};

export default Outro;