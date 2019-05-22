import React, { useState } from 'react';
import '../styles/animations.css';

function HeaderFeaturedImage({ picUrl, location }) {
    const [imageStatus, setImageStatus] = useState('loading image...');
    return (
        <div className="bg">
            {imageStatus !== 'loaded' ? (
                <div className="image-loader">
                    <div class="lds-roller">
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            ) : null}
            <img
                src={picUrl}
                alt={location}
                onLoad={() => setImageStatus('loaded')}
                onError={() => setImageStatus('failed to load image')}
            />
        </div>
    );
}
export default HeaderFeaturedImage;
