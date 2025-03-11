import React from "react"
import ContactForm from "./contact-form"
import ContactBg from "../images/contact-bg.svg"

const GetInTouch = () => {
  return (
    <section className="flex justify-center items-center py-12 ">
      <div
        className=" flex flex-row  text-white rounded-lg p-10  max-w-7xl shadow-lg  bg-cover bg-center"
        style={{ backgroundImage: `url(${ContactBg})` }}
      >
        {/* Left Side: Text Content */}
        <div className="mb-6 w-full md:w-2/5">
          <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray-300 pr-3 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default GetInTouch
