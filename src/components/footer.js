import React from "react"
// import { FaTwitter, FaFacebookF, FaLinkedinIn, FaVimeoV } from "react-icons/fa"
import Facebook from "../images/facebook.svg"
import Linkedin from "../images/linkedin.svg"
import Twitter from "../images/twitter.svg"
import Vimeo from "../images/vimeo.svg"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 text-white py-10 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-6 md:gap-10">
        {/* Subscription Section */}
        <div>
          <h3 className="text-lg font-semibold">8 Point Entertainment’s</h3>
          <p className="text-sm text-gray-400 mt-2">
            It is a long established fact that a good reader will be distracted
            by the readable content of a page.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-2 flex-grow rounded-l-md text-black"
            />
            <button className="bg-[#CA8724] px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-semibold">Our Services</h3>
          <ul className="mt-2 ml-0 space-y-1 text-gray-400">
            <li>Hire Studio</li>
            <li>Outdoor Spot</li>
            <li>Flexible Space</li>
            <li>Production House Rent</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-2 space-y-1 ml-0 text-gray-400">
            <li>Contact Us</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Home</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold">Quick Contact</h3>
          <p className="text-gray-400 text-sm mt-2">
            Address: Blk 9, Pioneer Road North, Lokyang Light Industries Park,
            Singapore - 628461.
          </p>
          <p className="text-gray-400 text-sm mt-2">Mobile: +65 98552961</p>
          <p className="text-gray-400 text-sm mt-2">
            E-mail: expresspoint@gmail.com
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-white text-sm">
        <p className="m-0">Copyright © 2025 8 Point Entertainment. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-white no-underline font-normal">
            Terms & Conditions
          </a>
          <a href="#" className="text-white no-underline font-normal">
            Privacy Policy
          </a>
        </div>
        {/* Social Icons */}
        <div className=" flex justify-center space-x-4 text-white">
          <img
            src={Twitter}
            alt="Twitter"
            className="w-14 h-14 rounded-full p-3 "
            style={{ border: "1px solid #FF881B" }}
          />
          <img
            src={Facebook}
            alt="Facebook"
            className="w-14 h-14 rounded-full p-3 "
            style={{ border: "1px solid #FF881B" }}
          />
          <img
            src={Linkedin}
            alt="Linkedin"
            className="w-14 h-14 rounded-full p-3 "
            style={{ border: "1px solid #FF881B" }}
          />
          <img
            src={Vimeo}
            alt="Vimeo"
            className="w-14 h-14 rounded-full p-3 "
            style={{ border: "1px solid #FF881B" }}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
