

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Event.css';

function News() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const djangoApi = import.meta.env.VITE_DJANGO_API;

    useEffect(() => {
        // Fetch news from the API
        axios
            .get(`${djangoApi}/app/news/`) // Replace with your actual API endpoint
            .then((response) => {
                setNews(response.data); // Assuming the response is an array of news
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching news:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading news...</p>;
    }

    return (
        <div className="news-container">
            <div className="news-header">
                <h1>news</h1>
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
            <div className="news-grid">
                {news.map((event) => (    
                    <Link to={`/news/${news.news_slug}`} key={event.news_slug} className="event-link">
                        <div className="event-card">
                            <img src={`${news.img}`} alt={event.title} />
                            <div className="event-content">
                                <p className="date">{new Date(news.news_date).toLocaleDateString()}</p>
                                <h3>{news.title}</h3>
                                <p>{news.description.slice(0, 100)}...</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}

export default News;
