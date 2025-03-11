import React from "react"
import Team1 from "../images/team1.svg"
import Team2 from "../images/team2.svg"
import Team3 from "../images/team3.svg"
import Team4 from "../images/team4.svg"
import Team5 from "../images/team5.svg"

const OurTeam = () => {
  const teamMembers = [
    {
      name: "PERUMAL ARUMAI CHANDRAN .PBM",
      role: "Managing Director",
      image: Team1,
    },
    {
      name: "Jennie Bernhard IV",
      role: "Senior Accounts Producer",
      image: Team2,
    },
    {
      name: "Nathaniel Kling",
      role: "Lead Creative Technician",
      image: Team3,
    },
    {
      name: "Archie Upton",
      role: "Lead Paradigm Designer",
      image: Team3,
    },
    {
      name: "Martin Christiansen",
      role: "Investor Brand Liaison",
      image: Team3,
    },
    {
      name: "Mr. Angel Von",
      role: "Dynamic Accounts Facilitator",
      image: Team3,
    },
  ]
  return (
    <div className="text-black p-24">
      <h4 className="font-semibold text-[80px] w-[70%] leading-[110%]">
        The Team That Turns Dreams Into Reality
      </h4>
      <div className="grid grid-cols-3 gap-14 mt-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="h-[273px] w-[273px] rounded-full"
            />
            <p className="text-[18px] font-semibold m-0">{member.name}</p>
            <p className="text-[16px] font-normal">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeam
