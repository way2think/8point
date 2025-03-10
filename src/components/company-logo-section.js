import React from "react"
import CompanyLogo1 from "../images/company-logo1.svg"
import CompanyLogo2 from "../images/company-logo2.svg"
import CompanyLogo3 from "../images/company-logo3.svg"

const logos = [
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
  CompanyLogo1,
  CompanyLogo3,
  CompanyLogo1,
  CompanyLogo3,
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
]

const CompanyLogoSection = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-20">
      <h2 className="text-[80px] font-semibold text-gray-900 mb-6">
        They choose us
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img src={logo} alt="Brand Logo" className="h-10 object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompanyLogoSection
