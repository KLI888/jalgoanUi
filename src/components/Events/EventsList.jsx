import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Event.css';

function EventsList() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const djangoApi = import.meta.env.VITE_DJANGO_API;

    useEffect(() => {
        // Fetch events from the API
        axios
            .get(`${djangoApi}/eventts/`) // Replace with your actual API endpoint
            .then((response) => {
                setEvents(response.data); // Assuming the response is an array of events
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching events:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading events...</p>;
    }

    return (
        <div className="events-container">
            <div className="events-header">
                <h1>Events</h1>
            </div>
            <div className="filters">
                <select>
                    <option>Live</option>
                </select>
                <select>
                    <option>Event Type</option>
                </select>
                <select>
                    <option>Any Category</option>
                </select>
                <button>Filter</button>
            </div>
            <div className="events-grid">
                {events.map((event) => (    
                    <Link to={`/events/${event.event_slug}`} key={event.event_slug} className="event-link">
                        <div className="event-card">
                            <img src={`${djangoApi}/${event.img}`} alt={event.title} />
                            <div className="event-content">
                                <p className="date">{new Date(event.start_date).toLocaleDateString()}</p>
                                <h3>{event.title}</h3>
                                <p>{event.description.slice(0, 100)}...</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}

export default EventsList;
