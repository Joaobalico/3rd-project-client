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
      console.log(response);
      console.log(user)
      // setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
     {/*  <h1>Welcome, {user.username} 👋</h1>
      <h2>
        <i>All Events:</i>
        {console.log(user)}
      </h2>
      <>
        {events.map((event) => {
          return (
            <div key={event._id}>
              <Link to={`/event/${event._id}`} style={{ color: "black" }}>
                <h3>{event.title}</h3>
              </Link>
              <img
                src={event.image}
                alt={event.title}
                style={{ maxWidth: "400px" }}
              />
            </div>
          );
        })}
      </> */}
    </>
  );
};

export default EventsToAttend;
