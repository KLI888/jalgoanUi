import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Event.css";

const EventView = () => {
    const { slug } = useParams(); // Get the event_slug from the URL
    const [eventData, setEventData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/events/${slug}/`); // Fetch event data by slug
                setEventData(response.data);
            } catch (err) {
                setError("Failed to load event data.");
            } finally {
                setLoading(false);
            }
        };

        fetchEventData();
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const { img, title, description, location, start_date, end_date, video_link, event_date } = eventData;

    return (
        <div className="event-view-container">
            {/* Event Image */}
            <div className="event-image-container">
                <img className="event-image" src={img} alt={title} />
            </div>

            {/* Event Details */}
            <div className="event-details">
                <h1 className="event-title">{title}</h1>
                <p className="event-description">{description}</p>

                <div className="event-info">
                    <p><strong>Location:</strong> {location}</p>
                    <p><strong>Event Date:</strong> {new Date(event_date).toLocaleDateString()}</p>
                    <p><strong>Start Date:</strong> {new Date(start_date).toLocaleDateString()}</p>
                    <p><strong>End Date:</strong> {new Date(end_date).toLocaleDateString()}</p>
                </div>
            </div>

            {/* YouTube Video (if available) */}
            {video_link && (
                <div className="event-video-container">
                    <iframe
                        className="event-video"
                        src={video_link}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default EventView;
