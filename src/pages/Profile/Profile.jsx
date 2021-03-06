import React, { useState, useEffect } from "react";
import EventsToAttend from "../EventsToAttend/EventsToAttend";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const storedToken = localStorage.getItem("authToken");

  const fetchUser = () => {
    console.log("storedToken", storedToken);
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/profile`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const deleteUser = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/profile`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => navigate("/"));
  };

  return (
    <>
      {user && (
        <>
          <h1>
            <u>{user.username}</u>
          </h1>
          <div>
            <EventsToAttend events={user.events} />
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
