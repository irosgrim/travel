import React, { useState, useEffect } from 'react';
import logo from '../imgs/logo.png';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import hamburgerActiveIcon from '../imgs/icons/hamburger-icon-active.svg';
import hamburgerInactiveIcon from '../imgs/icons/hamburger-icon-inactive.svg';

function HeaderNav(props) {
    const [navBarScrolling, setNavBarScrolling] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            window.pageYOffset > 80
                ? setNavBarScrolling(true)
                : setNavBarScrolling(false);
        };
    });
    return (
        <React.Fragment>
            <section
                className={
                    navBarScrolling
                        ? 'nav-section scrolling'
                        : 'nav-section not-scrolling'
                }>
                <figure className="logo-container">
                    <img
                        src={logo}
                        alt="Sembo"
                        className={navBarScrolling ? 'logo-small' : 'logo-big'}
                    />
                </figure>
                <DesktopNav />
                <div
                    className="hamburger-button"
                    onClick={() => {
                        setShowMobileMenu(!showMobileMenu);
                    }}>
                    {showMobileMenu ? (
                        <img src={hamburgerInactiveIcon} alt="" />
                    ) : (
                        <img src={hamburgerActiveIcon} alt="" />
                    )}
                </div>
            </section>
            <MobileNav scrolling={navBarScrolling} visible={showMobileMenu} />
        </React.Fragment>
    );
}
export default HeaderNav;
