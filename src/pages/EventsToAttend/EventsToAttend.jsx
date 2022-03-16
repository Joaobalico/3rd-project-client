import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

const EventsToAttend = (props) => {
  const { user } = useContext(AuthContext);
  // const [events, setEvents] = useState(props.events);
  console.log(props)

  return (
    <>
      <h1>
        <i>Events to Attend</i>
      </h1>
       <>
        {props.events.map((event) => {
          return (
            <div key={event._id}>
              <h3>{event.title}</h3>
              <img src={event.image} alt={event.title} />
            </div>
          );
        })} 
      </>
    </>
  );
};

export default EventsToAttend;
