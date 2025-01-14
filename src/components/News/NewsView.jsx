import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import axios from "axios"; // Import axios
import './NewsView.css';

const NewsView = () => {
  const djangoApi = import.meta.env.VITE_DJANGO_API;
  const { slug } = useParams(); // Get the slug from the URL
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${djangoApi}/app/news/${slug}/`); // Fetch news data by slug
        setNewsData(response.data);
      } catch (err) {
        setError("Failed to load news data.");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const { img, title, description, location, news_date, publisher, video_link } = newsData || {};

  return (
    <div className="news-container">
      <div className="main-content">
        <h1>{title}</h1>
        <p><small>{news_date}, by @{publisher}</small></p>
        <img src={img} alt={title || "News Image"} />
        <p>Location: {location}</p>
        <p>{description}</p>

      </div>
      <aside className="sidebar">
        <h2>More News</h2>
        {Array(4).fill(null).map((_, index) => (
          <div className="news-item" key={index}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnFbrS1XLDHivrc0idt7zxetIC7B3XOuRwg&s"
              alt="News Thumbnail"
            />
            <p>U.S. downs suspected Chinese spy balloon</p>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default NewsView;
