import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

const EventsToAttend = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  const fetchUser = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/events`);
      console.log(response.data);
      console.log(user);
      // setEvents(response.data);
      // return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <h1>
        <i>Events to Attend</i>
      </h1>
       <>
        {user.events.map((event) => {
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
