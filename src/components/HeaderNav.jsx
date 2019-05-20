import React, { useState, useEffect } from 'react';
import shoppingCart from '../imgs/icons/shopping-cart.svg';
import logo from '../imgs/logo.png';

function HeaderNav(props) {
    const [navBarScrolling, setNavBarScrolling] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            window.pageYOffset > 80
                ? setNavBarScrolling(true)
                : setNavBarScrolling(false);
        };
    });

    console.log(navBarScrolling);
    return (
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
            <div className="nav-container">
                <nav className="main-menu">
                    <ul>
                        <li>Våra resmål</li>
                        <li>Så reser du</li>
                        <li>Erbjudanden</li>
                        <li>Om oss</li>
                        <li>Blogg</li>
                    </ul>
                </nav>
                <div className="cart-user">
                    <ul>
                        <li>
                            <p className="shopping-cart">1 produkt</p>

                            <img src={shoppingCart} alt="" />
                        </li>
                        <li>Mitt Konto</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default HeaderNav;
