import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();

  const fetchEvent = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/event/${eventId}`
      );
      setEvent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <>
      {event && (
        <>
          <img
            src={event.image}
            alt={event.title}
            style={{ maxWidth: "300px" }}
          />
          <div>
          <h1>{event.title}</h1>
          <button style={{cursor:"pointer"}}>Attend</button>
          </div>
          <div>
            <h3>About the Event:</h3>
            <p>{event.description}</p>
          </div>
          <div>
            <h3>Address:</h3>
            <p>
              <i>{event.address}</i>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default EventDetails;
