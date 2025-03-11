import React from "react"
import CompanyOverviewBg from "../images/company-overview-bg.svg"
import OurMissionImg from "../images/our-mission.svg"
const OurMission = () => {
  return (
    <div
      className="text-white bg-cover bg-center p-24 pl-32 pb-2"
      style={{ backgroundImage: `url(${CompanyOverviewBg})` }}
    >
      <h2 className="text-[80px] font-semibold">Our Mission & Vision</h2>
      <div className="flex items-stretch gap-24">
        <div className="flex-1 ">
          <h6 className="text-[40px] font-semibold">Our Mission</h6>
          <p className="font-normal"> 
            Lorem ipsum odor amet, consectetuer adipiscing elit. Consequat ipsum
            pellentesque nunc habitant, egestas a at. Viverra scelerisque lectus
            quis porttitor dolor netus himenaeos vestibulum felis. Felis et
            purus pulvinar tincidunt hendrerit risus diam sagittis. Euismod
            gravida fames suspendisse hendrerit amet orci. Aliquet posuere erat
            nascetur nisl dis enim urna hac magnis. Luctus cubilia risus posuere
            posuere senectus? Mattis lacus sem laoreet dui arcu platea. 
          </p>
          <h6 className="text-[40px] font-semibold">Our Vision</h6>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Consequat ipsum
            pellentesque nunc habitant, egestas a at. Viverra scelerisque lectus
            quis porttitor dolor netus himenaeos vestibulum felis. Felis et
            purus pulvinar tincidunt hendrerit risus diam sagittis. Euismod
            gravida fames suspendisse hendrerit amet orci. Aliquet posuere erat
            nascetur nisl dis enim urna hac magnis. Luctus cubilia risus posuere
            posuere senectus? Mattis lacus sem laoreet dui arcu platea. 
          </p>
        </div>
        <div className="flex-1">
          <img src={OurMissionImg} alt="" className="h-[80%]"/>
        </div>
      </div>
    </div>
  )
}

export default OurMission
