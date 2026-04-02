import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import './location.css';

const Location = () => {
    return (
        <div className="location-page">
            <Navbar />
            <main className="location-main">
                {/* Hero Section */}
                <section className="location-hero">
                    <div className="hero-content">
                        <h1>Our <span className="highlight-text">Sanctuaries</span></h1>
                        <p>
                            Spaces designed for slow mornings, deep focus, and the quiet rustle of turning pages. Find us in the heart of the city's quietest corners.
                        </p>
                    </div>
                </section>

                {/* Locations Grid */}
                <section className="locations-grid-container">
                    <div className="locations-grid">
                        {/* Location 1 */}
                        <div className="location-card">
                            <div className="location-image-wrapper">
                                <img
                                    className="location-image"
                                    src="/heritage_library.png"
                                    alt="The Heritage Library location"
                                />
                            </div>
                            <div className="location-details">
                                <div className="location-header">
                                    <h2>The Heritage Library</h2>
                                    <span className="location-tag">Old Town</span>
                                </div>
                                <div className="location-divider"></div>
                                <div className="location-info">
                                    <p>122 Manuscript Lane, Historical District</p>
                                    <p className="schedule">Mon-Fri: 07:00 — 20:00</p>
                                    <p className="schedule">Sat-Sun: 08:00 — 22:00</p>
                                </div>
                            </div>
                        </div>

                        {/* Location 2 */}
                        <div className="location-card offset-card">
                            <div className="location-image-wrapper">
                                <img
                                    className="location-image"
                                    src='/solarium_gallery.png'
                                    alt="The Solarium Gallery location"
                                />
                            </div>
                            <div className="location-details">
                                <div className="location-header">
                                    <h2>The Solarium Gallery</h2>
                                    <span className="location-tag">The Docks</span>
                                </div>
                                <div className="location-divider"></div>
                                <div className="location-info">
                                    <p>44 Glassworks Pier, Waterfront Plaza</p>
                                    <p className="schedule">Mon-Fri: 06:30 — 19:00</p>
                                    <p className="schedule">Sat-Sun: 09:00 — 21:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote */}
                <section className="quote-section">
                    <div className="quote-container">
                        <div className="quote-line"></div>
                        <blockquote>
                            "A location is not just an address; it is a chapter in the story we write together every morning over a cup of obsidian roast."
                        </blockquote>
                    </div>
                </section>

                {/* Booking Form Section */}
                <section className="booking-section">
                    <div className="booking-info">
                        <h2>Host Your Gathering</h2>
                        <p>
                            From intimate book launches to quiet corporate retreats, our spaces transform to suit your narrative. Let us curate your next event with bespoke catering and private service.
                        </p>
                        <ul className="booking-features">
                            <li><span>Capacity: up to 45 guests</span></li>
                            <li><span>Custom Menu Design Available</span></li>
                        </ul>
                    </div>
                    <div className="booking-form-wrapper">
                        <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Elias Thorne" />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="elias@manuscript.co" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Select Sanctuary</label>
                                    <select>
                                        <option>The Heritage Library</option>
                                        <option>The Solarium Gallery</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Preferred Date</label>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <label>Tell us about your event</label>
                                <textarea rows="4" placeholder="An evening of poetry and pour-overs..."></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Inquire Now</button>
                        </form>
                    </div>
                </section>
            </main>

            {/* Map/Footer Section Transition */}
            <section className="map-transition">
                <div className="gradient-overlay"></div>
                <img
                    src='cafe_map.png'
                    alt="Map view of locations"
                    className="map-img"
                />
            </section>

            <Footer />
        </div>
    );
};

export default Location;
