import React from "react";

const EventsToAttend = ({ events }) => {
  console.log("events in component", events);

  return (
    <>
      <h1>
        <i>Events to Attend</i>
      </h1>
      <>
        {events.map((event) => {
          return (
            <div key={event._id}>
              <h3>{event.title}</h3>
              <img src={event.image} alt={event.title} style={{ maxWidth: "400px" }}/>
            </div>
          );
        })}
      </>
    </>
  );
};

export default EventsToAttend;
