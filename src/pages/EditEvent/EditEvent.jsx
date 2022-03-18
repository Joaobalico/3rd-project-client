import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

function EditEvent() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const storedToken = localStorage.getItem("authToken");

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
        `${process.env.REACT_APP_API_URL}/event/${eventId}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      let { title, image, address, description } = response.data;
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
      .put(`${process.env.REACT_APP_API_URL}/event/${eventId}`, body, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
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
    <div className="card" style={{ width: "20rem", marginTop: "1rem" }}>
      <div className="card-body">
        <h2 className="card-title">Edit Event</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">
            <b>Title</b>
          </label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />

          <label htmlFor="image">
            {" "}
            <b>Image</b>{" "}
          </label>
          <br />
          <input
            type="url"
            required
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />

          <label htmlFor="address">
            {" "}
            <b>Event Address</b>{" "}
          </label>
          <br />
          <input
            type="text"
            required
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />

          <label htmlFor="description">
            <b>Description</b>
          </label>
          <br />
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
          />
          <br />

            <button
              className="btn btn-success"
              type="submit"
              style={{ margin: "0.5rem 0" }}
            >
              Edit Event
            </button>
        </form>
        <button className="btn btn-danger" onClick={deleteEvent}>
          Delete Event
        </button>
      </div>
    </div>
  );
}

export default EditEvent;
