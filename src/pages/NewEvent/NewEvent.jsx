import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';


const NewEvent = (props) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const { eventId } = useParams();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title, image, address, description };

    axios
      .post(`${process.env.REACT_APP_API_URL}/event`, body)
      .then((response) => {
        setTitle("");
        setImage("");
        setAddress("");
        setDescription("");
        navigate(`/`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Add New Meetup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" value={image} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="address">Meetup address</label>
          <input type="text" required id="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="description">Meetup description</label>
          <textarea id="description" required rows="5" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div>
          <button>Add Meetup</button>
        </div>
      </form>
    </div>
  );
};

export default NewEvent;
