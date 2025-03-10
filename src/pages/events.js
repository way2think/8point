import React from "react"
import TopBanner from "../components/top-banner"
import EventBg from "../images/event-bg.svg"
import EventBeyondExpectation from "../components/event-beyond-expectation"

const Events = () => {
  return (
    <>
      <TopBanner
        bgImg={EventBg}
        heading="Events Crafted with Precision and Passion"
      />
      <EventBeyondExpectation />
    </>
  )
}

export default Events
