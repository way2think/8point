import React from "react"

import ContactBg from "../images/contact-bg.svg"

const ContactForm = () => {
  return (
    <section className="flex justify-center items-center py-12 " >
      <div className=" flex flex-row  text-white rounded-lg p-10  max-w-7xl shadow-lg  bg-cover bg-center" style={{backgroundImage:`url(${ContactBg})`}}>
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

        {/* Right Side: Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/5">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-md w-full text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md w-full text-black"
          />
          <input
            type="text"
            placeholder="Company"
            className="p-3 rounded-md w-full text-black"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="p-3 rounded-md w-full text-black"
          />
          <select className="p-3 rounded-md w-full text-black">
            <option>How can we help today?</option>
            <option>General Inquiry</option>
            <option>Support</option>
          </select>
          <select className="p-3 rounded-md w-full text-black">
            <option>Where is your event?</option>
            <option>Online</option>
            <option>In-Person</option>
          </select>
          <textarea
            placeholder="Your Message"
            className="p-3 rounded-md w-full text-black md:col-span-2"
            rows="4"
          ></textarea>
          <button className="bg-[#FF881B]  text-white px-6 py-3 rounded-md w-full md:w-auto  ">
            Send Now
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
