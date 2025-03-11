import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import HeroBg from "../images/hero-bg.svg"
import Event1 from "../images/event1.svg"
import Event2 from "../images/event2.svg"
import ServicesSection from "../components/services-section"
import Stories from "../components/stories"
import CompanyLogoSection from "../components/company-logo-section"
import TestimonialSlider from "../components/testimonial-slider"
import SocialGateway from "../components/social-gateway"
import ContactForm from "../components/contact-form"
import Footer from "../components/footer"

import CompanyOverviewBg from "../images/company-overview-bg.svg"
import GetInTouch from "../components/get-in-touch"

const IndexPage = () => (
  <Layout>
    <>
      <div
        className="relative bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="relative z-10 max-w-screen-xl mx-auto px-6">
          <Header />

          <div className="text-white mt-20">
            <h1 className="text-[80px] font-semibold leading-tight">
              We build premium <span className="text-[#E2A750]">events</span>,
              <span className="text-[#E2A750]"> exhibitions </span>, and{" "}
              <span className="text-[#E2A750]">branded</span> environments.
            </h1>

            <p className="mt-4 max-w-2xl text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* CTA Button */}
            <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${CompanyOverviewBg})` }}
        className="relative bg-cover bg-center min-h-screen  py-28 overflow-hidden"
      >
        <div className="relative z-10 max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-[80px] font-semibold leading-tight text-white">
                You imagine it, we bring it to life.
              </h2>
              <p className="mt-4 text-white">
                <span className=" font-medium">8 Point Entertainment</span>'s
                events are conceptualized to become one of Singapore’s most
                premier brand events, offering a breakthrough platform not just
                for designers but also for the brands associated with them.
              </p>
              <p className="mt-2 text-gray-300">
                We create targeted strategies so your video content speaks to
                the right audience in the right way, through the right channel.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-8 text-lg font-semibold text-[14px] text-white">
                <div>
                  <span className="block text-[46px] mb-2 ">15+</span>
                  Years of experience
                </div>
                <div>
                  <span className="block text-[46px] mb-2">200+</span>
                  Projects delivered per year
                </div>
                <div>
                  <span className="block text-[46px]  mb-2">220</span>
                  Happy employees
                </div>
                <div>
                  <span className="block text-[46px] mb-2">32,000 sqm</span>
                  Production & Logistic facilities
                </div>
              </div>
            </div>

            <div className="relative left-[61px]">
              <img
                src={Event1}
                alt="Event lighting"
                className="rounded-lg shadow-lg w-[80%] object-cover"
              />

              <img
                src={Event2}
                alt="Event show"
                className="absolute bottom-[-80px] right-[75px] w-[60%] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <ServicesSection />
      <Stories />
      <CompanyLogoSection />
      <TestimonialSlider />
      <SocialGateway />
      <GetInTouch />
      <Footer />
    </>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
