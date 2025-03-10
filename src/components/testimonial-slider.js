import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import LeftWhiteArrow from "../images/left-arrow-white.svg"
import LeftBlackArrow from "../images/left-arrow-black.svg"
import RightWhiteArrow from "../images/right-arrow-white.svg"
import RightBlackArrow from "../images/right-arrow-black.svg"
import TestimonialBg from "../images/testimonial-bg.svg"
import TestimonialProfile from "../images/testimonial-profile.svg"

const testimonials = [
  {
    name: "Jonathan Vallem",
    location: "New York, USA",
    image: "/user1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Sarah Johnson",
    location: "Los Angeles, USA",
    image: "/user2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Michael Smith",
    location: "Chicago, USA",
    image: "/user3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Michael Smith",
    location: "Chicago, USA",
    image: "/user3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Michael Smith",
    location: "Chicago, USA",
    image: "/user3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Michael Smith",
    location: "Chicago, USA",
    image: "/user3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
]

const TestimonialSlider = () => {
  return (
    <div
      className="py-16 px-6 md:px-20 text-white min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${TestimonialBg})` }}
    >
      <h2 className="text-[80px] leading-[88px] font-semibold  mb-8">
        Words of praise from others about our{" "}
        <span className="text-gray-300">Presence</span>
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md">
                <p className="text-sm text-gray-300">{testimonial.text}</p>
                <div className="mt-4 flex items-center space-x-3">
                  <img
                    src={TestimonialProfile}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-white m-0">
                      {testimonial.name}
                    </p>
                    <p className="text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows at Bottom */}
        <div className="flex justify-end items-center z-50 gap-4 mt-6 mr-9">
          <button className="custom-prev bg-white/20  rounded-full h-[25px] pb-1 px-1 pt-[2px]">
            <img src={LeftBlackArrow} alt="" className="h-[20px] w-[20px]" />
          </button>
          <button className="custom-next bg-white/20  rounded-full h-[25px] pb-1 px-1 pt-[2px]">
            <img src={RightWhiteArrow} alt="" className="h-[20px]  w-[20px] " />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlider
