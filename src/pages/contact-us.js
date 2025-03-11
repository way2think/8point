import React from "react"
import ContactUsBg from "../images/contact-us-bg.svg"
import TopBanner from "../components/top-banner"
import ContactusSection from "../components/contactus-section"

const ContactUs = () => {
  return (
    <>
      <TopBanner bgImg={ContactUsBg} heading="Contact with Our Team" />
      <ContactusSection />
    </>
  )
}

export default ContactUs
