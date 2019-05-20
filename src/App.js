import React, { useEffect, useState } from 'react';
import logo from './imgs/logo.png';
import logoWhite from './imgs/logo_white.png';
import dubai from './imgs/pictures/dubai.jpg';
import shoppingCart from './imgs/icons/shopping-cart.svg';
import searchIcon from './imgs/icons/search-icon.svg';
import './styles/App.css';

import shield from './imgs/icons/shield.png';
import contactUs from './imgs/icons/contact.png';
import customerService from './imgs/icons/customer-service.png';

import visa from './imgs/icons/visa.png';
import seb from './imgs/icons/seb.png';
import nordea from './imgs/icons/nordea.png';
import mastercard from './imgs/icons/mastercard.png';
import handelsbanken from './imgs/icons/handelsbanken.png';
import eurocard from './imgs/icons/eurocard.png';
import captum from './imgs/icons/captum_liten.png';
import swedbank from './imgs/icons/swedbank.png';

import istanbul from './imgs/pictures/istanbul.jpeg';

function App() {
    const [navBarScrolling, setNavBarScrolling] = useState(false);

    const lotsOfLinks = [
        {
            title: 'Resmål',
            list: [
                'Belgien',
                'Cypern',
                'Danmark',
                'Estland',
                'Frankrike',
                'Frankrike Alpin',
                'Grekland',
                'Holland',
                'Irland',
                'Italien',
                'Italien-Alpin',
                'Kanarieöarna',
                'Kroatien',
                'Lettland',
                'Malta',
                'Norge',
                'Norge Alpin',
                'Polen',
                'Polen Alpin',
                'Portugal',
                'Schweiz',
                'Schweiz Alpin',
                'Slovenien',
                'Spanien',
                'Storbritannien',
                'Sverige',
                'Sverige Alpin',
                'Tjeckien',
                'Turkiet',
                'Tyskland',
                'Ungern',
                'Österrike',
                'Österrike Alpin',
                'Dubai',
                'Mexiko',
                'Thailand',
                'USA'
            ]
        },
        {
            title: 'Billiga flyg',
            list: [
                'Sista-minuten',
                'Las-Palmas',
                'Dubrovnik',
                'Dubai',
                'Lissabon',
                'Antalya',
                'Bangkok',
                'Paris',
                'Nice',
                'Reykjavik',
                'Prag',
                'Split',
                'London',
                'Venedig',
                'Palma de Mallorca',
                'Berlin',
                'Madrid',
                'Alicante',
                'Rom',
                'Barcelona',
                'Mallorca',
                'Malaga',
                'Kreta',
                'Faro'
            ]
        },
        {
            title: 'Weekend',
            list: ['Paris', 'Rom', 'Prag', 'Barcelona', 'London']
        },
        {
            title: 'Sol och bad',
            list: [
                'Fuengirola',
                'Cannes',
                'Playa del Ingles',
                'Antibes Juan-les-Pins',
                ' Nice'
            ]
        },
        {
            title: 'Skidresor',
            list: ['Skidresor', 'Österrike', 'Italien', 'Frankrike', 'Schweiz']
        },
        {
            title: 'Boenden',
            list: ['Hotell', 'Lägenhet', 'Semesterhus']
        },
        {
            title: 'Barnsemester',
            list: [
                'Disneyland Paris',
                'Lalandia',
                'Legoland',
                'Weissenhäuser Strand',
                'Tropical Island',
                'The Reef'
            ]
        },
        {
            title: 'Bilsemester',
            list: ['Bilsemester i Europa']
        }
    ];

    const destinationsColumn2 = lotsOfLinks[0].list.splice(
        Math.round(lotsOfLinks[0].list.length / 2),
        lotsOfLinks[0].list.length
    );

    useEffect(() => {
        window.onscroll = () => {
            window.pageYOffset > 80
                ? setNavBarScrolling(true)
                : setNavBarScrolling(false);
        };
    });

    console.log(navBarScrolling);
    return (
        <div className="App">
            <header className="main-header">
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
                            className={
                                navBarScrolling ? 'logo-small' : 'logo-big'
                            }
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

                <section className="featured-header-destination">
                    <div className="description-card">
                        <header>
                            <h2>Istanbul</h2>
                        </header>
                        <p>
                            Upptäck magiska Istanbul - Just nu kampanjpriser på
                            flyg och hotell!
                        </p>
                    </div>
                    <section className="header-form">
                        <nav>
                            <ul>
                                <li className="form-section-button active-form-section">
                                    Hotell - Lägenhet
                                </li>
                                <li className="form-section-button inactive-form-section">
                                    Semesterhus
                                </li>
                                <li className="form-section-button inactive-form-section">
                                    Flyg
                                </li>
                                <li className="form-section-button inactive-form-section">
                                    Flyg och boende
                                </li>
                                <li className="form-section-button inactive-form-section">
                                    Färja och boende
                                </li>
                                <li className="form-section-button inactive-form-section">
                                    Färja - Bro
                                </li>
                            </ul>
                        </nav>
                        <section className="form-frame">
                            <form>
                                <div className="big-input-column">
                                    <label htmlFor="destination">Resmål</label>
                                    <input
                                        type="text"
                                        placeholder="Vart vill du resa?"
                                        className="destination-input"
                                    />
                                </div>
                                <div className="date-column">
                                    <div>
                                        <label htmlFor="from">Från</label>
                                        <input
                                            type="text"
                                            placeholder="ååå-mm-dd"
                                            className="date-input"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="to">Till</label>
                                        <input
                                            type="text"
                                            placeholder="ååå-mm-dd"
                                            className="date-input"
                                        />
                                    </div>
                                </div>
                                <div className="big-input-column">
                                    <label htmlFor="travelers">Resenärer</label>
                                    <input
                                        type="text"
                                        placeholder="2 vuxna, 1 rum"
                                        className="travelers-input"
                                    />
                                </div>

                                <button className="big-button">
                                    <img src={searchIcon} alt="" />
                                </button>
                            </form>
                        </section>
                    </section>
                    <div className="bg">
                        <img src={istanbul} alt="" />
                    </div>
                </section>
            </header>
            <main>
                <section className="featured-section">
                    <header>
                        <h2>Välkommen till Sembo!</h2>
                        <p>
                            I över 30 år har vi på Sembo jobbat hårt för att
                            uppfylla miljoner resenärers drömmar.
                        </p>
                    </header>

                    <section className="featured-destinations">
                        <div className="destination-card">
                            <figure>
                                <img src={dubai} alt="" />
                            </figure>
                            <div className="destination-card-overlay">
                                <h3>DUBAI</h3>
                                <p>
                                    Välkommen till Mellanösterns svar på Miami –
                                    en metropol som uppfyller alla drömmar!
                                </p>
                            </div>
                        </div>

                        <div className="destination-card">
                            <img src={dubai} alt="" />

                            <div className="destination-card-overlay">
                                <h3>DUBAI</h3>
                                <p>
                                    Välkommen till Mellanösterns svar på Miami –
                                    en metropol som uppfyller alla drömmar!
                                </p>
                            </div>
                        </div>

                        <div className="destination-card">
                            <img src={dubai} alt="" />

                            <div className="destination-card-overlay">
                                <h3>DUBAI</h3>
                                <p>
                                    Välkommen till Mellanösterns svar på Miami –
                                    en metropol som uppfyller alla drömmar!
                                </p>
                            </div>
                        </div>

                        <div className="destination-card">
                            <img src={dubai} alt="" />

                            <div className="destination-card-overlay">
                                <h3>DUBAI</h3>
                                <p>
                                    Välkommen till Mellanösterns svar på Miami –
                                    en metropol som uppfyller alla drömmar!
                                </p>
                            </div>
                        </div>

                        <div className="destination-card">
                            <img src={dubai} alt="" />

                            <div className="destination-card-overlay">
                                <h3>DUBAI</h3>
                                <p>
                                    Välkommen till Mellanösterns svar på Miami –
                                    en metropol som uppfyller alla drömmar!
                                </p>
                            </div>
                        </div>
                        <div className="destination-card">
                            <img src={dubai} alt="" />

                            <div className="destination-card-overlay">
                                <h3>DUBAI</h3>
                                <p>
                                    Välkommen till Mellanösterns svar på Miami –
                                    en metropol som uppfyller alla drömmar!
                                </p>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="subscribe-section">
                    <div className="subscribe-form-container">
                        <h3>Nyhetsbrev</h3>

                        <form>
                            <input type="text" />
                            <button>ANMÄL</button>
                        </form>
                    </div>
                </section>
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
                                    <strong>DIBS</strong> och{' '}
                                    <strong>Captum</strong>
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

                <section className="main-text-section">
                    <p>
                        <strong>Sembo är tryggt.</strong> Sembo ägs av Stena
                        Line och vi har hjälpt semestersugna svenskar med hotell
                        och semesterlägenheter i mer än 30 år. Bokar du boende i
                        kombination med flyg eller färja så ställer vi
                        resegaranti till Kammarkollegium. Du kan också delbetala
                        din semester med Captum.
                    </p>
                    <br />
                    <p>
                        <strong>Hotell och hotelltips.</strong> Hotell i hela
                        världen hittar du på Sembo.se. Sembo är Sveriges ledande
                        hotellbokningsföretag och hjälper över 500.000 kunder
                        per år att boka hotell. Det är tryggt och enkelt att
                        boka hotell hos oss. På alla resmål får du hotelltips
                        som vi rekommenderar.
                    </p>
                    <br />
                    <p>
                        <strong>Lägenheter att hyra.</strong> Lägenheter är
                        bekvämt på semestern, du kan laga mat hemma och har lite
                        mer plats för familjen än i ett hotellrum. Hos Sembo kan
                        du hyra semesterlägenhet på både badorter och i
                        storstäder. Du kan hyra lägenhet på nästan alla våra
                        resmål.
                    </p>
                    <br />
                    <p>
                        <strong>Flyg och flygresor.</strong> Flygresor är ett
                        enkelt sätt att ta sig till resmålet och med Sembo bokar
                        du flyg och hotell över hela världen men våra favoriter
                        med flyg är Barcelona, Dubai, New York Paris och Rom. Vi
                        söker billiga flyg med den senast tekniken för att du
                        ska få den billigaste flygbiljetten.
                    </p>
                    <br />
                    <p>
                        <strong>Bilsemester i Europa.</strong> Kör själv och se
                        mer på semestern. Att bila i Europa ger fina upplevelser
                        och många resmål når du bäst med egen bil. Du hittar
                        bilsemester i Danmark, Frankrike, Italien, Kroatien och
                        Tyskland hos Sembo. Du bokar färja, hotell och
                        lägenheter med oss. Hyra hus. Hyra semesterhus är lätt
                        här på sembo.se. Det är bara att söka hus dit du vill
                        resa. Du kan hyra hus i Danmark, Frankrike, Italien,
                        Kroatien, Spanien, Sverige och ytterligare 20 länder.
                        Det trevligt för familjen att hyra ett eget hus med pool
                        på semestern.
                    </p>
                    <br />
                    <p>
                        <strong>Barnsemester och resa med barn.</strong>{' '}
                        Barnsemester och att resa med barn är något som Sembo
                        kan, vi har arbetat med barnsemester sedan 30 år
                        tillbaka och är ledande i Sverige på resor med barn. Här
                        hittar du allt om barnsemester: Disneyland® Paris,
                        LEGOLAND® Billund Resort, badland Lalandia och
                        Weissenhäuser Strand, 12 djurparker, 12 nöjesparker, 17
                        badland och 5 sommarland. Att resa med barn är kul, så
                        släpp loss ditt barnasinne.
                    </p>
                    <br />
                    <p>
                        <strong>Sembo är tryggt och ägs av Stena Line.</strong>{' '}
                        Vi har hjälpt semestersugna svenskar med hotell och
                        semesterlägenheter i mer än 30 år. Bokar du boende i
                        kombination med flyg eller färja så ställer vi
                        resegaranti till Kammarkollegium. Du kan också delbetala
                        din semester med Captum.
                    </p>
                </section>

                <section className="lots-of-links-section">
                    <section className="link-column">
                        <h3>{lotsOfLinks[0].title}</h3>
                        <div className="two-columns">
                            <ul>
                                {lotsOfLinks[0].list.map((country, index) => {
                                    return <li key={index}>{country}</li>;
                                })}
                            </ul>
                            <ul>
                                {destinationsColumn2.map((country, index) => {
                                    return <li key={index}>{country}</li>;
                                })}
                            </ul>
                        </div>
                    </section>
                    <section className="link-column">
                        <h3>{lotsOfLinks[1].title}</h3>
                        <ul>
                            {lotsOfLinks[1].list.map((country, index) => {
                                return <li key={index}>{country}</li>;
                            })}
                        </ul>
                    </section>
                    <section className="link-column">
                        <h3>{lotsOfLinks[2].title}</h3>
                        <ul>
                            {lotsOfLinks[2].list.map((country, index) => {
                                return <li key={index}>{country}</li>;
                            })}
                        </ul>

                        <h3>{lotsOfLinks[3].title}</h3>
                        <ul>
                            {lotsOfLinks[3].list.map((country, index) => {
                                return <li key={index}>{country}</li>;
                            })}
                        </ul>

                        <h3>{lotsOfLinks[4].title}</h3>
                        <ul>
                            {lotsOfLinks[4].list.map((country, index) => {
                                return <li key={index}>{country}</li>;
                            })}
                        </ul>
                    </section>
                    <section className="link-column">
                        <h3>{lotsOfLinks[5].title}</h3>
                        <ul>
                            {lotsOfLinks[5].list.map((country, index) => {
                                return <li key={index}>{country}</li>;
                            })}
                        </ul>

                        <h3>{lotsOfLinks[6].title}</h3>
                        <ul>
                            {lotsOfLinks[6].list.map((country, index) => {
                                return <li key={index}>{country}</li>;
                            })}
                        </ul>

                        <h3>{lotsOfLinks[7].title}</h3>
                        <ul>
                            {lotsOfLinks[7].list.map((country, index) => {
                                return <li key={index}>{country}</li>;
                            })}
                        </ul>
                    </section>
                    <section className="link-column">
                        <h3>Kundservice</h3>
                        <ul>
                            <li>Frågor och svar</li>
                            <li>Ring 042-378500</li>
                        </ul>
                        <h3>Inför resan</h3>
                        <ul>
                            <li>Därför ska du boka med Sembo</li>
                            <li>Våra villkor</li>
                            <li>Våra priser</li>
                            <li>Försäkringar</li>
                        </ul>

                        <h3>Delbetala resan</h3>
                        <ul>
                            <li>Delbetala din semester med Captum</li>
                        </ul>
                        <h3>Work at Sembo</h3>
                        <ul>
                            <li>Work at Sembo</li>
                        </ul>
                    </section>
                </section>
            </main>
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
                        <li>
                            Lufttrafikföretags skadeståndsansvar vid olyckor
                        </li>
                    </ul>
                </section>
                <section className="footer-copyright">
                    &copy; 2019 Stena Line Travel Group AB
                </section>
            </footer>
        </div>
    );
}

export default App;
