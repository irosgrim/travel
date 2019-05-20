import React from 'react';
import logoWhite from '../imgs/logo_white.png';
import visa from '../imgs/icons/visa.png';
import seb from '../imgs/icons/seb.png';
import nordea from '../imgs/icons/nordea.png';
import mastercard from '../imgs/icons/mastercard.png';
import handelsbanken from '../imgs/icons/handelsbanken.png';
import eurocard from '../imgs/icons/eurocard.png';
import captum from '../imgs/icons/captum_liten.png';
import swedbank from '../imgs/icons/swedbank.png';

function Footer() {
    return (
        <footer className="main-footer">
            <section className="footer-logos">
                <img src={logoWhite} alt="Sembo" className="logo-footer" />
                <span className="bank-logos">
                    <img src={visa} alt="" />
                    <img src={mastercard} alt="" />
                    <img src={seb} alt="" />
                    <img src={swedbank} alt="" />
                    <img src={nordea} alt="" />
                    <img src={handelsbanken} alt="" />
                    <img src={eurocard} alt="" />
                    <img src={captum} alt="" />
                </span>
            </section>
            <section className="footer-links">
                <ul>
                    <li>Org nr: 556529-1795</li>
                    <li>Momsreg. nr: SE556529179501</li>
                    <li>Styrelsens säte: Helsingborg</li>
                </ul>

                <ul>
                    <li>Kontakta oss</li>
                    <li>Om Sembo</li>
                    <li>Login för reseagenter</li>
                    <li>Sembo på LinkedIn</li>
                    <li>Jobba hos oss</li>
                    <li>Personuppgiftspolicy</li>
                    <li>
                        Vi innehar statlig resegaranti ställd hos
                        Kammarkollegiet
                    </li>
                </ul>

                <ul>
                    <li>
                        Sembo (sembo.se, sembo.no, sembo.fi, sembo.de och
                        sembo.pl) är en del av Stena Line Travel Group AB
                    </li>
                    <li>DTF Travel</li>
                    <li>Best Travel </li>
                    <li>Flygbiljetter </li>
                    <li>Nemrejse </li>
                </ul>

                <ul>
                    <li>Flygbolag - kontakt och villkor</li>
                    <li>Resegaranti</li>
                    <li> EU:s svartlistade flygbolag</li>
                    <li>Lufttrafikföretags skadeståndsansvar vid olyckor</li>
                </ul>
            </section>
            <section className="footer-copyright">
                &copy; 2019 Stena Line Travel Group AB
            </section>
        </footer>
    );
}
export default Footer;
