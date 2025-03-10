import React from "react"
import Header from "./header"

const TopBanner = ({ bgImg, heading }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="relative min-h-[80vh] bg-cover bg-center "
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        <Header />
        <h1 className="text-[80px] font-semibold text-white mt-32 ">
          {<span className="text-[#CA8724]"> {heading.split(" ")[0]} </span>}
          {heading.split(" ").slice(1).join(" ")}
          {/* Quality <span className="text-[#CA8724]">Service</span>, Exceptional
          Results */}
        </h1>
      </div>
    </div>
  )
}

export default TopBanner
