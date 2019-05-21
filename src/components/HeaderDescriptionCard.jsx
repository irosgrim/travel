import React from 'react';

function HeaderDescriptionCard({ locationText, descriptionText, linkUrl }) {
    return (
        <div className="description-card">
            <a href={linkUrl}>
                <header>
                    <h2>{locationText}</h2>
                </header>
                <p>{descriptionText}</p>
            </a>
        </div>
    );
}
export default HeaderDescriptionCard;
