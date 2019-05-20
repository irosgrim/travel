import React from 'react';
import HeaderDescriptionCard from './HeaderDescriptionCard';
import HeaderForm from './HeaderForm';
import HeaderFeaturedImage from './HeaderFeaturedImage';

function HeaderFeatured() {
    return (
        <section className="featured-header-destination">
            <HeaderDescriptionCard />
            <HeaderForm />
            <HeaderFeaturedImage />
        </section>
    );
}
export default HeaderFeatured;
