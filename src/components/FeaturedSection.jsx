import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dubai from '../imgs/pictures/dubai.jpg';
import star from '../imgs/icons/star.svg';

function FeaturedSection() {
    const [hotelsLocation, setHotelsLocation] = useState({
        hotelURL: 'sverige'
    });
    const [fetchedHotels, setFetchedHotels] = useState([]);
    const hotelsNav = [
        { hotelLocation: 'SVERIGE', hotelURL: 'sverige' },
        { hotelLocation: 'DANMARK', hotelURL: 'danmark' },
        { hotelLocation: 'SPA & WELLNESS', hotelURL: 'spaochwellness' },
        { hotelLocation: 'KROATIEN', hotelURL: 'kroatien' },
        { hotelLocation: 'LONDON', hotelURL: 'london' },
        { hotelLocation: 'FRANSKA RIVIERAN', hotelURL: 'franskarivieran' },
        { hotelLocation: 'SPANIEN', hotelURL: 'spanien' },
        { hotelLocation: 'BADLAND', hotelURL: 'badland' }
    ];

    useEffect(() => {
        axios(`/fakeApi/${hotelsLocation.hotelURL}.json`).then(response => {
            setFetchedHotels(response.data.Hotels);
        });
    }, [hotelsLocation.hotelURL]);
    function makeStars(n) {
        let stars = [];
        for (let i = 0; i < n; i++) {
            stars.push(i);
        }
        return stars.map((s, i) => <img src={star} alt="" />);
    }
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
            <section className="popular-hotels">
                <header>
                    <h2>Populära hotell</h2>
                    <p>Ett urval av våra mest sökta hotell</p>
                    <nav className="hotels-nav">
                        <ul>
                            {hotelsNav.map((hotel, index) => (
                                <li
                                    key={index}
                                    onClick={() =>
                                        setHotelsLocation({
                                            hotelURL: hotel.hotelURL
                                        })
                                    }
                                    className={
                                        hotel.hotelURL ===
                                        hotelsLocation.hotelURL
                                            ? 'active-hotel-link'
                                            : 'inactive-hotel-link'
                                    }>
                                    {hotel.hotelLocation}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
                <section className="popular-hotels-container">
                    {fetchedHotels.length < 1
                        ? 'Loading hotels'
                        : fetchedHotels.map((hotel, index) => (
                              <article className="popular-hotels-card">
                                  <a href={hotel.Accommodation.Link}>
                                      <figure>
                                          <div className="stars">
                                              {makeStars(
                                                  hotel.Accommodation
                                                      .SemboSunRating
                                              )}
                                          </div>
                                          <img
                                              src={hotel.Accommodation.Image}
                                              alt={
                                                  hotel.Accommodation.HotelName
                                              }
                                          />
                                      </figure>
                                      <div className="hotel-details-container">
                                          <header>
                                              <h3>
                                                  {
                                                      hotel.Accommodation
                                                          .HotelName
                                                  }
                                              </h3>
                                              <p>
                                                  {
                                                      hotel.Accommodation
                                                          .DestinationName
                                                  }
                                                  -
                                                  {
                                                      hotel.Accommodation
                                                          .CountryName
                                                  }
                                              </p>
                                          </header>
                                          <div className="hotel-details">
                                              <h3>
                                                  {
                                                      hotel.Accommodation.Price
                                                          .Amount
                                                  }{' '}
                                                  {
                                                      hotel.Accommodation.Price
                                                          .Currency
                                                  }
                                              </h3>
                                              <h5>
                                                  {hotel.Accommodation.Adults}{' '}
                                                  Vuxna
                                              </h5>
                                              <p>
                                                  {
                                                      hotel.Accommodation
                                                          .FromDateText
                                                  }{' '}
                                                  -{' '}
                                                  {
                                                      hotel.Accommodation
                                                          .ToDateText
                                                  }
                                              </p>
                                          </div>
                                      </div>
                                  </a>
                              </article>
                          ))}
                </section>
            </section>
        </section>
    );
}
export default FeaturedSection;
