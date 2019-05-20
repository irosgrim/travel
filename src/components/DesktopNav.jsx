import React from 'react';
import shoppingCart from '../imgs/icons/shopping-cart.svg';

function DesktopNav() {
    return (
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
    );
}
export default DesktopNav;
