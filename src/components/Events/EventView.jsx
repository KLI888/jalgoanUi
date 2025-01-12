import React from "react";
import PropTypes from "prop-types";
import "./Event.css"; // Import the CSS for styling

const EventView = ({ videoId, title, description, location, startDate, endDate }) => {
  return (
    <div className="event-view-container">
      {/* YouTube Video */}
      <div className="event-video-container">
        <iframe
          className="event-video"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Event Details */}
      <div className="event-details">
        <h1 className="event-title">{title}</h1>
        <p className="event-description">{description}</p>

        <div className="event-info">
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Start Date:</strong> {new Date(startDate).toLocaleString()}</p>
          <p><strong>End Date:</strong> {new Date(endDate).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

EventView.propTypes = {
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default EventView;
