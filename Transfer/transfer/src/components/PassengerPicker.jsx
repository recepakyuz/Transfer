import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import PassengerCounter from './PassengerCounter';
import { TextField, Button, Popover, Box } from '@mui/material';


const PassengerPicker = () => {
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);

    const handleAdultCount = (newValue) => {
        setAdultCount(newValue);
        setInputValue(newValue + childCount + " Yolcu");
        console.log(newValue + childCount);
    };
    const handleChildCount = (newValue) => {
        setChildCount(newValue);
        setInputValue(adultCount + newValue + " Yolcu");
        console.log(adultCount + newValue);
    };

    const [inputValue, setInputValue] = useState('Seçiniz');
    const [anchorEl, setAnchorEl] = useState(null);



    const handleInputClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    return (
        <Box>
            <TextField
                label="Yolcular"
                value={inputValue}
                onClick={handleInputClick} // Input tıklanınca panel açılır
                variant="outlined"
                sx={{ marginBottom: 2 }}
                fullWidth
            />
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Box sx={{ padding: 2 }}>
                    <PassengerCounter label="Yetişkin" counter={adultCount} onChange={handleAdultCount}></PassengerCounter>

                    <PassengerCounter label="Çocuk" counter={childCount} onChange={handleChildCount}></PassengerCounter>

                </Box>
            </Popover>
        </Box>
    );
};

export default PassengerPicker;
