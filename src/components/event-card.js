import React from "react"

const EventCard = ({ title, description, image, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center bg-black text-white rounded-2xl overflow-hidden shadow-lg`}
    >
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 h-full object-cover "
      />
      <div className="p-6 md:w-1/2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-3 text-gray-300">{description}</p>
        <button className="mt-4 px-4 py-2 bg-yellow-500 text-black font-semibold rounded-md">
          View Photos →
        </button>
      </div>
    </div>
  )
}

export default EventCard
