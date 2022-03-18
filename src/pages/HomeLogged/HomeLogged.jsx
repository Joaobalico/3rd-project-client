import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

const HomeLogged = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [quotes, setQuotes] = useState(null);

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

  const fetchQuotes = async () => {
    try {
      let response = await axios.get("https://type.fit/api/quotes");
      let quotesFromApi = response.data;
      console.log(quotesFromApi);
      let randomQuote =
        quotesFromApi[Math.floor(Math.random() * quotesFromApi.length)];
      setQuotes(randomQuote);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <>
      <h1>Welcome, {user.username} 👋</h1>
      <h2>
        <i>All Events:</i>
      </h2>
      <div className="list" style={{ display: "flex", flexWrap: "wrap" }}>
        {events.map((event) => {
          return (
            <div key={event._id} className="card" style={{ margin: "1rem" }}>
              <div className="card-body">
                <Link to={`/event/${event._id}`} style={{ color: "black" }}>
                  <h3 className="card-title">{event.title}</h3>
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
      </div>
      {quotes && (
        <div className="quote-box">
      <hr />
          <div className="quote">
            <h4>{quotes.author}</h4> <br />
            <p>{quotes.text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeLogged;
