import React, { useState } from 'react';
import LocationAutoComplate from './LocationAutoComplate';
import CustomDatePicker from './CustomDatePicker';
import PassengerPicker from './PassengerPicker';



const TransferSearchPanel = () => {

    const [fromLocation, setFromLocation] = useState(null);
    const [toLocation, setToLocation] = useState(null);

    const handleFromLocation = (event, newValue) => {
        setFromLocation(newValue);
        console.log('Seçenek 1:', newValue);
    };
    const handleToLocation = (event, newValue) => {
        setToLocation(newValue);
        console.log('Seçenek 1:', newValue);
    };

    return (
        <div>
            <LocationAutoComplate label="Nereden" onchange={handleFromLocation}></LocationAutoComplate>
            <LocationAutoComplate label="Nereye" onchange={handleToLocation}></LocationAutoComplate>
            <CustomDatePicker></CustomDatePicker>
            <PassengerPicker></PassengerPicker>
        </div>
    );
};

export default TransferSearchPanel;