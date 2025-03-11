import React from 'react'
import AboutUsCountBg from "../images/aboutus-count-bg.svg"
const AboutUsStatistics = () => {
  return (
    <div
    className="bg-cover  bg-center p-9 text-white"
    style={{ backgroundImage: `url(${AboutUsCountBg})` }}
  >
    <div className="flex  justify-evenly text-white ">
      <div>
        <h3 className="text-[46px] font-semibold">15+</h3>
        <p className="text-sm font-medium">Years of experience</p>
      </div>
      <div>
        <h3 className="text-[46px] font-semibold">200+</h3>
        <p className="text-sm font-medium">Projects delivered per years</p>
      </div>
      <div>
        <h3 className="text-[46px] font-semibold">220</h3>
        <p className="text-sm font-medium">Happy employees</p>
      </div>
      <div>
        <h3 className="text-[46px] font-semibold">32,000 sqm</h3>
        <p className="text-sm font-medium">
          Production & Logistic facilities
        </p>
      </div>
    </div>
  </div>
     )
}

export default AboutUsStatistics