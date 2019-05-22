import React from 'react';
import HotelForm from './Forms/HotelForm';
import SemesterhusForm from './Forms/SemesterhusForm';
import FlygForm from './Forms/FlygForm';
import FlygOchBoende from './Forms/FlygOchBoende';
import Feria from './Forms/Feria';

export default function SearchForms(props) {
    function showForm(formType) {
        switch (formType) {
            case 'Hotel':
                return <HotelForm />;

            case 'Semesterhus':
                return <SemesterhusForm />;

            case 'Flyg':
                return <FlygForm />;

            case 'FlygOchBoende':
                return <FlygOchBoende />;

            case 'FeriaOchBoende':
                return <Feria />;

            case 'FeriaOchBro':
                return <Feria />;

            default:
                return <HotelForm />;
        }
    }
    return <React.Fragment>{showForm(props.formType)} </React.Fragment>;
}
