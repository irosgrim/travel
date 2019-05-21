import React from 'react';
import shoppingCart from '../imgs/icons/shopping-cart.svg';

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
                    <li>
                        <div className="mobile-user-menu">
                            <div className="mobile-shopping-cart">
                                <p>1 produkt</p>
                                <img src={shoppingCart} alt="" />
                            </div>
                            <div className="mobile-user-account">
                                <a href="https://www.sembo.se/min-sida">
                                    Min Sida
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="https://www.sembo.se/vaara-resmaal/vaara-resmaal-startsida">
                            Våra resmål
                        </a>
                    </li>
                    <li>
                        <a href="https://www.sembo.se/saa-reser-du">
                            Så reser du
                        </a>
                    </li>
                    <li>
                        <a href="https://www.sembo.se/erbjudande">
                            Erbjudanden
                        </a>
                    </li>
                    <li>
                        <a href="https://www.sembo.se/om-oss.aspx">Om oss</a>
                    </li>
                    <li>
                        <a href="http://blogg.sembo.se/">Blogg</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default MobileNav;
