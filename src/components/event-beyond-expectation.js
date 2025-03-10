import React from "react"
import EventCard from "./event-card"
import EventCard1 from "../images/event-card1.svg"
import EventCard2 from "../images/event-card2.svg"
import EventCard3 from "../images/event-card3.svg"
import EventCard4 from "../images/event-card4.svg"

const events = [
  {
    title: "Live in music concert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Orci nisi eros malesuada viverra, venenatis placerat sodales magna. Proin tellus fusce vestibulum ",
    image: EventCard1,
  },
  {
    title: "Musical shows",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Orci nisi eros malesuada viverra, venenatis placerat sodales magna. Proin tellus fusce vestibulum ",
    image: EventCard2,
  },
  {
    title: "Community events",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Orci nisi eros malesuada viverra, venenatis placerat sodales magna. Proin tellus fusce vestibulum ",
    image: EventCard3,
  },
  {
    title: "Tamil debate shows",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Orci nisi eros malesuada viverra, venenatis placerat sodales magna. Proin tellus fusce vestibulum ",
    image: EventCard4,
  },
]

const EventBeyondExpectation = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center">
        Events Beyond Expectations
      </h2>
      <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="mt-8 space-y-8">
        {events.map((event, index) => (
          <EventCard key={index} {...event} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  )
}

export default EventBeyondExpectation
