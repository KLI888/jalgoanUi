import React from 'react';
import './NewsView.css';
const NewsView = () => {
  return (
    <div className="container">
      <div className="main-content">
        <h1>The Scalability Solution: Understanding Layer One vs. Layer Two Blockchains</h1>
        <p><small>03 Jan 2024, 8:00pm by @Simplesphere</small></p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYHmCuZGk-GbLOaW27SJDAcnrDktkpAfArQ&s"
          alt="Blockchain Image"
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer a velit nec nulla consectetur suscipit vel vitae felis.</p>
        <p>Proin accumsan nisl sed arcu fermentum, non cursus purus laoreet. Maecenas pharetra neque nec turpis porttitor, a hendrerit mauris scelerisque.</p>
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
