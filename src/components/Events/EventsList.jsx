import React from 'react'
import './Event.css'
function EventsList() {
    return (
        <div className="events-container">
            <div class="events-header">
                <h1>Events</h1>
            </div>
            <div class="filters">
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
            <div class="events-grid">
                <a href="">
                    <div class="event-card">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/82/TheNewsTodayCover.jpg/240px-TheNewsTodayCover.jpg" alt="Event Image" />
                        <div class="event-content">
                            <p class="date">FEB 20</p>
                            <h3>TechnoSpark 2025</h3>
                            <p>A tech extravaganza featuring hackathons, AI workshops, and a startup showcase.</p>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div class="event-card">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/82/TheNewsTodayCover.jpg/240px-TheNewsTodayCover.jpg" alt="Event Image" />
                        <div class="event-content">
                            <p class="date">FEB 20</p>
                            <h3>TechnoSpark 2025</h3>
                            <p>A tech extravaganza featuring hackathons, AI workshops, and a startup showcase.</p>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div class="event-card">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/82/TheNewsTodayCover.jpg/240px-TheNewsTodayCover.jpg" alt="Event Image" />
                        <div class="event-content">
                            <p class="date">FEB 20</p>
                            <h3>TechnoSpark 2025</h3>
                            <p>A tech extravaganza featuring hackathons, AI workshops, and a startup showcase.</p>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div class="event-card">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/82/TheNewsTodayCover.jpg/240px-TheNewsTodayCover.jpg" alt="Event Image" />
                        <div class="event-content">
                            <p class="date">FEB 20</p>
                            <h3>TechnoSpark 2025</h3>
                            <p>A tech extravaganza featuring hackathons, AI workshops, and a startup showcase.</p>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div class="event-card">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/82/TheNewsTodayCover.jpg/240px-TheNewsTodayCover.jpg" alt="Event Image" />
                        <div class="event-content">
                            <p class="date">FEB 20</p>
                            <h3>TechnoSpark 2025</h3>
                            <p>A tech extravaganza featuring hackathons, AI workshops, and a startup showcase.</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="see-more">
                <button>See More</button>
            </div>
        </div>
    )
}

export default EventsList
