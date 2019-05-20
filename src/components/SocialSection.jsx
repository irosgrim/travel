import React from 'react';

import shield from '../imgs/icons/shield.png';
import contactUs from '../imgs/icons/contact.png';
import customerService from '../imgs/icons/customer-service.png';

function SocialSection() {
    return (
        <section className="social-section">
            <div className="client-info">
                <section className="column">
                    <figure>
                        <img src={shield} alt="Varför Sembo?" />
                    </figure>
                    <header>
                        <h3>Varför Sembo?</h3>
                    </header>
                    <ul>
                        <li>Prisgaranti</li>
                        <li>
                            <strong>97%</strong> nöjda kunder
                        </li>
                        <li>
                            Kundservice <strong>alla dagar</strong>
                        </li>
                        <li>
                            <strong>Säker betalning</strong> via
                        </li>
                        <li>
                            <strong>DIBS</strong> och <strong>Captum</strong>
                        </li>
                    </ul>
                </section>
                <section className="column">
                    <figure>
                        <img src={contactUs} alt="Kontakta oss" />
                    </figure>
                    <header>
                        <h3>Kontakta oss</h3>
                    </header>
                    <ul>
                        <li>Tel. 042-378500</li>
                        <li>Helgfri mån-fre 09-18</li>
                        <li>Lör-sön, helgdag 10-14</li>
                    </ul>
                </section>
                <section className="column">
                    <figure>
                        <img src={customerService} alt="Kundservice" />
                    </figure>
                    <header>
                        <h3>Kundservice</h3>
                    </header>
                    <ul>
                        <li>Få svar på dina frågor.</li>
                        <li>Kundservicer</li>
                    </ul>
                </section>
            </div>
            <div className="social-icons">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </section>
    );
}
export default SocialSection;
