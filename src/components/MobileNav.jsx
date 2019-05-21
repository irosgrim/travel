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
                                Mitt Konto
                            </div>
                        </div>
                    </li>
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
