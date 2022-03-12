import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const HomeLogged = () => {
  const [events, setEvents] = useState([]);

  const fetchUser = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/events`);
      console.log(response.data);
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <h1>HomePage </h1>
      <>
       {events.map((event) => {
        return (
          <div key={event._id}>
              <h3>{event.title}</h3>
              <img src={event.image} alt={event.title} style={{maxWidth:'400px'}}/>
          </div>
        );
      })}
      </>
    </>
  );
};

export default HomeLogged;
