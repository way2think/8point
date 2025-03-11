import React from "react"
import AboutUsBg from "../images/about-us-bg.svg"
import TopBanner from "../components/top-banner"
import LetsChat from "../components/lets-chat"
import AboutMd from "../components/about-md"
import AboutUsStatistics from "../components/about-us-statistics"
import OurMission from "../components/our-mission"
import OurTeam from "../components/our-team"
import TestimonialSlider from "../components/testimonial-slider"
import Footer from "../components/footer"

const AboutUs = () => {
  return (
    <>
      <TopBanner bgImg={AboutUsBg} heading="About Our Journey" />
      <AboutUsStatistics />
      <AboutMd />
      <OurMission />
      <OurTeam />
      <TestimonialSlider />
      <LetsChat />
      <Footer />
    </>
  )
}

export default AboutUs
