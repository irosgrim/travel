import React from 'react';

function HeaderFeaturedImage({ picUrl, location }) {
    return (
        <div className="bg">
            <img src={picUrl} alt={location} />
        </div>
    );
}
export default HeaderFeaturedImage;
