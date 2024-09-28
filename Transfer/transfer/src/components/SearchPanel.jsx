import React from 'react';
import { AppBar, Tabs, Tab, Typography, Box } from '@mui/material';
import TransferSearchPanel from './TransferSearchPanel'
import ShuttleSearchPanel from './ShuttleSearchPanel'

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
};

const SearchPanel = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Transfer Arama" />
                    <Tab label="Shuttle Arama" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <TransferSearchPanel></TransferSearchPanel>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ShuttleSearchPanel></ShuttleSearchPanel>
            </TabPanel>
        </div>
    );
};

export default SearchPanel;
