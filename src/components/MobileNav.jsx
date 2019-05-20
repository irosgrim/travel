import React from 'react';

function MobileNav(props) {
    return (
        <div
            className={
                props.visible
                    ? 'mobile-nav-container visible'
                    : 'mobile-nav-container hidden'
            }
            style={props.scrolling ? { top: '40px' } : { top: '80px' }}>
            <nav className="mobile-main-menu">
                <ul>
                    <li>Våra resmål</li>
                    <li>Så reser du</li>
                    <li>Erbjudanden</li>
                    <li>Om oss</li>
                    <li>Blogg</li>
                </ul>
            </nav>
        </div>
    );
}
export default MobileNav;
