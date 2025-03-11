import React from "react"
import EmailIcon from "../images/mail.svg"
import PhoneIcon from "../images/call.svg"
import LocationIcon from "../images/location_on.svg"
import ContactForm from "./contact-form"
import MapEmbed from "./map-embed"

const ContactusSection = () => {
  return (
    <div className="container mx-auto  py-16  px-24">
      <h2 className="text-custom-xl text-black font-poppins">Get in Touch</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="flex">
        <div className="flex flex-col gap-6">
          <span className="flex items-center gap-2">
            <img src={EmailIcon} alt="" className="m-0" />
            expresspoint@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <img src={PhoneIcon} alt="" className="m-0" />
            +65 98552961
          </span>
          <span className="flex items-center gap-2">
            <img src={LocationIcon} alt="" className="m-0" />
            Blk 9, Pioneer Road North, Lokyang Light Industries Park, Singapore
            – 628461.
          </span>
          <MapEmbed />
        </div>
        <ContactForm  />
      </div>
    </div>
  )
}

export default ContactusSection
