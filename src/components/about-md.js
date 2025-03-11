import React from "react"
import Md1 from "../images/md1.svg"
import Md2 from "../images/md2.svg"
const AboutMd = () => {
  return (
    <div className="relative min-h-screen  py-28 overflow-hidden ">
      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-[80px] font-semibold leading-tight text-black">
              You imagine it, we bring it to life.
            </h2>
            <p className="mt-4 ">
              <span className=" font-medium">8 Point Entertainment</span>'s
              event are conceptualised to become one of the Singapore’s most
              premier brand event offering a breakthrough platform not just for
              the designers but also to the brands associated with them in turn
              helps in seamlessly connecting the brands to the consumers ,to the
              buyers and also promoting the brand via the media on a higher
              level. An effective video is a video that drives action. We create
              targeted strategies so your video content speaks to the right
              audience in the right way, through the right channel
            </p>
            <div className="text-right">
              <h6 className="text-[24px] font-bold ">
                PERUMAL ARUMAI CHANDRAN .PBM
              </h6>
              <p className="text-[22px] font-medium">MD</p>
            </div>
          </div>

          <div className="relative left-[61px]">
            <img
              src={Md1}
              alt="Event lighting"
              className="rounded-lg shadow-lg w-[80%] object-cover"
            />

            <img
              src={Md2}
              alt="Event show"
              className="absolute bottom-[-20px] right-[75px] w-[60%] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMd
