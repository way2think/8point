import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Service1 from "../images/service1.svg?url"
import Service2 from "../images/service2.svg"
import Service3 from "../images/service3.svg"

const services = [
  {
    title: "Event Organizing",
    image: Service1,
  },
  {
    title: "Feature Film Production",
    image: Service2,
  },
  {
    title: "Advertising and Video Production",
    image: Service3,
  },
]

const ServicesSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 mx-auto">
      {/* Heading */}
      <div className="max-w-4xl mx-auto ">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          We Do Our Magic in
        </h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Services List */}
      <div className="mt-12 max-w-4xl mx-auto bg-black rounded-xl">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative rounded-tr-xl rounded-tl-xl rounded-b-xl overflow-hidden shadow-lg min-h-[100%] h-48`}
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-6">
              <h3 className="text-white text-[46px] font-semibold">
                {service.title}
              </h3>
              <p className="text-gray-300 mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
