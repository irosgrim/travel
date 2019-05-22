import React from 'react';
import searchIcon from '../../imgs/icons/search-icon.svg';

function HotelForm() {
    return (
        <section className="form-frame">
            <form className="flights-form">
                <div className="flight-inputs-container">
                    <div className="big-input-column">
                        <label htmlFor="destination">Från</label>
                        <input
                            type="text"
                            placeholder="Vart vill du resa?"
                            className="flight-input"
                        />
                    </div>
                    <div className="big-input-column">
                        <label htmlFor="destination">Till</label>
                        <input
                            type="text"
                            placeholder="Vart vill du resa?"
                            className="flight-input-to"
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
                </div>
                <div className="flight-checkboxes">
                    <div>
                        <input
                            type="checkbox"
                            name="flightOption"
                            value="otherDay"
                        />
                        <span>Sök +/- 1 dag</span>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="flightOption"
                            value="annanOrt"
                        />
                        <span>Hemresa från annan ort</span>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="flightOption"
                            value="direktFlyg"
                        />
                        <span>Endast direktflyg</span>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="flightOption"
                            value="enkelResa"
                        />
                        <span>Endast enkelresa</span>
                    </div>
                </div>
                <button className="big-button">
                    <img src={searchIcon} alt="" />
                </button>
            </form>
        </section>
    );
}
export default HotelForm;
