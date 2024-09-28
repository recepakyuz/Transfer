import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';

const options = [
    { title: 'Beşiktaş', value: 1 },
    { title: 'Kadıköy', value: 2 },
    { title: 'Üsküdar', value: 3 },
    { title: 'Bakırköy', value: 4 },
    { title: 'Şişli', value: 5 },
    { title: 'Fatih', value: 6 },
    { title: 'Taksim', value: 7 },
    { title: 'Küçükçekmece', value: 8 },
    { title: 'Esenyurt', value: 9 },
    { title: 'Sarıyer', value: 10 },
];

const LocationAutoComplate = ({ label, onChange }) => {
    return (
        <Autocomplete
            options={options}
            getOptionLabel={(option) => option.title} // Görüntülenecek etiket
            renderInput={(params) => <TextField {...params} label={label} />}
            onChange={onChange}
        
        />
    );
};

export default LocationAutoComplate;
