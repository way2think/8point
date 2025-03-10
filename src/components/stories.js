import React from "react"
import StoryBg from "../images/story-bg.svg"

const Stories = () => {
  return (
    <div
      style={{ backgroundImage: `url(${StoryBg})` }}
      className="relative min-h-screen h-full bg-center bg-cover bg-no-repeat overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start px-10 md:px-20 py-20  ">
        {/* Left Section (Text) */}
        <div className="text-white  font-semibold text-5xl md:text-7xl leading-none space-y-4">
          <p>When</p>
          <p>Our</p>
          <p>
            <span className="text-[#E2A750]">Every</span>
          </p>
          <p>
            <span className="text-[#E2A750]">Shot</span>
          </p>
          <p>Tells</p>
          <p>A Story</p>
        </div>

        {/* Right Section (Events List) */}
        <div className="text-white space-y-6 text-[36px] md:text-[1.5rem] font-extrabold text-right leading-[43px]">
          <p className="border-b-4 border-white  pt-4   inline">
            Eurovision 2023 Event
          </p>
          <p>
            Worldwide Conferences <br /> United by Creative Technology
          </p>
          <p>FIFA World Cup 2022 Opening Ceremony</p>
          <p>DP World Pavilion EXPO 2020</p>

          {/* Button */}
          <button className="mt-6 bg-[#CA8724] text-white text-right text-[24px] font-normal  px-6 py-2 rounded-md flex items-center hover:bg-opacity-80 transition float-end ">
            View More <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Stories
