import React from 'react';
import HeaderNav from './HeaderNav';
import HeaderFeatured from './HeaderFeatured';

function Header() {
    return (
        <header className="main-header">
            <HeaderNav />
            <HeaderFeatured />
        </header>
    );
}
export default Header;
