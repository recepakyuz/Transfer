import React, { useState } from 'react';
import LocationAutoComplate from './LocationAutoComplate';
import CustomDatePicker from './CustomDatePicker';
import PassengerPicker from './PassengerPicker';
import { TextField, Grid } from '@mui/material';
import { IconButton, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code'; 


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
    const handleClick = () => {
    };

    return (
        
        <Grid container  justifyContent="center" alignItems="center" style={{padding:"20px", opacity:1 }}>
            <Grid container spacing={2} style={{ maxWidth: '500px' }}>
            <Grid item xs={6}>
                <LocationAutoComplate label="Nereden" onchange={handleFromLocation}></LocationAutoComplate>
            </Grid>
            
             <Grid item xs={6}>
                <LocationAutoComplate label="Nereye" onchange={handleToLocation}></LocationAutoComplate>
            </Grid>
            <Grid item xs={6}>
                <CustomDatePicker></CustomDatePicker>
            </Grid>
            <Grid item xs={6}>
                <PassengerPicker></PassengerPicker>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained"  color="primary" >Ara</Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TransferSearchPanel;