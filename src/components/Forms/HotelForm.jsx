import React from 'react';
import searchIcon from '../../imgs/icons/search-icon.svg';

function HotelForm() {
    return (
        <section className="form-frame">
            <form>
                <div className="big-input-column">
                    <label htmlFor="destination">Land</label>
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
    );
}
export default HotelForm;
