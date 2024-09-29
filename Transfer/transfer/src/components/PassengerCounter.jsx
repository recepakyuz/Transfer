import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const PassengerCounter = ({ label, counter, onChange }) => {
    const [count, setCount] = useState(counter ?? 0);
    const increment = () => {
        var newValue = count + 1;
        setCount(newValue);
        onChange(newValue);
        
    };

    const decrement = () => {
        var newValue = count - 1;
        setCount(newValue);
        onChange(newValue);
    };

    return (
        <Box textAlign="center" mt={5}>
            <Typography variant="h6" mt={2}>{label} {count}</Typography>
            <Box mt={2}>               
                <Button variant="contained" color="secondary" onClick={decrement} >
                    -
                </Button>
                <Button variant="contained" color="primary" onClick={increment} style={{ marginLeft: '10px' }}>
                    +
                </Button>
            </Box>
        </Box>
    );
};

export default PassengerCounter;
