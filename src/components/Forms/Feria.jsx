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

                <button className="big-button">
                    <img src={searchIcon} alt="" />
                </button>
            </form>
        </section>
    );
}
export default HotelForm;
