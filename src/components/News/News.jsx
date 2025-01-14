import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './NewsView.css';

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
            <div className="news-grid">
                {news.map((newss) => (
                    <Link to={`/news/${newss.news_slug}`} key={newss.news_slug} className="news-link">
                        <div className="news-card">
                            {/* Provide a default fallback image if newss.img is undefined */}
                            <img
                                src={newss.img || 'default-image.jpg'}
                                alt={newss.title || 'No Title'}
                            />
                            <div className="news-content">
                                {/* Fallback for news date */}
                                <p className="date">
                                    {newss.news_date
                                        ? new Date(newss.news_date).toLocaleDateString()
                                        : 'No Date'}
                                </p>
                                {/* Fallback for title */}
                                <h3>{newss.title || 'No Title'}</h3>
                                {/* Fallback for description */}
                                <p>
                                    {newss.description
                                        ? `${newss.description.slice(0, 100)}...`
                                        : 'No description available.'}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default News;
