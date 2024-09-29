import React, { useState } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const CustomDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Tarih Seçin"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        fullWidth 
                        variant="outlined"
                        style={{ width: '400px' }}
                    />
                )}
            />
        </LocalizationProvider>
    );
};

export default CustomDatePicker;
