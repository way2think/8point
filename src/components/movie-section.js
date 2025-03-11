import React, { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import LeftBlackArrow from "../images/left-arrow-black.svg"
import RightWhiteArrow from "../images/right-arrow-white.svg"
import LeftWhiteArrow from "../images/left-arrow-white.svg"
import Movie1 from "../images/movie1.svg"
import Movie2 from "../images/movie2.svg"
import Movie3 from "../images/movie3.svg"
import Movie4 from "../images/movie4.svg"
import Upcoming1 from "../images/upcoming1.svg"
import Upcoming2 from "../images/upcoming2.svg"
import Upcoming3 from "../images/upcoming3.svg"
import Upcoming4 from "../images/upcoming4.svg"
import ChatBg from "../images/chat-bg.svg"
import RightArrowWhite from "../images/right-arrow-white.svg"
import LetsChat from "./lets-chat"

const MovieSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  const slidesPerView = 4 //it will change for responsive design

  const movies = [
    { img: Movie1 },
    { img: Movie2 },
    { img: Movie3 },
    { img: Movie4 },
    { img: Movie2 },
    { img: Movie4 },
    { img: Movie2 },
    { img: Movie4 },
  ]

  const upcoming = [
    { img: Upcoming1 },
    { img: Upcoming2 },
    { img: Upcoming3 },
    { img: Upcoming4 },
    { img: Upcoming2 },
    { img: Upcoming3 },
  ]

  const totalGroups = movies.length - slidesPerView + 1

  // Ensure Swiper recognizes external buttons
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = ".custom-prev"
      swiperRef.current.swiper.params.navigation.nextEl = ".custom-next"
      swiperRef.current.swiper.navigation.init()
      swiperRef.current.swiper.navigation.update()
    }
  }, [])

  return (
    <>
      <div className="  bg-gray-700 text-white pt-14 mt-9">
        <div className="max-w-screen-xl mx-auto px-6">
          <h1 className="text-[80px] font-semibold">Movie Production</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Orci nisi eros malesuada viverra, venenatis placerat sodales magna.
            Proin tellus fusce vestibulum risus quisque odio nulla. Elementum
            elit nascetur auctor, congue sagittis mollis sem. Congue ex suscipit
            venenatis potenti sociosqu fermentum morbi quisque. Gravida viverra
            sagittis turpis sodales urna turpis a. Luctus at egestas vel cursus
            pharetra. Ultrices dui dictum gravida velit suspendisse scelerisque
            est litora tempor. Fermentum convallis luctus nullam vehicula
            ridiculus consequat montes augue.
          </p>
          <p>
            Vivamus porttitor lobortis arcu ultricies hendrerit purus ultrices.
            Lectus natoque iaculis; nisi aliquet sem mattis. Convallis aliquet
            duis taciti sollicitudin libero hac. Libero semper vulputate iaculis
            fusce taciti vivamus.
          </p>
          <div className="relative p-6 rounded-xl">
            {/* Swiper Component */}
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              pagination
              className="w-full"
              onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
            >
              {movies.map((movie, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={movie.img}
                    alt={`Movie ${index + 1}`}
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation & Pagination */}
            <div className="flex justify-end items-center z-50 gap-4 mt-8 mr-9">
              {/* Custom Previous Button */}
              <button className="custom-prev bg-black rounded-lg h-[30px] pb-2 px-2 pt-[3px]">
                <img
                  src={LeftWhiteArrow}
                  alt="Left"
                  className="h-[20px] w-[20px]"
                />
              </button>

              {/* Custom Pagination Dots */}
              <div className="flex justify-center gap-2">
                {Array.from({ length: totalGroups }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeIndex === index
                        ? "bg-[#CA8724] w-4 h-4"
                        : "bg-black"
                    }`}
                    onClick={() => swiperRef.current.swiper.slideTo(index)}
                  ></button>
                ))}
              </div>

              {/* Custom Next Button */}
              <button className="custom-next bg-black rounded-lg h-[30px] pb-2 px-2 pt-[3px]">
                <img
                  src={RightWhiteArrow}
                  alt="Right"
                  className="h-[20px] w-[20px]"
                />
              </button>
            </div>

            {/* View More Button */}
            <div className="-mt-11 flex">
              <button className="bg-black text-white px-6 py-2 rounded-lg flex items-center">
                View more →
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-6">
          <h1 className="text-[80px] font-semibold">Upcoming Movie</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="relative p-6 rounded-xl">
            {/* Swiper Component */}
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              pagination
              className="w-full"
              onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
            >
              {upcoming.map((movie, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={movie.img}
                    alt={`Movie ${index + 1}`}
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation & Pagination */}
            <div className="flex justify-end items-center z-50 gap-4 mt-8 mr-9">
              {/* Custom Previous Button */}
              <button className="custom-prev bg-black rounded-lg h-[30px] pb-2 px-2 pt-[3px]">
                <img
                  src={LeftWhiteArrow}
                  alt="Left"
                  className="h-[20px] w-[20px]"
                />
              </button>

              {/* Custom Pagination Dots */}
              <div className="flex justify-center gap-2">
                {Array.from({ length: totalGroups }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeIndex === index
                        ? "bg-[#CA8724] w-4 h-4"
                        : "bg-black"
                    }`}
                    onClick={() => swiperRef.current.swiper.slideTo(index)}
                  ></button>
                ))}
              </div>

              {/* Custom Next Button */}
              <button className="custom-next bg-black rounded-lg h-[30px] pb-2 px-2 pt-[3px]">
                <img
                  src={RightWhiteArrow}
                  alt="Right"
                  className="h-[20px] w-[20px]"
                />
              </button>
            </div>

            {/* View More Button */}
            <div className="-mt-11 flex">
              <button className="bg-black text-white px-6 py-2 rounded-lg flex items-center">
                View more →
              </button>
            </div>
          </div>
        </div>
      </div>
      <LetsChat />
    </>
  )
}

export default MovieSection
