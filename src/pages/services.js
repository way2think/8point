import React from "react"
import ServiceHeroBg from "../images/service-hero-bg.svg"
import Header from "../components/header"
import ServiceDomain from "../components/service-domain"
import MovieSection from "../components/movie-section"
import Footer from "../components/footer"

const Services = () => {
  return (
    <div className="my-0 mx-auto">
      <div
        style={{ backgroundImage: `url(${ServiceHeroBg})` }}
        className="relative min-h-[80vh] bg-cover bg-center "
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6">
          <Header />
          <h1 className="text-[80px] font-semibold text-white mt-32 ">
            Quality <span className="text-[#CA8724]">Service</span>, Exceptional
            Results
          </h1>
        </div>
      </div>
      <ServiceDomain />
      <MovieSection />
      <Footer />
    </div>
  )
}

export default Services
