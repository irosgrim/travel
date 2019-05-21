import React from 'react';
import shoppingCart from '../imgs/icons/shopping-cart.svg';

function DesktopNav() {
    return (
        <div className="nav-container">
            <nav className="main-menu">
                <ul>
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
            <div className="cart-user">
                <ul>
                    <li>
                        <p className="shopping-cart">1 produkt</p>

                        <img src={shoppingCart} alt="" />
                    </li>
                    <li>
                        <a href="https://www.sembo.se/min-sida">Min Sida</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default DesktopNav;
