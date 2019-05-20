import React from 'react';

function LotsOfLinksSection(props) {
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

    return (
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
    );
}
export default LotsOfLinksSection;
