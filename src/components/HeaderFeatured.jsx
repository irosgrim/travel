import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderDescriptionCard from './HeaderDescriptionCard';
import HeaderForm from './HeaderForm';
import HeaderFeaturedImage from './HeaderFeaturedImage';

function HeaderFeatured() {
    useEffect(() => {
        axios(
            `https://www.sembo.se/d/mvc/PriceFinder/GetPriceExamples?Query=country-code%3Ase&Take=8&Duration=1&FromDate=2019-05-21&ToDate=2020-05-21&NumberOfAdults=2&NumberOfChildren=&UnmappedOnly=false&fromIatas=&SemboSunRating=&HotelOfType=`
        ).then(response => console.log(response));
    });
    return (
        <section className="featured-header-destination">
            <HeaderDescriptionCard />
            <HeaderForm />
            <HeaderFeaturedImage />
        </section>
    );
}
export default HeaderFeatured;
