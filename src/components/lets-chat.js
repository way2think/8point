import React from 'react'
import ChatBg from "../images/chat-bg.svg"
import RightArrowWhite from "../images/right-arrow-white.svg"

const LetsChat = () => {
  return (
    <div
            style={{ backgroundImage: `url(${ChatBg})` }}
            className="min-h-[305px] bg-cover bg-center text-white   "
          >
            <div className="text-right mx-auto pr-52 max-w-screen">
              <h3 className="text-[45px] font-semibold">Plans in your mind?</h3>
              <h2 className="font-bold text-[128px]">Let’s Chat</h2>
              <button className="flex bg-[#CA8724] rounded-lg p-2 float-end">
                Contact Us
                <img src={RightArrowWhite} alt="arrow" className="h-[22px] m-0 " />
              </button>
            </div>
          </div>
  )
}

export default LetsChat