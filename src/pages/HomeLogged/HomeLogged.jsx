import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

const HomeLogged = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  const storedToken = localStorage.getItem("authToken");

  const fetchEvents = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/events`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      console.log(response.data);
      console.log(user);
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <h1>Welcome, {user.username} 👋</h1>
      <h2>
        <i>All Events:</i>
      </h2>
      <>
        {events.map((event) => {
          return (
            <div key={event._id} className="card" style={{margin:"1rem"}}>
              <div className="card-body">
                <Link to={`/event/${event._id}`} style={{ color: "black" }}>
                  <h3 class="card-title">{event.title}</h3>
                </Link>
                <img
                  className="card-img-bottom"
                  src={event.image}
                  alt={event.title}
                  style={{ maxWidth: "400px" }}
                />
              </div>
            </div>
          );
        })}
      </>
    </>
  );
};

export default HomeLogged;
