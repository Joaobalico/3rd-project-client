import { AuthContext } from "../../context/auth.context";
import React, { useState, useEffect, useContext } from "react";
import EventsToAttend from "../EventsToAttend/EventsToAttend";
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom';


const Profile = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([])


  const { user } = useContext(AuthContext);

  const storedToken = localStorage.getItem('authToken');

  const deleteUser = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/profile`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => navigate("/"));
  };

  useEffect(() => {
    setEvents(user.events);
  }, []);

  return (
    <>
    {user && (
      <>
      <h1>
        <u>{user.username}</u>
      </h1>
      <button>Change Username</button>
      <EventsToAttend events={events}/>
      <button onClick={deleteUser}> Delete Event</button>
      </>
      )}
    </>
  );
};

export default Profile;
