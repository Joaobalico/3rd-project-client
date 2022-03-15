import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditEvent() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const storedToken = localStorage.getItem('authToken');

  const { eventId } = useParams();

  const navigate = useNavigate();

  const deleteEvent = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/event/${eventId}`)
      .then(() => navigate("/"));
  };

  const fetchEvent = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/event/${eventId}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          }
      );
      let { title, description } = response.data;
      setTitle(title);
      setImage(image);
      setAddress(address);
      setDescription(description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title, image, address, description };

    axios
      .put(`${process.env.REACT_APP_API_URL}/event/${eventId}`, body)
      .then((response) => {
        setTitle("");
        setImage("");
        setAddress("");
        setDescription("");
        navigate(`/event/${eventId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Edit Event</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="image">Image</label>
        <input
          type="url"
          required
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label htmlFor="address">Event Address</label>
        <input
          type="text"
          required
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Edit Event</button>
      </form>
      <button onClick={deleteEvent}> Delete Event</button>
    </div>
  );
}

export default EditEvent;
