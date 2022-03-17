import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./NewEvent.css"

const NewEvent = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const storedToken = localStorage.getItem("authToken");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title, image, address, description };

    axios
      .post(`${process.env.REACT_APP_API_URL}/event`, body, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        setTitle("");
        setImage("");
        setAddress("");
        setDescription("");
        navigate(`/`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Add New Event</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Event Title</label>
            <input
              type="text"
              required
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="image">Event image</label>
            <input
              type="url"
              required
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address">Event address</label>
            <input
              type="text"
              required
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Event description</label>
            <textarea
              id="description"
              required
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button>Add Event</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewEvent;
