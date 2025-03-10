import React from "react"
import MovieProduction from "../images/movie-production.svg"
import EventOrgainizing from "../images/event-organizing.svg"
import DownArrowWhite from "../images/down-arrow-white.svg"

const ServiceDomain = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-6">
      <h1
        className="text-[80px] font-semibold  text-black
      "
      >
        We Do Our Magic in
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="grid grid-cols-2 min-h-[700px] z-0 relative">
        <div
          style={{ backgroundImage: `url(${MovieProduction})` }}
          className="relative bg-cover bg-center mr-5 rounded-2xl flex flex-col justify-between p-7  text-white"
        >
          <div className="bg-black inset-0 bg-opacity-40 z-10 absolute rounded-2xl"></div>
          <div
            className=" text-[60px] font-semibold z-40 
          "
          >
            Movie <br />
            Production
          </div>
          <div className="z-40 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="flex bg-[#CA8724] rounded-lg p-2 ">
              See More{" "}
              <img src={DownArrowWhite} alt="arrow" className="h-[22px] m-0 " />
            </button>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${EventOrgainizing})` }}
          className="relative bg-cover bg-center mr-5 rounded-2xl flex flex-col justify-between p-7 text-white"
        >
          {/* Black Transparent Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>

          {/* Content (Text & Button) */}
          <div className="relative z-10 text-[60px] font-semibold">
            Event <br /> Organizing
          </div>
          <div className="relative z-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="flex bg-[#CA8724] rounded-lg p-2">
              See More{" "}
              <img src={DownArrowWhite} alt="arrow" className="h-[22px] m-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDomain
