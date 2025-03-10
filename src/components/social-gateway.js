import React from "react"
import Facebook from "../images/facebook.svg"
import Instagram from "../images/instagram.svg"
import Linkedin from "../images/linkedin.svg"
import Gateway1 from "../images/gateway1.svg"
import Gateway2 from "../images/gateway2.svg"
import Gateway3 from "../images/gateway3.svg"

const socialLinks = [
  { icon: Linkedin, color: "bg-blue-600" },
  { icon: Instagram, color: "bg-pink-600" },
  { icon: Facebook, color: "bg-blue-700" },
]

const posts = [
  {
    img: Gateway2,
    date: "Aug 23, 2021",
    text: "Lorem ipsum dolor sit amet, at a consectetur adipiscing elit",
  },
  {
    img: Gateway3,
    date: "Aug 23, 2021",
    text: "Lorem ipsum dolor sit amet, at a consectetur adipiscing elit",
  },
  {
    img: Gateway1,
    date: "Aug 23, 2021",
    text: "Lorem ipsum dolor sit amet, at a consectetur adipiscing elit",
  },
]

const SocialGateway = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-6">
        Your Social Gateway
      </h2>

      {/* Social Media Buttons */}
     
      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <PostCard post={posts[0]} />
          <PostCard post={posts[1]} />
        </div>

        {/* Right Column */}
        <div>
         <div className="flex justify-center items-center gap-4 mb-1 w-full max-w-lg mx-auto">
        {socialLinks.map((link, index) => (
          <button
            key={index}
            className={`${link.color} flex-1  rounded-lg text-white text-2xl pt-3 flex items-center justify-center`}
          >
            <img src={link.icon} alt="" height={50} width={50} />
          </button>
        ))}
      </div>

          <PostCard post={posts[2]} large />
        </div>
      </div>
    </div>
  )
}

const PostCard = ({ post, large }) => {
  return (
       <div className={`relative ${large ? "h-[400px]" : "h-[190px]"} rounded-lg overflow-hidden`}>
      <img src={post.img} alt={post.text} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 text-white">
        <p className="text-sm opacity-80">{post.date}</p>
        <p className="font-semibold">{post.text}</p>
      </div>
    </div>
  )
}

export default SocialGateway
