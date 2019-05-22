import React from 'react';
import searchIcon from '../../imgs/icons/search-icon.svg';

export default function SemesterhusForm() {
    return (
        <section className="form-frame">
            <form>
                <div className="big-input-column">
                    <label htmlFor="land-select">Land</label>
                    <select
                        name="to_country"
                        className="form-select land-select"
                        id="land-select">
                        <option value="008">Albanien</option>
                        <option value="056">Belgien</option>
                        <option value="100">Bulgarien</option>
                        <option value="196">Cypern</option>
                        <option value="208" defaultValue>
                            Danmark
                        </option>
                        <option value="818">Egypt</option>
                        <option value="246">Finland</option>
                        <option value="250">Frankrike</option>
                        <option value="300">Grekland</option>
                        <option value="528">Holland</option>
                        <option value="352">Island</option>
                        <option value="380">Italien</option>
                        <option value="191">Kroatien</option>
                        <option value="442">Luxemburg</option>
                        <option value="499">Montenegro</option>
                        <option value="578">Norge</option>
                        <option value="616">Polen</option>
                        <option value="620">Portugal</option>
                        <option value="756">Schweiz</option>
                        <option value="703">Slovakien</option>
                        <option value="705">Slovenien</option>
                        <option value="724">Spanien</option>
                        <option value="752">Sverige</option>
                        <option value="203">Tjeckien</option>
                        <option value="792">Turkiet</option>
                        <option value="280">Tyskland</option>
                        <option value="348">Ungern</option>
                        <option value="040">Österrike</option>
                    </select>
                </div>
                <div className="big-input-column">
                    <label htmlFor="region-select">Region/ort</label>
                    <select
                        name="to_location"
                        className="form-select region-select"
                        id="region-select">
                        <option class="region" value="FYN">
                            , LANGELAND, TÅSINGE
                        </option>
                        <option value="G51">&nbsp;&nbsp;Fyn</option>
                        <option value="G10">
                            &nbsp;&nbsp;Langeland &amp; Tåsinge
                        </option>
                        <option class="region" value="BH" selected="">
                            Bornholm
                        </option>
                        <option value="H0">&nbsp;&nbsp;Bornholm</option>
                        <option class="region" value="BORNH">
                            BORNHOLM
                        </option>
                        <option value="I56">
                            &nbsp;&nbsp;Allinge, Sandvig, Sandkås
                        </option>
                        <option value="I50">&nbsp;&nbsp;Balka, Snogebæk</option>
                        <option value="I51">
                            &nbsp;&nbsp;Dueodde, Sommerodde, Strandmarken
                        </option>
                        <option value="I57">
                            &nbsp;&nbsp;Gudhjem, Melsted
                        </option>
                        <option value="I55">&nbsp;&nbsp;Hasle, Vang</option>
                        <option value="I58">
                            &nbsp;&nbsp;Svaneke, Bølshavn, Listed
                        </option>
                        <option value="I52">
                            &nbsp;&nbsp;Sømarken (Østre og Vestre)
                        </option>
                        <option value="I53">
                            &nbsp;&nbsp;Västra Bornholm (Rønne, Stampen,
                            Arnager, Boderne)
                        </option>
                        <option class="region" value="FANO">
                            FANØ
                        </option>
                        <option value="M21">&nbsp;&nbsp;Fanø</option>
                        <option class="region" value="FY">
                            Fyn
                        </option>
                        <option value="E1">
                            &nbsp;&nbsp;Sydfyn, Langeland
                        </option>
                        <option value="D2">
                            &nbsp;&nbsp;Vest- och nordfyn
                        </option>
                        <option value="E2">&nbsp;&nbsp;Øst- och nordfyn</option>
                        <option class="region" value="LF">
                            Limfjorden
                        </option>
                        <option value="B5">&nbsp;&nbsp;Limfjorden</option>
                        <option value="B6">&nbsp;&nbsp;Limfjorden</option>
                        <option value="C5">&nbsp;&nbsp;Limfjorden</option>
                        <option value="C6">&nbsp;&nbsp;Limfjorden</option>
                        <option class="region" value="LIMFJ">
                            LIMFJORDEN
                        </option>
                        <option value="L50">&nbsp;&nbsp;Limfjorden</option>
                        <option class="region" value="LOLL">
                            LOLLAND, FALSTER, MØN
                        </option>
                        <option value="K05">&nbsp;&nbsp;Falster</option>
                        <option value="K11">
                            &nbsp;&nbsp;Falster, Marielyst
                        </option>
                        <option value="K10">&nbsp;&nbsp;Lolland</option>
                        <option value="K30">&nbsp;&nbsp;Møn</option>
                        <option class="region" value="NORDJ">
                            NORDJYLLAND
                        </option>
                        <option value="A03">
                            &nbsp;&nbsp;Norra Västkusten/Jammerbukten
                        </option>
                        <option value="A16">
                            &nbsp;&nbsp;Norra Östkusten, Hou, Hals
                        </option>
                        <option value="A01">
                            &nbsp;&nbsp;Skagen- Tannis/Ålbækbukten
                        </option>
                        <option class="region" value="NORVJ">
                            NORDVÄSTJYLLAND
                        </option>
                        <option value="B60">
                            &nbsp;&nbsp;Jammerbukten/Han Herred
                        </option>
                        <option value="B01">
                            &nbsp;&nbsp;Norra Västkusten, Vorupør
                        </option>
                        <option class="region" value="NN">
                            Norra Vesterhavet
                        </option>
                        <option value="D7">&nbsp;&nbsp;Jammerbukten</option>
                        <option value="D8">&nbsp;&nbsp;Jammerbukten</option>
                        <option value="E8">
                            &nbsp;&nbsp;Skagen, Bratten, Ålbæk
                        </option>
                        <option value="C7">
                            &nbsp;&nbsp;Södra Jammerbukten, Hanstholm, Torup
                        </option>
                        <option class="region" value="ON">
                            Norra Östjylland
                        </option>
                        <option value="E4">&nbsp;&nbsp;Ebeltoft/Mols</option>
                        <option value="E6">&nbsp;&nbsp;Hals</option>
                        <option value="D6">
                            &nbsp;&nbsp;Helberskov, Øster Hurup
                        </option>
                        <option value="D5">&nbsp;&nbsp;Midtjylland</option>
                        <option value="E5">&nbsp;&nbsp;Norra Djursland</option>
                        <option value="E7">&nbsp;&nbsp;Sæby, Lyngså</option>
                        <option class="region" value="ROMO">
                            RØMØ och VADEHAVET
                        </option>
                        <option value="R10">&nbsp;&nbsp;Rømø</option>
                        <option value="S10">
                            &nbsp;&nbsp;Södra Vadehavet/Arrild Ferieby
                        </option>
                        <option class="region" value="SJ">
                            Själland
                        </option>
                        <option value="F0">
                            &nbsp;&nbsp;Lolland, Falster, Møn
                        </option>
                        <option value="F1">
                            &nbsp;&nbsp;Lolland, Falster, Møn
                        </option>
                        <option value="G0">
                            &nbsp;&nbsp;Lolland, Falster, Møn
                        </option>
                        <option value="G1">
                            &nbsp;&nbsp;Lolland, Falster, Møn
                        </option>
                        <option value="G4">&nbsp;&nbsp;Nordsjälland</option>
                        <option value="G3">
                            &nbsp;&nbsp;Roskilde Fjord, Köpenhamn
                        </option>
                        <option value="G2">&nbsp;&nbsp;Sydsjälland</option>
                        <option value="F2">&nbsp;&nbsp;Sydsjälland</option>
                        <option value="F3">&nbsp;&nbsp;Vestsjälland</option>
                        <option class="region" value="SJELL">
                            SJÄLLAND
                        </option>
                        <option value="E13">
                            &nbsp;&nbsp;Midtsjælland, Køge Bugt
                        </option>
                        <option value="E02">
                            &nbsp;&nbsp;Nordsjälland, Helsingør, Øresund
                        </option>
                        <option value="E01">
                            &nbsp;&nbsp;Nordsjälland, Hornbæk, Gilleleje,
                            Tisvilde
                        </option>
                        <option value="E11">
                            &nbsp;&nbsp;Nordsjälland, Hundested, Liseleje
                        </option>
                        <option value="E14">
                            &nbsp;&nbsp;Nordsjälland, Roskilde fjord
                        </option>
                        <option value="E15">
                            &nbsp;&nbsp;Nordvästsjälland, Isefjord
                        </option>
                        <option value="E17">
                            &nbsp;&nbsp;Nordvästsjälland, Nykøbing, Rørvig
                        </option>
                        <option value="E16">
                            &nbsp;&nbsp;Nordvästsjälland, Sejeröbukten
                        </option>
                        <option value="E18">
                            &nbsp;&nbsp;Nordvästsjälland, Sjællands Odde
                        </option>
                        <option value="K51">
                            &nbsp;&nbsp;Sydöstra Själland
                        </option>
                        <option value="K50">&nbsp;&nbsp;Södra Själland</option>
                        <option value="E19">
                            &nbsp;&nbsp;Västsjälland, Røsnæs
                        </option>
                        <option value="E20">
                            &nbsp;&nbsp;Västsjälland, Stora Bält-kusten
                        </option>
                        <option class="region" value="SONDJ">
                            SYDJYLLAND
                        </option>
                        <option value="F09">&nbsp;&nbsp;Als</option>
                        <option value="F02">
                            &nbsp;&nbsp;Södra Östkusten/Hejlsminde
                        </option>
                        <option class="region" value="NS">
                            Södra Nordsjökusten
                        </option>
                        <option value="B1">
                            &nbsp;&nbsp;Arrild Ferieby, Skærbæk
                        </option>
                        <option value="A3">
                            &nbsp;&nbsp;Blåvand, Henne, Bjerregård
                        </option>
                        <option value="A2">&nbsp;&nbsp;Fanø</option>
                        <option value="A6">
                            &nbsp;&nbsp;Klitmøller, Vorupør, Agger
                        </option>
                        <option value="B2">&nbsp;&nbsp;Ribe</option>
                        <option value="B3">&nbsp;&nbsp;Ringkøbing Fjord</option>
                        <option value="A1">&nbsp;&nbsp;Rømø</option>
                        <option value="B4">
                            &nbsp;&nbsp;Stauning Vesterstrand
                        </option>
                        <option value="A4">
                            &nbsp;&nbsp;Søndervig, Holmsland Klit, Årgab
                        </option>
                        <option value="A5">
                            &nbsp;&nbsp;Vejlby Klit, Vrist, Thorsminde, Fjand
                        </option>
                        <option class="region" value="OS">
                            Södra Östjylland
                        </option>
                        <option value="D1">&nbsp;&nbsp;Als</option>
                        <option value="C2">&nbsp;&nbsp;Hejlsminde</option>
                        <option value="D3">
                            &nbsp;&nbsp;Juelsminde, Pøt Strand, Vejle/Fredericia
                            omr.
                        </option>
                        <option value="C4">&nbsp;&nbsp;Midtjylland</option>
                        <option value="D4">&nbsp;&nbsp;Omkring Århus</option>
                        <option value="E3">&nbsp;&nbsp;Samsø</option>
                        <option value="C1">&nbsp;&nbsp;Södra Jylland</option>
                        <option value="C3">&nbsp;&nbsp;Vejle</option>
                        <option class="region" value="VESTK">
                            VÄSTKUSTEN
                        </option>
                        <option value="P32">
                            &nbsp;&nbsp;Blåvand, Vejers, Ho, Grærup, Mosevrå
                        </option>
                        <option value="C71">
                            &nbsp;&nbsp;Fjand, Vrist, Vejlby Klit, Thorsminde
                        </option>
                        <option value="P42">
                            &nbsp;&nbsp;Henne Strand, Jegum, Houstrup, Lønne
                        </option>
                        <option value="P85">&nbsp;&nbsp;Kvie Sø</option>
                        <option value="C01">
                            &nbsp;&nbsp;Norra Holmsland Klit/Søndervig
                        </option>
                        <option value="C81">
                            &nbsp;&nbsp;Norra Ringkøbing Fjorden
                        </option>
                        <option value="P62">
                            &nbsp;&nbsp;Södra Holmsland Klit, Bjerregård,
                            Nymindegab
                        </option>
                        <option value="P52">
                            &nbsp;&nbsp;Södra Ringkøbings Fjorden, Bork Havn
                        </option>
                        <option class="region" value="OSTJ">
                            ÖSTJYLLAND
                        </option>
                        <option value="D84">
                            &nbsp;&nbsp;Aarhus och omgivning
                        </option>
                        <option value="D01">&nbsp;&nbsp;Mols/Ebeltoft</option>
                        <option value="D70">
                            &nbsp;&nbsp;Norra Djursland/Fjellerup Strand
                        </option>
                        <option value="D82">
                            &nbsp;&nbsp;Silkeborg og omegn
                        </option>
                        <option value="D80">
                            &nbsp;&nbsp;Östjylland, Juelsminde, Vejle/Fredericia
                            omr.
                        </option>
                        <option value="D60">
                            &nbsp;&nbsp;Östra Himmerland
                        </option>
                    </select>
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
    );
}
