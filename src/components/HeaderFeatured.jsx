import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HeaderDescriptionCard from './HeaderDescriptionCard';
import HeaderForm from './HeaderForm';
import HeaderFeaturedImage from './HeaderFeaturedImage';

function HeaderFeatured() {
    const [locations, setLocations] = useState([]);
    const [featuredLocation, setFeaturedLocation] = useState({});

    useEffect(() => {
        axios(`fakeApi/featured.json`).then(response => {
            const locationsResponse = response.data.Destinations;
            const randomNr =
                Math.floor(
                    Math.random() * (locationsResponse.length - 1 - 0 + 1)
                ) + 0;
            setFeaturedLocation(locationsResponse[randomNr]);

            setLocations(response.data.Destinations);
        });
    }, [setLocations, setFeaturedLocation]);

    const { Location, Description, ImageUrl, LinkUrl } = featuredLocation;
    return (
        <section className="featured-header-destination">
            <HeaderDescriptionCard
                locationText={Location}
                descriptionText={Description}
                linkUrl={LinkUrl}
            />
            <HeaderForm />
            <HeaderFeaturedImage picUrl={ImageUrl} location={Location} />
        </section>
    );
}
export default HeaderFeatured;
