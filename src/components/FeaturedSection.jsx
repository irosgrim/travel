import React from 'react';
import dubai from '../imgs/pictures/dubai.jpg';

function FeaturedSection() {
    return (
        <section className="featured-section">
            <header>
                <h2>Välkommen till Sembo!</h2>
                <p>
                    I över 30 år har vi på Sembo jobbat hårt för att uppfylla
                    miljoner resenärers drömmar.
                </p>
            </header>

            <section className="featured-destinations">
                <div className="destination-card">
                    <figure>
                        <img src={dubai} alt="" />
                    </figure>
                    <div className="destination-card-overlay">
                        <h3>DUBAI</h3>
                        <p>
                            Välkommen till Mellanösterns svar på Miami – en
                            metropol som uppfyller alla drömmar!
                        </p>
                    </div>
                </div>

                <div className="destination-card">
                    <img src={dubai} alt="" />

                    <div className="destination-card-overlay">
                        <h3>DUBAI</h3>
                        <p>
                            Välkommen till Mellanösterns svar på Miami – en
                            metropol som uppfyller alla drömmar!
                        </p>
                    </div>
                </div>

                <div className="destination-card">
                    <img src={dubai} alt="" />

                    <div className="destination-card-overlay">
                        <h3>DUBAI</h3>
                        <p>
                            Välkommen till Mellanösterns svar på Miami – en
                            metropol som uppfyller alla drömmar!
                        </p>
                    </div>
                </div>

                <div className="destination-card">
                    <img src={dubai} alt="" />

                    <div className="destination-card-overlay">
                        <h3>DUBAI</h3>
                        <p>
                            Välkommen till Mellanösterns svar på Miami – en
                            metropol som uppfyller alla drömmar!
                        </p>
                    </div>
                </div>

                <div className="destination-card">
                    <img src={dubai} alt="" />

                    <div className="destination-card-overlay">
                        <h3>DUBAI</h3>
                        <p>
                            Välkommen till Mellanösterns svar på Miami – en
                            metropol som uppfyller alla drömmar!
                        </p>
                    </div>
                </div>
                <div className="destination-card">
                    <img src={dubai} alt="" />

                    <div className="destination-card-overlay">
                        <h3>DUBAI</h3>
                        <p>
                            Välkommen till Mellanösterns svar på Miami – en
                            metropol som uppfyller alla drömmar!
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
}
export default FeaturedSection;
