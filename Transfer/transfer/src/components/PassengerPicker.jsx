import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import PassengerCounter from './PassengerCounter';


const PassengerPicker = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);

    const handleAdultCount = (newValue) => {
        setAdultCount(newValue);
        setSelectedValue(newValue + childCount);
        console.log(newValue + childCount);
    };
    const handleChildCount = (newValue) => {
        setChildCount(newValue);
        setSelectedValue(adultCount + newValue);
        console.log(adultCount + newValue);
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <FormControl fullWidth variant="outlined">
            <InputLabel id="custom-dropdown-label">Yolcular</InputLabel>
            <Select
                labelId="custom-dropdown-label"
                onChange={handleChange}
                selectedValue={selectedValue}
                
                
            >
                <PassengerCounter label="Yetişkin" counter={adultCount} onChange={handleAdultCount}></PassengerCounter>
           
                <PassengerCounter label="Çocuk" counter={childCount} onChange={handleChildCount}></PassengerCounter>

            </Select>
        </FormControl>
    );
};

export default PassengerPicker;
