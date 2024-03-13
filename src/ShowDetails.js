// ShowDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ShowDetails.css"; // Import the CSS file

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.error("Error fetching show details:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="show-details">
        <h2>{show.name}</h2>
        <img src={show.image ? show.image.medium : ""} alt={show.name} />
        <p>
          feed: <span dangerouslySetInnerHTML={{ __html: show.summary }}></span>
        </p>
      </div>
    </div>
  );
}

export default ShowDetails;
