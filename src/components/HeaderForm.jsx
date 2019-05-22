import React, { useState } from 'react';
import SearchForms from './SearchForms';

function HeaderForm() {
    const [selectedForm, setSelectedForm] = useState('Hotel');

    return (
        <section className="header-form">
            <nav>
                <ul>
                    <li
                        className={
                            selectedForm === 'Hotel'
                                ? 'form-section-button active-form-section'
                                : 'form-section-button inactive-form-section'
                        }
                        onClick={() => {
                            return selectedForm !== 'Hotel'
                                ? setSelectedForm('Hotel')
                                : null;
                        }}>
                        Hotell - Lägenhet
                    </li>
                    <li
                        className={
                            selectedForm === 'Semesterhus'
                                ? 'form-section-button active-form-section'
                                : 'form-section-button inactive-form-section'
                        }
                        onClick={() => {
                            return selectedForm !== 'Semesterhus'
                                ? setSelectedForm('Semesterhus')
                                : null;
                        }}>
                        Semesterhus
                    </li>
                    <li
                        className={
                            selectedForm === 'Flyg'
                                ? 'form-section-button active-form-section'
                                : 'form-section-button inactive-form-section'
                        }
                        onClick={() => {
                            return selectedForm !== 'Flyg'
                                ? setSelectedForm('Flyg')
                                : null;
                        }}>
                        Flyg
                    </li>
                    <li
                        className={
                            selectedForm === 'FlygOchBoende'
                                ? 'form-section-button active-form-section'
                                : 'form-section-button inactive-form-section'
                        }
                        onClick={() => {
                            return selectedForm !== 'FlygOchBoende'
                                ? setSelectedForm('FlygOchBoende')
                                : null;
                        }}>
                        Flyg och boende
                    </li>
                    <li
                        className={
                            selectedForm === 'FeriaOchBoende'
                                ? 'form-section-button active-form-section'
                                : 'form-section-button inactive-form-section'
                        }
                        onClick={() => {
                            return selectedForm !== 'FeriaOchBoende'
                                ? setSelectedForm('FeriaOchBoende')
                                : null;
                        }}>
                        Färja och boende
                    </li>
                    <li
                        className={
                            selectedForm === 'FeriaOchBro'
                                ? 'form-section-button active-form-section'
                                : 'form-section-button inactive-form-section'
                        }
                        onClick={() => {
                            return selectedForm !== 'FeriaOchBro'
                                ? setSelectedForm('FeriaOchBro')
                                : null;
                        }}>
                        Färja - Bro
                    </li>
                </ul>
            </nav>
            <SearchForms formType={selectedForm} />
        </section>
    );
}
export default HeaderForm;
