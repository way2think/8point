import * as React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"

const navLinks = [
  { name: "About Us", path: "/" },
  { name: "Services", path: "/" },
  { name: "Gallery", path: "/" },
  { name: "Events", path: "/" },
]

const Header = () => (
  <header className="m-0 pt-5 flex items-center justify-between">
    <img
      alt="Gatsby logo"
      height={140}
      width={140}
      src={Logo}
      className="m-0"
    />
    <div className="">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className="mx-5 text-white text-[var(--font-sm)] no-underline"
        >
          {link.name}
        </Link>
      ))}

      <button className=" ml-14 border border-white text-white px-4 py-2 rounded-md">
        Contact
      </button>
    </div>
  </header>
)

export default Header
