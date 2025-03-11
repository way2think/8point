import React from "react"



const ContactForm = () => {
  return (
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
  )
}

export default ContactForm
