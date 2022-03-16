// import { AuthContext } from "../../context/auth.context";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

const EventDetails = () => {
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const { user } = AuthContext;

  const { eventId } = useParams();

  const storedToken = localStorage.getItem("authToken");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `${process.env.REACT_APP_API_URL}/attend-event/${eventId}`,
        {},
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then((response) => {
        console.log(response.data);
        // user = response.data;
        // console.log(user)
      })
      .catch((err) => console.log(err));
  };

  const fetchEvent = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/event/${eventId}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
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
            style={{ maxWidth: "300px", marginTop: "10px" }}
          />
          <div>
            <h1>{event.title}</h1>
            <form onSubmit={handleSubmit}>
              <button type="submit" style={{ cursor: "pointer" }}>
                Attend
              </button>
            </form>
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
          <Link to={`/edit-event/${eventId}`}>
            <button>Change Details</button>
          </Link>
        </>
      )}
    </>
  );
};

export default EventDetails;
